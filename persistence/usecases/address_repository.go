package usecases

import "github.com/zyzmoz/mycrm/persistence/domain"

type AddressRepository interface {
	FindAll() (domain.Addresses, error)
	FindOne(string) (domain.Address, error)
	Create(domain.Address) (domain.Address, error)
	Update(domain.Address) (domain.Address, error)
	Delete(domain.Address) error
}
