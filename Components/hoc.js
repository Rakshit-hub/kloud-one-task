import React from "react"

const Hoc = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        state = {
            count: 0
        }

        handleIncrement = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            return (
                <WrappedComponent count={this.state.count} handleIncrement={this.handleIncrement} />
            )
        }
    }

}

export default Hoc