const url='https://fakestoreapi.com/products';
const colors=["#000080"," #800000","#008000","#808080","#000000"];
const cartContainer=document.getElementById("cartContainer")
fetchProducts();
async function fetchProducts(){
  let response=await fetch(url);
  let data=await response.json();

  let cartId=JSON.parse(localStorage.getItem("cartId"));
  
  cartId.forEach((id)=>{
    data.forEach((item)=>{
        if(id===item.id){
            itemCard(item);
        }
    });
  });
}

function itemCard(item){
      card=document.createElement("div");
      card.setAttribute('class','item');
      console.log(colors[randomColor()]);
      let itemColor=[colors[randomColor()],colors[randomColor()],colors[randomColor()]];
      card.innerHTML=`
      <img src="${item.image}" alt="Item" />
      <div class="info">
        <div>
          <b>${item.title}</b>
        </div>
        <div class="row">
          <div class="price">$ ${item.price}</div>
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
      <button id="addBtn" onclick="removeFromCart(${item.id})">Remove From Cart</button>`;
      cartContainer.appendChild(card);
    
}

function randomColor(){
  return Math.floor(Math.random() * colors.length);
}
function removeFromCart(id){
    let cartItem=new Array;
    cartItem=JSON.parse(localStorage.getItem('cartId'))?JSON.parse(localStorage.getItem('cartId')):[];
    
    let finalItem=cartItem.filter((item)=>{return item!==id});
    localStorage.setItem('cartId',JSON.stringify(finalItem));
    location.reload();
}