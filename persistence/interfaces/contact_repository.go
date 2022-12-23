package interfaces

import (
	"github.com/zyzmoz/mycrm/persistence/domain"
	"gorm.io/gorm"
)

type ContactRepository struct {
	DB *gorm.DB
}

func (cr *ContactRepository) FindAll() (contacts domain.Contacts, err error) {
	cr.DB.Find(&contacts)

	return
}

func (cr *ContactRepository) FindOne(id string) (contact domain.Contact, err error) {
	cr.DB.Find(&contact, id)

	return
}

func (cr *ContactRepository) Create(contactData domain.Contact) (contact domain.Contact, err error) {
	cr.DB.Create(&contactData)

	contact = contactData
	return
}

func (cr *ContactRepository) Update(contactData domain.Contact) (contact domain.Contact, err error) {
	cr.DB.First(&contact, "ID = ?", contactData.ID)

	cr.DB.Model(&contact).Save(&contactData)

	return contactData, err
}

func (cr *ContactRepository) Delete(contactData domain.Contact) (err error) {
	cr.DB.Delete(&contactData)

	return
}
