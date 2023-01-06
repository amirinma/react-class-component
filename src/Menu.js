import React from "react";

export default class Menu extends React.Component {
    state = {
        isFavorite: true
    }

    toggle = ()=>{
        this.setState((preveState)=>{
            return{
                isFavorite: !preveState.isFavorite
            }
        })
    }

    render(){
        return(
            <span onClick={this.toggle}>{this.state.isFavorite? "❤️" : "♡"}</span>
        )
    }
}