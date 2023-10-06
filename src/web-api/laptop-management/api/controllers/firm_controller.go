package controllers

import (
	"errors"
	"heritage-management/api/db"
	"heritage-management/api/models"
	"heritage-management/api/utils"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type FirmController struct{}

// GetAllFirms trả về danh sách tất cả các hãng sản xuất mà không có phân trang
func GetAllFirms(c *gin.Context) {
	var firms []models.Firm

	// Lấy tất cả sản phẩm từ cơ sở dữ liệu
	if err := db.GetDB().Find(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get firms")
		return
	}

	// Kiểm tra dữ liệu trả về rỗng
	if len(firms) == 0 {
		utils.ErrorResponse(c, http.StatusNotFound, "No firms available")
		return
	}

	utils.SuccessResponse(c, http.StatusOK, firms)
}


// CreateProduct tạo mới một hãng
func CreateFirm(c *gin.Context) {
	var firms models.Firm

	if err := c.ShouldBindJSON(&firms); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	if err := db.GetDB().Create(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not create firms")
		return
	}

	utils.SuccessResponse(c, http.StatusCreated, firms)
}

// GetProductByID trả về sản phẩm với ID tương ứng
func GetFirmByID(c *gin.Context) {
	// Lấy ID sản phẩm từ URL parameter hoặc từ request body, tùy thuộc vào cách bạn thiết kế API của mình
	firmID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid firm ID")
		return
	}

	// Khởi tạo một biến để lưu sản phẩm
	var firm models.Firm

	// Truy vấn cơ sở dữ liệu để lấy sản phẩm theo ID
	if err := db.GetDB().First(&firm, firmID).Error; err != nil {
		// Kiểm tra xem sản phẩm có tồn tại không
		if errors.Is(err, gorm.ErrRecordNotFound) {
			utils.ErrorResponse(c, http.StatusNotFound, "Firm not found")
		} else {
			utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get firm")
		}
		return
	}

	// Trả về sản phẩm trong phản hồi thành công
	utils.SuccessResponse(c, http.StatusOK, firm)
}

// GetPagedProducts trả về danh sách tất cả các sản phẩm với phân trang
func GetPagedFirms(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))
	columnName := c.DefaultQuery("columnName", "id")
	sortOrder := c.DefaultQuery("sortOrder", "desc")

	var total int64
	var firms []models.Firm

	// Đếm tổng số lượng
	if err := db.GetDB().Model(&models.Firm{}).Count(&total).Error; err != nil {
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
	if err := db.GetDB().Order(orderClause).Offset(offset).Limit(limit).Find(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get data")
		return
	}

	// Kiểm tra dữ liệu trả về rỗng
	if len(firms) == 0 {
		utils.ErrorResponse(c, http.StatusNotFound, "No data available")
		return
	}

	// Tạo đối tượng phản hồi phân trang
	pagination := utils.Pagination{
		Total:      total,
		Page:       page,
		Limit:      limit,
		TotalPages: totalPages,
		Data:       firms,
	}

	utils.SuccessResponse(c, http.StatusOK, pagination)
}

func UpdateFirm(c *gin.Context) {

	id := c.Param("id")

	var firms models.Firm

	if err := db.GetDB().Where("id = ?", id).First(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusNotFound, "Firm not found")
		return
	}

	if err := c.ShouldBindJSON(&firms); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	if err := db.GetDB().Save(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not update firm")
		return
	}

	utils.SuccessResponse(c, http.StatusOK, firms)
}

// DeleteUser xóa một người dùng dựa trên ID
func DeleteFirm(c *gin.Context) {
	id := c.Param("id")

	var firms models.Firm

	if err := db.GetDB().Where("id = ?", id).First(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusNotFound, "Firm not found")
		return
	}

	if err := db.GetDB().Delete(&firms).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not delete firm")
		return
	}

	utils.SuccessResponse(c, http.StatusOK, gin.H{"message": "Firm deleted successfully!"})
}