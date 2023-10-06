package models

// Product struct
type Product struct {
	ID          int    `json:"id" gorm:"column:id;"`
	Name        string `json:"name" gorm:"column:name;"`
	Image       string `json:"image" gorm:"column:image;"`
	Price       int    `json:"price" gorm:"column:price;"`
	LineThrou   int    `json:"line_throu" gorm:"column:line_throu;"`
	Discount    int    `json:"discount" gorm:"column:discount;"`
	Title       string `json:"title" gorm:"column:title;"`
	Description string `json:"description" gorm:"column:description;"`
	Gender      string `json:"gender" gorm:"column:gender;"`
	Color       string `json:"color" gorm:"column:color;"`
}
