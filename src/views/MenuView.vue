<template>
  <section class="menu-section">
    <section class="first-part">
      <div class="text-div">
        <h1>Menu</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>

    <section class="second-part">
      <div class="menu-option-div">
        <h2>Starters</h2>
        <div class="menu-items-container">
          <div class="menu-item" v-for="(menu, index) of starters" :key="index">
            <img :src="menu.pic" alt="" />

            <div class="text-container">
              <section class="name-price-section">
                <h3>{{ menu.name }}</h3>
                <div></div>
                <p>{{ menu.price }}</p>
              </section>
              <p class="menu-description">{{ menu.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-option-div">
        <h2>Main Courses</h2>
        <div class="menu-items-container">
          <div class="menu-item" v-for="(menu, index) of mainCourse" :key="index">
            <img :src="menu.pic" alt="" />

            <div class="text-container">
              <section class="name-price-section">
                <h3>{{ menu.name }}</h3>
                <div></div>
                <p>{{ menu.price }}</p>
              </section>
              <p class="menu-description">{{ menu.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-option-div">
        <h2>Desserts</h2>
        <div class="menu-items-container">
          <div class="menu-item" v-for="(menu, index) of dessert" :key="index">
            <img :src="menu.pic" alt="" />

            <div class="text-container">
              <section class="name-price-section">
                <h3>{{ menu.name }}</h3>
                <div></div>
                <p>{{ menu.price }}</p>
              </section>
              <p class="menu-description">{{ menu.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMenuStore } from '../stores/menuStore'

const starters = ref()
const mainCourse = ref()
const dessert = ref()

const menuStore = useMenuStore()
const menuItems = menuStore.menuItems

onMounted(() => {
  starters.value = menuItems[0]
  mainCourse.value = menuItems[1]
  dessert.value = menuItems[2]
  console.log(starters.value)
})
</script>

<style scoped>
.menu-section {
  width: 100dvw;
}
.first-part {
  height: 70dvh;
  display: grid;
  place-items: center;

  .text-div {
    width: 80%;
    height: 80%;

    h1 {
      font-size: 4rem;
      margin: 3em 3.5dvw 0.25em;
    }
    p {
      font-size: 1.5rem;
      margin: 0 3.5dvw;
      width: 70%;
    }
  }
}
.second-part {
  width: 100dvw;
  min-height: 110dvh;
}
.menu-option-div {
  width: 75%;
  margin: 0 auto 5dvh;

  h2 {
    font-size: 2rem;
    padding: 0 0 1em;
  }

  .menu-items-container {
    width: 100%;
    height: 60dvh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2em;
    row-gap: 1em;
  }
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 75%;
    border-radius: 50%;
  }

  .text-container {
    height: 70%;
    width: 75%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .name-price-section {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;

      h3 {
        font-size: 1.25rem;
        width: auto;
        white-space: nowrap;
      }

      div {
        flex-grow: 1;
        height: 1px;
        border: 1px dashed var(--primary-black);
      }

      p {
        font-size: 0.95rem;
      }
    }

    .menu-description {
      height: 100%;
      font-size: 0.9rem;
    }
  }
}
</style>
