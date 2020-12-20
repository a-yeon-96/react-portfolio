import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexBox } from '../reusuable/styles';
import Java1 from '../../img/세미프로젝트 (홈페이지).PNG';
import Java2 from '../../img/티몬 프론트.PNG';

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
    width: 60%;
    height: 180px;
    margin-right: 30px;
    padding: 0 10px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    border: 2px solid black;
}
.list2 {
    width: 30%;
    height: 180px;
    margin-right: 30px;
    padding: 0 10px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    border: 2px solid black;
}
`;

class Java extends Component {
    render() {
        return (
            <ReactContainer>
                <FlexBox>
                    <div className="flex-1" style={{ padding: "25px", backgroundColor: "#ffffff" }}>
                        <div className="Project">Java Project list</div>
                        <br />
                        <FlexBox>
                            <div className="flex-2">1. 소개팅사이트</div>
                            <div className="flex-1">2. 티몬 프론트(벤치마킹)</div>
                        </FlexBox>
                        <FlexBox>
                            <img className="list1" src={Java1} alt='Java1' />
                            <img className="list2" src={Java2} alt='Java2' />
                        </FlexBox>
                    </div>


                </FlexBox>
            </ReactContainer>
        )
    }
}

export default Java;
