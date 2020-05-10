import React from 'react';
import axios from 'axios';
import { Typography, LinearProgress } from '@material-ui/core';
import MainContainer from '../../components/styles/MainContainer';
import PlatformCard from '../../components/PlatformCard';

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

    selectPlan = (id) => {
        window.localStorage.setItem('selectedPlan', id)
        this.props.history.push('/formulario')
    }

    render() {
        if (this.state.ready === false) {
            return (
                <MainContainer>
                    <LinearProgress />
                </MainContainer>
            )
        } else {
            return (
                <MainContainer>
                    <Typography>Selecionar plano:</Typography>
                        {this.state.plans.map((plan) => <PlatformCard franquia={plan.franquia} valor={plan.valor} ativo={plan.ativo} onClick={()=> this.selectPlan(plan.sku)}></PlatformCard>)}
                </MainContainer>
            )
        }

    }
}