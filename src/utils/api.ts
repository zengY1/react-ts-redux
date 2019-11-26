const api_host='http://192.168.1.68:8080'
const api_host_login='https://guard.elingou.com'
const Api={
       demo1:`${api_host}/auth/oauth/accessToken`,
       loginApi:`${api_host_login}/auth/oauth/accessToken`, //登陆
       //分类管理
       classifyAddApi:`${api_host}/cate/add`, //分类的新增
     
}
export default Api