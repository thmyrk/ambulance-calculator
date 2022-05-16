<script setup lang="ts">
import { ref } from "vue";
const hourlyRate1 = ref(12);
const hourlyRate2 = ref(14);
const hourlyRate3 = ref(12);
const hourlyRate4 = ref(14);
const minutesNumber1 = ref(0);
const minutesNumber2 = ref(0);
const hoursNumber1 = ref(0);
const hoursNumber2 = ref(0);

const calculateMinutes = (minutes: number, rate: number) =>
  minutes * (rate / 60);
const calculateHours = (hours: number, rate: number) => hours * rate;

const calculateResult = (
  minutes1: number,
  minutes2: number,
  hours1: number,
  hours2: number,
  rate1: number,
  rate2: number,
  rate3: number,
  rate4: number
) => {
  const result =
    calculateMinutes(minutes1, rate1) +
    calculateMinutes(minutes2, rate2) +
    calculateHours(hours1, rate3) +
    calculateHours(hours2, rate4);

  return result;
};
</script>

<template>
  <div class="calculator">
    <div class="row">
      <div class="which-days">Dni powszednie:</div>
    </div>
    <div class="row">
      Ilość minut
      <input
        type="number"
        v-model="minutesNumber1"
        placeholder="Ilość godzin"
      />
      po stawce godzinowej
      <input
        type="number"
        v-model="hourlyRate1"
        placeholder="Stawka godzinowa 1"
      />
      = {{ calculateMinutes(minutesNumber1, hourlyRate1).toFixed(2) }} zł
    </div>
    <div class="row">
      Ilość godzin
      <input type="number" v-model="hoursNumber1" placeholder="Ilość godzin" />
      po stawce godzinowej
      <input
        type="number"
        v-model="hourlyRate3"
        placeholder="Stawka godzinowa 1"
      />
      = {{ calculateHours(hoursNumber1, hourlyRate3).toFixed(2) }} zł
    </div>
    <div class="row">
      <div class="which-days">Dni świąteczne:</div>
    </div>
    <div class="row">
      Ilość minut
      <input
        type="number"
        v-model="minutesNumber2"
        placeholder="Ilość godzin"
      />
      po stawce godzinowej
      <input
        type="number"
        v-model="hourlyRate2"
        placeholder="Stawka godzinowa 1"
      />
      = {{ calculateMinutes(minutesNumber2, hourlyRate2).toFixed(2) }} zł
    </div>
    <div class="row">
      Ilość godzin
      <input type="number" v-model="hoursNumber2" placeholder="Ilość godzin" />
      po stawce godzinowej
      <input
        type="number"
        v-model="hourlyRate4"
        placeholder="Stawka godzinowa 2"
      />
      = {{ calculateHours(hoursNumber2, hourlyRate4).toFixed(2) }} zł
    </div>

    <div id="calculation-result">
      <h3>
        Dodana całość:
        {{
          calculateResult(
            minutesNumber1,
            minutesNumber2,
            hoursNumber1,
            hoursNumber2,
            hourlyRate1,
            hourlyRate2,
            hourlyRate3,
            hourlyRate4
          ).toFixed(2)
        }}
        zł
      </h3>
    </div>
  </div>
</template>

<style scoped>
.row input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.which-days {
  font-weight: 700;
}

.calculator {
  font-size: 1.2rem;
}

h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: black;
}
</style>
