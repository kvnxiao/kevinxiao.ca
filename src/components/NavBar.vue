<template lang="pug">
  #nav.navbar(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        .navbar-item
          router-link.navbar-item(to="/")
            h1.title.is-4.has-text-black-ter kx.
        a.navbar-burger.burger(@click="hamburger" :class="{ 'is-active': enabledMobile }" ref="hamburger" role="button" aria-label="menu" aria-expanded="false" data-target="nav-menu")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #nav-menu.navbar-menu(:class="{ 'is-active': enabledMobile }" ref="navmenu")
        .navbar-end
          router-link.navbar-item(to="/") Home
          router-link.navbar-item(to="/projects") Projects
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class NavBar extends Vue {
  private enabledMobile: boolean = false

  private hamburger(event: MouseEvent) {
    event.preventDefault()
    this.enabledMobile = !this.enabledMobile
    if (this.enabledMobile) {
      document.addEventListener("click", this.hideListener)
    }
  }

  private hideListener(event: MouseEvent) {
    const navmeu = this.$refs.navmenu as HTMLElement
    const hamburger = this.$refs.hamburger as HTMLElement
    const target = event.target
    if (!navmeu.contains(target as Node) && !hamburger.contains(target as Node)) {
      this.enabledMobile = false
      document.removeEventListener("click", this.hideListener)
    }
  }
}
</script>

<style lang="sass">
#nav
  .container
    padding: 2rem 2rem 0 2rem

  .navbar-menu.is-active
    position: absolute
    right: 2rem
    padding: 0.5rem 1rem

  a
    user-select: none
    &.router-link-exact-active
      color: #0A0A0A
</style>
