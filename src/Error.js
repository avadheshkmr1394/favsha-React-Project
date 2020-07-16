import React, { Component } from 'react'


class Error extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>{this.props.errorMessage}</div>
            </>
        )
    }
}

export default Error