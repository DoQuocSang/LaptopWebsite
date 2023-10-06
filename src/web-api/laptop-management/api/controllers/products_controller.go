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

// GetAllProducts trả về danh sách tất cả các sản phẩm mà không có phân trang
func GetAllProducts(c *gin.Context) {
	var products []models.Product

	// Lấy tất cả sản phẩm từ cơ sở dữ liệu
	if err := db.GetDB().Find(&products).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get products")
		return
	}

	// Kiểm tra dữ liệu trả về rỗng
	if len(products) == 0 {
		utils.ErrorResponse(c, http.StatusNotFound, "No products available")
		return
	}

	utils.SuccessResponse(c, http.StatusOK, products)
}

// CreateProduct tạo mới một sản phẩm
func CreateProduct(c *gin.Context) {
	var products models.Product

	if err := c.ShouldBindJSON(&products); err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid request body")
		return
	}

	if err := db.GetDB().Create(&products).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not create products")
		return
	}

	utils.SuccessResponse(c, http.StatusCreated, products)
}

// GetProductByID trả về sản phẩm với ID tương ứng
func GetProductByID(c *gin.Context) {
	// Lấy ID sản phẩm từ URL parameter hoặc từ request body, tùy thuộc vào cách bạn thiết kế API của mình
	productID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		utils.ErrorResponse(c, http.StatusBadRequest, "Invalid product ID")
		return
	}

	// Khởi tạo một biến để lưu sản phẩm
	var product models.Product

	// Truy vấn cơ sở dữ liệu để lấy sản phẩm theo ID
	if err := db.GetDB().First(&product, productID).Error; err != nil {
		// Kiểm tra xem sản phẩm có tồn tại không
		if errors.Is(err, gorm.ErrRecordNotFound) {
			utils.ErrorResponse(c, http.StatusNotFound, "Product not found")
		} else {
			utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get product")
		}
		return
	}

	// Trả về sản phẩm trong phản hồi thành công
	utils.SuccessResponse(c, http.StatusOK, product)
}

// GetPagedProducts trả về danh sách tất cả các sản phẩm với phân trang
func GetPagedProducts(c *gin.Context) {
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	limit, _ := strconv.Atoi(c.DefaultQuery("limit", "10"))
	columnName := c.DefaultQuery("columnName", "id")
	sortOrder := c.DefaultQuery("sortOrder", "desc")

	var total int64
	var products []models.Product

	// Đếm tổng số lượng
	if err := db.GetDB().Model(&models.Product{}).Count(&total).Error; err != nil {
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
	if err := db.GetDB().Order(orderClause).Offset(offset).Limit(limit).Find(&products).Error; err != nil {
		utils.ErrorResponse(c, http.StatusInternalServerError, "Could not get data")
		return
	}

	// Kiểm tra dữ liệu trả về rỗng
	if len(products) == 0 {
		utils.ErrorResponse(c, http.StatusNotFound, "No data available")
		return
	}

	// Tạo đối tượng phản hồi phân trang
	pagination := utils.Pagination{
		Total:      total,
		Page:       page,
		Limit:      limit,
		TotalPages: totalPages,
		Data:       products,
	}

	utils.SuccessResponse(c, http.StatusOK, pagination)
}
