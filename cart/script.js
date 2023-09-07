const url='https://fakestoreapi.com/products';
const colors=["#000080"," #800000","#008000","#808080","#000000"];
const cartContainer=document.getElementById("cartContainer")
const billContainer=document.getElementById("billContainer");

fetchProducts();

async function fetchProducts(){
  let response=await fetch(url);
  let data=await response.json();

  let cartId=JSON.parse(localStorage.getItem("cartId"));
  let ct=1;
  let totalBill=document.querySelector("#totalBill");
  let total=0;
  cartId.forEach((id)=>{
    data.forEach((item)=>{
        if(id===item.id){
            itemCard(item);
            billItems(item,ct++);
            total+=item.price*80;
        }
    });
  });
  totalBill.innerHTML=`₹ ${total}`;
  let payBtn=document.getElementById("checkOut");

  payBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    pay(total);
  });
}


//=========DISPLAYING THE ITEMS IN CART===========//
function itemCard(item){
      card=document.createElement("div");
      card.setAttribute('class','item');
      let itemColor=[colors[randomColor()],colors[randomColor()],colors[randomColor()]];
      card.innerHTML=`
      <img src="${item.image}" alt="Item" />
      <div class="info">
        <div>
          <b>${item.title}</b>
        </div>
        <div class="row">
          <div class="price">₹ ${item.price*80}</div>
          <div class="sized">S,M,L</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            <div class="circle" style="background-color: ${itemColor[0]}"></div>
            <div class="circle" style="background-color: ${itemColor[1]}"></div>
            <div class="circle" style="background-color: ${itemColor[2]}"></div>
          </div>
        </div>
        <div class="row">
          <div class="Rate">Rating: ${item.rating.rate}</div>
          <div class="rater" style="color:grey">${item.rating.count}</div>
        </div>
      </div>
      <button id="removeBtn" class="btn" onclick="removeFromCart(${item.id})">Remove From Cart</button>`;
      cartContainer.appendChild(card);


    
}
function billItems(item,count){

  let billItem=document.createElement("div");
  billItem.className="checkOutItems";
  billItem.innerHTML=`<div class="slNum">${count}</div>
  <div class="itemName">${item.title}</div>
  <div class="itemPrice">₹ ${item.price *80}</div>`;
  billContainer.appendChild(billItem);
}




function randomColor(){
  return Math.floor(Math.random() * colors.length);
}
function removeFromCart(id){
    let cartItem=new Array;
    cartItem=JSON.parse(localStorage.getItem('cartId'))?JSON.parse(localStorage.getItem('cartId')):[];
    let notRemoved=true;

    let finalItem=cartItem.filter((item)=>{
      if(item===id && notRemoved){
        notRemoved=false;
        return false;
      }
      return true;
    });
    localStorage.setItem('cartId',JSON.stringify(finalItem));
    location.reload();
}


//-------RazorPay--------
function pay(total){

  var options = {
    key: "rzp_test_iUxeBpCxMVsczd" ,// "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
    amount: 100*total, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "MyShop Checkout",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#000",
    },
    image:
      "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
}