import {
  addViewProduct,
  deleteViewProduct,
  findViewById,
  showAllView,
} from "./view.service.js";

export async function handleGetAllView(req, res, next) {
  try {
    const view = await showAllView();
    return res.status(200).json({ view });
  } catch (err) {
    next(err);
  }
}

export async function handleGetViewById(req, res, next) {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({
        message: "Missing view id",
      });

    const view = await findViewById(id);
    if (!view) throw new ApiError(404, "view not found", "VIEW_NOT_FOUND");

    return res.status(200).json({ success: true, view });
  } catch (err) {
    next(err);
  }
}

export async function handlePostViewBuyProduct(req, res, next) {
  try {
    const { productId } = req.params;
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId" });
    }

    const updated = await addViewProduct(userId, productId);

    if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

    return res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}

export async function handleDeleteViewBuyProduct(req, res, next) {
  try {
    const { viewId } = req.params;
    if (!viewId) {
      return res.status(400).json({ message: "Missing viewId" });
    }

    const updated = await deleteViewProduct(viewId);
    if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

    return res.status(200).json({ success: true, updated });
  } catch (err) {
    next(err);
  }
}
