package domain

import "gorm.io/gorm"

type Agents []Agent

type Agent struct {
	gorm.Model
	ID        string `gorm:"primaryKey"`
	FirstName string
	LastName  string
	Email     string
	BirthDate string
}

// TODO: Later check what information we need to create a
// relationship with Auth Providers.
