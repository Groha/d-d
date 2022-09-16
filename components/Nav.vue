<template>
  <nav class="fixed z-50 w-full">
    <div class="absolute inset-0 w-full h-full bg-black opacity-60 -z-[1]"></div>
    <div class="container flex justify-between items-center">
      <a href="/" class="flex-shrink-0 py-[16px]">
        <picture>
          <img src="~/assets/images/header_logo.svg" alt="" class="w-[129px] h-[69px] object-contain" />
        </picture>
      </a>
      <div>
        <ul class="flex flex-wrap leading-[119%]">
          <li class="mx-[34px] hover:text-red active">
            <a href="/">Home</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">About</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">Shippers</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">Transporation Services</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">Lease & Finance</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">News</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">Careers</a>
          </li>
          <li class="mx-[34px] hover:text-red">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active {
  @apply text-red font-bold relative after:block after:absolute after:bg-red after:w-[110%] after:h-[3px] after:bottom-[-41px] after:rounded-t-[2px];
}
</style>