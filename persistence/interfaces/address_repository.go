package interfaces

import (
	"github.com/zyzmoz/mycrm/persistence/domain"
	"gorm.io/gorm"
)

type AddressRepository struct {
	DB *gorm.DB
}

func (ar *AddressRepository) FindAll() (addresses domain.Addresses, err error) {
	ar.DB.Find(&addresses)

	return
}

func (ar *AddressRepository) FindOne(id string) (address domain.Address, err error) {
	ar.DB.Find(&address, id)

	return
}

func (ar *AddressRepository) Create(addressData domain.Address) (address domain.Address, err error) {
	ar.DB.Create(&addressData)

	address = addressData
	return
}

func (ar *AddressRepository) Update(addressData domain.Address) (address domain.Address, err error) {
	ar.DB.First(&address, "ID = ?", addressData.ID)

	ar.DB.Model(&address).Save(&addressData)

	return addressData, err
}

func (ar *AddressRepository) Delete(addressData domain.Address) (err error) {
	ar.DB.Delete(&addressData)

	return
}
