import AppError from "../../error/appError";
import { CatchAsync } from "../../Utils/CatchAsync";
import { sendImagesToCloudinary } from "../../Utils/fileUploadHelpers";
import { sendResponse } from "../../Utils/SendResponse";
import { ProductService } from "./product.service";

const createProduct = CatchAsync(async (req, res) => {
    const payload = req.body;
    console.log(payload);
    const result = await ProductService.createProduct(payload);
    sendResponse(res, {
        success: true,
        message: 'Product Created Successfully',
        data: result,
        statusCode: 200
    });
});

const getAllProduct = CatchAsync(async (req, res) => {
    const query = req.query;
    console.log(query);
    const result = await ProductService.getAllProduct( query );
    sendResponse(res, {
        success: true,
        message: 'Products Retrieved Successfully',
        data: result,
        statusCode: 200
    });
});

const getSingleProduct = CatchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.getSingleProduct(id);
    sendResponse(res, {
        success: true,
        message: 'Product Retrieved Successfully',
        data: result,
        statusCode: 200
    });
});

const deleteProduct = CatchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.deleteProduct(id);
    sendResponse(res, {
        success: true,
        message: 'Product Deleted Successfully',
        data: result,
        statusCode: 200
    });
});

const getAllProductByUser = CatchAsync(async (req, res) => {
    const { id } = req.params;
    const query = req.query;  // Get query parameters like search, sort, filter, pagination
    const result = await ProductService.getProductByUserId(id, query);
    sendResponse(res, {
        success: true,
        message: 'Products Retrieved Successfully for User',
        data: result,
        statusCode: 200
    });
});

export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct,
    getAllProductByUser
};
