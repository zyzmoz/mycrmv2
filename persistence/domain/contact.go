package domain

import "gorm.io/gorm"

type Contacts []Contact

type Contact struct {
	gorm.Model
	ID          string `gorm:"primaryKey"`
	CustomerID  string
	PhoneNumber string
	Description string
	IsPrimary   bool
}
