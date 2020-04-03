<template>
  <img
    class="LoveChicken"
    alt="Love chicken"
    src="/love-chicken.jpg"
  >
</template>

<style>
.LoveChicken{
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
