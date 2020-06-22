<template>
  <div id="app">
    <div class="app-memo">
      <h2>エマちゃんはかわいいα（DQ11物理被ダメージ計算のようなもの）</h2>
      <p>
        データは投入中です。
      </p>
      <p>
        味方が使える特技で敵が使ってくるものについて、ダメージ倍率が不明です。
      </p>
      <p>
        私は解析できない&解析情報を知らないため、実測値で見るしかなさそうです。
      </p>
      <p>このくらいかなってのあれば教えてください。</p>
      <p>主Lv13守りの種1ユグノア＋竜のうろこ+ちからのゆびわ守備力:104</p>
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
      def: 104
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
.app-memo {
  margin-bottom: 12px;
}

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
