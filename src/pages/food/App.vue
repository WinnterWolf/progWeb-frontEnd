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

    <main class="foodbox">
      <div class="left">
        <div class="div_img">
          <p>FOTO DO PRATO</p>
        </div>
        <div>
          <h5>DESCRIÇÃO DO PRATO</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia libero dicta ad possimus impedit dolor suscipit facilis,
            voluptate sapiente neque error debitis ex quidem tenetur officiis
            ipsum labore odit!
          </p>
        </div>
      </div>

      <div class="right">
        <div>
          <input type="text" placeholder="TITULO" />
          <input type="text" placeholder="VALOR" />
        </div>
        <div>
          <input type="number" placeholder="QTD" />
          <button>ADICIONAR QUANTIDADE</button>
        </div>
      </div>
      <button>CONFIRMAR</button>
    </main>

    <footer>
      <h4>Nossa marca</h4>
    </footer>
  </div>
</template>

<script></script>

<style>
/*
Configurar meu css para tela de restaurante - inserir ou editar 
*/
/* eslint-disable */
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
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

h5 {
  font-size: 1.5rem;
  line-height: 0.08rem;
}

a {
  color: #00919a;
  text-decoration: none;
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
  font-size: 20px;
}

.items__navbar h3 {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  margin-left: 10rem;
}

.right {
  display: flex;
  flex-direction: column;
}

.left {
  display: flex;
  flex-direction: column;
}

.div_img {
  width: 650px;
  height: 300px;
  background: #a0a0a0;
}

.div_img p {
  text-align: center;
  vertical-align: center;
}

.foodbox {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 1300px;
  height: 730px;
  background: #c4c4c4;
  border-radius: 10px;
}

footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #c4c4c4;

  font-size: 1.5rem;
  color: black;
  width: 144rem;
  max-height: 8rem;
}

footer h4 {
  margin-right: 5rem;
}
</style>
