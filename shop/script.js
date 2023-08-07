const url='https://fakestoreapi.com/products';
const colors=["#000080"," #800000","#008000","#808080","#000000"];

fetchProducts();
async function fetchProducts(){
  let response=await fetch(url);
  let data=await response.json();
  const menItems=document.getElementById("men-items");
  const womenItems=document.getElementById("women-items");
  const jewelleryItems=document.getElementById("jewellery-items");
  const electronicsItems=document.getElementById("electronics-items");
  
  data.filter((item)=>{
    const menItems=document.getElementById("men-items");
    // Men's Clothing----->
    if(item.category==="men's clothing"){
      itemCard(menItems,item);
    }
    //Women's Clothing----->
    if(item.category.includes("women")){
      itemCard(womenItems,item);
    }
    // // Jewellery Clothing----->
    if(item.category.includes("jewelery")){
      itemCard(jewelleryItems,item);
    }
    // Electronics Clothing----->
    if(item.category.includes("electronics")){
      itemCard(electronicsItems,item);
    }
  });
}

function itemCard(category,item){
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
      <button id="addBtn" onclick="addToCart(${item.id})">Add to Cart</button>`;
    category.appendChild(card);
    function addToCart(){
        console.log(item);
    };
    
}

function randomColor(){
  return Math.floor(Math.random() * colors.length);
}

function addToCart(id){
  let cartItem=new Array;
  cartItem=JSON.parse(localStorage.getItem('cartId'))?JSON.parse(localStorage.getItem('cartId')):[];
  cartItem.push(id);
  localStorage.setItem('cartId',JSON.stringify(cartItem));
}




