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

    <main class="signupbox">
      <section>
        <form class="itens_navbar"></form>
        <header>
          <input type="text" id="inf" placeholder="Titulo" />
        </header>
        <img
          src="../../assets/logo.png"
          alt="comida"
          width="250"
          height="200"
        />
      </section>
      <input type="text" id="inf" placeholder="INFORMAÇÕES SOBRE O PRATO" />
      <aside>
        <input
          class="items_navbar"
          type="submit"
          id="submit"
          value="Confirmar"
        />
      </aside>
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
  font-size: 2rem;
}

.items__navbar h3 {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 500;
  margin-left: 10rem;
}

.signupbox {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100rem;
  height: 50rem;
  background: #a0a0a0;
  border-radius: 1rem;
}

.inputs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80rem;
  height: 35rem;
  flex-wrap: wrap;
  column-gap: 5rem;
}

.inputs input {
  background: #c4c4c4;
  width: 30rem;
  height: 3rem;
  border-radius: 0.5rem;
  border-style: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.8rem;
  color: black;
}

#category {
  width: 40rem;
  height: 5rem;
  text-align: center;
}

#submit {
  background: #00919a;
  width: 20rem;
  height: 7rem;
  border-radius: 0.5rem;
  border-style: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: white;
}

.inputs input::placeholder {
  color: black;
}

.loginbox div {
  text-align: center;
}

.loginbox div div {
  margin-top: 5rem;
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
