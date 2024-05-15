package main

import (
	"github.com/flugika/GearByFESUTCS/controller"
	"github.com/flugika/GearByFESUTCS/entity"
	"github.com/gin-gonic/gin"
	"os"
)

const PORT = "8080"

func main() {
	// Delete database file before BUILD and RUN
	os.Remove("./GrantGear.db")

	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	// Student Routes
	r.GET("/student/:id", controller.GetStudent)

	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
