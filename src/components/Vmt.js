import React from  'react';
class RenderIf extends  React.Component{
    constructor(pros) {
        super(pros);
        this.state={
            flag:false,
            name:"zhangsan"
        }
    }
    getMsg = () =>{
        if(this.state.flag){
            return (
                <div>
                    <h1>hello {this.state.name}</h1>
                </div>
            )
        }else {
            return (
                <div>
                    <h1>你好 我是{this.state.name}</h1>
                </div>
            )
        }
    }
    render() {
        //条件表达式第一种写法
        /* let msg;
         if(this.state.flag){
             msg = (
                 <div>
                     <h1>hello {this.state.name}</h1>
                 </div>
             )
         }else {
             msg = (
                 <div>
                     <h1>你好 我是{this.state.name}</h1>
                 </div>
             )
         }*/
        return(
            <div>
                {/*{msg}*/}
                {/*条件表达式的第二种写法*/}
                {/*{this.state.flag ? <h1>hello {this.state.name}</h1> : <h1>你好，你是{this.state.name}</h1>}*/}
                {/*条件表达式的第三种写法*/}
                {this.getMsg()}
            </div>
        )
    }
}
export default RenderIf
