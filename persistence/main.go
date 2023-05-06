package persistence

import (
	"os"

	"github.com/zyzmoz/mycrm/persistence/database"
	"github.com/zyzmoz/mycrm/persistence/domain"
	"gorm.io/driver/sqlite"
	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

func InitDb() {
	var err error

	switch os.Getenv("DATABASE_DRIVER") {
	case "mssql":
		dsn := "sqlserver://" + os.Getenv("DATABASE_USER") + ":" + os.Getenv("DATABASE_PASSWORD") + "@mssql:1433?database=digitalmarket"
		database.DBConn, err = gorm.Open(sqlserver.Open(dsn), &gorm.Config{})
	default:
		database.DBConn, err = gorm.Open(sqlite.Open("temp.db"), &gorm.Config{})
	}

	if err != nil {
		panic("failed to create database connection")
	}

	database.DBConn.AutoMigrate(&domain.Address{})
	database.DBConn.AutoMigrate(&domain.Agent{})
	database.DBConn.AutoMigrate(&domain.Contact{})
	database.DBConn.AutoMigrate(&domain.Customer{})
}

// TODO: Create a webserver module to easy dev tests
// Also, when we create the sync module, well need that anyways;
