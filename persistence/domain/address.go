package domain

import "gorm.io/gorm"

type Addresses []Address

type Address struct {
	gorm.Model
	ID          string `gorm:"primaryKey"`
	CustomerID  string
	Address     string
	AddressE    string
	City        string
	State       string
	ZipCode     string
	Description string
}
