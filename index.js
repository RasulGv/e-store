
const add_btn = document.querySelectorAll('.add')
const del_btn = document.querySelectorAll('.del')
const sum_price = document.querySelector('.price')

let obj = {}
let sum = 0



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
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        sum--
        sum = sum < 0 ? 0 : sum
        const card_body = b.closest('.card-body')
        const name = card_body.querySelector('.card-title').textContent
        removeItem(name)
        console.log('del',obj);
        sum_price.innerText = sum
    })
})

function totalPrice(a,b){
     console.log(a*b);
}

function removeItem(name){
    if(obj[name]){
        if(obj[name].quantity ===1){
            delete obj[name]
        }else{
            obj[name].quantity--
        }
    }
}





