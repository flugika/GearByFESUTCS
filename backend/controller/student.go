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
	if tx := entity.DB().Where("student_id = ?", id).First(&student); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "student not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": student})
}
