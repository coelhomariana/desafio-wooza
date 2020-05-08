import React from 'react';
import axios from 'axios';

export default class PlatformPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            platforms: []
        }
    }

    componentDidMount(){
        const baseURL = 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas'
        axios.get(baseURL).then((response) => {
            this.setState({
                platforms: response.data.plataformas
            })
        })
       }

    selectPlatform = (event) => {
        window.localStorage.setItem('selectedPlatform', event.target.id)
        this.props.history.push('/planos')
    }

    render() {
        return (
            <>
                <button id='TBT01' onClick={this.selectPlatform}>Tablets</button>
                <button id='CPT02' onClick={this.selectPlatform}>Computador</button>
                <button id='WF03' onClick={this.selectPlatform}>Wi-fi</button>
            </>
        )
    }
}
