import { Component } from "react/cjs/react.production.min";
import styled from 'styled-components';

import img1 from '../../image/1.jpg';
import img2 from '../../image/2.jpg';
import img3 from '../../image/3.jpg';
import img4 from '../../image/4.jpg';

class Imageslider extends Component{

    constructor(props){
        super(props);
        this.state={
            imgcontents:[],
        }

    }

    render(){
        const Styledimgslider = styled.div`
            position:relative;
            top:60vh; left:50vw;
            transform:Translate(-50%, -50%);

            width:40vw; height:40vh;
            border: white solid 5px;

            background-url: ${img1}
        `;

        return(
            <Styledimgslider>

            </Styledimgslider>
        )
    }
}

export default Imageslider;