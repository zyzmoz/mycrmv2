package usecases

import "github.com/zyzmoz/mycrm/persistence/domain"

type ContactRepository interface {
	FindAll() (domain.Contacts, error)
	FindOne(string) (domain.Contact, error)
	Create(domain.Contact) (domain.Contact, error)
	Update(domain.Contact) (domain.Contact, error)
	Delete(domain.Contact) error
}
