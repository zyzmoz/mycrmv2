package interfaces

import (
	"github.com/zyzmoz/mycrm/persistence/domain"
	"github.com/zyzmoz/mycrm/persistence/usecases"
	"gorm.io/gorm"
)

type CustomerController struct {
	CustomerInteractor usecases.CustomerInteractor
	Logger             usecases.Logger
}

func NewCustomerController(db *gorm.DB, logger usecases.Logger) *CustomerController {
	return &CustomerController{
		CustomerInteractor: usecases.CustomerInteractor{
			CustomerRepository: &CustomerRepository{
				DB: db,
			},
		},
		Logger: logger,
	}
}

func (cc *CustomerController) FindAll() (customers domain.Customers, err error) {
	customers, err = cc.CustomerInteractor.FindAll()
	return
}

func (cc *CustomerController) FindOne(id string) (customer domain.Customer, err error) {
	customer, err = cc.CustomerInteractor.FindOne(id)
	return
}

func (cc *CustomerController) Create(customerData domain.Customer) (customer domain.Customer, err error) {
	customer, err = cc.CustomerInteractor.Create(customerData)
	return
}

func (cc *CustomerController) Update(customerData domain.Customer) (customer domain.Customer, err error) {
	customer, err = cc.CustomerInteractor.Update(customerData)
	return
}

func (cc *CustomerController) Delete(customerData domain.Customer) (err error) {
	err = cc.CustomerInteractor.Delete(customerData)
	return
}
