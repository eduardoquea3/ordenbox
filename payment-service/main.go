package main

import (
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8004"
	}

	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"service": "payment-service", "status": "ok"})
	})

	log.Printf("payment-service listening on :%s", port)
	log.Fatal(router.Run(":" + port))
}
