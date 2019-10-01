<template lang="pug">
  #nav.navbar(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        .navbar-item
          router-link.navbar-item(to="/")
            h1.title.is-4 kx.
        a.navbar-burger.burger(@click="hamburger" :class="{ 'is-active': enabledMobile }" ref="hamburger" role="button" aria-label="menu" aria-expanded="false" data-target="nav-menu")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #nav-menu.navbar-menu(:class="{ 'is-active': enabledMobile }" ref="navmenu")
        .navbar-end
          router-link.navbar-item(to="/") Home
          router-link.navbar-item(to="/about") About
          router-link.navbar-item(to="/blog") Blog
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
      document.addEventListener("click", this.hideOnClickOutside)
    }
  }

  private hideOnClickOutside(event: MouseEvent) {
    const navmeu = this.$refs.navmenu as HTMLElement
    const hamburger = this.$refs.hamburger as HTMLElement
    const target = event.target
    if (!navmeu.contains(target as Node) && !hamburger.contains(target as Node)) {
      this.enabledMobile = false
      document.removeEventListener("click", this.hideOnClickOutside)
    }
  }
}
</script>

<style lang="sass">
#nav
  .container
    padding: 1rem 2rem 0 2rem

  .navbar-menu.is-active
    position: absolute
    right: 2rem
    padding: 0.5rem 1rem

  a
    user-select: none
</style>
