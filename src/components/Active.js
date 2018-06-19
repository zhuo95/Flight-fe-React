import React from "react";
import { withRouter } from "react-router-dom";

class Active extends React.Component {

    state = {
        count: 5
    }

    componentDidMount() {
        setTimeout(() => this.props.history.push(`/`), 5000);
        setInterval(this.timer, 1000);
    }

    timer = () => {
        const time = this.state.count - 1;
        this.setState({ count: time });
    }

    handleClick = () => {
        this.props.history.push(`/`);
    }

    render () {
        return (
            <div className="active">
                <p>Active your email successfully! Back to system {this.state.count} seconds later...</p>
                <br/>
                <button className="btn btn-primary" onClick={this.handleClick}>Go To Flight</button>
            </div>
        );
    }

}

export default withRouter(Active);