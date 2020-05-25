<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
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

  .container {
    text-align: center;
  }
  .bg-image {
    position: absolute;
    z-index: -1;
  }
  .bg-image.lamp {
    top: 0;
    left: 0;
  }
  .bg-image.carrots {
    width: 100%;
    max-width: 829px;
    right: 0;
    bottom: 0;

    @media (min-width: 576px) {
      width: 50%;
    }
  }

  a {
    color: #000;
    border-bottom: 1px solid #000;
    text-decoration: none;
  }
  a:hover {
    color: #000;
    border-bottom: none;
    text-decoration: none;
  }

  p.mx-pingpong {
    // add horizontal margin for ping pong hamsters
    @media (min-width: 768px) {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    @media (min-width: 1300px) {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .measure {
    max-width: 32em;
  }
  .bg-dark {
    background-color: #000 !important;
  }
  .bg-light {
    background-color: #F3E2BE !important;
  }
  .text-light {
    color: #F3E2BE !important;
  }
  .tilted {
    transform: rotate(-3deg);
  }
  .h-footer {
    height: calc(50vw * 0.59);
  }
  .position-sm-absolute {
    @media (min-width: 576px) {
      position: absolute;
    }
  }
  .bottom-0 {
    bottom: 0;
  }
  .disabled {
    cursor: not-allowed;
  }
  .disabled > a {
    color: currentColor;
    display: inline-block;  /* For IE11/ MS Edge bug */
    pointer-events: none;
    text-decoration: none;
    border-bottom: none;
  }
  .mt-7 {
    margin-top: 6rem !important;
  }
  :root {
    --bg-unit-height: 180px;
  }
  .bg-dots {
    background-image: url('/img/bg-dots.png');
    width: 100%;
    height: var(--bg-unit-height);
    position: absolute;
    z-index: -2;
  }
  .bg-dots-fadedown {
    background-image: url('/img/bg-dots-fadedown.png');
    width: 100%;
    height: var(--bg-unit-height);
    position: absolute;
    z-index: -2;
  }
  .top-0 {
    top: 0;
  }
  .top-1 {
    top: var(--bg-unit-height);
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-1 {
    bottom: var(--bg-unit-height);
  }
  .flip-vertical {
    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    filter: FlipV;
    -ms-filter: "FlipV";
  }

  .anim-pulse {
    animation: pulse 0.8s ease-out alternate infinite;
  }

  .worklist-img{
    max-width: 70px;
    align-items: center;
    margin: 2em auto;
    display: block;
  }
  @keyframes pulse {
    0% {
      transform: scale3d(1, 1, 1);
    }
    100% {
      transform: scale3d(1.2, 1.2, 1.2);
    }
  }

</style>
