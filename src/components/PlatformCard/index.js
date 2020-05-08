import React from 'react';
import { push } from 'react-router-dom';


class PlatformCard extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
        return (
            <div>
                <p onClick={props.history.push('/planos')}>Teste</p>
            </div>
        )
    }
}

export default PlatformCard;