<template>
  <div class="home">
    <ul>
      <li v-for="name in names" :key="name.id">
        <b>{{ name.text }}</b>: <span>{{ formatDate(name.timestamp) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      names: this.$store.state.name
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('DD/MM/YYYY HH:mm:ss')
    }
  }
}
</script>
