// let cart = {
//     items: 0,
//     total: 0.0
// };

// // Function to add items to the cart
// function addToCart(price) {
//     cart.items += 1;
//     cart.total += price;
//     updateCartDisplay();
// }

// // Update cart display
// function updateCartDisplay() {
//     document.getElementById("cartItems").textContent = `Items: ${cart.items}`;
//     document.getElementById("totalAmount").textContent = `Total: $${cart.total.toFixed(2)}`;
// }

// /


var btnPlus = document.querySelectorAll('.btnPlus')

for (let i = 0; i < btnPlus.length; i++) {
   btnPlus[i].addEventListener('click',function(){
      btnPlus[i].previousElementSibling.innerText++
      SommeTotal()
})    
}



var btnmoins= document.querySelectorAll('.btnMoins')
// console.log(btnmoins)

// for (let i = 0; i < btnmoins.length; i++) {
//     btnmoins[i].addEventListener('click',function(){
//         if (btnmoins[i].nextElementSibling.innerText>0) {
//             btnmoins[i].nextElementSibling.innerText--
//         }
//     })
    
// }
var btnPlus = document.querySelectorAll('.btnPlus')
var btnMoins = document.querySelectorAll('.btnMoins')
var fatrash = document.querySelectorAll('.fa-trash')
var faheart = document.querySelectorAll('.fa-heart')
// var fatrash = document.getElementsByClassName('fa-trash')
console.log(fatrash)
// for (let i = 0; i < btnPlus.length; i++) {
    
//     btnPlus[i].addEventListener('click',function(){
//         btnPlus[i].previousElementSibling.innerText++
//         SommeTotal()
//     })
// }
for (let i = 0; i < btnMoins.length; i++) {
    btnMoins[i].addEventListener('click',function(){
        if (btnMoins[i].nextElementSibling.innerText>0) {
            btnMoins[i].nextElementSibling.innerText--
            SommeTotal()
        }
    })    
}
for (let i = 0; i < fatrash.length; i++) {
    fatrash[i].addEventListener('click',function(){
        fatrash[i].parentElement.remove()
        SommeTotal()
        console.log(fatrash)
    })
    
}
for (let i = 0; i < faheart.length; i++) {
    
    faheart[i].addEventListener('click',function(){
        faheart[i].classList.toggle('layka')
    })
    
}
function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#totalAmount')
    var stal = 0
    
    for (let i = 0; i < price.length; i++) {
        
        stal = stal + price[i].innerText * qte[i].innerText
        
    }
    total.innerText = stal
}