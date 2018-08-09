import React from 'react'
import '../style/App.css'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.addNumFunc = this.addNumFunc.bind(this);
        this.minusNumFunc = this.minusNumFunc.bind(this);
    }
    addNumFunc(){
        this.setState({count:this.state.count+1});
    }
    minusNumFunc(){
        if(this.state.count > 0){
            this.setState({count:this.state.count-1});
        }
    }
    render(){
        return(
            <div className='box'>
                <button onClick={this.minusNumFunc}>-</button>
                <button onClick={this.addNumFunc}>+</button>
                <span>当前点击次数</span>
                <span>{this.state.count}</span>
            </div>
        );
    }
}
// constructor(props){
//
// }
export default App