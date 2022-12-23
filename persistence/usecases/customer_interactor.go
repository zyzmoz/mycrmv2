package usecases

import (
	"github.com/google/uuid"
	"github.com/zyzmoz/mycrm/persistence/domain"
)

type CustomerInteractor struct {
	CustomerRepository CustomerRepository
}

func (ci *CustomerInteractor) FindAll() (customers domain.Customers, err error) {
	customers, err = ci.CustomerRepository.FindAll()

	return
}

func (ci *CustomerInteractor) FindOne(id string) (customer domain.Customer, err error) {
	customer, err = ci.CustomerRepository.FindOne(id)

	return
}

func (ci *CustomerInteractor) Create(customerData domain.Customer) (customer domain.Customer, err error) {
	customerData.ID = uuid.New().String()
	customer, err = ci.CustomerRepository.Create(customerData)

	return
}

func (ci *CustomerInteractor) Update(customerData domain.Customer) (customer domain.Customer, err error) {
	customer, err = ci.CustomerRepository.Update(customerData)

	return
}

func (ci *CustomerInteractor) Delete(customerData domain.Customer) (err error) {
	err = ci.CustomerRepository.Delete(customerData)

	return
}
