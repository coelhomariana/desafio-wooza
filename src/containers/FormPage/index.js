import React from 'react';
import TextField from '@material-ui/core/TextField';
import MainContainer from '../../components/styles/MainContainer';
import Typography from '@material-ui/core/Typography';

export default function FormPage(props) {
    return (
        <div>
            <MainContainer>
                <Typography>Preencher dados:</Typography>
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField id="outlined-basic" label="Nascimento" variant="outlined" />
                <TextField id="outlined-basic" label="CPF" variant="outlined" />
                <TextField id="outlined-basic" label="Telefone" variant="outlined" />
                <button>Enviar</button>
            </MainContainer>
        </div>
    )
}