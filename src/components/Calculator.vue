<script>
export default {
    data() {
        return {
            hourlyRate1: 12,
            hourlyRate2: 14,
            hourlyRate3: 12,
            hourlyRate4: 14,
            minutesNumber1: 0,
            minutesNumber2: 0,
            hoursNumber1: 0,
            hoursNumber2: 0,
        }
    },
    methods: {
        calculateResult(minutes1, minutes2, hours1, hours2, rate1, rate2, rate3, rate4) {
            const result =
                this.calculateMinutes(minutes1, rate1) +
                this.calculateMinutes(minutes2, rate2) +
                this.calculateHours(hours1, rate3) +
                this.calculateHours(hours2, rate4)

            return result
        },

        calculateMinutes(minutes, rate) {
            const result = minutes * (rate / 60)

            return result
        },
        
        calculateHours(hours, rate) {
            const result = hours * rate

            return result
        }
    }
}
</script>

<template>
    <div class="calculator">
        <div class="row">
            Ilość minut 1
            <input type="number" v-model="minutesNumber1" placeholder="Ilość godzin" />
            po stawce godzinowej
            <input type="number" v-model="hourlyRate1" placeholder="Stawka godzinowa 1" />
        </div>
        <div class="row">
            Ilość minut 2
            <input type="number" v-model="minutesNumber2" placeholder="Ilość godzin" />
            po stawce godzinowej
            <input type="number" v-model="hourlyRate2" placeholder="Stawka godzinowa 1" />
        </div>
        <div class="row">
            Ilość godzin 1
            <input type="number" v-model="hoursNumber1" placeholder="Ilość godzin" />
            po stawce godzinowej
            <input type="number" v-model="hourlyRate3" placeholder="Stawka godzinowa 1" />
        </div>
        <div class="row">
            Ilość godzin 2
            <input type="number" v-model="hoursNumber2" placeholder="Ilość godzin" />
            po stawce godzinowej
            <input type="number" v-model="hourlyRate4" placeholder="Stawka godzinowa 2" />
        </div>

        <div id="calculation-result">
            <h3>
                Suma z {{ minutesNumber1 }} minut po stawce godzinowej {{ hourlyRate1 }} to {{ calculateMinutes(minutesNumber1, hourlyRate1).toFixed(2) }} zł<br>
                Suma z {{ minutesNumber2 }} minut po stawce godzinowej {{ hourlyRate2 }} to {{ calculateMinutes(minutesNumber2, hourlyRate2).toFixed(2) }} zł<br>
                Suma z {{ hoursNumber1 }} godzin po stawce godzinowej {{ hourlyRate3 }} to {{ calculateHours(hoursNumber1, hourlyRate3).toFixed(2) }} zł<br>
                Suma z {{ hoursNumber2 }} godzin po stawce godzinowej {{ hourlyRate4 }} to {{ calculateHours(hoursNumber2, hourlyRate4).toFixed(2) }} zł<br>

                Dodana całość: {{
                    this.calculateResult(
                        minutesNumber1, minutesNumber2,
                        hoursNumber1, hoursNumber2,
                        hourlyRate1, hourlyRate2, hourlyRate3, hourlyRate4
                    ).toFixed(2)
                }} zł
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

.calculation-result {
    /* width: 100% */
}

h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: black;
}

</style>