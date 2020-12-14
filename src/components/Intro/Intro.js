import React, { Component } from 'react'
import styled from 'styled-components'
import {FlexBox} from '../reusuable/styles';

const IntroContainer = styled.div`
margin: 0 auto;
margin-top: 40px;
width: 620px;
height: 320px;
box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
.label {
    font-weight: bold;
}
.me {
    width: 90%;
    height: 150px;
}
.job {
    color: #aaa;
    font-size: 15px;
    letter-spacing: 1.5px;
}
.name {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
    width: 100%;
}
`;

class Intro extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-4" style={{padding: "25px"}}>
                            <img className="me" src={require('../../img/React.png')}/>
                        </div>
                        <div className="flex-6" style={{padding: "30px"}}>
                            <div className="job">Front Developer</div>
                            <div className="name">최아연</div>
                            <br/>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">School</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">Good School</div>
                            </FlexBox>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">Phone</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">010-1234-1234</div>
                            </FlexBox>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">School</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">Good School</div>
                            </FlexBox>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">School</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">Good School</div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                </IntroContainer>
            </div>
        )
    }
}

export default Intro;