<template>
  <div class="modal">
    <div class="container">
      <div class="btitle" v-show="!isShow" >O'quvchi kiritish</div>
      <div class="btitle" v-show="isShow" >O'quvchi ma'lumotlarini o'zgartirish</div>
      <div class="row">
        <div class="col-9">
          <label class="title">
            Ism:
            <input type="text" v-model="student.name">
          </label>
          <label class="title">
            Familiya:
            <input type="text" v-model="student.surname">
          </label>
          <label class="title">
            Telefon raqami:
            <input type="text" v-model="student.phone">
          </label>
          <label class="title">
            Manzil:
            <input type="text" v-model="student.address">
          </label>
          <label class="title">
            Topshiradigan oliy o’quv yurti:
            <input type="text" v-model="student.university">
          </label>
          <label class="title">
            Ota-onasi ism-familiyasi:
            <input type="text" v-model="student.parents">
          </label>
          <label class="title">
            Ota-ona telefon raqami:
            <input type="text" v-model="student.parentsPhone">
          </label>
          <label class="title">
            Dars boshlagan sanasi:
            <input type="date" v-model="student.date">
          </label>
          <div class="btns">
            <button class="btn" v-show="!isShow" @click="save()">Saqlash</button>
            <button class="btn" v-show="isShow" @click="edit()">O'zgartirish</button>
            <button class="btn" @click="back()">Orqaga qaytish</button>
          </div>
        </div>
        <div class="col-3">
          <div class="mtitle">Fanlar:</div>
          <div class="box box1">
            <div class="title">Fan nomi:</div>
            <div class="value">{{student.fan.join(', ')}}</div>
            <div class="title">Guruh raqami:</div>
            <div class="value">{{student.group.join(', ')}}</div>
          </div>
          <div class="box box2">
            <div class="title">Fan nomi:</div>
            <select v-model="fan">
              <option v-for="(fan,index) of fanlar" :key="index" :value="fan">{{fan}}</option>
            </select>
            <div class="title">Guruh raqami:</div>
            <select v-model="group">
              <option value="1-guruh">1-guruh</option>
              <option value="2-guruh">2-guruh</option>
              <option value="3-guruh">3-guruh</option>
            </select>
            <button class="btn" @click="addFan()">Qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  import {
    eventEmitter
  } from '../../main'
  export default {
    data: () => ({
      student: {
        fan: [],
        group: [],
      },
      isShow: false,
      fan: '',
      group: '',
      fanlar: ['Matematika', 'Fizika', 'Informatika', 'Ingliz tili', 'Rus tili', 'Koreys Tili'],
    }),
    methods: {
      edit(){
        this.isShow = true
        this.$router.push('/students')
        axios.put('http://localhost:3000/students/' + this.student.id, this.student)
          .then(response => {
                this.student = response.data
          })
      },
      save() {
        this.$store.dispatch('newStudents', this.student)
        this.$router.push('/students')
        this.student = {
            fan: [],
            group: [],
        }
      },
      back() {
        this.$router.push('/students')
      },
      addFan() {
        this.student.fan.push(this.fan)
        this.student.group.push(this.group)
        this.fan = ''
        this.group = ''
      }
    },
    created() {
      eventEmitter.$on('edit', (view) => {
        this.isShow = true
        this.student = view
      })
    }

  }
</script>

<style>

</style>