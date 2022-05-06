import React from 'react';
class KeyEvent extends React.Component{
    constructor(props) {
        super(props);

    }
    inputKeyDown = (e) =>{
        console.log(e.keyCode);
        if(e.keyCode === 13){
            alert(e.target.value)
        }
    }
    inputKeyUp = (e) =>
    {
        console.log(e.keyCode);
        if(e.keyCode === 13){
            alert(e.target.value)
        }
}
    render() {
        return(
            <div>
                <input type="text" onKeyDown={this.inputKeyDown} onKeyUp={this.inputKeyUp}/>
                <input type="text" onKeyDown={(e) =>this.inputKeyDown(e)}/>
            </div>
        )
    }
}
export default KeyEvent;
