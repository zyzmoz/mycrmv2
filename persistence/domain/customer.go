package domain

import "gorm.io/gorm"

type Customers []Customer

type Customer struct {
	gorm.Model
	ID        string `gorm:"primaryKey"`
	FirstName string
	LastName  string
	GovID     string
	TaxID     string
	Email     string
	Phone     string
	Mobile    string
	Gender    string // TODO: Change this field to be an enum?
	BirthDate string
	Obs       string
	AgentID   string // TODO: Add the foreign key to Agents
}
