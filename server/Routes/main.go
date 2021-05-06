package Routes

import (
	"github.com/gin-gonic/gin"
	controllers "github.com/ravainix/weatherstation/Controllers/Weather"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	group := r.Group("/v1")
	{
		group.GET("weather", controllers.GetMeasures)
		group.POST("weather", controllers.CreateMeasure)
	}

	return r
}
