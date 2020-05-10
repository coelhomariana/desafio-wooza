import React from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PlatformCard from '../../components/PlatformCard';
import PlanContainer from '../../components/styles/PlanContainer';
import MainContainer from '../../components/styles/MainContainer';

export default class PlanPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            plans: [],
            ready: false
        }
    }

    componentDidMount() {
        const baseURL = 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/'
        const apiPath = window.localStorage.getItem('selectedPlatform')
        axios.get(`${baseURL}${apiPath}`).then((response) => {
            this.setState({
                plans: response.data.planos,
                ready: true
            })
        })
    }

    selectPlan = (event) => {
        window.localStorage.setItem('selectedPlan', event.target.id)
        this.props.history.push('/formulario')
    }

    render() {
        if (this.state.ready === false) {
            return (
                <CircularProgress />
            )
        } else {
            return (
                <MainContainer>
                    <Typography>Selecionar plano:</Typography>
                    <PlanContainer>
                        {this.state.plans.map((plan) => <PlatformCard franquia={this.state.plans} onClick={this.selectPlan}></PlatformCard>)}
                    </PlanContainer>
                </MainContainer>
            )
        }

    }
}