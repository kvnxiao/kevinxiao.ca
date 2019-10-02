<template lang="pug">
  .home.container.has-text-black-ter
    p.is-size-3 Hello!
    p.is-size-2 I'm
      b  Kevin Xiao
      | .
    p.subtitle I am a
      vue-typer(:text="[' software engineer', ' PC enthusiast', 'n avid adventurer', ' foodie']")
      | .
    button.button.is-light Explore my projects
    .social
      a.button.is-medium.is-white(href="https://www.linkedin.com/in/kvnxiao/" target="_blank")
        span.icon
          fa(:icon="['fab', 'linkedin-in']")
      a.button.is-medium.is-white(href="https://github.com/kvnxiao/" target="_blank")
        span.icon
          fa(:icon="['fab', 'github-alt']")
      button.button.is-medium.is-white.tooltip.is-tooltip-bottom(@click="copyDiscord" data-tooltip="alpha;helix#1222 (copy to clipboard)")
        span.icon
          fa(:icon="['fab', 'discord']")
      a.button.is-medium.is-white(href="https://steamcommunity.com/id/kvnxiao/" target="_blank")
        span.icon
          fa(:icon="['fab', 'steam-symbol']")
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import NavBar from "@/components/NavBar.vue"
import { VueTyper } from "vue-typer"

@Component({
  components: {
    NavBar,
    VueTyper,
  },
})
export default class Home extends Vue {
  private copyDiscord() {
    const temp = document.createElement("textarea")
    temp.value = "alpha;helix#1222"
    temp.style.width = "0px"
    temp.style.height = "0px"
    document.body.appendChild(temp)
    temp.focus()
    temp.select()

    document.execCommand("copy")
    document.body.removeChild(temp)
  }
}
</script>

<style lang="sass" scoped>
.container
  margin-bottom: 5rem

.social
  padding: 1rem
  a, button
    width: 3rem
    height: 3rem
    margin: 0 0.25rem
    border-radius: 50%
    &::before
      color: #363636
</style>
