package Models

import "time"

type Measure struct {
	ID          int     `json:"id" gorm:"primary_key"`
	Temperature float32 `json:"temperature,omitempty" binding:"required"`
	Humidity    int     `json:"humidity,omitempty"`
	Pressure    int     `json:"pressure"`
	Battery     int     `json:"battery"`
	CreatedAt   time.Time
}

func (m *Measure) TableName() string {
	return "measure"
}
