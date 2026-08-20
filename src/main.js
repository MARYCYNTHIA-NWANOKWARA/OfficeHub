import './style.css'
import products from './products';



let productCards = ''

  products.forEach((product) =>{
    productCards += `
     <div class="product-card max-w-74  shrink-0 bg-white shadow-lg rounded-xl ">

        <img src="${product.image}" alt="${product.name}" class=" w-full h-64 object-cover rounded-xl ">

       <div class="text-center px-2 ">
        <h3 class="mt-4 text-lg font-bold text-pink-900">${product.name}</h3>
        <h3 class="mt-2 text-gray-800">${product.description}</h3>
        <h3 class="text-pink-900 font-bold text-xl">$${product.price}</h3>
        <button class="px-4 py-2 my-2 bg-pink-900 text-white hover:bg-pink-800 rounded-sm shadow-md active:bg-pink-950 cursor-pointer">Add To Cart</button>
       </div>

      </div>
    `
  })





document.querySelector('#app').innerHTML = `

       
  <nav id="navbar" class="bg-white p-4 sticky top-0 z-50 shadow-md transition-all">

       <div class= "w-full flex  justify-between h-auto">

       <div class="flex items-center gap-3 lg:hidden text-xl">
         <i class="fa-solid fa-bars"></i>
       </div>

         <div class="flex items-center gap-2 text-pink-900 font-bold text-xl">
           <i class="fa-solid fa-briefcase"></i>
           <a href="#home" class="">OfficeHub</a>
         </div>

         <div class="hidden lg:flex gap-4 font-bold text-gray-600 transition-all items-center">
            <a class="hover:text-pink-900" href="#home">Home</a>
            <a class="hover:text-pink-900" href="#shop">Shop</a>
            <a class="hover:text-pink-900" href="#reviews">Reviews</a>
            <a class="hover:text-pink-900" href="#subscribe">Subscribe</a>
            <a class="hover:text-pink-900" href="#about">About Us</a>
         </div>

         <div class="flex gap-4  items-center">
         <i class="fa-solid fa-magnifying-glass cursor-pointer"></i>
         <i class="fa-solid fa-shopping-cart cursor-pointer"></i>
         </div>

         </div>
       </nav>

       <section id="home" class="relative h-96 bg-[url('/hero-bg.jpg')] w-full bg-cover bg-center bg-no-repeat items-center">

       <div class="absolute inset-0 bg-black/50 text-white flex flex-col items-center h-96 justify-center ">

          <div class="relative text-center w-[70%] mx-auto >

          <div class="">
           <p class="font-bold text-2xl md:text-4xl lg:text-6xl mb-6">Make Your Workplace Work For You</p>
           <p  class="mb-4 text-gray-200 font-bold text-lg">Discover smart essentials to make your workday more productive and your workplace more efficient.</p>
           </div>
           
           <div class="sm:col md:flex justify-center gap-2 font-bold ">
           <button class="border-pink-900 px-4 py-2 rounded-sm mt-6 bg-pink-900 text-gray-200 hover:cursor-pointer hover:bg-pink-800">Shop Now</button>
           <button class="border-2 border-pink-900 px-4 py-2 rounded-sm mt-6 bg-transparent text-gray-200 hover:cursor-pointer  hover:bg-pink-800 hover:border-pink-800 ">Learn More</button>
           </div>

          </div> 
        </div>

       </section>

       
       <section id="shop" class="bg-gray-200 h-auto mt-24 py-4 rounded-sm relative"> 
         
            <h1 class="text-center font-bold text-3xl mb-8">
            Our Products
            </h1>
          
             <div class="relative">
             <div class="flex justify-between gap-3 ">

             <button id="prevBtn" class="text-white bg-pink-900 w-10 h-10 rounded-full text-2xl hover:bg-pink-700 hover:text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed font-bold absolute top-1/2 left-0 z-10 -translate-y-1/2 shadow-lg"> < </button>
             <button id="nextBtn" class="text-white bg-pink-900 w-10 h-10 rounded-full text-2xl hover:bg-pink-700 hover:text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed font-bold absolute top-1/2 right-0 z-10 -translate-y-1/2 shadow-lg"> > </button>

             </div>

            <div id="productContainer" class="flex gap-6 overflow-x-auto scroll-smooth px-1 pb-4 hide-scrollbar w-full relative">
              ${productCards}
            </div>

            </div>
       </section>

`

       
const productContainer= document.getElementById("productContainer")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")


setTimeout( () =>{
  const scrollAmount = () => productContainer.clientWidth

  function updateButtons(){
  prevBtn.disabled = productContainer.scrollLeft <= 0
    nextBtn.disabled =
     productContainer.scrollLeft + productContainer.clientWidth >= productContainer.scrollWidth - 5
  }


  nextBtn.addEventListener("click", () =>{
  productContainer.scrollBy({
    left:scrollAmount(),
    behavior:"smooth",
  })
})

prevBtn.addEventListener("click", ()=>{
  productContainer.scrollBy({
    left: -scrollAmount(),
    behavior:"smooth",
  })
})

productContainer.addEventListener("scroll" , updateButtons)
 updateButtons();
  
},100)






