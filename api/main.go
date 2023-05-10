package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	customer "github.com/zyzmoz/mycrm/api/handlers"
	"github.com/zyzmoz/mycrm/persistence"
)

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	err := persistence.InitDb()

	if err != nil {
		panic("Error connecting to the database")
	}

	// TODO: Create proper routes for each entity OR endpoint type
	// Eg. Dashboard, Customers, Agents etc
	app.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendString("👋 Welcome to MyCRM API")
	})

	app.Get("/customers", func(ctx *fiber.Ctx) error {
		customers, err := customer.FindAll()
		if err != nil {
			return ctx.Status(400).SendString("Error Fetchig Data")
		}

		return ctx.JSON(customers)
	})

	app.Listen(":8081")
}
