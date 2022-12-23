package usecases

import (
	"github.com/google/uuid"
	"github.com/zyzmoz/mycrm/persistence/domain"
)

type ContactInteractor struct {
	ContactRepository ContactRepository
}

func (ci *ContactInteractor) FindAll() (contacts domain.Contacts, err error) {
	contacts, err = ci.ContactRepository.FindAll()

	return
}

func (ci *ContactInteractor) FindOne(id string) (contact domain.Contact, err error) {
	contact, err = ci.ContactRepository.FindOne(id)

	return
}

func (ci *ContactInteractor) Create(contactData domain.Contact) (contact domain.Contact, err error) {
	contactData.ID = uuid.New().String()
	contact, err = ci.ContactRepository.Create(contactData)

	return
}

func (ci *ContactInteractor) Update(contactData domain.Contact) (contact domain.Contact, err error) {
	contact, err = ci.ContactRepository.Update(contactData)

	return
}

func (ci *ContactInteractor) Delete(contactData domain.Contact) (err error) {
	err = ci.ContactRepository.Delete(contactData)

	return
}
