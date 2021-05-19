import React from 'react';
import styled from "styled-components";

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    // console.log(props);
    return (
        <Wrap bgImg ={backgroundImg}>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>

            <Buttons>
                <ButtonGroup>
                    <LeftBtn>
                        { leftBtnText }
                    </LeftBtn>
                    {rightBtnText && 
                    <RightBtn>
                        { rightBtnText }
                    </RightBtn>
                    }
                    
                </ButtonGroup>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    // background: darkblue;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media all and (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftBtn = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    color: white;
    height: 40px;
    width: 256px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
`

const RightBtn = styled(LeftBtn)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`