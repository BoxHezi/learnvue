import axios from "axios";

// 方案1
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  // 2. axios拦截器
  // 拦截器需要return语句返回拦截处理的数据
  // 请求拦截
  instance.interceptors.request.use(
    config => {
      console.log("Request Interceptor");
      console.log(config);

      // 请求拦截的作用
      // 1. 可以编辑config中信息，达到服务器数据要求，e.g. 添加headers
      // 2. 每次发送网球请求时，在界面显示一个请求图标
      // 3. 某些网络请求必须携带一个特殊信息（e.g. 登录时需要携带token）

      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 响应拦截
  instance.interceptors.response.use(
    res => {
      console.log("Response Interceptor");
      console.log(res);
      return res.data;
      // return res.data;
    },
    err => {
      console.log(err);
    }
  );

  // 3. 发送网络请求
  return instance(config);
}

// 方案2
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1. 创建axios实例
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     });

//     instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }
