import './style.css'



document.querySelector('#app').innerHTML = `
<body>
       
  <nav id="navbar" class="bg-white p-4 sticky shadow-md transition-all">

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
       </body>
`



