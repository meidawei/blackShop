<template>
  <div>
    <input type="text" @keyup.enter="search" v-model="city" />
    <ul>
      <transition-group tag="ul" name="list">
        <li :style="'transition-delay:'+index*.1+'s'" :key="index" v-for="(item,index) in weatherList"
        >{{item.date}} -- {{item.fengxiang}} -- {{item.type}}</li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
export default {
  name: "weather",
  data(){
    return {
      city: '',
      weatherList: [],//保存的数组
    }
  },
  methods: {
    search() {
      // 每次都要清空数组
      this.weatherList = [];
      this.$http.get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.city}`).then(res => {
        this.weatherList = res.data.data.forecast
      }, fail => {
        console.log(fail);
      })
    }
  },
};
</script>
<style>
.list-item {
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px) scale(0.5);
}
</style>