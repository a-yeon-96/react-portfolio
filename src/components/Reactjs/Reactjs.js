import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexBox } from '../reusuable/styles';
import react1 from '../../img/react 1.PNG';
import react2 from '../../img/react 2.PNG';

const ReactContainer = styled.div`
position: relative;
margin: 0 auto;
margin-top: 40px;
width: 620px;
height: 320px;
box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
.Project {
    color: #aaa;
    font-size: 20px;
    letter-spacing: 1.5px;
    border-bottom: 0.5px solid black;
    padding-bottom: 10px;
}
.flex-1 {
    padding: 0 20px;
}
.list1 {
    width: 35%;
    height: 180px;
    margin-right: 30px;
    padding: 0 10px 0 30px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    border: 2px solid black;
}
.list2 {
    width: 60%;
    height: 180px;
    margin-right: 30px;
    padding: 0 10px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    border: 2px solid black;
}
`;



class Reactjs extends Component {
    render() {
        return (
            <ReactContainer>
                <FlexBox>
                    <div className="flex-1" style={{ padding: "25px", backgroundColor: "#ffffff" }}>
                        <div className="Project">React Project list</div>
                        <br />
                        <FlexBox>
                            <div className="flex-1">
                                <a style={{ color: "black" }} href="https://github.com/a-yeon-96/react-app.git">
                                    1. React 입문 (Github)</a>
                            </div>
                            <div className="flex-1">
                                <a style={{ color: "black" }} href="https://github.com/a-yeon-96/react-portfolio.git">
                                    2. React 포트폴리오 (Github)</a>
                            </div>
                        </FlexBox>
                        <FlexBox>
                            <img className="list1" src={react1} alt='react1' />
                            <img className="list2" src={react2} alt='react2' />
                        </FlexBox>
                    </div>
                </FlexBox>
            </ReactContainer>
        )
    }
}

export default Reactjs;
