package Models

import "time"

type Measure struct {
	ID          int     `json:"id" gorm:"primary_key"`
	Temperature float32 `json:"temperature"`
	Humidity    int     `json:"humidity"`
	Pressure    int     `json:"pressure"`
	Battery     int     `json:"battery"`
	CreatedAt   time.Time
}

func (m *Measure) TableName() string {
	return "measure"
}
