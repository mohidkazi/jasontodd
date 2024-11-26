<template>
  <div class="sticky top-0 z-50 toolbar bg-gray-100 bg-opacity-10 backdrop-blur py-3 pl-12  flex items-center px-4 shadow-sm">
    <!-- Window Control Buttons -->
    <div class="flex space-x-2">
      <!-- Close Button -->
      <button
        class="h-3.5 w-3.5 bg-red-500 rounded-full border border-gray-300 hover:bg-red-600 transition"
        aria-label="Close"
      ></button>
      <!-- Minimize Button -->
      <button
        class="h-3.5 w-3.5 bg-yellow-500 rounded-full border border-gray-300 hover:bg-yellow-600 transition"
        aria-label="Minimize"
      ></button>
      <!-- Fullscreen Button -->
      <button
        class="h-3.5 w-3.5 bg-green-500 rounded-full border border-gray-300 hover:bg-green-600 transition"
        aria-label="Fullscreen"
      ></button>
    </div>

    <!-- Toolbar Title (Optional) -->
    <div class="flex-grow text-center flex justify-center text-gray-600 dark:text-gray-300 text-sm">
      <img src="/public/my-logo.png" height="35" width="35" alt="m" class="">
    </div>
  </div>
</template>

