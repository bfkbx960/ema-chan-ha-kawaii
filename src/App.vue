<template>
  <div id="app">
    <div class="app-memo">
      <p>メモ</p>
      <p>
        ダメージ倍率が分からない所があるため間違ってる可能性が結構あるので注意してください。
      </p>
      <p>主Lv13守りの種1ユグノア＋竜のうろこ+ちからのゆびわ：守備力104</p>
    </div>
    <div class="app-input">
      <div class="input">
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
      <div class="input">
        <label>守備力</label>
        <input type="number" v-model="def" />
      </div>
    </div>
    <div class="app-results" v-if="selectedMonster && def">
      <damage-calc
        class="results"
        v-for="number of selectedMonster.skill_numbers"
        :key="number"
        v-bind="calculationParameters(number)"
      />
    </div>
  </div>
</template>

<script>
import { MONSTERS } from '@/assets/data/monsters'
import { SKILLS } from '@/assets/data/skills'
import DamageCalc from '@/components/DamageCalc'

export default {
  name: 'App',
  components: { DamageCalc },
  data() {
    return {
      selectedMonster: null,
      def: 0
    }
  },
  computed: {
    monsters() {
      return MONSTERS
    }
  },
  methods: {
    calculationParameters(number) {
      return {
        ...SKILLS.find(s => s.no === number),
        atk: this.selectedMonster.atk,
        def: Number(this.def)
      }
    }
  }
}
</script>

<style>
.app-memo p {
  margin: 0;
}

.app-input {
  display: flex;
}

.input select {
  padding-bottom: 4px;
}

.results {
  margin-top: 16px;
}
</style>
