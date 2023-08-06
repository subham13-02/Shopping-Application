const url='https://fakestoreapi.com/products';

fetchProducts();
async function fetchProducts(){
  let response=await fetch(url);
  let data=await response.json();
  console.log(data);
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
    console.log(item.category);
  });
}

function itemCard(category,item){
      card=document.createElement("div");
      card.setAttribute('class','item');
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
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #4938af"></div>
            <div class="circle" style="background-color: #203d3e"></div>
          </div>
        </div>
        <div class="row">
          <div class="Rate">Rating: ${item.rating.rate}</div>
          <div class="rater" style="color:grey">${item.rating.count}</div>
        </div>
      </div>
      <button id="addBtn">Add to Cart</button>`;
    category.appendChild(card);
}







`<div class="item">
<img src="tshirt.png" alt="Item" />
<div class="info">
  <div class="row">
    <div class="price">$100</div>
    <div class="sized">S,M,L</div>
  </div>
  <div class="colors">
    Colors:
    <div class="row">
      <div class="circle" style="background-color: #000"></div>
      <div class="circle" style="background-color: #4938af"></div>
      <div class="circle" style="background-color: #203d3e"></div>
    </div>
  </div>
  <div class="row">Rating:</div>
</div>
<button id="addBtn">Add to Cart</button>
</div>`









// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };
