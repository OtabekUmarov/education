<template>
  <div class="tolovS">
    <div class="container">
      <div class="btitle tc">{{view.surname}}</div>
      <div class="btitle tc">{{view.name}}</div>
      <div class="mtitle tc">Dars boshlangan sana: {{view.date}}</div>
      <div class="for" v-for="(f,index) of view.fan" :key="index">
        <div class="btitle">{{f}}</div>
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
          <div class="month none">
            <label>
              <div class="title">Oy:</div>
              <select>
                <option v-for="(m,index) of month" :key="index" :value="m">{{m}}</option>
              </select>
            </label>
            <label>
              <div class="title">To’lov miqdori:</div>
              <input type="number" step="10000" value="50000">
            </label>
          </div>
        </div>
        <div class="col-4">
          <div class="month add">
            <button>
              <img src="../../assets/img/plus.png" alt="">
              <div class="title blue">To'lov kartasi qo'shish</div>
            </button>
          </div>
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
    computed: {
      view() {
        return this.$store.getters.viewStudent
      }
    }
  }
</script>

<style>

</style>