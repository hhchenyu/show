import axios from 'axios';

export default function axioss(config){
    return new Promise((resolve,reject)=>{
        const axiosince=axios.create({
            baseURL:'http://152.136.185.210:7878/api/hy66',
            timeout:3000
          });
          //拦截请求
          axiosince.interceptors.request.use(config=>{
              // console.log(config);
              return config;
          })
          //拦截响应
          axiosince.interceptors.response.use(res=>{
            // console.log(res);
            return res.data;
        })
          //网络请求
          axiosince(config).then(data=>{
            resolve(data);
          }).catch(err=>{
            reject(err);
        })
    }) 
}
