package shared

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/zyzmoz/mycrm/persistence/infra"
)

func GetEnvVar(key string) string {
	err := godotenv.Load(".env")
	logger := infra.NewLogger()

	if err != nil {
		logger.LogError("Error loading env variables")
	}

	value := os.Getenv(key)

	if value == "" {
		logger.LogError("Env variable %s  is required", key)
	}
	logger.LogAccess("%s: %s", key, value)

	return value
}
