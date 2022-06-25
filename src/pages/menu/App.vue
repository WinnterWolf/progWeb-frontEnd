<template>
  <div id="app">
    <header class="navbar">
      <img src="../../assets/logo.png" alt="logo" />
      <ul class="items__navbar">
        <li>
          <a href=""><h3>Contato</h3></a>
        </li>
        <li>
          <a href=""><h3>Nome</h3></a>
        </li>
        <li>
          <a href=""><h3>Carrinho</h3></a>
        </li>
      </ul>
    </header>
    <main class="mainContainer">
      <div class="categories">
        <div class="box__categories">
          <div class="dishes">
            <img src="../../assets/logo.png" alt="logo" />
            <div class="dishesWriting">
              <h2>Frango</h2>
              <p>Deliciosa pizza feita com molho artesanal</p>
            </div>
          </div>
          <div class="dishes">
            <img src="../../assets/logo.png" alt="logo" />
            <div class="dishesWriting">
              <h2>Calabresa</h2>
              <p>Deliciosa pizza feita com molho artesanal</p>
            </div>
          </div>
          <div class="dishes">
            <img src="../../assets/logo.png" alt="logo" />
            <div class="dishesWriting">
              <h2>Marguerita</h2>
              <p>Deliciosa pizza feita com molho artesanal</p>
            </div>
          </div>
          <div class="dishes">
            <img src="../../assets/logo.png" alt="logo" />
            <div class="dishesWriting">
              <h2>Quatro queijos</h2>
              <p>Deliciosa pizza feita com molho artesanal</p>
            </div>
          </div>
          <div class="dishes">
            <img src="../../assets/logo.png" alt="logo" />
            <div class="dishesWriting">
              <h2>Frango com catupiry</h2>
              <p>Deliciosa pizza feita com molho artesanal</p>
            </div>
          </div>
          <div class="dishes">
            <img src="../../assets/logo.png" alt="logo" />
            <div class="dishesWriting">
              <h2>Frango com Milho</h2>
              <p>Deliciosa pizza feita com molho artesanal</p>
            </div>
          </div>
        </div>
        <div class="prices"></div>
      </div>
    </main>
    <footer>
      <img src="../../assets/logo.png" alt="logo" />
      <h4>Nossa marca</h4>
    </footer>
  </div>
</template>

<script></script>

<style>
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.navbar {
  background: #333230;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 144rem;
  padding: 2rem 0px;
}
.items__navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
}
.items__navbar a {
  text-decoration: none;
  color: #ffffff;
  font-size: 2rem;
}

.items__navbar h3 {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  margin-left: 10rem;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 113rem;
}

.box__categories {
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 3rem 0rem;
  width: 50%;
}

.box__categories div {
  background: #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 12rem;
  border-radius: 1.5rem;
  margin: 2rem 4rem;
}

.dishes img {
  margin: 3px 30px 3px 30px;
  display: block;
}

.dishes {
  align-items: center;
  justify-content: center;
}

.dishesWriting {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* .dishesImages {
} */

footer {
  display: flex;
  column-gap: 3rem;
  align-items: center;

  background: #c4c4c4;

  font-size: 2rem;
  color: black;
  width: 144rem;
  padding: 2rem 0px;
}

footer img {
  margin-left: 15rem;
}
</style>
