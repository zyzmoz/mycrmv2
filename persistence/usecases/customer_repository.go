package usecases

import "github.com/zyzmoz/mycrm/persistence/domain"

type CustomerRepository interface {
	FindAll() (domain.Customers, error)
	FindOne(string) (domain.Customer, error)
	Create(domain.Customer) (domain.Customer, error)
	Update(domain.Customer) (domain.Customer, error)
	Delete(domain.Customer) error
}
