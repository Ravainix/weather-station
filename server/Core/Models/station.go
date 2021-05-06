package Models

type Station struct {
	ID    string `json:"id" gorm:"primary_key"`
	Token string `json:"token"`
	Name  string `json:"name"`
}

func (s *Station) TableName() string {
	return "station"
}
