<template>
  <div style="position: relative">
    <div id="morph-container">
      <span id="text1" ref="text1">{{ text1 }}</span>
      <span id="text2" ref="text2">{{ text2 }}</span>
    </div>

    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MorphingText',
  props: {
    texts: {
      type: Array,
      required: true,
    },
    morphTime: {
      type: Number,
      default: 1,
    },
    cooldownTime: {
      type: Number,
      default: 0.25,
    },
  },
  data() {
    return {
      textIndex: 8,
      time: new Date(),
      morph: 0,
      cooldown: 0.25,
      text1: '',
      text2: '',
    }
  },
  mounted() {
    this.text1 = this.texts[this.textIndex % this.texts.length]
    this.text2 = this.texts[(this.textIndex + 1) % this.texts.length]
    requestAnimationFrame(this.animate)
  },
  methods: {
    doMorph() {
      this.morph -= this.cooldown
      this.cooldown = 0
      let fraction = this.morph / this.morphTime
      if (fraction > 1) {
        this.cooldown = this.cooldownTime
        fraction = 1
      }
      this.setMorph(fraction)
    },
    setMorph(fraction) {
      let blurValue = Math.min(8 / fraction - 8, 100)
      if (this.$refs.text2) {
        this.$refs.text2.style.filter = `blur(${blurValue}px)`
        this.$refs.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`
      }

      fraction = 1 - fraction
      blurValue = Math.min(8 / fraction - 8, 100)
      if (this.$refs.text1) {
        this.$refs.text1.style.filter = `blur(${blurValue}px)`
        this.$refs.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`
      }

      this.text1 = this.texts[this.textIndex % this.texts.length]
      this.text2 = this.texts[(this.textIndex + 1) % this.texts.length]
    },
    doCooldown() {
      this.morph = 0
      if (this.$refs.text2) {
        this.$refs.text2.style.filter = ''
        this.$refs.text2.style.opacity = '100%'
      }
      if (this.$refs.text1) {
        this.$refs.text1.style.filter = ''
        this.$refs.text1.style.opacity = '0%'
      }
    },
    animate() {
      requestAnimationFrame(this.animate)

      let newTime = new Date()
      let shouldIncrementIndex = this.cooldown > 0
      let dt = (newTime - this.time) / 1000
      this.time = newTime

      this.cooldown -= dt

      if (this.cooldown <= 0) {
        if (shouldIncrementIndex) {
          this.textIndex++
        }
        this.doMorph()
      } else {
        this.doCooldown()
      }
    },
  },
}
</script>

<style scoped lang="scss">
#morph-container {
  position: absolute;
  filter: url(#threshold) blur(0.6px);

  #text1,
  #text2 {
    color: white;
    position: absolute;
    white-space: nowrap;
    font-size: 36pt;
    user-select: none;
    transform: translateY(-15px);
  }
}

#filters {
  height: 36pt;
}
</style>
