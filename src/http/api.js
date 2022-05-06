import axios from "axios";
//首页获取数据
export const getListData = params =>{
    return axios.get(`http://www.phonegap100.com/appapi.php`,{params:params});
}
