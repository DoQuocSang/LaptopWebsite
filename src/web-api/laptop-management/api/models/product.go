package models

// Product struct
type Product struct {
	ID              int    `json:"id" gorm:"column:id;"`
	Name            string `json:"name" gorm:"column:name;"`
	Description     string `json:"description" gorm:"column:description;"`
	Image           string `json:"image" gorm:"column:image;"`
	Price           int    `json:"price" gorm:"column:price;"`
	Discount        int    `json:"discount" gorm:"column:discount;"`
	Category_ID     int    `json:"category_id" gorm:"column:category_id;"`
	Brand_ID        int    `json:"brand_id" gorm:"column:brand_id;"`
	CPU             string `json:"cpu" gorm:"column:cpu;"`
	RAM             string `json:"ram" gorm:"column:ram;"`
	Disk            string `json:"disk" gorm:"column:disk;"`
	Display         string `json:"display" gorm:"column:display;"`
	GraphicCard     string `json:"graphic_card" gorm:"column:graphic_card;"`
	TimeRelease     int    `json:"time_release" gorm:"column:time_release;"`
	OperatingSystem string `json:"operating_system" gorm:"column:operating_system;"`
	Connector       string `json:"connector" gorm:"column:connector;"`
	Design          string `json:"design" gorm:"column:design;"`
	Size            string `json:"size" gorm:"column:size;"`
	Weight          string `json:"weight" gorm:"column:weight;"`
}
