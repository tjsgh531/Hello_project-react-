import { Component } from "react/cjs/react.production.min";
import styled from 'styled-components';

class Navigation extends Component{
    render(){
        const Stylednav = styled.nav`
            width: 360px;
            margin-right: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        `;
        const Stylednav_div = styled.div`            
            padding: 3px 10px;
            background-color: white;
        
            font-weight: 400;
            color: black;
        
            cursor: pointer;    
            
        `;

        return(
            <Stylednav className="global_nav">
                <Stylednav_div className="nav_content">ABOUT</Stylednav_div>
                <Stylednav_div className="nav_content">CAMPAIGN</Stylednav_div>
                <Stylednav_div className="nav_content">PRODUCT</Stylednav_div>
            </Stylednav>
        )
    }
}

export default Navigation;