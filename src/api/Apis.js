export const baseUrl = import.meta.env.VITE_BASE_URL;

export const sendOtp = `${baseUrl}/send-otp`;
export const verifyOtp = `${baseUrl}/verify-otp`;
export const registerUser = `${baseUrl}/register`;
export const userDetail = `${baseUrl}/user-detail`;
export const logout = `${baseUrl}/logout`;
export const categorylist = `${baseUrl}/category-list`;
export const productlist = `${baseUrl}/product/list`;
export const filterCondition = `${baseUrl}/product/filter-list`;
export const newsletter = `${baseUrl}/add-newsletter`;
export const productDetailApi = `${baseUrl}/product/detail`;
export const addToCartApi = `${baseUrl}/add-to-cart`;
export const cartItemCountApi = `${baseUrl}/cart-item-count`;
export const myCartApi = `${baseUrl}/my-cart`;
export const removeFromCartApi = `${baseUrl}/remove-from-cart`;
