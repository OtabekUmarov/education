<template>
  <div class="menu" :class='{active:show}'>
    <button class="back-btn" @click="show=false"><img src="../assets/img/back.png" alt=""></button>
    <ul>
      <li @click="show=false"><router-link class="link" to="/students"><img src="../assets/img/students-icon.png" alt="">O’quvchilar</router-link></li>
      <li @click="show=false"><router-link class="link" to="/groups"><img src="../assets/img/groups-icon.png" alt="">Guruhlar</router-link></li>
      <li @click="show=false"><router-link class="link" to="/tolov"><img src="../assets/img/payme-icon.png" alt="">To’lovlar</router-link></li>
      <li @click="show=false"><router-link class="link" to="/teachers"><img src="../assets/img/students-icon.png" alt="">O’qituvchilar</router-link></li>
    </ul>
  </div>
</template>
<script>
  import {eventEmitter} from '../main'
export default {
  data:()=> ({
    show: false
  }),
  methods: {
    open(){
        eventEmitter.$emit('menu')
      }
  },
  created(){
    eventEmitter.$on('menu',()=>{
      this.show = true
    })
  }
};
</script>