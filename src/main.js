import './style.css'
import products from './products';
import reviews from './reviews';


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
         <i  class="fa-solid fa-bars"></i>
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
         
            <h1 class="text-center font-bold text-2xl md:text-3xl mb-8">
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


       <section id="reviews" class="bg-gray-200 h-auto mt-24 py-4 rounded-sm">
            <div class="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

              <h1 class=" font-bold  text-2xl md:text-3xl mb-4 mt-2">
              What Our Customers Say
              </h1>

              <p class="w-30 h-1 bg-pink-900 mx-auto mb-12"></p>

              <div class="relative">
              <div class=" overflow-hidden">

                <div id="reviewTrack" class="flex transition-transform duration-500 ease-in-out"
                </div>

              </div>

                <div id="reviewDots" class="flex justify-center gap-2 mt-8">
                </div>

            </div>

            </div>
       </section>


       <section id="subscribe" class="bg-pink-900 h-auto mt-24 py-2 px-6 ">

       <div class="text-center max-w-2xl mx-auto h-90 flex flex-col justify-center items-center">
         <h1 class="text-gray-100 text-2xl md:text-3xl lg:text-3xl font-bold">
           Subscribe To Our Newsletter
         </h1>
         <p class="text-gray-300 mt-6 text-sm md:text-base font-semibold">
           Get the latest update on new products, exclusive offers, and shopping tips delivered straight to your inbox.
         </p>
         
         <div class="grid gap-3 md:gap-0  md:flex  mt-6">
          <input id="emailInput" class =" px-14 md:px-20 py-2 text-left bg-white rounded-sm border-none text-md" placeholder="Enter Your Email address" type="email">
          <button id="emailSubmitBtn" class="w-full px-2 md:px-3 py-2 bg-black text-white font-bold cursor-pointer hover:bg-gray-900"> Subscribe</button >
         </div>

       </div>

       </section>


       <footer id="about" class="bg-gray-800 h-auto py-14 px-6">
         <div class="max-w-7xl mx-auto px-4">

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl">

        <div class="space-y-5">
 
           <div class="flex gap-2 text-gray-200 text-xl font-bold items-center">
              <i class="fa-solid fa-briefcase"></i>
              <h1 class=" pr-2">OfficeHub</h1>
           </div>
            <p class="text-gray-300 text-sm ">
             Discover smart essentials to make your workday more productive and your workplace more efficient
           </p>
           <ul class="flex text-white text-lg rounded-full bg-gray-800">
              <li class=""><i class="fa-brands fa-facebook"></i></li>
              <li class=""><i class="fa-brands fa-facebook-f"></i></li>
              <li class=""><i class="fa-brands fa-facebook"></i></li>
              <li class=""><i class="fab fa-x-twitter"></i></li>
            </ul>

        </div>

        <div class="space-y-5">

            <h1 class="text-gray-200 font-bold text-md">Quick Links</h1>
            <p class="w-10 h-0.5 -mt-3 bg-pink-900"></p>
            <div class="grid text-gray-300 gap-2 text-sm display-block w-fit">
              <a href="home" class="hover:text-gray-100">Home</a>
              <a href="shop" class="hover:text-gray-100">Shop</a>
              <a href="reviews" class="hover:text-gray-100">Reviews</a>
              <a href="about" class="hover:text-gray-100">About Us</a>
              <a href="subscribe" class="hover:text-gray-100">Subscribe</a>
            </div>

        </div>

        <div class"">

            <h1 class="text-gray-200 font-bold text-md">Customer Service</h1>
            <p class="w-10 h-0.5 mt-2 bg-pink-900"></p>
            <div class="grid gap-2 text-gray-300 mt-4 text-sm display-block w-fit">
              <a href="#" class="hover:text-gray-100">FAQs</a>
              <a href="#" class="hover:text-gray-100">Shipping Policy</a>
              <a href="#" class="hover:text-gray-100">Return Policy</a>
              <a href="#" class="hover:text-gray-100">Privacy Policy</a>
              <a href="#" class="hover:text-gray-100">Terms & Conditions</a>
            </div>

        </div>

        <div class="">
             
            <h1 class="text-gray-200 font-bold text-md">Contact Us</h2>
            <ul class="mt-6 grid gap-4 text-gray-300 text-sm  ">
              <li class=""><i class="fa-solid fa-location-dot mr-2"></i>123 Office Street, Abuja, FCT 900001</li>
              <li class=""><i class="fa-solid fa-phone mr-2"></i>+234 (800) 123-4567</li>
              <li class=""><i class="fa-solid fa-envelope mr-2"></i> info@officehub.com</li>
              <li class=""><i class="fa-solid fa-clock mr-2"></i>   Mon - Fri: 9AM - 6Pm</li>
            </ul>

        </div>

        </div>

         </div>

         <p class="text-center mt-14 text-gray-300 text-[10px] ">
         @ 2026 OfficeHub. All rights reserved
         </p>
       </footer>

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



/*REVIEWS PAGE FUNCTIONALITY*/
document.addEventListener("DOMContentLoaded", () =>{

  const reviewTrack = document.getElementById("reviewTrack");
  const reviewDots = document.getElementById("reviewDots");

  let currentReview = 0;

  function renderReviews(){
    reviewTrack.innerHTML = 
      reviews.map(r => `
        <div class="w-full flex shrink-0 px-4">

        <div class="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-xl  mx-auto">
          <img src="${r.image}" class="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-pink-900" alt="${r.name}">
          <p class="text-gray-700 italic mb-6">"${r.text}"</p>
          <h4 class="font-bold text-pink-900">${r.name}</h4>
          <p class="text-gray-600 text-sm">${r.role} </>
        </div>

        </div>
        `).join('');

      reviewDots.innerHTML = reviews.map((_,i) => `
          <button class="w-3 h-3 rounded-full transition ${i === 0 ? 'bg-pink-900' : 'bg-gray-300'}"></button>
      `).join('');

        [...reviewDots.children].forEach((dot, i) =>{
            dot.addEventListener("click", () => goToReview(i))
        })
  }

  function goToReview(index){
    currentReview = index;
    reviewTrack.style.transform = `translateX(-${index * 100}%)`;

    [...reviewDots.children].forEach((dot,i) =>{
      dot.className=`w-3 h-3 rounded-full transition ${i === index ? 'bg-pink-900' : 'bg-gray-300'}`
    })
  }

  setInterval(() =>{
    currentReview = (currentReview + 1) % reviews.length;
    goToReview(currentReview);
  },5000)

renderReviews();
})

/*SUBSCRIBE FUNCTIONALITY*/
const emailInput = document.getElementById("emailInput");
const emailSubmitBtn = document.getElementById("emailSubmitBtn")

emailSubmitBtn.onclick = () =>{
  const email = emailInput.value.trim();

  if(emailInput.value === ""){n
    window.alert("Please Enter An Email Address")
  }
  else if(!emailInput.value.includes("@")){
    window.alert("Please Enter a Valid Email Address")
  }
  else{
    window.alert("SUBSCRIBED ✅")
    emailInput.value = "";
  }
}






