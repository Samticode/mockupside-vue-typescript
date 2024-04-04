<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMenuStore } from '../stores/menuStore'

const selectedMenuOption = ref()
const menuStore = useMenuStore()
const menuItems = menuStore.menuItems

onMounted(() => {
  selectedMenuOption.value = menuItems[0]
})

function menuClickHandler(e) {
  const menuOptions = document.querySelectorAll('.menu-options')
  menuOptions.forEach((options) => {
    options.classList.remove('focus')
  })
  e.target.classList.add('focus')

  if (e.target.textContent === 'STARTERS') {
    selectedMenuOption.value = menuItems[0]
  } else if (e.target.textContent === 'MAINS') {
    selectedMenuOption.value = menuItems[1]
  } else if (e.target.textContent === 'DESSERTS') {
    selectedMenuOption.value = menuItems[2]
  } else if (e.target.textContent === 'BEVERAGES') {
    selectedMenuOption.value = menuItems[3]
  }
}
</script>

<template>
  <section class="menu-section">
    <div class="inner-container">
      <section class="text-section">
        <h1>Menu</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut
        </p>
      </section>

      <section class="menu-container">
        <div>
          <p @click="menuClickHandler" class="menu-options focus">STARTERS</p>
          <p @click="menuClickHandler" class="menu-options">MAINS</p>
          <p @click="menuClickHandler" class="menu-options">DESSERTS</p>
          <p @click="menuClickHandler" class="menu-options">BEVERAGES</p>
        </div>
        <div class="menu-item-container">
          <div class="menuItem" v-for="(menu, index) in selectedMenuOption" :key="index">
            <h2>{{ menu.name }}</h2>
            <div>
              <p>{{ menu.description }}</p>
              <p>{{ menu.price }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.menu-section {
  height: 100dvh;
  width: 100dvw;

  display: grid;
  place-items: center;

  .inner-container {
    height: 80%;
    width: 80%;
  }
}

.text-section {
  width: 100%;
  height: 20%;
  margin-bottom: 3%;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.25rem;
    width: 50%;
  }
}

.menu-container {
  width: 100%;
  height: 77%;

  display: grid;
  grid-template-columns: 1fr 2fr;

  .menu-options {
    font-size: 0.9rem;
    margin-bottom: 1.5em;
    cursor: pointer;
    transition: all 400ms ease-in-out;
  }
  .menu-options.focus {
    font-weight: 500;
  }
  .menu-options.focus::before {
    content: '';
    display: inline-block;
    width: 10px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: var(--primary-black);
    margin-right: 0.5em;
  }

  .menu-item-container {
    display: flex;
    flex-direction: column;

    .menuItem {
      height: 100%;
      width: 100%;
      border-bottom: 1px dashed var(--primary-black);

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h2 {
        margin: 0.5em 0;
      }
      p {
        font-size: 0.9rem;
      }
    }

    .menuItem:last-child {
      border-bottom: none;
    }
  }
}
</style>
