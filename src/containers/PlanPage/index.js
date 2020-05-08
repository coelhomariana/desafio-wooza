import React from 'react';
import axios from 'axios';

export default class PlanPage extends React.Component {
   constructor(props){
       super(props)

       this.state = {
            plans:[]
        }
   }

   componentDidMount(){
    const baseURL = 'http://private-59658d-celulardireto2017.apiary-mock.com/planos/'
    const apiPath = window.localStorage.getItem('selectedPlatform')
    axios.get(`${baseURL}${apiPath}`).then((response) => {
        this.setState({
            plans: response.data.planos
        })
    })
   }

    selectPlan = (event) => {
    window.localStorage.setItem('selectedPlan', event.target.id)
    this.props.history.push('/formulario')
}

   render(){
       return(
            this.state.plans.map((plan) => <div id={plan.sku} onClick={this.selectPlan}>{plan.franquia}</div>)
       )
   }
}