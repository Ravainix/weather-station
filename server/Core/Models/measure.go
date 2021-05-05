package Models

type Measure struct {
	ID          int `json:"id"`
	Temperature int `json:"temperature"`
	Humidity    int `json:"humidity"`
	Pressure    int `json:"pressure"`
	Battery     int `json:"battery"`
}
