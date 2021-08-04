<template>
  <div class="studentGroup">
  <div class="container">
    <div class="btitle">{{viewGroupStudent.surname}}</div>
    <div class="btitle">{{viewGroupStudent.name}}</div>
    <div class="mtitle tc">Dars boshlangan sana: {{viewGroupStudent.date}}</div>
    <div class="row">
      <div class="col-4">
        <div class="month">
          <div class="title">Oy:</div>
          <div class="mtitle">Dekabr</div>
          <div class="title">To'lov summmasi:</div>
          <div class="mtitle">50, 000 so’m</div>
        </div>
      </div>
      <div class="col-4">
        <div class="month">
          <div class="title">Oy:</div>
          <div class="mtitle">Dekabr</div>
          <div class="title">To'lov summmasi:</div>
          <div class="mtitle">50, 000 so’m</div>
        </div>
      </div>
      <div class="col-4">
        <div class="month">
          <div class="title">Oy:</div>
          <div class="mtitle">Dekabr</div>
          <div class="title">To'lov summmasi:</div>
          <div class="mtitle">50, 000 so’m</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  computed:{
    viewGroupStudent(){
      return this.$store.getters.viewGroupStudent
    }
  }
}
</script>

<style>

</style>