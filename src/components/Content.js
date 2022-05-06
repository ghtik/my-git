// import React, { Component } from 'react';
import { useParams, useNavigate, useSearchParams  } from "react-router-dom";
//
//
// class Content extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     //生命周期函数
//     componentDidMount(){
//         //打印出整个传值内容为：Object isExact:true params:Object aid:"2"
//         // console.log(this.props)
//         //【03】所以获取aid的值方法为（获取动态路由传值）【02】在News.js里
//         // console.log(this.props.match.params.aid)
//
//     }
//     function(){
//
//     }
//     render() {
//         return (
//
//             <div>
//
//                 我是新闻详情组件
//             </div>
//         );
//     }
// }
function Content(){
    // const { aid } = useParams();
    // function getDataList(){
    //     console.log(aid);
    // }
    let navigate = useNavigate();
    let [ searchParams, setSearchParams ] = useSearchParams();
    function getDataList(){

    }
    return (
        <div>
            我是新闻详情页
            <button onClick={getDataList}>点击</button>
            <button onClick={()=>{
                // navigate('/home')//路由跳转
                setSearchParams({id:123,name:'zhangsan',age:18});//设置参数
                searchParams.forEach((value,key)=>{
                    console.log(`key:${key}--------value:${value}`)
                })//查询参数
            }
            }>按钮</button>
        </div>
    )
}
export default Content;

