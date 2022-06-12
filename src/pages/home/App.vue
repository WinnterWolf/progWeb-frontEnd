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
      <input type="text" class="search" placeholder="Pesquise Aqui" />
      <div class="carousel">
        <button class="left"></button>

        <ul class="balls__carousel">
          <li class="active"></li>
          <li></li>
          <li></li>
        </ul>

        <button class="right"></button>
      </div>
      <div class="categories">
        <div class="box__categories">
          <div class="cat1"><h2>Categoria 1</h2></div>
          <div class="cat2"><h2>Categoria 2</h2></div>
          <div class="cat3"><h2>Categoria 3</h2></div>
          <div class="cat4"><h2>Categoria 4</h2></div>
          <div class="cat5"><h2>Categoria 5</h2></div>
          <div class="cat6"><h2>Categoria 6</h2></div>
        </div>
      </div>
      <div class="partners">
        <h2>Parceiros no 'Nossa marca'</h2>
        <div class="box__partners">
          <div class="partner1"><h3>Parceiro 1</h3></div>
          <div class="partner1"><h3>Parceiro 2</h3></div>
          <div class="partner1"><h3>Parceiro 3</h3></div>
          <div class="partner1"><h3>Parceiro 4</h3></div>
          <div class="partner1"><h3>Parceiro 5</h3></div>
          <div class="partner1"><h3>Parceiro 6</h3></div>
          <div class="partner1"><h3>Parceiro 7</h3></div>
          <div class="partner1"><h3>Parceiro 8</h3></div>
          <div class="partner1"><h3>Parceiro 9</h3></div>
          <div class="partner1"><h3>Parceiro 10</h3></div>
          <div class="partner1"><h3>Parceiro 11</h3></div>
          <div class="partner1"><h3>Parceiro 12</h3></div>
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

.carousel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 113rem;
  height: 50rem;
  background: #a0a0a0;
  border-radius: 1.5rem;
}

.carousel button {
  border-style: none;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;
  margin: 0px 2rem;
}

.balls__carousel {
  display: flex;
  column-gap: 1.5rem;
  margin-right: 4rem;
  list-style: none;
  margin-top: 45rem;
}

.balls__carousel li {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: #ffffff;
}

.balls__carousel .active {
  background: #333230;
}

.box__categories {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 10rem;
  margin: 3rem 0rem;
}

.box__categories div {
  background: #a0a0a0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 22rem;
  height: 12rem;
  border-radius: 1.5rem;
  margin: 2rem 0rem;
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
