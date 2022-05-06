import React from 'react';
// import PropTypes from 'prop-types';
class Child extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:"我是大哥"
        }
    }
    handleFn = ()=>{
        alert("333333333")
    }
    componentDidMount() {
        this.props.onRef(this);
    }

    render() {
        return (
            <div>
                <h1>11111111111</h1>
            </div>
        )
    }
}
// Child.defaultProps = {
//     ss:'222222222222222'
// }
// Child.propTypes = {
//     ss:PropTypes.string
// }
export default Child;

