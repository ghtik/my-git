import React from 'react';
class Lifecycle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:"组件信息"
        }
    }
    //挂载前
    componentWillMount() {
        //不建议
        console.log("组件挂载前钩子函数")
    }
    //挂载完成
    componentDidMount() {
        //Dom操作，请求数据
        console.log("组件挂载完成钩子函数")
    }
    //更新数据前   是否要更新   如果返回的是true才会执行更新数据的操作
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("更新数据");
        console.log(nextProps);
        console.log(nextState);
        console.log(nextContext);
        return true;
    }
    //组件更新时
    componentWillUpdate(nextProps, nextState, nextContext) {
        //不建议
        console.log("组件更新时钩子函数")
    }
    //组件更新完成
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("组件更新完成钩子函数")
    }
    //父组件里改变props传值的时候触发
    componentWillReceiveProps(nextProps, nextContext) {
        //不建议
        console.log("父子组件传值，父改变props的值触发")
    }
    setMsg=()=>{
        this.setState({
            msg:"我是改变后的msg数据"
        })
    }
    //组件销毁时
    componentWillUnmount() {
        console.log("组件销毁了")
    }

    render() {
        return(
            <div>
                <h1>生命周期函数</h1>
                <h3>{this.props.title}</h3>
                <button onClick={this.setMsg}>更新数据</button>
            </div>
        )
    }
}

export default Lifecycle;


