document.getElementById("promo-btn").addEventListener("click",function(){
    const coupon = document.getElementById("coupon-code");
    coupon.value = "SELL200";

})

function card(target){
    const listItem = target.childNodes[3].childNodes[3].innerText;
    const order= document.getElementById("order-list"); 
    let list = document.createElement("li");
    const ol = order.getElementsByTagName("li");
    list.innerText=ol.length+1+"."+listItem;
    order.appendChild(list);
}

