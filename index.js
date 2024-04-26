
const add_btn = document.querySelectorAll('.add')
const del_btn = document.querySelectorAll('.del')
const sum_price = document.querySelector('.price')
const showButton = document.querySelector('.show')
const containerShow = document.querySelector(".cards");
const productShow=document.querySelector('.products')
const totalPr=document.querySelector('.totalPr')
const searchInput = document.querySelector('.form-control');
const cards = document.querySelectorAll(".card")
const btns = document.querySelectorAll(".btns")

let obj = {}
let sum = 0

document.addEventListener("DOMContentLoaded",function(){
    btns[0].click()
})

btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        let start = (parseInt(btn.textContent) - 1) * 5

        cards.forEach(function(card,index){
            if(index >= start && index < start + 5){
                card.style.display ="block"
            }else{
                card.style.display = "none"
            }
        })
    })

})

showButton.addEventListener("click", () => {
    containerShow.style.display = "none"
    productShow.style.display = "block"

    // if (containerShow.classList.contains("d-flex")) {
    //     containerShow.classList.remove("d-flex");
    //     containerShow.classList.add("d-none");
    //     productShow.style.display = "block";
    // }
});


add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++
        const card_body = b.closest('.card-body')
        const name = card_body.querySelector('.card-title').textContent
        
        if(!obj[name]){
            obj[name] = {
                quantity: 1,
                price: +b.value
            }
        }else{
            obj[name].quantity++
        }
      

       totalPrice(obj[name].quantity, obj[name].price)
        console.log('add',obj);
        
        sum_price.innerText = sum
        showProductDetails();
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        
        const card_body = b.closest('.card-body')
        const name = card_body.querySelector('.card-title').textContent
        removeItem(name)
        console.log('del',obj);
        sum_price.innerText = sum
        showProductDetails();
    })
})

function totalPrice(a,b){
     console.log(a*b);
}

function removeItem(name){
    if(obj[name]){
        sum--
        sum = sum < 0 ? 0 : sum
        if(obj[name].quantity ===1){
            delete obj[name]
        }else{
            obj[name].quantity--
        }
    }
}
function showProductDetails() {
    const productDetails = document.getElementById("productDetails");
    productDetails.innerHTML = "";
    let totPr = 0;
    for (const [productName, productInfo] of Object.entries(obj)) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
            <td>${productName}</td>
            <td>${productInfo.price}$</td>
            <td>${productInfo.quantity}</td>
        `;
      productDetails.appendChild(newRow);
      totPr += productInfo.price * productInfo.quantity;
    }
    totalPr.innerText = totPr;
  }
  showProductDetails();
  
  function goBack() {
    containerShow.style.display = "block";
    productShow.style.display = "none";
}
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        if (cardTitle.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});