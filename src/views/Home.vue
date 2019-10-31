<template lang="pug">
  .home.container.has-text-black-ter
    p.is-size-3 Hello!
    p.is-size-2 I'm
      b  Kevin Xiao
      | .
    p.subtitle I am&nbsp
      typer(:text="['a software engineer', 'a PC enthusiast', 'an avid adventurer', 'a foodie']")
      | .
    router-link.button.is-light(to="/projects") Explore my projects
    .social
      a.button.is-medium.is-white.has-tooltip-bottom(href="https://www.linkedin.com/in/kvnxiao/" data-tooltip="LinkedIn" aria-label="LinkedIn profile" target="_blank" rel="noopener")
        span.icon
          fa(:icon="['fab', 'linkedin-in']")
      a.button.is-medium.is-white.has-tooltip-bottom(href="https://github.com/kvnxiao/" data-tooltip="GitHub" aria-label="GitHub profile" target="_blank" rel="noopener")
        span.icon
          fa(:icon="['fab', 'github-alt']")
      button.button.is-medium.is-white.has-tooltip-bottom(@click="copyDiscord" data-tooltip="alpha;helix#1222 (copy to clipboard)" aria-label="Discord profile")
        span.icon
          fa(:icon="['fab', 'discord']")
      a.button.is-medium.is-white.has-tooltip-bottom(href="https://steamcommunity.com/id/kvnxiao/" data-tooltip="Steam" aria-label="Steam profile" target="_blank" rel="noopener")
        span.icon
          fa(:icon="['fab', 'steam-symbol']")
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import Typer from "@/components/Typer.vue"

@Component({
  components: {
    Typer,
  },
  metaInfo: {
    title: "Kevin Xiao - Home",
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
