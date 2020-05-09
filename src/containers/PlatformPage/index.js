import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 20%;
    border: 1px solid red;
` 

export default class PlatformPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            platforms: [],
            ready: false
        }
    }

    componentDidMount() {
        const baseURL = 'http://private-59658d-celulardireto2017.apiary-mock.com/plataformas'

        const getPlans = async () => {

            try {
                const response = await axios.get(baseURL)
                this.setState({
                    platforms: response.data.plataformas,
                    ready: true
                })
            } catch (error) {
                this.setState({
                    ready: false
                })
                console.log('Erro')
                
            }
        }

        getPlans()
    }

    selectPlatform = (id) => {
        window.localStorage.setItem('selectedPlatform', id)
        this.props.history.push('/planos')
    }
    
    render() {
        if (this.state.ready === false) {
            return (
                <CircularProgress></CircularProgress>
            )
        } else {
            return (
                <MainContainer>
                    <Button variant="contained" color="primary" onClick={() => this.selectPlatform("TBT01")}>Tablets</Button>
                    <Button variant="contained" color="primary" onClick={() => this.selectPlatform("CPT02")}>Computador</Button>
                    <Button variant="contained" color="primary" onClick={() => this.selectPlatform("WF03")}>Wi-fi</Button>
                </MainContainer>
            )
        }


    }
}
