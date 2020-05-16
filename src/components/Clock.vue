<template>
  <div class="clock full" :class="target && 'show'">
    <div class="clock-item" v-show="!yes">
      <div class="clock-item-num">{{ restDay }}</div>
      <div class="clock-item-label">DAYS</div>
    </div>
    <div class="clock-item" v-show="!yes">
      <div class="clock-item-num">{{ restHour }}</div>
      <div class="clock-item-label">HOURS</div>
    </div>
    <div class="clock-item" v-show="!yes">
      <div class="clock-item-num">{{ restMinute }}</div>
      <div class="clock-item-label">MINUTES</div>
    </div>
    <div class="clock-item" v-show="!yes">
      <div class="clock-item-num">{{ restSecond }}</div>
      <div class="clock-item-label">SECONDS</div>
    </div>
    <div class="clock-item" v-show="!yes">
      <div class="clock-item-num">{{ restMSecond }}</div>
      <div class="clock-item-label">MILLISECONDS</div>
    </div>
    <div class="clock-item" v-show="yes">
      <div class="clock-item-num">Cyberpunk2077 is on sale!</div>
      <div class="clock-item-label">
        Cyberpunk2077 has saled for {{ yesDays }} days.
      </div>
    </div>
  </div>
</template>

<script>
import { complement } from "../js/utils";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365.25 * DAY;

export default {
  props: {
    target: Date
  },
  data() {
    return {
      restDay: "-----",
      restHour: "--",
      restMinute: "--",
      restSecond: "--",
      restMSecond: "---",
      // 超过预期寿命
      yes: false,
      yesDays: 0
    };
  },
  mounted() {
    setInterval(this.init, 19);
  },
  methods: {
    init() {
      if (!this.target) return;
      const end = this.target.valueOf();
      const now = Date.now();
      const rest = end - now;
      if (end > now) {
        this.yes = false;
        this.restDay = Math.floor(rest / DAY);
        this.restHour = complement(Math.floor((rest % DAY) / HOUR));
        this.restMinute = complement(Math.floor((rest % HOUR) / MINUTE));
        this.restSecond = complement(Math.floor((rest % MINUTE) / SECOND));
        this.restMSecond = complement(Math.floor(rest % SECOND), 3);
      } else {
        this.yes = true;
        this.yesDays = Math.ceil(-rest / DAY);
      }
    }
  }
};
</script>

<style lang="less">
.clock {
  padding-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fded07;

  &-item {
    text-align: center;
    padding: 20px;

    &-num {
      font-size: 120px;
    }

    &-label {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
