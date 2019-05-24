import React from 'react';

import {ex} from '../variables';
import expdef from '../variables';

class Naber extends React.Component {
    componentWillMount(){
    }
    render() {
        return (
            <React.Fragment>

            <p>{`${ex}`}</p>
            <p>{this.props.children}</p>
            </React.Fragment>
        );
    }
}

export default Naber;