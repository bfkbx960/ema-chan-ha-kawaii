<template>
  <div id="app">
    <div class="app-input">
      <div>
        <label>モンスター</label>
        <select v-model="selectedMonster">
          <option
            v-for="monster of monsters"
            :key="monster.no"
            :value="monster"
          >
            {{ monster.name }}
          </option>
        </select>
      </div>
      <div>
        <label>守備力</label>
        <input type="number" v-model="def" />
      </div>
    </div>
    <div class="app-results" v-if="selectedMonster && def">
      <div
        class="results"
        v-for="skillNo of selectedMonster.skills"
        :key="skillNo"
      >
        <p>行動：{{ skillName(skillNo) }}</p>
        <p>最大ダメージ：{{ maxDamage(skillNo) }}</p>
        <p>最小ダメージ：{{ minDamage(skillNo) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { MONSTERS } from '@/assets/data/monsters'
import { SKILLS } from '@/assets/data/skills'

export default {
  name: 'App',
  data() {
    return {
      selectedMonster: null,
      def: 0
    }
  },
  computed: {
    monsters() {
      return MONSTERS
    },
    baseDamage() {
      return (
        this.selectedMonster && this.selectedMonster.attack / 2 - this.def / 4
      )
    },
    damageRange() {
      return this.baseDamage / 16 + 1
    }
  },
  methods: {
    skillName(no) {
      return SKILLS.find(s => s.no === Number(no)).name
    },
    maxDamage(no) {
      return Math.floor(
        (this.baseDamage + this.damageRange) *
          SKILLS.find(s => s.no === Number(no)).magnification
      )
    },
    minDamage(no) {
      return Math.floor(
        (this.baseDamage - this.damageRange) *
          SKILLS.find(s => s.no === Number(no)).magnification
      )
    }
  }
}
</script>

<style>
.app-input {
  display: flex;
}

#app select {
  padding-bottom: 4px;
}

#app p {
  margin: 0;
}

.results {
  margin-top: 16px;
}
</style>
