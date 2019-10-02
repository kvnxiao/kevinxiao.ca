<template lang="pug">
  #app
    section.hero.is-fullheight
      .hero-head
        nav-bar
      .hero-body
        router-view
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import NavBar from "@/components/NavBar.vue"

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
$tooltip-background-color: #F5F5F5

@import "~bulma/bulma"
@import "~bulma-tooltip/src/sass/index.sass"
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300')

#app
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
</style>
