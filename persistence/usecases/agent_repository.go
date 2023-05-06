package usecases

import "github.com/zyzmoz/mycrm/persistence/domain"

type AgentRepository interface {
	FindAll() (domain.Agents, error)
	FindOne(string) (domain.Agent, error)
	Create(domain.Agent) (domain.Agent, error)
	Update(domain.Agent) (domain.Agent, error)
	Delete(domain.Agent) error
}
