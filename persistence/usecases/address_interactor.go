package usecases

import "github.com/zyzmoz/mycrm/persistence/domain"

type AddressInteractor struct {
	AddressRepository AddressRepository
}

func (ai *AddressInteractor) FindAll() (addresses domain.Addresses, err error) {
	addresses, err = ai.AddressRepository.FindAll()

	return
}

func (ai *AddressInteractor) FindOne(id string) (address domain.Address, err error) {
	address, err = ai.AddressRepository.FindOne(id)

	return
}

func (ai *AddressInteractor) Create(addressData domain.Address) (address domain.Address, err error) {
	address, err = ai.AddressRepository.Create(addressData)

	return
}

func (ai *AddressInteractor) Update(addressData domain.Address) (address domain.Address, err error) {
	address, err = ai.AddressRepository.Update(addressData)

	return
}

func (ai *AddressInteractor) Delete(addressData domain.Address) (err error) {
	err = ai.AddressRepository.Delete(addressData)

	return
}
