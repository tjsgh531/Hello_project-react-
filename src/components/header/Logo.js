import { Component  } from "react/cjs/react.production.min";
import styled from 'styled-components';

class Logo extends Component{

    render(){
        const Styledlogo = styled.div`
            .logo{
                position: relative;
                width: 360px;
            
                cursor: pointer;

                border:30px solid red;
            }
            .logo_hello{
                font-size: 100px;
                font-weight: 700;
                color:white;
            }
            .logo_project{
                margin-bottom: 5px;
            
                width: 100%;
            
                background-color: white;
            
                color: black;
                text-align: center;
                font-weight: 600;
                font-size:18px;
            }
            .logo_spot{
                width: 1rem;
                height:1rem;
                border-radius: 50%;
                background: white;
            }
        `;
    
        return(
            <Styledlogo className="logo">
                <div className="logo_hello">HELLO</div>
                <div className="logo_project">PROJECT</div>
                <div className="logo_spot"></div>
            </Styledlogo>
        )
    }
}

export default Logo;