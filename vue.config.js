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
    /* restaurant: {
      entry: "./src/pages/restaurant/main.js",
      template: "public/index.html",
      title: "cadastro",
      chunks: ["chunk-vendors", "chunk-common", "restaurant"],
    },*/
    food: {
      entry: "./src/pages/food/main.js",
      template: "public/index.html",
      title: "client",
      chunks: ["chunk-vendors", "chunk-common", "food"],
    },
  },
};

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
