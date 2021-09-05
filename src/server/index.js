// 这个时axios的配置
import axios from 'axios';
// import { config } from 'vue/types/umd';
axios.defaults.baseURL = '/api';
// 错误信息处理
const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      console.log('信息验证失败');
      break;
    case 401:
      console.log('认证失败');
      break;
    case 403:
      localStorage.removeItem('token');
      console.log('token校验失败');
      break;
    case 404:
      console.log('请求资源不存在');
      break;
    default :
      console.log(other);
      break;
  }
};
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // console.log(config);
  if (localStorage.elementToken) {
    config.headers.Authorization = localStorage.elementToken;
  }
  console.log(config);
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.status === 200 ? Promise.resolve(response.data) : Promise.reject(response);
}, (error) => {
  // 对响应错误做点什么
  const { response } = error;
  if (response) {
    errorHandle(response.status, response.data.message);
    return Promise.reject(response.data);
  } else {
    console.log('断了');
  }
});
export default axios;
