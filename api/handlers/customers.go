package handlers

import (
	"github.com/zyzmoz/mycrm/persistence/database"
	"github.com/zyzmoz/mycrm/persistence/domain"
	"github.com/zyzmoz/mycrm/persistence/infra"
	"github.com/zyzmoz/mycrm/persistence/interfaces"
)

/*
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
*/

// CREATE
func Create(customer domain.Customer) (domain.Customer, error) {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)
	customer, err := ctrl.Create(customer)

	return customer, err
}

// UPDATE
func Update(customer domain.Customer) (domain.Customer, error) {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)
	customer, err := ctrl.Update(customer)

	return customer, err
}

// FIND ONE

// FIND All
func FindAll() (domain.Customers, error) {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)
	customers, err := ctrl.FindAll()

	return customers, err
}

// DELETE
