import React from 'react';
import TextField from '@material-ui/core/TextField';
import MainContainer from '../../components/styles/MainContainer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class FormPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            mail: "",
            birthdate: "",
            cpf: "",
            phone: "",
            ready: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    printUserInfo = () => {
        const selectedPlatform = window.localStorage.getItem('selectedPlatform')
        const selectedPlan = window.localStorage.getItem('selectedPlan')
        console.log(`
        Plataforma: ${selectedPlatform}
        Plano: ${selectedPlan}
        Nome: ${this.state.name}
        E-mail: ${this.state.mail}
        Nascimento: ${this.state.birthdate}
        CPF: ${this.state.cpf}
        Telefone: ${this.state.phone}
        `)
    }


    render() {
        return (
            <div>
                <MainContainer>
                    <Typography variant="h6">Preencher dados:</Typography>
                    <TextField id="outlined-basic" label="Nome" variant="outlined" name="name" value={this.state.name} onChange={this.handleChange} />
                    <TextField id="outlined-basic" type="email" label="E-mail" variant="outlined" name="mail" value={this.state.mail} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="Nascimento" variant="outlined" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="CPF" variant="outlined" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
                    <TextField id="outlined-basic" label="Telefone" variant="outlined" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    <Button variant="contained" color="primary" onClick={this.printUserInfo}>Enviar</Button>
                </MainContainer>
            </div>
        )
    }

}