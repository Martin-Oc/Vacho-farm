const sidebar = document.querySelector(".sidebar-overlay")
const shopingCartBtn = document.querySelector(".shoping-cart-button")
const closeBtn = document.querySelector("#close-btn-cart");

shopingCartBtn.addEventListener("click",()=>{
    toggleCart()
})

closeBtn.addEventListener("click", function () {
    toggleCart()
  });

  function toggleCart(){
    sidebar.classList.toggle("show")
  }

  export default toggleCart