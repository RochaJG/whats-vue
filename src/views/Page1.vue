<template>
  <div class="about">
    <input type="text" v-model="name">
    <button @click="changeName">Trocar Nome</button>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      name: this.$store.state.name[this.$store.state.name.length - 1].text
    }
  },
  methods: {
    changeName () {
      this.$store.commit('changeName', this.name)

      this.$router.replace('/')
    }
  }
}
</script>
