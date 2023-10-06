import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Định dạng số 1.000.000
export const toThousandFormat = (value) => {
    if (value !== undefined && value !== null) {
        return value.toLocaleString();
    }
    return ""; // Hoặc giá trị mặc định khác nếu cần
}


// Tính giá sau khi giảm
export const calculateDiscountedPrice = (price, discount) => {
    // Kiểm tra xem discount có hợp lệ không
    if (discount < 0 || discount > 100) {
        console.error("Discount percentage must be between 0 and 100.");
        return null; 
    }

    const discountedPrice = price - (price * discount / 100);
    return discountedPrice;
}