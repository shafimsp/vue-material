<template>
  <div>
    <md-datepicker v-model="selectedDate" >
      <md-button md-datepicker-trigger class="md-icon-button">
        <md-icon>event</md-icon>
      </md-button>
      <label>{{ displayDate }}</label>
    </md-datepicker>
  </div>
</template>

<script>
  export default {
    name: 'DatepickerWrapper',
    data: () => ({
      selectedDate: null
    }),
    computed: {
      displayDate ()  {
        if(this.selectedDate) {
          return this.selectedDate.toDateString()
        }
        return 'Choose Date'
      }
    }
  }
</script>

<style lang="scss">
  .md-datepicker {
    margin-top: 30px;

    label {
      line-height: 40px;
    }
  }
</style>
