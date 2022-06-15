module.exports = {
  pages: {
    home: {
      entry: './src/pages/home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'home']
    },
    login: {
      entry: './src/pages/login/main.js',
      template: 'public/index.html',
      title: 'Login',
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
    signupcompany: {
      entry: './src/pages/signupcompany/main.js',
      template: 'public/index.html',
      title: 'SignupCompany',
      chunks: ['chunk-vendors', 'chunk-common', 'signupcompany']
    },
    signupperson: {
      entry: './src/pages/signupperson/main.js',
      template: 'public/index.html',
      title: 'SignupPerson',
      chunks: ['chunk-vendors', 'chunk-common', 'signupperson']
    },
    cadastro: {
      entry: './src/pages/cadastro/main.js',
      template: 'public/index.html',
      title: 'cadastro',
      chunks: ['chunk-vendors', 'chunk-common', 'cadastro']
    },
    carrinho: {
      entry: './src/pages/carrinho/main.js',
      template: 'public/index.html',
      title: 'carrinho',
      chunks: ['chunk-vendors', 'chunk-common', 'carrinho']
    }
  }
}

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
