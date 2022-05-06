import React from 'react';
// import axios from "axios";
import { getListData } from "../http/api";

class HomeAxios extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }
    getData = ()=>{
        let params = {
            a:'getPortalList',
            catid:20
        }
        getListData(params).then(res =>{
            // console.log(res)
            if(res.status === 200){
                this.setState({
                    list:res.data.result
                })
            }
        })
        /*let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api).then((res)=>{
            if(res.status === 200){
                this.setState({
                    list:res.data.result
                })
            }

        })*/
    }
    render() {
        return(
            <div>
                <h1>axios获取数据</h1>
                <button onClick={this.getData}>点击获取数据</button>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return <li key={index}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default HomeAxios


