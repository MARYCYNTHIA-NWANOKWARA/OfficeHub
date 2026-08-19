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

       
       </body>
`



