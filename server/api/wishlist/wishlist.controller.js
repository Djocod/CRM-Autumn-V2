import ApiError from "../../utils/apiError.js";
import {
  addWishlistProduct,
  deleteWishlistProduct,
  findWhislistById,
  showAllWihslist,
} from "./wishlist.service.js";

export async function handleGetAllwishlist(req, res, next) {
  try {
    const wishlist = await showAllWihslist();
    return res.status(200).json({ wishlist });
  } catch (err) {
    next(err);
  }
}

export async function handleGetWishlistById(req, res, next) {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "Missing wishlist id" });

    const wishlist = await findWhislistById(id);
    if (!wishlist)
      throw new ApiError(404, "Wishlist not found", "WISLIST_NOT_FOUND");

    return res.status(200).json({ success: true, wishlist });
  } catch (err) {
    next(err);
  }
}

export async function handlePostWishlistProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ message: "Missing userId" });

    const updated = await addWishlistProduct(userId, productId);

    if (!updated) throw new ApiError(404, "User not found", "USRE_NOT_FOUND");

    return res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}

export async function handleDeleteWishlistProduct(req, res, next) {
  try {
    const { wishlistId } = req.params;
    if (!wishlistId)
      return res.status(400).json({ message: "Missing wishlistId" });

    const updated = await deleteWishlistProduct(wishlistId);
    if (!updated)
      throw new ApiError(404, "wishlist not found", "WISHLIST_NOT_FOUND");

    return res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}
