import React from 'react'
import Header from './Components/Header'
import Image from './Components/image'
import logo from './img/logo.png'

class App extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help text!",
            userData: ""
        }   
        this.inputClick = this.inputClick.bind(this)
        this.inputButtonClick = this.inputButtonClick.bind(this)
    }

    render() {
        return (<div className="name"> 
        <Header title ="Шапка сайта"/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input placeholder={this.state.helpText}
            onChange={event=>this.setState({userData: event.target.value})}  
            onClick={this.inputClick}onMouseEnter={this.mouseOver}/>
            <p>{this.state.helpText === "Help text!"?"Yes":"No"}</p>
            <Image image = {logo}/>
            <button buybutton onClick ={this.inputButtonClick}> {this.state.helpText} </button> 
            </div>)
    }
    inputButtonClick() {
        this.setState({helpText: "Idi nahuy"})
    }
    inputClick () {
        this.setState({helpText: "Changed"})
        console.log("Clicked")}
    mouseOver () {console.log("Mouse over")}
    } 

export default App