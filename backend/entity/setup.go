package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("GrantGear.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schema ------------------------------------------------------
	database.AutoMigrate(
		&Student{},
	)

	db = database

	db.Model(&Student{}).Create(&Student{
		StudentID:  "1",
		PrefixName: "นาย1",
		FirstName:  "ชื่อ1",
		LastName:   "นามสกุล1",
		Major:      "วิศวกรรมศาสตร์",
	})

	db.Model(&Student{}).Create(&Student{
		StudentID:  "2",
		PrefixName: "นาย2",
		FirstName:  "ชื่อ2",
		LastName:   "นามสกุล2",
		Major:      "วิศวกรรมศาสตร์",
	})

	db.Model(&Student{}).Create(&Student{
		StudentID:  "3",
		PrefixName: "นาย3",
		FirstName:  "ชื่อ3",
		LastName:   "นามสกุล3",
		Major:      "วิศวกรรมศาสตร์",
	})

	db.Model(&Student{}).Create(&Student{
		StudentID:  "B6303044",
		PrefixName: "นาย",
		FirstName:  "ชูเกียรติ",
		LastName:   "ก๋าอินตา",
		Major:      "วิศวกรรมศาสตร์",
	})
}
