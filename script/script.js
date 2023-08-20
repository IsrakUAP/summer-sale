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
    if (total <= 200) {
        couponBtn.disabled = true;
        couponBtn.background = "black";

        return;
    }
    else {
        couponBtn.disabled = false;
        couponBtn.style.background = "#E527B2";
        couponBtn.style.cursor = "pointer"
        const discountPrice = document.getElementById("discount-price");
        const discount = total / 100 * 20;
        discountPrice.innerText = discount.toFixed(2);
        return;
    }
}

