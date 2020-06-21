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
      return Math.floor(this.base + this.range)
    },
    min() {
      return Math.floor(this.base - this.range)
    }
  }
}
</script>

<style scoped>
.damage-calc p {
  margin: 0;
}
</style>
