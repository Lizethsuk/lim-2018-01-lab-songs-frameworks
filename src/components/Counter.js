

import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    };

    upCount = (e) => {
        e.preventDefault();
        this.setState({
            count: this.state.count +1
        })
    };

    downCount = (e) => {
        e.preventDefault();
       if(this.state.count>=1){
            this.setState({
            count: this.state.count -1
        })
       }
    };

    render() {
        return (
            <div className="counter">
                <div className="count">{this.state.count}</div>
                <div className="changeCount">
                    <a href="#" onClick={this.upCount}>Me gusta</a>
                        <a href="#" onClick={this.downCount}>No me gusta</a>
                </div>
            </div>
                    )
                }
                }
            
            export default Counter
            
            
