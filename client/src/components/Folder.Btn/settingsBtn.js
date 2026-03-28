import axios from "axios";

export function addPurchase(addId, userId, typeSes) {
  axios
    .post(`http://localhost:8000/api/purchase/${userId}/${addId}/${typeSes}`)
    .then((res) => console.log(res.data.purchase));
}

export function addview(addId, userId) {
  axios
    .post(`http://localhost:8000/api/view/${userId}/${addId}`)
    .then((res) => console.log(res.data.view));
}
//========================================================
export function deletePurchase(purchaseId) {
  axios
    .delete(`http://localhost:8000/api/purchase/${purchaseId}`)
    .then((res) => console.log(res.data.purchase));
}

export function deleteView(viewId) {
  axios
    .delete(`http://localhost:8000/api/view/${viewId}`)
    .then((res) => console.log(res.data.view));
}
