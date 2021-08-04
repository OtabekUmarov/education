<template>
  <div class="groups">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="group__item">
            <select v-model="group.fan">
              <option value="null" disabled>Fanni tanlang</option>
              <option v-for="(fan,index) of fanlar" :key='index' :value="fan">{{fan}}</option>
            </select>
            <select v-model="group.guruh">
              <option value="null" disabled>Guruhni tanlang</option>
              <option v-for="(gr,index) of groups" :key='index' :value="gr">{{gr}}</option>
            </select>
            <select v-model="group.teacher">
              <option value="null" disabled>O'qituvchini tanlang</option>
              <option v-for="(teacher,index) of teachers" :key='index' :value="teacher.name+' '+teacher.surname">{{teacher.name}} {{teacher.surname}}</option>
            </select>
            <button class="btn" @click="add()">Qo'shish</button>
          </div>
        </div>
        <div class="col-4" v-for="guruh of groupsGet" :key="guruh.id">
          <router-link :to="{name: 'ViewGroup',params: {id:guruh.guruh+'-'+guruh.fan}}">
            <div class="group__item gr" @click="getIdGroup(guruh.id)">
              <div class="title">Fan nomi:</div>
              <div class="value">{{guruh.fan}}</div>
              <div class="title">Guruh raqami:</div>
              <div class="value">{{guruh.guruh}}</div>
              <div class="title">O’qituvchi:</div>
              <div class="value">{{guruh.teacher}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    group: {
      fan:null,
      guruh:null,
      teacher:null
    },
    fanlar: ['Matematika', 'Fizika', 'Informatika', 'Ingliz tili', 'Rus tili', 'Koreys Tili'],
    groups: ['1-guruh', '2-guruh', '3-guruh'],
  }),
  methods: {
    add(){
      this.$store.dispatch('newGroup', this.group)
      this.group = {
        fan:null,
        guruh:null,
        teacher:null
      }
    },
    getIdGroup(id) {
      this.$store.getters.showGroup(id)
    }
  },
  computed: {
    teachers() {
      return this.$store.getters.teachers
    },
    groupsGet() {
      return this.$store.getters.groups
    }
  }
}
</script>

<style>

</style>