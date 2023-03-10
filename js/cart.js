const showCartBtn = document.querySelector("#cart-btn");
// 네비 카트 버튼
const cartBox = document.querySelector("#cart");
// 카트박스 몸체
const cartBottom = document.querySelector("#cart__bottom");
const cartInnerBtn = document.querySelector("#cart__top i");
// 카트박스 속 닫기버튼
const cartLightOff = document.querySelector("#lightoff");
//  조명

// 카트박스 보였다 숨기기---------------------

function showCartBox() {
    cartBox.style.transform = "translateX(-300px)";
    cartLightOff.classList.remove("lightoff-hidden");
  }
  
  function hideCartBox() {
    cartBox.style.transform = "translateX(300px)";
    cartLightOff.classList.add("lightoff-hidden");
    // cartList.style.transform = "translateX(-300px)";
  }

  showCartBtn.addEventListener("click", showCartBox);
  cartInnerBtn.addEventListener("click", hideCartBox);

//   ---------------------------------------

// 카트 리스트 추가 -------------------------
// function handleCartList(){
    
// function addCartList (imgID) {
//     var cartSpan = document.querySelector("#cart__empty");
//     cartSpan.style.display = 'none';

//     var data = ev.dataTransfer.getData("text");
//     var img = document.getElementById(data).cloneNode(true);


//     img.className = "innercart__elements" ;
//     cartBottom.appendChild(img);
//   }
// }
// -----------------------------------------


//  best1의 버튼 : 온클릭="장바구니추가 함수('best1')"

// 장바구니추가함수 (imgID) >> {

//     1. 장바구니에서 cart is empty 글자가 사라진다. >> 

//     2. 이미지의 아이디를 따온다. + 복사한다.
//     아이디 따오기   :   imgID.dataTransfer.setData("text", imgID);
//     이미지 복사하기 :   var img = document.getElementById(data).cloneNode(true);

//     3. 복사한 이미지에 클래스명 부여
//     img.className = "innercart__elements" ;
//     4. 복사한 이미지를 카트바텀에 추가
//     cartBottom.appendChild(img);

    


// }

const cartForm = document.getElementById("cart__form");
const cartBtn = document.getElementsByClassName(".best-btn");
const cartList = document.getElementById("cart__list");

const CARTS_KEY = "carts";

let carts = [];

function saveCarts() {
  localStorage.setItem(CARTS_KEY, JSON.stringify(carts));
}

function deleteCart(event) {
  const li = event.target.parentElement;
  li.remove();
  carts = carts.filter((cart) => cart.id !== parseInt(li.id));
  saveCarts();
}

function paintCart(newCart) {
  const cartLi = document.createElement("li");
  const cartImg = document.createElement("img");
  const Name = document.createElement("span");
  const btn = document.createElement("button");
  const Div = document.createElement("div");
  const Price = document.createElement("span");
  cartImg.src = `${newCart.src}`;
  cartLi.id = newCart.id;
  btn.innerText = "X";
  btn.addEventListener("click", deleteCart);
  cartImg.classList.add("innerCart__img");
  cartLi.appendChild(cartImg);
  Name.innerText = newCart.text;
  // Price.innerText = newCart.price;
  Price.innerText = '(가격)';
  cartLi.appendChild(Div);
  Div.appendChild(Name);
  Div.appendChild(Price);
  cartLi.appendChild(btn);
  cartList.appendChild(cartLi);
}

function handleCartSubmit(imgSrc, productName) {
  event.preventDefault();

  const newCart = productName;
  const imgLoad = imgSrc;
  console.log(newCart);
  console.log(imgLoad);
  const newCartObj = {
    text: productName,
    src: imgLoad,
    // price: @@
    id: Date.now(),
  };
  carts.push(newCartObj);
  paintCart(newCartObj);
  saveCarts();
}

const savedCarts = localStorage.getItem(CARTS_KEY);

if (savedCarts !== null) {
  const parsedCarts = JSON.parse(savedCarts);
  carts = parsedCarts;
  parsedCarts.forEach(paintCart);
  const cartSpan = document.querySelector("#cart__empty");
  cartSpan.style.display = 'none';
} else {
  cartSpan.style.display = 'inline-block';
}