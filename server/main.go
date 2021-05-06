package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/ravainix/weatherstation/Routes"
	"github.com/ravainix/weatherstation/Services"
)

var router *gin.Engine

func init() {
	router = Routes.SetupRouter()

}

func main() {
	Services.ConnectDB()

	fmt.Println("Server Running on Port: ", 9090)
	http.ListenAndServe(":9090", router)
}
