<template>
  <div class="nav justify-content-center">
    <router-link class="nav-link" :to="{ name: 'Hero' }">Hero</router-link>
    <router-link class="nav-link" :to="{ name: 'Calculator' }"
      >Calculator</router-link
    >
    <router-link class="nav-link" :to="{ name: 'Object Dector' }"
      >Object Dector</router-link
    >
    <router-link class="nav-link" :to="{ name: 'Check Weather' }"
      >Check Weather</router-link
    >
    <router-link class="nav-link" :to="{ name: 'Live Stream' }"
      >Stream Video</router-link
    >
  </div>
  <router-view />
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

.nav {
  padding: 30px;
  background-color: rgb(83, 166, 243);
  margin-bottom: 1rem;
  a {
    font-weight: bold;
    color: #c9c9c9;
    margin: auto 10px;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
