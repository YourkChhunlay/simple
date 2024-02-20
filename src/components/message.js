import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message:'Welcome to visitor'
        }
    }
    ChangeMessage(){
        this.setState({
            message: 'Thank you for subcribe my chanel'
        })
    }
    render() {
        return (
           <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.ChangeMessage()}>Subcribe </button>
           </div>
        )
    }
}

export default Message;
