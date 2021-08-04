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
          <div class="title">Biladigan fanlari:</div>
          <div class="value">{{view.fan.join(', ')}}</div>
          <div class="title">Jinsi:</div>
          <div class="value">{{view.gender}}</div>
          <button class="edit__btn" @click="edit(view)"><router-link  to="/teachers/teacher-edit">O’zgartirish</router-link></button>
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
        eventEmitter.$emit('editTech',view)
      }
    },
    computed: {
      view() {
        return this.$store.getters.viewTeacher
      }
    }
  }
</script>


<style>

</style>