<template>
  <div class="view">
    <div class="container">
      <div class="row">
        <div class="info col-8">
          <div class="title">Familiya:</div>
          <div class="value">{{view.surname}}</div>
          <div class="title">Ism:</div>
          <div class="value">{{view.name}}</div>
          <div class="title">Telefon raqami:</div>
          <div class="value">{{view.phone}}</div>
          <div class="title">Manzili:</div>
          <div class="value">{{view.address}}</div>
          <div class="title">Topshiradigan oliy o’quv yurti:</div>
          <div class="value">{{view.university}}</div>
          <div class="title">Ota-onasi ism-familiyasi:</div>
          <div class="value">{{view.parents}}</div>
          <div class="title">Ota-ona telefon raqami:</div>
          <div class="value">{{view.parentsPhone}}</div>
          <button class="edit__btn" @click="edit(view)"><router-link  to="/students/student-edit">O’zgartirish</router-link></button>
        </div>
        <div class="fanlar col-4">
          <div class="title">Fanlar:</div>
          <div class="box box1">
            <div class="title">Fan nomi:</div>
            <div class="value">{{view.fan.join(', ')}}</div>
            <div class="title">Guruh raqami:</div>
            <div class="value">{{view.group.join(', ')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { eventEmitter } from '../../main';
  export default {
    methods:{
      edit(view){
        eventEmitter.$emit('edit',view)
      }
    },
    computed: {
      view() {
        return this.$store.getters.viewStudent
      }
    }
  }
</script>


<style>

</style>