<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@font-face {
  font-family: 'kakalikrucni';
  src: url('/fonts/kakalik-rucni.woff2') format('woff2'),
      url('/fonts/kakalik-rucni.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}

body {
  background-color: #F3E2BE;
  font-family: 'kakalikrucni', cursive, Arial, sans-serif;
  color: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
