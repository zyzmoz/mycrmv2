package interfaces

import (
	"github.com/zyzmoz/mycrm/persistence/domain"
	"gorm.io/gorm"
)

type CustomerRepository struct {
	DB *gorm.DB
}

func (cr *CustomerRepository) FindAll() (customers domain.Customers, err error) {
	cr.DB.Find(&customers)

	return
}

func (cr *CustomerRepository) FindOne(id string) (customer domain.Customer, err error) {
	cr.DB.Find(&customer, id)

	return
}

func (cr *CustomerRepository) Create(customerData domain.Customer) (customer domain.Customer, err error) {
	cr.DB.Create(&customerData)

	customer = customerData
	return
}

func (cr *CustomerRepository) Update(customerData domain.Customer) (customer domain.Customer, err error) {
	cr.DB.First(&customer, "ID = ?", customerData.ID)

	cr.DB.Model(&customer).Save(&customerData)

	return customerData, err
}

func (cr *CustomerRepository) Delete(customerData domain.Customer) (err error) {
	cr.DB.Delete(&customerData)

	return
}
