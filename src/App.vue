<template>
  <div id="app">
    <div class="header">
      <img src="./assets/img/left.png" alt />
      <ul>
        <!-- 路由导航 -->
        <li>
          <router-link to="/findMusic">发现音乐</router-link>
        </li>
        <li>
          <router-link to="/myMusic">我的音乐</router-link>
        </li>
        <li>
          <router-link to="/friend">朋友</router-link>
        </li>
        <li>
          <router-link to="/shop">商城</router-link>
        </li>
        <li>
          <router-link to="/musicPerson">音乐人</router-link>
        </li>
        <li>
          <router-link to="/download">下载客户端</router-link>
        </li>
        <li>
          <router-link to="/weather">查看天气</router-link>
        </li>
      </ul>
      <img src="./assets/img/right.png" alt />
    </div>
    <!-- 路由出口 匹配之后会在这里出现 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // 取别名
  name: "App",
  components: {},
  data() {
    return {
      msg: "你笑起来真好看"
    };
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
.header {
  height: 75px;
  box-sizing: border-box;
  border-bottom: 5px solid #c20c0c;
  display: flex;
  justify-content: space-between;
  background-color: #242424;
}

.header ul {
  list-style: none;
  padding: 0;
  display: flex;
  height: 100%;
  background: #242424;
  margin: 0;
  flex: 1;
}
.header ul li {
  text-align: right;
  line-height: 75px;
  padding: 0 5px;
  font-size: 12px;
}
.header ul li:hover {
  background-color: black;
}

.header ul a {
  color: white;
  text-decoration: none;
}
.com img {
  display: block;
  width: 100%;
}
</style>
