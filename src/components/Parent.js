import React from 'react';
import Child from './Child';
class Parent extends React.Component{
    constructor(props) {
        super(props);
    }
    handleEvent = ()=>{
        console.log(this.child.state.msg)
        this.child.handleFn()
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <button onClick={this.handleEvent}>点击</button>
                <Child onRef={(ref) => { this.child = ref; }}/>
            </div>
        )
    }
}
export default Parent;

