document.getElementById("promo-btn").addEventListener("click",function(){
    const coupon = document.getElementById("coupon-code");
    coupon.value = "SELL200";

})
// const order= document.getElementById("order-list");
// let count=1;
// for (let i = 1; i <= 6; i++) {
//     var list = document.createElement("li");
//     order.appendChild(list);
// }

// const listItems = order.getElementsByTagName("li");

// document.getElementById("card-one").addEventListener("click",function(){
//     const itemOne= document.getElementById("item-one");
//     listItems[0].innerText=`${count}.${itemOne.innerText}`; 
//     count++;
// })
// document.getElementById("card-two").addEventListener("click",function(){
//     const itemTwo= document.getElementById("item-two");
//     listItems[1].innerText=`${count}.${itemTwo.innerText}`;
//     count++;
// })
// document.getElementById("card-three").addEventListener("click",function(){
//     const itemThree=document.getElementById("item-three");
//     listItems[2].innerText=`${count}.${itemThree.innerText}`;
//     count++;
    
// })
// document.getElementById("card-four").addEventListener("click",function(){
//     const itemFour=document.getElementById("item-four");
//     listItems[3].innerText=`${count}.${itemFour.innerText}`;
//     count++;
    
// })
// document.getElementById("card-five").addEventListener("click",function(){
//     const itemFive=document.getElementById("item-five");
//     listItems[4].innerText=`${count}.${itemFive.innerText}`;
//     count++;
    
// })
// document.getElementById("card-six").addEventListener("click",function(){
//     const itemSix=document.getElementById("item-six");
//     listItems[5].innerText=`${count}.${itemSix.innerText}`;
//     count++;
    
// })

function card(target){
    const listItem = target.childNodes[3].childNodes[3].innerText;
    const order= document.getElementById("order-list");
    let list = document.createElement("li");
    list.innerText=listItem;
    order.appendChild(list);
}

