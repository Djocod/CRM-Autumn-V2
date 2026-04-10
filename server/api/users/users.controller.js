import {
  showAllUsers,
  findUserById,
  findUserBySearch,
  // addPurchasedProduct,
  // addViewedProduct,
  // deletePurchasedProduct,
  // deleteViewedProduct,
} from "./users.service.js";
import ApiError from "../../utils/apiError.js";

// // ==========================================
// // ============== Function ==============

// // Get All Users
export async function handleGetAllUser(req, res, next) {
  try {
    const user = await showAllUsers();
    return res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
}

// Get user by Name
export async function handleGetUserSearch(req, res, next) {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({
        message: "Missing user name",
      });
    }

    const user = await findUserBySearch(search);
    if (!user) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

    return res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
}

// // Get User By ID
export async function handleGetUserById(req, res, next) {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({
        message: "Missing user id",
      });

    const user = await findUserById(id);
    if (!user) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

    return res.status(200).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
}

// // ==========================================
// // ============== ADD Function ==============

// // Add Product buy at User
// export async function handlePatchBuyProducts(req, res) {
//   try {
//     const { sessionType } = req.params;
//     const { productId } = req.params;
//     const { userId } = req.params;

//     if (!userId) {
//       return res.status(400).json({ message: "Missing userId" });
//     }

//     const updated = await addPurchasedProduct(userId, productId, sessionType);

//     if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

//     return res.status(200).json({ success: true, data: updated });
//   } catch (err) {
//     next(err);
//   }
// }

// // Add Product view at User
// export async function handlePatchViewProducts(req, res) {
//   try {
//     const { productId } = req.params;
//     const { userId } = req.body;

//     if (!userId) {
//       return res.status(400).json({ message: "Missing userId" });
//     }

//     const updated = await addViewedProduct(userId, productId);

//     if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

//     return res.status(200).json({ viewSessions: updated.viewSessions });
//   } catch (error) {
//     next(err);
//   }
// }

// // ==========================================
// // ============== DELETE Function ==============

// // Delete Product buy at User
// export async function handleDeletePurchaseProducts(req, res) {
//   try {
//     const { sessionType } = req.params;
//     const { productId } = req.params;
//     const { userId } = req.body;

//     if (!userId) {
//       return res.status(400).json({ message: "Missing userId" });
//     }

//     const updated = await deletePurchasedProduct(
//       userId,
//       productId,
//       sessionType,
//     );

//     if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

//     return res.status(200).json({ purchaseSessions: updated.purchaseSessions });
//   } catch (error) {
//     next(err);
//   }
// }

// // Delete Product view at User
// export async function handleDeleteViewProducts(req, res) {
//   try {
//     const { productId } = req.params;
//     const { userId } = req.body;

//     if (!userId) {
//       return res.status(400).json({ message: "Missing userId" });
//     }

//     const updated = await deleteViewedProduct(userId, productId);

//     if (!updated) throw new ApiError(404, "User not found", "USER_NOT_FOUND");

//     return res.status(200).json({ viewSessions: updated.viewSessions });
//   } catch (error) {
//     next(err);
//   }
// }
