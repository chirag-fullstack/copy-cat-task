import React, { Component } from 'react';

class ResultPage extends Component {

    constructor(props) {

        super(props)

        this.state = {
            ...props.location.state.data
        }
    }

    handleRunAgain = (event) => {
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        return (
            <div>
                <div className="flow-root mt-12">
                    <h1 className="float-left ml-24">RESULTS</h1>
                    <button className="mr-24 float-right bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-blue-700 rounded content-center"
                        type='submit'
                        onClick={() => this.handleRunAgain()} >
                        Run Again
                    </button>
                </div>

                <div className="grid ml-20 mr-20 grid grid-cols-2 gap-y-0.5 gap-x-96">
                    {this.state.data.length === 0 ?
                        (<div className="place-items-center">
                            <h1 className="text-7xl text-gray-800 uppercase tracking-wide text-center w-full">
                                No records to show
                            </h1>
                        </div>) : (
                            this.state.data.map((data) => (

                                <div className="max-w-full max-h-full rounded overflow-hidden shadow-lg border border-gray mx-24 my-24 px-6 py-4">
                                    <div className="bg-gray-300 max-w-full">
                                        <div className="font-bold text-4xl text-center mb-2 px-8 py-8">
                                            {data.value.toUpperCase()}
                                        </div>
                                    </div>
                                    <br />
                                    <div>
                                        <h2 className="font-bold text-black-1000 text-base">Name</h2>
                                        <h2 className="text-grey-600 text-base">
                                            {data.name.toUpperCase()}
                                        </h2>
                                        <br />
                                        <h2 className="font-bold text-black-1000 text-base">Occurrences</h2>
                                        <h2 className="text-grey-600 text-base">
                                            {data.occurrence}
                                        </h2>
                                    </div>
                                    <br />
                                </div>

                            )))}
                </div>
            </div >
        );
    }
}

export default ResultPage;
