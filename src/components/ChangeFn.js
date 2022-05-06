import React,{ Component } from 'react';
class ChangeFn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:''
        }
    }
    changeFn= (e)=>{
        const $target = e.target;
        this.setState({
            msg:$target.value
        })
    }
    render() {
        return (
            <div>
                {<form action="">
                    <h1>{this.state.msg}</h1>
                    <input type="text" onChange={this.changeFn}/>
                </form>}
                {this.props.thises.state.msg}
                <button onClick={this.props.thises.handelFn}>点击</button>
            </div>
        )
    }
}
export default ChangeFn
