<template lang="pug">
  span.typer(:class="{ selected: isErasing }") {{ str }}
    span.cursor
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"

enum State {
  IDLE,
  TYPING,
  DONE_TYPING,
  ERASING,
}

@Component
export default class Typer extends Vue {
  @Prop()
  private text!: string[]
  @Prop({ default: 1000 })
  private readonly initDelay!: number
  @Prop({ default: 70 })
  private readonly delay!: number
  @Prop({ default: 500 })
  private readonly startDelay!: number
  @Prop({ default: 1000 })
  private readonly waitDelay!: number
  @Prop({ default: 300 })
  private readonly eraseDelay!: number

  private textIndex: number = 0
  private charIndex: number = 0

  private str: string = ""

  private intervalFunc: number = 0

  private state: State = State.IDLE

  public mounted() {
    this.textIndex = 0
    this.charIndex = 0
    this.state = State.IDLE
    for (const t of this.text) {
      if (!(t.length > 0)) {
        return
      }
    }
    setTimeout(this.startTyping, this.initDelay)
  }

  public beforeDestroy() {
    this.clearIntervalFunc()
  }

  private clearIntervalFunc() {
    clearInterval(this.intervalFunc)
    this.intervalFunc = 0
  }

  private startTyping() {
    this.state = State.IDLE
    setTimeout(() => {
      this.state = State.TYPING
      this.intervalFunc = setInterval(this.typeNextChar, this.delay)
    }, this.startDelay)
  }

  private typeNextChar() {
    const text = this.text[this.textIndex]
    const char = text[this.charIndex]
    this.str += char
    this.charIndex++
    if (this.charIndex >= text.length) {
      this.doneTyping()
    }
  }

  private doneTyping() {
    this.state = State.DONE_TYPING
    this.clearIntervalFunc()
    setTimeout(() => {
      this.erase()
    }, this.waitDelay)
  }

  private erase() {
    this.state = State.ERASING
    setTimeout(() => {
      this.str = ""
      this.nextText()
      this.$nextTick(this.startTyping)
    }, this.eraseDelay)
  }

  private nextText() {
    this.charIndex = 0
    this.textIndex = (this.textIndex + 1) % this.text.length
  }

  get isErasing(): boolean {
    return this.state === State.ERASING
  }
}
</script>

<style lang="sass" scoped>
@keyframes blink
  from, to
    background: transparent
  50%
    background: #4A4A4A

.typer
  position: relative

.typer
  .cursor
    display: inline-block
    position: absolute
    width: 2px
    background: #4A4A4A
    animation: 1s blink step-end infinite
    &::before
      content: "\200b"

.typer.selected
  .cursor
    left: 0

.typer.selected
  background: #B3D7FE
</style>
