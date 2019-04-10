import React from 'react';
class Worker extends React.Component {
    constructor(props) { /*initialisation du state */
        super(props);
        this.state = {
            on: props.on
        };
    }
    handleClick = () => {

        this.setState({ on: !this.state.on });
    };



    render() {
        const isWorking = this.state.on ? "Homer' s working" : "Homer's tired";
        return (
            <div className="Worker">
                <button
                    onClick={this.handleClick}
                    className={isWorking}
                >
                    {isWorking.toUpperCase()}
                </button>


            </div>
        )
    }
}

export default Worker;