package usecases

import (
	"github.com/google/uuid"
	"github.com/zyzmoz/mycrm/persistence/domain"
)

type AgentInteractor struct {
	AgentRepository AgentRepository
}

func (ai *AgentInteractor) FindAll() (agents domain.Agents, err error) {
	agents, err = ai.AgentRepository.FindAll()

	return
}

func (ai *AgentInteractor) FindOne(id string) (agent domain.Agent, err error) {
	agent, err = ai.AgentRepository.FindOne(id)

	return
}

func (ai *AgentInteractor) Create(agentData domain.Agent) (agent domain.Agent, err error) {
	agentData.ID = uuid.New().String()
	agent, err = ai.AgentRepository.Create(agentData)

	return
}

func (ai *AgentInteractor) Update(agentData domain.Agent) (agent domain.Agent, err error) {
	agent, err = ai.AgentRepository.Update(agentData)

	return
}

func (ai *AgentInteractor) Delete(agentData domain.Agent) (err error) {
	err = ai.AgentRepository.Delete(agentData)

	return
}
