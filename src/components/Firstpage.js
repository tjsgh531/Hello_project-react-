import React, { Component } from 'react';
import styled from 'styled-components';

import Imageslider from './firstpage/Imageslider';

class Firstpage extends Component{
    render(){
        const Styledfirstpage = styled.div`
            position:relative;    
            width:100vw; height:200vh;

            background: black;


        `;
        return(
            <Styledfirstpage>
                <Imageslider/>                
            </Styledfirstpage>
        )
    }
}

export default Firstpage;