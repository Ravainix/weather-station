package Routes

import (
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	group := r.Group("/v1")
	{
		group.GET("weather")
	}

	return r
}
