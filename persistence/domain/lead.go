package domain

import "gorm.io/gorm"

type Leads []Lead

type Lead struct {
	gorm.Model
	ID         string `gorm:"primaryKey"`
	AgentID    string
	CustomerID string
	Date       string
	Details    string
}
