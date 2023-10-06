package controllers

import (
	"heritage-management/api/db"
	"heritage-management/api/models"
	"heritage-management/api/utils"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetPagedHeritageCategories trả về danh sách tất cả các danh mục với phân trang
func GetPagedCategories(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))
	columnName := c.DefaultQuery("columnName", "id")
	sortOrder := c.DefaultQuery("sortOrder", "desc")

	var total int64
	var categories []models.Category

	// Đếm tổng số lượng
	if err := db.GetDB().Model(&models.Category{}).Count(&total).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get data")
		return
	}

	// Đếm tổng số trang
	// Chia % vì nếu chia có dư thì đồng nghĩa vẫn còn trang sau nên phải tăng thêm 1
	totalPages := int(total) / limit
	if int(total)%limit != 0 {
		totalPages++
	}

	// Phân trang
	offset := (page - 1) * limit
	orderClause := columnName + " " + sortOrder
	if err := db.GetDB().Order(orderClause).Offset(offset).Limit(limit).Find(&categories).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get data")
		return
	}

	// Tạo đối tượng phản hồi phân trang
	pagination := utils.Pagination{
		Total:      total,
		Page:       page,
		Limit:      limit,
		TotalPages: totalPages,
		Data:       categories,
	}

	utils.SuccessResponse(c, http.StatusOK, pagination)
}

// GetCategoryByID trả về thông tin về một danh mục dựa trên ID
func GetCategoryByID(c *gin.Context) {
	id := c.Param("id")


	var category models.Category

	// Lấy thông tin về danh mục dựa trên ID từ cơ sở dữ liệu
	if err := db.GetDB().Where("id = ?", id).First(&category).Error; err != nil {
		utils.ErrorResponse(c, http.StatusNotFound, "Category not found")
		return
	}

	utils.SuccessResponse(c, http.StatusOK, category)
}

// CreateCategory tạo một danh mục mới
func CreateCategory(c *gin.Context) {
	var category models.Category

	// Parse thông tin về danh mục từ request body
	if err := c.ShouldBindJSON(&category); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	// Thêm danh mục vào cơ sở dữ liệu
	if err := db.GetDB().Create(&category).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not create category")
		return
	}

	utils.SuccessResponse(c, http.StatusCreated, category)
}

// UpdateCategory cập nhật thông tin về một danh mục dựa trên ID
func UpdateCategory(c *gin.Context) {
	id := c.Param("id")

	var category models.Category

	// Lấy thông tin về danh mục dựa trên ID từ cơ sở dữ liệu
	if err := db.GetDB().Where("id = ?", id).First(&category).Error; err != nil {
		utils.ErrorResponse(c, http.StatusNotFound, "Category not found")
		return
	}

	// Parse thông tin cập nhật từ request body
	if err := c.ShouldBindJSON(&category); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	// Lưu thông tin cập nhật vào cơ sở dữ liệu
	if err := db.GetDB().Save(&category).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not save category")
		return
	}
	utils.SuccessResponse(c, http.StatusOK, "Category updated successfully")
}

// DeleteCategory xóa một danh mục dựa trên ID
func DeleteCategory(c *gin.Context) {
	id := c.Param("id")

	var category models.Category

	// Lấy thông tin về danh mục dựa trên ID từ cơ sở dữ liệu
	if err := db.GetDB().Where("id = ?", id).First(&category).Error; err != nil {
		utils.ErrorResponse(c, http.StatusNotFound, "Category not found")
		return
	}

	// Xóa danh mục khỏi cơ sở dữ liệu
	if err := db.GetDB().Delete(&category).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not delete category")
		return
	}

	utils.SuccessResponse(c, http.StatusOK, gin.H{"message": "Category deleted successfully"})
}
