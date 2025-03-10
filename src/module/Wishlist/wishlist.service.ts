import { IWishlist } from "./wishlist.interface";
import { WishlistModel } from "./wishlist.model";

const createWishlist = async ({payload}:{payload:IWishlist}) => {
    const result = await WishlistModel.create(payload);
    return result
};

const getWishlistByUser = async (id:string) => {
    const result = await WishlistModel.findById(id);
    return result
}

const deleteWishlist = async (id:string) => {
    const result = await WishlistModel.findByIdAndDelete(id);
    return result
}
const wishlistServices = {
    createWishlist,
    getWishlistByUser,
    deleteWishlist
}

export default wishlistServices