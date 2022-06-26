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
      <div class="backButton__mainContainer">
        <button>Voltar</button>
      </div>
      <div class="cartItens__mainContainer">
        <div class="left">
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
          <div class="itembox__cartItens">
            <div class="foodImg__cartItens"></div>
            <div class="foodDesc__cartItens">
              <h4>Nome prato</h4>
              <h4>Quantidade</h4>
              <h4>15.99</h4>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="checkoutBox__mainContainer">
            <div class="desc__checkoutBox">
              <h4>Total</h4>
              <h4>47,97</h4>
            </div>
            <button class="btn__checkoutBox">FINALIZAR</button>
          </div>
        </div>
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
  width: 113rem;
}

.backButton__mainContainer {
  width: 100%;
}

.backButton__mainContainer button {
  height: 5rem;
  width: 8rem;
  border-style: none;
  border-radius: 0.5rem;
  color: white;
  background: #808310;
  font-size: 1.5rem;
  margin: 5rem 0px;
}

.cartItens__mainContainer {
  display: flex;
  justify-content: space-between;
  background: #c4c4c4;
  width: 90rem;
  margin-bottom: 15rem;
}

.itembox__cartItens {
  margin: 5rem 1rem 5rem 3rem;
  display: flex;
  column-gap: 2rem;
}

.foodImg__cartItens {
  width: 27rem;
  height: 13rem;
  background: #a0a0a0;
}

h4 {
  font-size: 1.5rem;
}

.right {
  align-self: flex-end;
  margin: 6rem 3rem;
}

.checkoutBox__mainContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.desc__checkoutBox {
  display: flex;
  justify-content: center;
  column-gap: 5rem;
}

.btn__checkoutBox {
  width: 17rem;
  height: 9rem;
  background: #808310;
  border-style: none;
  border-radius: 0.5rem;
  color: white;
}

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
