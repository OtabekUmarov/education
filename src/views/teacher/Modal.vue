<template>
  <div class="modal">
    <div class="container">
      <div class="btitle" v-show="!isShow" >O'qituvchi kiritish</div>
      <div class="btitle" v-show="isShow" >O'qituvchi ma'lumotlarini o'zgartirish</div>
      <div class="row">
        <div class="col-9">
          <label class="title">
            Ism:
            <input type="text" v-model="teacher.name">
          </label>
          <label class="title">
            Familiya:
            <input type="text" v-model="teacher.surname">
          </label>
          <label class="title">
            Telefon raqami:
            <input type="text" v-model="teacher.phone">
          </label>
          <label class="title">
            Manzil:
            <input type="text" v-model="teacher.address">
          </label>
          <div class="title">Qaysi fanlarni biladi:
          </div>
          <label class="title" v-for="(f,index) of fanlar" :key='index'>
            {{f}}
            <input type="checkbox" v-model="teacher.fan" :value="f">
          </label>
          <div class="title">
            Jinsi:
          </div>
          <div class="gender">
            <label class="title">
            Erkak 
            <input type="radio" v-model="teacher.gender" name="gender" value="Erkak">
          </label>
          <label class="title">
            Ayol 
            <input type="radio" v-model="teacher.gender" name="gender" value="Ayol">
          </label>
          </div>
          <div class="btns">
            <button class="btn" v-show="!isShow" @click="save()">Saqlash</button>
            <button class="btn" v-show="isShow" @click="edit()">O'zgartirish</button>
            <button class="btn" @click="back()">Orqaga qaytish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  import { eventEmitter } from '../../main'
  export default {
    data: () => ({
      teacher: {
        fan: []
      },
      isShow: false,
      fanlar: ['Matematika', 'Fizika', 'Informatika', 'Ingliz tili', 'Rus tili', 'Koreys Tili']
    }),
    methods: {
      edit(){
        this.isShow = true
        this.$router.push('/teachers')
        axios.put('http://localhost:3000/teachers/' + this.teacher.id, this.teacher)
          .then(response => {
                this.teacher = response.data
          })
      },
      save() {
        this.$store.dispatch('newTeachers', this.teacher)
        this.student = {
          fan: []
        }
        this.$router.push('/teachers')
      },
      back() {
        this.$router.push('/teachers')
      }
    },
    created() {
      eventEmitter.$on('editTech', (view) => {
        this.isShow = true
        this.teacher = view
      })
    }

  }
</script>

<style>

</style>