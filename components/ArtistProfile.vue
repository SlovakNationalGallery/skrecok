<template>
  <div class="row justify-content-center">
    <div class="col-sm-5 col-md-4 col-lg-3 mb-3">
      <img 
        :src="ytPlaylistItem.profileData.avatarSrc"
        class="avatar rounded-circle mr-3 mb-2 float-left float-sm-none" 
      >
      <div class="text-left text-sm-center">
        <h4 class="d-block d-sm-none">{{ytPlaylistItem.profileName}}</h4>
        <div v-html="ytPlaylistItem.profileData.subtitle"></div>
        <a :href="ytPlaylistItem.profileData.linkSrc">Viac info</a>
      </div>
    </div>
    <div class="col-sm-7 col-md-8 col-lg-7 text-left">
      <h4 class="d-none d-sm-block">{{ytPlaylistItem.profileName}}</h4>
      <p class="measure">{{ytPlaylistItem.profileText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props : ['ytPlaylistItem'],
}
</script>

<style lang="scss">
  img.avatar {
    background-color: #66ccf480;
    width: 122px;
    @media (min-width: 768px) {
      width: 100px;
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
</style>
