module.exports = {
  pages: {
    home: {
      entry: "./src/pages/home/main.js",
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "home"],
    },
    login: {
      entry: "./src/pages/login/main.js",
      template: "public/index.html",
      title: "Login",
      chunks: ["chunk-vendors", "chunk-common", "login"],
    },
    signupcompany: {
      entry: "./src/pages/signupcompany/main.js",
      template: "public/index.html",
      title: "SignupCompany",
      chunks: ["chunk-vendors", "chunk-common", "signupcompany"],
    },
    signupperson: {
      entry: "./src/pages/signupperson/main.js",
      template: "public/index.html",
      title: "SignupPerson",
      chunks: ["chunk-vendors", "chunk-common", "signupperson"],
    },
    searchstores: {
      entry: "./src/pages/searchstores/main.js",
      template: "public/index.html",
      title: "Busca",
      chunks: ["chunk-vendors", "chunk-common", "searchstores"],
    },
    menu: {
      entry: "./src/pages/menu/main.js",
      template: "public/index.html",
      title: "Cardapio",
      chunks: ["chunk-vendors", "chunk-common", "menu"],
    },
  },
};

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
