<template>
  <div class="students">
    <div class="box">
      <div class="btitle">O'quvchilar</div>
      <div class="search">
        <input tabindex="0" type="text" v-model="search" placeholder="search student" @input="show()">
      </div>
      <div class="student" v-for="s of students" :key="s.id">
        <router-link :to="{name: 'TolovStudent',params: {id:s.surname+'-'+s.name}}">
          <div class="name" @click="getId(s.id)">{{s.surname}} {{s.name}}</div>
        </router-link>
        <div class="phone">{{s.phone}}</div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      search: ''
    }),
    methods: {
      show() {
        this.$store.getters.getSearch(this.search)
      },
      getId(id) {
        this.$store.getters.showStudent(id)
      }
    },
    computed: {
      students() {
        return this.$store.getters.students
      }
    }
  }
</script>

<style>

</style>