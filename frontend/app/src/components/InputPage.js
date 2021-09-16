import React, { Component } from 'react'
import axios from 'axios';

class InputPage extends Component {
    constructor() {

        super()

        this.state = {
            EnterCode: "",
        }

    }

    CodeHandler = (event) => {
        this.setState({ EnterCode: event.target.value })
    }

    submitHandler = async (event) => {
        event.preventDefault()
        let body = {
            html_content: this.state.EnterCode
        }
        axios.post("http://127.0.0.1:5000/copycat", body)
            .then(res => {
                this.props.history.push({
                    pathname: '/result',
                    state: {data: res.data}
                })
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)} >
                <div style={{ margin: '50px' }}>
                    <h1>Find Similar Nodes</h1><br />
                    <h2>Paste HTML in textbox below</h2><br />
                    <textarea className="h-96 w-full border-solid border-4 border-light-blue-500" onChange={this.CodeHandler}>
                    </textarea><br />
                    <div className="flex items-center justify-center">
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded content-center" type='submit'>
                            Process Code
                        </button>
                    </div>

                </div>
            </form>
        )
    }
}

export default InputPage;
