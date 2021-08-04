<template>
  <div class="groupView">
    <div class="container">
      <div class="box">
        <div class="btitle">{{viewGroup.fan}}</div>
        <div class="mtitle">{{viewGroup.guruh}}</div>
        <div class="search">
          <input type="text" v-model="inpSearch" placeholder="Search student...">
        </div>
          <div class="item" v-for="s of getGroupStudent" :key='s.id'>
        <router-link :to="{name: 'ViewStudentGroup',params: {view:s.name+'-'+s.surname}}">
            <div class="name" @click="getStudentId(s.id)">{{s.surname}} {{s.name}}</div>
        </router-link>
            <div class="phone">{{s.phone}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    students: [],
    inpSearch:''
  }),
  methods: {
    getStudentId(id){
      this.$store.getters.showStudentGroup(id)
    }
  },
  created(){
    this.students =  this.$store.getters.students

  },
computed: {
  viewGroup() {
      return this.$store.getters.viewGroup
    },
    getGroupStudent(){
      let arr = []
      this.students.forEach(s => {
        let id = 0
        s.fan.forEach(f => {
          if(f == this.viewGroup.fan && s.group[id] == this.viewGroup.guruh) {
            arr.push(s)
          }
          id ++
        })
      })
      return arr.filter(l => {
        return l.name.toLowerCase().indexOf(this.inpSearch.toLowerCase()) !== -1 || l.surname.toLowerCase().indexOf(this.inpSearch.toLowerCase()) !== -1
      })
      // return arr
    }
  }
}
</script>

<style>

</style>