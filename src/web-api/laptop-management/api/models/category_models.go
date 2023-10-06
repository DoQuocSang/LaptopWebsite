package models

// HeritageCategory struct (DN TABLE)
type Category struct {
	ID          int    `json:"id" gorm:"column:id;"`
	Name        string `json:"name" gorm:"column:name;"`
}

