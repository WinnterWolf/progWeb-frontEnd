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
    <main class="cadastrobox">
      <form class="inputs">
        <input type="text" name="pass" placeholder="Nome Fantasia" />
        <input type="text" name="pass" id="pass" placeholder="Email" />
        <input type="text" name="pass" id="pass" placeholder="Endereco" />
        <input type="password" name="pass" id="pass" placeholder="Senha" />
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Repetir senha"
        />
        <input type="text" name="pass" id="pass5" placeholder="CNPJ" />
        <input type="text" name="pass" id="pass5" placeholder="Telefone" />
        <input type="text" name="pass" id="pass5" placeholder="Complemento" />
        <input type="submit" id="submit" value="CADASTRAR" />
      </form>
    </main>
    <footer>
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

.cadastrobox {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 44rem;
  height: 49rem;
  background: #a0a0a0;
  border-radius: 1rem;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
}

.inputs input {
  background: #c4c4c4;
  width: 30rem;
  height: 3rem;
  border-radius: 0.5rem;
  border-style: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: black;
}

.inputs #submit {
  background: #00919a;
  width: 20rem;
  height: 4rem;
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
