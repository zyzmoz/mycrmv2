package domain

import "gorm.io/gorm"

type Customers []Customer

type Customer struct {
	gorm.Model
	ID        string `gorm:"primaryKey"`
	FirstName string
	LastName  string
	BirthDate string
	Obs       string
}
