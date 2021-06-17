import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

import axios from "axios";

// url: "http://123.207.32.32:8000/home/data?type=pop&page=1"
// const config = {
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get"
// };

// axios(config).then(res => {
//   console.log(res);
// });

// axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// });

// axios并发请求
// axios
//   .all([
//     axios({
//       url: "http://123.207.32.32:8000/home/multidata"
//     }),
//     axios({
//       url: "http://123.207.32.32:8000/category",
//       params: {
//         type: "sell",
//         page: 3
//       }
//     })
//   ])
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// axios 全局配置
// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/category",
//       params: {
//         type: "sell",
//         page: 3
//       }
//     })
//   ])
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// 创建对应的axios实例
// 使用实例发送请求
// 每个axios实例config独立存在，不互相影响

// // instance 1 实例1
// const instance1 = axios.create({
//   baseURL: "http://111.111.111.111:8000",
//   timeout: 10000
// });

// instance1({
//   url: "/home/multidata"
// }).then(res => console.log(res));

// instance1({
//   url: "/category",
//   params: {
//     type: "sell",
//     page: 2
//   }
// }).then(res => {
//   console.log(res);
// });

// // instance 2 实例2
// const instance2 = axios.create({
//   baseURL: "http://222.222.222.222:8000",
//   timeout: 10000
// });

// instance2({
//   url: "/home/multidata"
// }).then(res => console.log(res));

// instance2({
//   url: "/category",
//   params: {
//     type: "sell",
//     page: 2
//   }
// }).then(res => {
//   console.log(res);
// });

// 封装request模块
import { request } from "./network/request";

request({
  url: "/home/multidata",
  method: "GET"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

