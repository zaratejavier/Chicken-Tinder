import React, { Component } from 'react'

export const codeContext = React.createContext('')
export const codeConsumer = codeContext.Consumer

export default class CodeProvider extends Component {
    state={
        code: '',
        setCode: this.setCode
    }

    setCode(string){
        this.setState({code: string})
    }
    render() {
        return (
            <codeContext.Provider
            value={{
                code: this.state.code,
                setCode: this.setCode
            }}>
                {this.props.children}
            </codeContext.Provider>
        )
    }
}
