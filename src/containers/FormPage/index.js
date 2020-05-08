import React from 'react';

export default function FormPage(props){
    return (
        <div>
            <form>
                <fieldset>
                    <input></input>
                    <legend>
                        Nome
                    </legend>
                </fieldset>

                <fieldset>
                    <input></input>
                    <legend>
                        E-mail
                    </legend>
                </fieldset>

                <fieldset>
                    <input></input>
                    <legend>
                        Nascimento
                    </legend>
                </fieldset>

                <fieldset>
                    <input></input>
                    <legend>
                        CPF
                    </legend>
                </fieldset>

                <fieldset>
                    <input></input>
                    <legend>
                        Telefone
                    </legend>
                </fieldset>
            </form>

            <button>Enviar</button>
        </div>
    )
}