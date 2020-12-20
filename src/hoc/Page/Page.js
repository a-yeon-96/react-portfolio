import React, { Component } from 'react'
import Intro from '../../components/Intro/Intro';
import Reactjs from '../../components/Reactjs/Reactjs';
import Spring from '../../components/Spring/Spring';
import Java from '../../components/Java/Java';

class Page extends Component {
    displayPage = (no)=>{
        switch(no){
            case 0:
                return <Intro/>;
            case 1:
                return <Reactjs/>;
            case 2:    
                return <Spring/>;
            default:
                return <Java/>;
        }
    };
    render() {
        return <div>{this.displayPage(this.props.page)}</div>;
    }
}

export default Page;
