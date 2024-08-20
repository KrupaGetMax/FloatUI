import React from 'react'

const NewCard = () => {
  return (
   <>
   <div class="py-12 dark:bg-slate-900">

<div class="max-w-screen-md mx-auto text-center">
    <h1 class="mb-4 text-3xl font-bold dark:text-white">What is <span class="text-indigo-600">Webby</span></h1>
    <p class="text-gray-500 dark:text-white">Webby is a PHP Framework built on top of Codeigniter 3 for easy PHP web application development using both HMVC and MVC patterns</p>
</div>

<div class="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
    <div class="relative md:w-5/12">
        <img class="rounded-2xl" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8d2Vic2l0ZXxlbnwwfDB8fHwxNzIwMjI4OTA3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
        <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h1 class="text-white mb-3 font-bold text-center uppercase lg:text-xl">Learn Webby</h1>
            <button class="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform  border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">Go to Docs</button>
        </div>
    </div>

     <div class="relative md:w-5/12">
        <img class="rounded-2xl" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxNZW50b3J8ZW58MHwwfHx8MTcyMDIyNzU1Nnww&ixlib=rb-4.0.3&q=80&w=1080"/>
        <div class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h1 class="text-white mb-3 font-bold text-center uppercase lg:text-xl">Visit Website</h1>
            <button class="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform bg-indigo-500 border-indigo-400 border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">Go to Website</button>
        </div>
    </div>
</div>
</div>
   </>
  )
}

export default NewCard