<template>
  <a :href="href" :class="'button d-inline-block ' + classNames">{{text}}</a>
</template>

<script>
export default {
  props : {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    newTab: {
      type: Boolean,
      default: false
    },
    classNames: {
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
  .button {
    padding: 0.5rem;
    border: solid 2px #000;
    box-shadow: 4px 4px #000;
  }
  .button:hover {
    border: solid 2px #000;
    box-shadow: 2px 2px #000;
  }
  .button:active {
    box-shadow: 0px 0px #000;
  }
</style>
