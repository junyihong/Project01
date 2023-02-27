// search 관련
const searchInput = document.querySelector("#search-input");
const toggleBtn = document.querySelector("#toggle-vibility");
const navList = document.querySelector(".nav__list");

// cart 관련
const cartBtn = document.querySelector("#cart-btn");
const cartInnerBtn = document.querySelector("#cart__top i");
const cartList = document.querySelector("#cart");

function showInput() {
  searchInput.classList.toggle("hidden");
  if (searchInput.className === "hidden") {
    searchInput.style.width = "0px";
    navList.style.transform = "none";
  } else {
    searchInput.style.width = "200px";
    navList.style.transform = "translateX(-30px)";
  }
}
function showCartList() {
  cartList.style.transform = "translateX(-300px)";
}
function hideCartList() {
  cartList.style.transform = "translateX(300px)";
  // cartList.style.transform = "translateX(-300px)";
}

toggleBtn.addEventListener("click", showInput);
cartBtn.addEventListener("click", showCartList);
cartInnerBtn.addEventListener("click", hideCartList);
