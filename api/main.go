package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/zyzmoz/mycrm/persistence"
	"github.com/zyzmoz/mycrm/persistence/database"
	"github.com/zyzmoz/mycrm/persistence/infra"
	"github.com/zyzmoz/mycrm/persistence/interfaces"
)

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))
	persistence.InitDb()

	// TODO: Create proper routes for each entity OR endpoint type
	// Eg. Dashboard, Customers, Agents etc
	app.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendString("👋 Welcome to MyCRM API")
	})

	app.Get("/customers", func(ctx *fiber.Ctx) error {
		logger := infra.NewLogger()
		ctrl := interfaces.NewCustomerController(database.DBConn, logger)
		customers, err := ctrl.FindAll()
		if err != nil {
			fmt.Printf("%s", err)
			return nil
		}

		return ctx.JSON(customers)
	})

	app.Listen(":8081")
}
