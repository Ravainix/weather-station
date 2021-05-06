package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/ravainix/weatherstation/Core/Models"
	"github.com/ravainix/weatherstation/Services"
)

func GetMeasures(c *gin.Context) {
	var measures []Models.Measure
	if err := Services.DB.Find(&measures).Error; err != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, err)
		return
	}

	c.JSON(http.StatusOK, measures)
}

func GetMeasure(c *gin.Context) {
	c.JSON(http.StatusNotImplemented, gin.H{"error": "not implemented"})
}

func CreateMeasure(c *gin.Context) {
	var measure Models.Measure
	if err := c.ShouldBindJSON(&measure); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	Services.DB.Create(&measure)
	c.JSON(http.StatusOK, measure)
}

func UpdateMeasure(c *gin.Context) {
	c.JSON(http.StatusNotImplemented, gin.H{"error": "not implemented"})
}

func DeleteMeasure(c *gin.Context) {
	c.JSON(http.StatusNotImplemented, gin.H{"error": "not implemented"})
}
