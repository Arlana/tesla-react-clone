import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                backgroundImg = "model-s.jpg"
                title = "Model S"
                description = "Order Online Touchless Delivery"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
            />
            <Section 
                backgroundImg = "model-y.jpg"
                title = "Model Y"
                description = "Order Online Touchless Delivery"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
            />
            <Section 
                backgroundImg = "model-3.jpg"
                title = "Model 3"
                description = "Order Online Touchless Delivery"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
            />
            <Section 
                backgroundImg = "model-x.jpg"
                title = "Model X"
                description = "Order Online Touchless Delivery"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
            />
            <Section 
                backgroundImg = "solar-panel.jpg"
                title = "Lowest Cost Solar Panels in America"
                description = "Money-back guarantee"
                leftBtnText = "Order now"
                rightBtnText = "learn more"
            />
            <Section 
                backgroundImg = "solar-roof.jpg"
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                leftBtnText = "Order now"
                rightBtnText = "learn more"
            />
            <Section 
                backgroundImg = "accessories.jpg"
                title = "Accessories"
                description = ""
                leftBtnText = "Shop now"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`

