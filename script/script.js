document.getElementById("promo-btn").addEventListener("click", function () {
    const coupon = document.getElementById("coupon-code");
    coupon.value = "SELL200";

})
let total = 0;
function card(target) {
    const listItem = target.childNodes[3].childNodes[3].innerText;
    const order = document.getElementById("order-list");
    let list = document.createElement("li");
    const ol = order.getElementsByTagName("li");
    list.innerText = ol.length + 1 + "." + " " + listItem;
    order.appendChild(list);
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = total + parseFloat(price);
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerHTML = total;
    const couponBtn = document.getElementById("coupon-btn");
    const purchaseBtn = document.getElementById("purchase-btn");

    couponBtn.addEventListener("click", function () {
        const couponCode = document.getElementById("coupon-code").value;
        const targetCoupon = "SELL200";

        if (couponCode === targetCoupon && total >=200) {
            couponBtn.style.cursor = "pointer";
            const discountPrice = document.getElementById("discount-price");
            const discount = total * 0.2;
            discountPrice.innerText = discount.toFixed(2);

            const totalAmount = document.getElementById("total-amount");
            const totalCost = total - discount;
            totalAmount.innerText = totalCost.toFixed(2);
            return;
        }
        
    });
    purchaseBtn.addEventListener("click", function () {
    if(total >0){
        purchaseBtn.style.cursor = "pointer";
        my_modal_1.showModal();
        const homeBtn = document.getElementById("home-btn");
        homeBtn.addEventListener("click",function(){
            window.location.href="index.html";
        })

        return;
    }
    
});
    if (total < 200) {
        couponBtn.style.cursor="not-allowed";
        
    }
    else{
        couponBtn.style.cursor="pointer";
    }

    if (total < 0) {
        purchaseBtn.style.cursor="not-allowed";
         
     }
     else{
         purchaseBtn.style.cursor="pointer";
     }

}

