package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"strings"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("api-gateway listening on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, newHandler()))
}

func newHandler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /{$}", func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]string{"service": "api-gateway", "status": "ok"})
	})

	for _, route := range []struct {
		prefix string
		name   string
		port   string
	}{
		{"/catalog/", "CATALOG_SERVICE_URL", "3001"},
		{"/auth/", "AUTH_SERVICE_URL", "8001"},
		{"/notifications/", "NOTIFICATION_SERVICE_URL", "8002"},
		{"/orders/", "ORDER_SERVICE_URL", "8003"},
		{"/payments/", "PAYMENT_SERVICE_URL", "8004"},
	} {
		target := os.Getenv(route.name)
		if target == "" {
			target = "http://localhost:" + route.port
		}
		u, err := url.Parse(target)
		if err != nil || u.Scheme == "" || u.Host == "" {
			log.Fatalf("invalid %s URL %q", route.name, target)
		}
		proxy := httputil.NewSingleHostReverseProxy(u)
		originalDirector := proxy.Director
		prefix := route.prefix
		proxy.Director = func(req *http.Request) {
			originalDirector(req)
			req.URL.Path = "/" + strings.TrimPrefix(req.URL.Path, prefix)
		}
		mux.Handle(route.prefix, proxy)
	}

	return mux
}
