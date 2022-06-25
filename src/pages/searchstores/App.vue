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
    <main class="searchContainer">
      <input type="text" class="search" placeholder="Pesquise Aqui" />
      <div class="partners">
        <h2>Resultados de (Pesquisa)</h2>
        <div class="box__partners">
          <div class="items__partners">
            <a href=""><h3>Restaurante 1</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 2</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 3</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 4</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 5</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 6</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 7</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 8</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 9</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 10</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 11</h3></a>
          </div>
          <div class="items__partners">
            <a href=""><h3>Restaurante 12</h3></a>
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

.searchContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 113rem;
}

.search {
  width: 80rem;
  height: 5rem;
  border-style: none;
  border-radius: 10px;
  padding-left: 1rem;
  font-size: 2rem;
  color: black;
  background: #3e3e3ea6;
  margin: 5rem 0rem;
}
.search::placeholder {
  color: black;
}

.partners {
  margin: 3rem 0rem;
}

.partners h2 {
  font-size: 3.2rem;
}

.box__partners {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 10rem;
}

.box__partners div {
  background: #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 24rem;
  height: 9rem;
  border-radius: 1.5rem;
  margin: 2rem 0rem;
}

.items__partners a {
  text-decoration: none;
  color: black;
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
