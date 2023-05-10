package persistence

import (
	"github.com/zyzmoz/mycrm/persistence/database"
	"github.com/zyzmoz/mycrm/persistence/domain"
	"github.com/zyzmoz/mycrm/persistence/infra"
	"github.com/zyzmoz/mycrm/persistence/shared"
	"gorm.io/driver/sqlite"
	"gorm.io/driver/sqlserver"
	"gorm.io/gorm"
)

func InitDb() error {
	var err error

	logger := infra.NewLogger()

	switch shared.GetEnvVar("DATABASE_DRIVER") {
	case "mssql":
		dsn := "sqlserver://" + shared.GetEnvVar("DATABASE_USER") + ":" + shared.GetEnvVar("DATABASE_PASSWORD") + "@mssql:1433?database=digitalmarket"
		database.DBConn, err = gorm.Open(sqlserver.Open(dsn), &gorm.Config{})
	default:
		database.DBConn, err = gorm.Open(sqlite.Open(shared.GetEnvVar("DATABASE_HOST")), &gorm.Config{})
	}

	if err != nil {
		logger.LogError("Error connecting to the database: %s", err)
		return err
	}

	database.DBConn.AutoMigrate(&domain.Address{})
	database.DBConn.AutoMigrate(&domain.Agent{})
	database.DBConn.AutoMigrate(&domain.Contact{})
	database.DBConn.AutoMigrate(&domain.Customer{})

	logger.LogAccess("Connected to the database and migrations executed!")
	return nil
}
