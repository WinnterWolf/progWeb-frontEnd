/* eslint-disable */
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
      <div class="left">
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
      </div>
      <div class="right">
        <div class="box_details">
          <div class="details">
            <div class="detailsWriting">
              <h2>Ver Detalhes</h2>
            </div>
          </div>
          <div class="details">
            <div class="detailsWriting">
              <h2>Ver Detalhes</h2>
            </div>
          </div>
          <div class="details">
            <div class="detailsWriting">
              <h2>Ver Detalhes</h2>
            </div>
          </div>
          <div class="details">
            <div class="detailsWriting">
              <h2>Ver Detalhes</h2>
            </div>
          </div>
          <div class="details">
            <div class="detailsWriting">
              <h2>Ver Detalhes</h2>
            </div>
          </div>
          <div class="details">
            <div class="detailsWriting">
              <h2>Ver Detalhes</h2>
            </div>
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
  align-items: center;
  justify-content: space-between;
  width: 113rem;
  column-gap: 40px;
}

.box__categories {
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 3rem 0rem;
}

.box__categories div {
  background: #a0a0a0;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 12rem;
  border-radius: 1.5rem;
  margin: 2rem 4rem;
}

.right {
  width: 696px;
  height: 880px;
}

.left {
  width: 696px;
  height: 880px;
}

.dishes {
  width: 616px;
  height: 167px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dishes img {
  margin: 3px 30px 3px 30px;
  display: block;
}

.dishesWriting {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.box_details {
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  margin: 3rem 0rem;
  width: 696px;
  height: 820px;
}

.details {
  width: 616px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 4rem;
}

.detailsWriting {
  width: 243px;
  height: 63px;
  left: 946px;
  top: 518px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #808310;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
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
