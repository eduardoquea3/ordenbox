package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8003"
	}

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"service": "order-service", "status": "ok"})
	})

	log.Printf("order-service listening on :%s", port)
	log.Fatal(router.Run(":" + port))
}
