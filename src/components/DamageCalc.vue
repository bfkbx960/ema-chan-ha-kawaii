<template>
  <div class="damage-calc">
    <p>行動：{{ name }}</p>
    <p>最大ダメージ：{{ max }}</p>
    <p>最小ダメージ：{{ min }}</p>
  </div>
</template>

<script>
export default {
  name: 'DamageCalc',
  props: {
    atk: {
      type: Number,
      required: true
    },
    def: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    magnification: {
      type: Number,
      required: true
    }
  },
  computed: {
    base() {
      return (this.atk / 2) * this.magnification - this.def / 4
    },
    range() {
      return this.base / 16 + 1
    },
    max() {
      const damage = Math.floor(this.base + this.range)
      return damage > 0 ? damage : 1
    },
    min() {
      const damage = Math.floor(this.base - this.range)
      return damage > 0 ? damage : 0
    }
  }
}
</script>

<style scoped>
.damage-calc p {
  margin: 0;
}
</style>
