import React, { Component } from 'react'

export default class Homes extends Component {
    render() {
        return (
            <div className ='card'>
            <div>
        <h1>{this.props.houseName}</h1>
       <img src={this.props.imgSrc}/>
       <h3>Founder: {this.props.founder}</h3>
       <h3>Element: {this.props.houseelement}</h3>
</div>
            </div>
        )
    }
}

