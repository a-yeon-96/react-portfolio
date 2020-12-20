import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexBox } from '../reusuable/styles';
import Spring1 from '../../img/23. 판매.PNG';
import Spring2 from '../../img/42. 키오스크 주문 1.PNG';

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
    width: 65%;
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

class Spring extends Component {
    render() {
        return (
            <ReactContainer>
                <FlexBox>
                    <div className="flex-1" style={{ padding: "25px", backgroundColor: "#ffffff" }}>
                        <div className="Project">Spring Project list</div>
                        <br />
                        <FlexBox>
                            <div className="flex-1">
                                <a style={{ color: "black" }} href="https://github.com/loveiee1212/simpleOrder">
                                    1. SimpleOrder 포스&키오스크 (Github)</a></div>
                        </FlexBox>
                        <FlexBox>
                            <img className="list1" src={Spring1} alt='Spring1' />
                            <img className="list2" src={Spring2} alt='Spring2' />
                        </FlexBox>
                    </div>


                </FlexBox>
            </ReactContainer>
        )
    }
}

export default Spring;
