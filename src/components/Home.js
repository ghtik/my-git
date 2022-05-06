import React from 'react';
import '../assets/css/index.css'
import ChangeFn from "./ChangeFn";

class Home extends React.Component{
    constructor(props) {
        super(props); //固定
        this.state={
            msg:'我是home组件',
            title:'标题',
            style:{
                color:'red',
                fontsize:'30px'
            },
            dataList:[
                {
                    text:'1222222222222222222222'
                },
                {
                    text:'333333333333333333333'
                },
                {
                    text:'55555555555555555555555555555555'
                }
            ]
        }
        // this.handleClick=()=>{
        //     console.log('333333')
        // }
    }
    handleClick(){
        console.log(44444)
    }
    preDefault=(e)=>{
        e.preventDefault();
        console.log(66666)
    }
    fn(name1,name2){
        console.log(name1,name2)
    }
    handelFun = (name,msg,e) =>{
        console.log(name,msg,e)
    }
    handelFn= ()=>{
         alert("2222222")
    }
    render() {
        let itemlist = this.state.dataList.map((item, index) => {
            return <li key={index}>{item.text}</li>
        })
        return(
            <div>
                {/*<ChangeFn fhome={this.handelFn}/>*/}
                <ChangeFn thises={this}/>
                <h1>{this.props.msg}</h1>6666666666
                <h1>{ this.state.title }</h1>
                <h5>{ this.state.msg }</h5>
                <div className='red'>我是红色盒子</div>
                <div style={this.state.style}>行内样式</div>
                <label htmlFor="name"></label>
                <input id='name' type="text"/>
                <p style={{"color":'red'}}>我是一个段落</p>
                <ul>
                    {itemlist}
                </ul>
                <ul>
                    {
                        this.state.dataList.map((item, index) => {
                            return <li onClick={this.handleClick.bind(this)} key={index}>{item.text}</li>
                        })
                    }
                </ul>
                <a href="#" onClick={this.preDefault}>eeeeeeee</a>
                <button onClick={this.fn.bind(this,"zhangsan","lisi")}>按钮</button>
                <button onClick={(e)=>this.handelFun("王五",this.state.msg,e)}>按钮</button>
            </div>
        )
    }
}
export default Home

