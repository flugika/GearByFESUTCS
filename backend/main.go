package main

import (
	"log"
	"os"

	"github.com/flugika/GearByFESUTCS/controller"
	"github.com/flugika/GearByFESUTCS/entity"
	"github.com/gin-gonic/gin"
	"github.com/gofiber/fiber/v2"
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

	app := fiber.New()
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello World!")
	})

	app.Get("/env", func(c *fiber.Ctx) error {
		return c.SendString("Hello ENV " + os.Getenv("ENV"))
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(app.Listen("0.0.0.0:" + port))

	// Run the server
	r.Run(":" + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
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
