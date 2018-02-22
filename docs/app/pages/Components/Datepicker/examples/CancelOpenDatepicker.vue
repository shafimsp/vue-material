<template>
  <div>
    <md-field>
      <md-icon @click.native="toggleDialog">event</md-icon>
      <md-date-input ref="input" v-model="selectedDate" :md-open-on-focus="false" />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'CancelOpenDatepicker',
    data: () => ({
      selectedDate: new Date('2018/03/26')
    }),
    methods: {
      toggleDialog () {
        this.$refs.input.toggleDialog()
      }
    }
  }
</script>
