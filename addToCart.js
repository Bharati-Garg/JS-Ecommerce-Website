import { getCartProductFromLS } from "./getCartProductNew.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

//get the cart from local storage
//update the cart value and also to get the data always ready from localstorage
getCartProductFromLS();

//add the data in local storage
export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentProdElem = document.querySelector(`#card${id}`);
  //console.log(currentProdElem);
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  //console.log(quantity, price);

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );
  console.log(existingProd);

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updateCart : curProd;
    });
    console.log(updateCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    //show toast when product added to the cart
    showToast("add", id);
  }
  if (existingProd) {
    //alert("duplicate hai");
    return false;
  }
  price = Number(price * quantity);
  quantity = Number(quantity);
  //let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct);

  //show toast when product added to the cart
  showToast("add", id);
};
