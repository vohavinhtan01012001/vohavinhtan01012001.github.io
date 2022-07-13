//Hàm xử lý hiên menu trên điện thoại
var menu = document.querySelector('.header__menu-list')
var body = document.querySelector('.body__cover')
function inMenu() {
    menu.style.display = "block"
    body.style.display = "block"
}
//Hàm xử lý đóng menu trong màn hình điện thoại
var close = document.querySelector('.header__menu-list')
function closeMenu() {
    close.style.display = "none"
    body.style.display = "none"
}
//Xử lí hiện menu con trong shop
var shop = document.querySelector('.header__menu-list2')
function menuShop() {
    if (shop.classList.length == 1) {
        shop.classList.add("addDisplay")
    }
    else {
        shop.classList.remove("addDisplay")
    }
}

/* console.log(shop.classList) */
//Xử lý thanh trượt boxShadow
document.addEventListener("DOMContentLoaded", function () {
    var navbarList = document.querySelector('.header__navbar-list')
    console.log(navbarList)
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 50) {
            /* navbarList.style.boxShadow = "0 14px 20px -17px rgb(0 0 0 / 75%)";
            navbarList.style.borderBottom = "1px solid rgb(223, 221, 221)"; */
            navbarList.classList.add("addBoxShadowBottom");
        }
        else {
            /* navbarList.style.boxShadow = "";
            navbarList.style.borderBottom = ""; */
            navbarList.classList.remove("addBoxShadowBottom");
        }
    })
})
