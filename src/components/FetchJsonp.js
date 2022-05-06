import React from 'react';
import fetchJsonp from 'fetch-jsonp';
class FetchJsonp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    getData = ()=>{
        let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api).then(res =>{
            return res.json()
        }).then(json =>{
            console.log(json)
            this.setState({
                list:json.result
            })
        })
    }
    render() {
        return(
            <div>
                <h1>fetch-jsonp获取数据</h1>
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
export default FetchJsonp

