<template>
  <div>
    <md-field>
      <md-icon @click.native="toggleDialog">event</md-icon>
      <md-date-input ref="input" v-model="selectedDate" />
    </md-field>

    <md-field>
      <label for="movie">First day of a week</label>
      <md-select v-model="firstDayOfAWeek">
        <md-option value="0">Sunday</md-option>
        <md-option value="1">Monday</md-option>
      </md-select>
      <span class="md-helper-text">This config is global.</span>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'BasicDatepicker',
    data: () => ({
      selectedDate: null
    }),
    computed: {
      firstDayOfAWeek: {
        get () {
          return this.$material.locale.firstDayOfAWeek
        },
        set (val) {
          this.$material.locale.firstDayOfAWeek = val
        }
      }
    },
    methods: {
      toggleDialog () {
        this.$refs.input.toggleDialog()
      }
    }
  }
</script>
