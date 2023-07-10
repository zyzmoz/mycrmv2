package domain

import "gorm.io/gorm"

type Tasks []Task

type Task struct {
	gorm.Model
	ID         string `gorm:"primaryKey"`
	AgentID    string
	CustomerID string
	Date       string
	Details    string
}
