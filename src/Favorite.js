import React from "react"

export default class Favorite extends React.Component{
    state = {
        show: true
    }

    toggle = ()=>{
        this.setState((preveState)=>{
            return{
                show: !preveState.show
            }
        })
    }

    render(){

        return(
            <div>
                <button onClick={this.toggle}>{this.state.show ? "Hide" : "Show"} Menu</button>
                <nav style={{display: this.state.show ? "block" : "none"}}>
                    <h5>Sign in as a coder</h5>
                    <a>Your Code</a>
                    <a>Code Review</a>
                </nav>
            </div>
        )
    }
}