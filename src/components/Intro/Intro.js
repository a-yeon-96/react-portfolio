import React, { Component } from 'react'
import styled from 'styled-components'
import {FlexBox} from '../reusuable/styles';
import mypic from '../../img/mypic.png';
import { Icon } from 'semantic-ui-react';

const IntroContainer = styled.div`
position: relative;
margin: 0 auto;
margin-top: 40px;
width: 620px;
height: 320px;
box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
.label {
    font-weight: bold;
}
.me {
    width: 60%;
    height: 200px;
    margin-left: 30px;
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

const InconsBox = styled.div`
position: absolute;
bottom: 0;
height: 70px;
background-color: palegreen;
width: 100%;
padding: 20px 0;
i {
    color: white;
}
.myicon {
    cursor: pointer;
    transition: 0.5s;
}
.github:hover {
    color: black;
}
.adduser:hover {
    color: #e982fb;
}
.linkedin:hover {
    color: #459eef;
}
.mail:hover {
    color: #f38736;
}
`;

class Intro extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className="flex-4" style={{padding: "25px"}}>
                            <img className="me" src={mypic} alt='mypic'/>
                        </div>
                        <div className="flex-6" style={{padding: "30px"}}>
                            <div className="job">Front Developer</div>
                            <div className="name">최아연</div>
                            <br/>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">Birth</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">1996.07.10</div>
                            </FlexBox>         
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">Phone</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">010-4642-1938</div>
                            </FlexBox>  
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">Email</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">3097mk@naver.com</div>
                            </FlexBox>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">School</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">협성대학교</div>
                            </FlexBox>
                            <FlexBox style={{fontSize: "10px"}}>
                                <div className="flex-2 label">Academy</div>
                                <div className="flex-1">&nbsp;</div>
                                <div className="flex-6">인천일보아카데미</div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <InconsBox>
                        <FlexBox>
                            <div className="flex-1"/>
                                <div className="flex-1">
                                    <a href="https://github.com/a-yeon-96">
                                    <Icon className="myicon github" name="github" size="big" />
                                    </a>
                                </div>
                                <div className="flex-1">
                                    <a href="https://www.notion.so/Portfolio-77a807d2ccae486b90545874415bab74">
                                    <Icon className="myicon adduser" name="add user" size="big" />
                                    </a>
                                </div>
                                <div className="flex-1">
                                    <a href="https://www.saramin.co.kr">
                                    <Icon className="myicon linkedin" name="linkedin" size="big" />
                                    </a>
                                </div>
                                <div className="flex-1">
                                    <a href="https://www.naver.com/">
                                    <Icon className="myicon mail" name="mail" size="big" />
                                    </a>
                                </div>
                        </FlexBox>
                    </InconsBox>
                </IntroContainer>
            </div>
        )
    }
}

export default Intro;