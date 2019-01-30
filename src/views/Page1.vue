<template>
  <div class="about">
    <input type="text" v-model="name">
    <button @click="changeName">Trocar Nome</button>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data() {
    return {
      name: this.$store.state.name
    }
  },
  methods: {
    changeName() {
      this.$store.commit('changeName', this.name)
    }
  }
}
</script>
