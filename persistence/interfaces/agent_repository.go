package interfaces

import (
	"github.com/zyzmoz/mycrm/persistence/domain"
	"gorm.io/gorm"
)

// TODO: Later check what methods we need to create a
// relationship with Auth Providers.
type AgentRepository struct {
	DB *gorm.DB
}

func (ar *AgentRepository) FindAll() (agents domain.Agents, err error) {
	ar.DB.Find(&agents)

	return
}

func (ar *AgentRepository) FindOne(id string) (agent domain.Agent, err error) {
	ar.DB.Find(&agent, id)

	return
}

func (ar *AgentRepository) Create(agentData domain.Agent) (agent domain.Agent, err error) {
	ar.DB.Create(&agentData)

	agent = agentData
	return
}

func (ar *AgentRepository) Update(agentData domain.Agent) (agent domain.Agent, err error) {
	ar.DB.First(&agent, "ID = ?", agentData.ID)

	ar.DB.Model(&agent).Save(&agentData)

	return agentData, err
}

func (ar *AgentRepository) Delete(agentData domain.Agent) (err error) {
	ar.DB.Delete(&agentData)

	return
}
