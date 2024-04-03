<template>
  <section class="honor-section">
    <div class="content-div">
      <h1>
        The Recipe of Our <br />
        Success
      </h1>

      <section class="text-section-flexbox">
        <div>
          <p>Our success lies in our dedication to quality and attention to detail.</p>
          <p>
            We source only the finest ingredients and prepare them with care to being out their
            natural flavours.
          </p>
        </div>

        <div>
          <p>Come and taste the difference that sets apart from the rest.</p>
          <p>
            Our chefs work tirellessly to craft each dish to perfection, ensurig that every bite is
            delightfull experience.
          </p>
        </div>
      </section>

      <section class="img-section-grid">
        <img
          src="https://img.freepik.com/premium-photo/vertical-shot-professional-cook-while-preparing-food_665346-25774.jpg"
          alt="wok-fry throw"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZHONnpVVSYZ0nbMjUJMieVCzEyvYDhknRmHs62QOJQ&s"
          alt="wok-fry fire"
        />
      </section>

      <section class="logo-section">
        <h2 class="logo">LOGO</h2>
      </section>
    </div>
  </section>
</template>

<style scoped>
.honor-section {
  height: 100dvh;
  width: 100dvw;

  display: grid;
  place-items: center;
}
.content-div {
  height: 65%;
  width: 75%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  gap: 2em;

  h1 {
    font-weight: 300;
    font-size: 3rem;
  }
}

.text-section-flexbox {
  display: flex;
  gap: 1em;

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
}
.text-span {
  margin-bottom: 1em;
}

.img-section-grid {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  img {
    width: 100%;
    height: 100%;
  }
}

.logo-section {
  position: relative;

  .logo {
    position: absolute;
    bottom: 5%;
    right: 0;

    display: inline;
    font-weight: 700;
    font-size: 2.5rem;
  }
}
</style>
