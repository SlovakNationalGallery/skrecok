<template>
  <div class="share-container d-block text-center p-2 mt-5">
    <p 
      v-if="paragraph"
      v-html="paragraph" 
      class="mx-2 measure"
      :class="{
        'd-none d-md-inline-block': paragraphSm,
        'd-inline-block': !paragraphSm,
      }"
    ></p>
    <p 
      v-if="paragraphSm"
      v-html="paragraphSm" 
      class="mx-2 measure"
      :class="{
        'd-inline d-md-none': paragraph,
        'd-inline-block': !paragraph,
      }"
    ></p>
    <div class="social-links d-inline-block d-md-block m-2">
      <a 
        v-if="facebook" 
        :href="'https://www.facebook.com/sharer/sharer.php?u='+facebook"
        target="_blank" 
        class="m-2" 
      >
        <i class="fab fa-facebook-f"></i>
      </a>
      <a
        v-if="twitter"
        :href="'https://twitter.com/home?status='+twitter"
        target="_blank" 
        class="m-2" 
      >
        <i class="fab fa-twitter"></i>
      </a>
      <a
        v-if="email"
        :href="'mailto:?subject='+email.subject+'&amp;body='+email.body"
        target="_blank" 
        class="m-2" 
      >
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    paragraph: {
      type: String,
    },
    paragraphSm: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    email: {
      type: Object,
    },
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css', integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay', crossorigin: 'anonymous' },
      ]
    }
  }
}
</script>

<style scoped>
  .social-links a {
    border-bottom: none;
    text-decoration: none;
  }
</style>
