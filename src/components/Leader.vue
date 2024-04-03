<template>
  <section class="main-section">
    <img
      src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?cs=srgb&dl=pexels-elevate-1267320.jpg&fm=jpg"
      alt="food"
    />
    <div class="leader-section">
      <div>
        <h1>Taste the World on Your Plate</h1>
        <p>Experience a world of flavors on your plate with our globally-inspired dishes.</p>
        <button>VIEW OUR MENU</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.main-section {
  height: 100dvh;
  width: 100dvw;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.leader-section {
  height: 100dvh;
  width: 100dvw;
  background-color: rgba(0, 0, 0, 0.382);
  display: grid;
  place-items: center;

  position: absolute;
  inset: 0;
  z-index: 90;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.75em;
  }
  h1 {
    font-size: 4.5rem;
    font-weight: 100;
    color: var(--primary-white);
  }
  p {
    font-size: 1.25rem;
    width: 50%;
    text-align: center;
    color: var(--primary-white);
  }
  button {
    padding: 1.5% 4%;
    background-color: transparent;
    border: solid 1px var(--primary-white);
    color: var(--primary-white);
  }
}
</style>
