import { Component } from "react/cjs/react.production.min";
import styled from 'styled-components';

import Logo from "./header/Logo";
import Navigation from "./header/Navigation";

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            headerheight:0,
        }
    }

    render(){
        const Styledheader = styled.header`
            position:fixed;
            top: 0; left:0; z-index:9999;

            width: 100%; height:480px;

            padding: 2rem;
            box-sizing: border-box;

            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
        `;
        
        return(
            <Styledheader className="styledheader">
                <Logo/>
                <Navigation/>
            </Styledheader>
        )
    }

    componentDidMount(){
       
    }
}

export default Header;