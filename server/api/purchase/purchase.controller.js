import {
  showAllPurchase,
  findPurchaseById,
  addPurchasedProduct,
  deletePurchasedProduct,
} from "./purchase.service.js";

export async function handleGetAllPurchase(req, res, next) {
  try {
    const purchase = await showAllPurchase();
    return res.status(200).json({ purchase });
  } catch (err) {
    next(err);
  }
}

export async function handleGetPurchaseById(req, res, next) {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({
        message: "Missing user id",
      });

    const purchase = await findPurchaseById(id);
    if (!purchase)
      throw new ApiError(404, "purchase not found", "purchase_NOT_FOUND");

    return res.status(200).json({ success: true, purchase });
  } catch (err) {
    next(err);
  }
}

export async function handlePostBuyProduct(req, res, next) {
  try {
    const { sessionType } = req.params;
    const { productId } = req.params;
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId" });
    }

    const updated = await addPurchasedProduct(userId, productId, sessionType);

    if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

    return res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}

export async function handleDeleteBuyProduct(req, res, next) {
  try {
    const { purchaseId } = req.params;
    if (!purchaseId) {
      return res.status(400).json({ message: "Missing purchaseId" });
    }

    const updated = await deletePurchasedProduct(purchaseId);
    if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

    return res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}
