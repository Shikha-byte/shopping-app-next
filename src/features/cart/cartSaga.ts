import { takeLatest, put, delay } from "redux-saga/effects";
import { addToCartRequest, addToCartSuccess, addToCartFailure } from "./cartSlice";
import { Product } from "@/types/product";

function* handleAddToCart(action:{ type: string, payload:Product}){
    try {
        yield delay(1000);
        const itemWithQuantity = {
            ...action.payload,
            quantity: 1,
        };

        yield put(addToCartSuccess(itemWithQuantity))
    } catch (error) {
        yield put(addToCartFailure("Failed to add item to cart"));
    }

}

export default function* cartSaga(){
    yield takeLatest(addToCartRequest.type, handleAddToCart)
}