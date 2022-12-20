package controller

import (
	"net/http"

	"github.com/flugika/GearByFESUTCS/entity"
	"github.com/gin-gonic/gin"
)

// GET /student/:id
// Get student by id
func GetStudent(c *gin.Context) {
	var student entity.Student
	id := c.Param("id")
	if err := entity.DB().Raw("SELECT * FROM students WHERE id = ?", id).Scan(&student).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": student})
}
