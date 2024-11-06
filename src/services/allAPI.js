import commonAPI from "./commonAPI";
import serverUrl from "./serverURL";


//upload product called by Add component
export const uploadProductAPI = async (uploadProduct) => {
    return await commonAPI("POST", `${serverUrl}/allProducts`, uploadProduct)
}

//get all products called by View component
export const getAllProductsAPI = async () => {
    return await commonAPI("GET", `${serverUrl}/allProducts`, "")
}

//delete product called by View component
export const deleteProductAPI = async(productId)=>{
    return await commonAPI("DELETE",`${serverUrl}/allProducts/${productId}`,{})
}

//update category api
export const updateProductAPI = async (productId,productDetails) => {
    return await commonAPI("PUT", `${serverUrl}/allProducts/${productId}`, productDetails)
}