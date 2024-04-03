<template>
  <footer>
    <section>
      <div class="form-container">
        <h2>Book a table today</h2>
        <p>
          Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusnid tempor incididunt
          ut
        </p>

        <form>
          <div class="name-input-container">
            <label for="Name">Name</label><br />
            <input type="text" name="Name" />
          </div>
          <div>
            <label for="Email">Email</label><br />
            <input type="text" name="Email" />
          </div>
          <div>
            <label for="Phone">Phone</label><br />
            <input type="text" name="Phone" />
          </div>
          <div>
            <label for="Date">Date</label><br />
            <input type="text" name="Date" />
          </div>
          <div>
            <label for="Time">Time</label><br />
            <input type="text" name="Time" />
          </div>

          <button>BOOK TABLE</button>
        </form>
      </div>
      <div class="img-div"></div>
    </section>
  </footer>
</template>

<style scoped>
footer {
  height: 100dvh;
  width: 100dvw;

  display: grid;
  place-items: center;

  section {
    height: 85%;
    width: 85%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 2em;

    .form-container {
      height: 90%;
      width: 80%;

      h2 {
        font-size: 2rem;
        margin: 0;
        padding: 4dvh 3dvw;
      }
      p {
        font-size: 1.25rem;
        width: 90%;
        padding: 0 3dvw;
        margin-bottom: 6dvh;
      }

      form {
        width: 85%;
        height: 60%;
        margin: 0 auto;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 1fr);
        align-items: center;
        column-gap: 2em;
        gap: 1em;

        .name-input-container {
          grid-column: 1 / span 2;
        }

        input {
          width: 100%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid var(--primary-black);
          font-size: 1.25rem;

          &:focus {
            outline: none;
            border-bottom: 1px solid var(--primary-black);
          }
        }

        button {
          padding: 6% 0;
          margin-bottom: 4em;
          font-size: 1rem;

          border: 1px solid var(--primary-black);
          background-color: transparent;
        }
      }
    }

    .img-div {
      height: 100%;
      width: 100%;
      background-image: url('https://www.rollingstone.com/wp-content/uploads/2022/07/00173c.jpg?w=1581&h=1054&crop=1');
      background-position: center;
      background-size: cover;
    }
  }
}
</style>

<script setup lang="ts"></script>
