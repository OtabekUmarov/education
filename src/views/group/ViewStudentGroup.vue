<template>
  <div class="studentGroup">
  <div class="container">
    <div class="btitle tc">{{viewGroupStudent.surname}}</div>
    <div class="btitle tc">{{viewGroupStudent.name}}</div>
    <div class="mtitle tc">Dars boshlangan sana: {{viewGroupStudent.date}}</div>
    <div class="row">
      <div class="col-4">
        <div class="month">
          <div class="title">Oy:</div>
          <div class="mtitle">{{month[new Date().getMonth()]}}</div>
          <div class="title">To'lov summasi:</div>
          <div class="mtitle">50, 000 so’m</div>
        </div>
      </div>
      <div class="col-4">
        <div class="month">
          <div class="title">Oy:</div>
          <div class="mtitle">{{month[new Date().getMonth()]}}</div>
          <div class="title">To'lov summasi:</div>
          <div class="mtitle">50, 000 so’m</div>
        </div>
      </div>
      <div class="col-4">
        <div class="month">
          <div class="title">Oy:</div>
          <div class="mtitle">{{month[new Date().getMonth()]}}</div>
          <div class="title">To'lov summasi:</div>
          <div class="mtitle">50, 000 so’m</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data:()=>({
      month: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul',
      'Avgust', 'Sentabr','Oktabr','Noyabr','Dekabr']
    }),
  computed:{
    viewGroupStudent(){
      return this.$store.getters.viewGroupStudent
    }
  }
}
</script>

<style>

</style>