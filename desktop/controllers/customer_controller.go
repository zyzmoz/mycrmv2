package controllers

import (
	"fmt"

	"github.com/zyzmoz/mycrm/persistence/database"
	"github.com/zyzmoz/mycrm/persistence/domain"
	"github.com/zyzmoz/mycrm/persistence/infra"
	"github.com/zyzmoz/mycrm/persistence/interfaces"
)

type CustomerController struct{}

func (c *CustomerController) FindAll() []domain.Customer {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)
	customers, err := ctrl.FindAll()
	if err != nil {
		fmt.Printf("%s", err)
		return nil
	}

	return customers
}

func (c *CustomerController) FindOne(id string) domain.Customer {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)
	customer, err := ctrl.FindOne(id)
	if err != nil {
		fmt.Printf("%s", err)
		return domain.Customer{}
	}

	return customer
}

func (c *CustomerController) Create(customerData domain.Customer) domain.Customer {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)

	customer, err := ctrl.Create(customerData)
	if err != nil {
		fmt.Printf("%s", err)
		return customerData
	}

	return customer
}

func (c *CustomerController) Update(customerData domain.Customer) domain.Customer {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)

	customer, err := ctrl.Update(customerData)
	if err != nil {
		fmt.Printf("%s", err)
		return customerData
	}

	return customer
}

func (c *CustomerController) Delete(customerData domain.Customer) (err error) {
	logger := infra.NewLogger()
	ctrl := interfaces.NewCustomerController(database.DBConn, logger)

	err = ctrl.Delete(customerData)
	if err != nil {
		fmt.Printf("%s", err)
		return err
	}

	return
}
