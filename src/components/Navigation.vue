<template>
  <nav class="navigation" :class="navigationClassName">
    <!-- <router-link>Home</router-link>
    <router-link>Menu</router-link>
    <router-link>Book a table</router-link> -->

    <h1 class="logo">LOGO</h1>

    <div>
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a class="book-button" @click="bookingEventHandler">Book a table</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const scrollY = ref(0)
const prevScrollY = ref(0)
const navigationClassName = ref('')

onMounted(() => {
  window.addEventListener('scroll', scrollEvent)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent)
})

function scrollEvent() {
  scrollY.value = window.scrollY

  if (scrollY.value > prevScrollY.value) {
    console.log('scrolled')
    navigationClassName.value = 'scrolled'
  } else {
    console.log('not scrolled')
    navigationClassName.value = 'not-scrolled'
  }

  prevScrollY.value = scrollY.value
}

function bookingEventHandler() {
  window.scrollTo(0, document.body.scrollHeight)
}
</script>

<style scoped>
.navigation {
  transition: all 200ms ease-in-out;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  height: 10dvh;
  width: 100dvw;
  background-color: var(--primary-white);
  border-bottom: 1px solid var(--primary-black);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;

    font-size: 1.25rem;
  }

  a {
    font-weight: 500;
  }
}
.navigation.scrolled {
  top: -10dvh;
}

.logo {
  font-size: 2rem;
}

.book-button {
  border: 1px solid var(--primary-black);
  padding: 2% 5%;

  &:hover {
    cursor: pointer;
  }
}
</style>
