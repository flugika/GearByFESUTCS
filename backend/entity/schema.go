package entity

import (
	"gorm.io/gorm"
)

// ==========================================================
// Student Table ============================================
// ==========================================================
type Student struct {
	gorm.Model
	StudentID  string
	PrefixName string
	FirstName  string
	LastName   string
	Major      string
}