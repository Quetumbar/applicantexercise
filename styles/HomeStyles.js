import styled from "styled-components";

//Animation
const { motion } = require("framer-motion");

export const HomePageWrapper = styled(motion.div)`
    width: 100vw !important;
    height: 100vh !important;
    margin: 0;
    padding: 0;
    position:relative;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #f7f7f9;
`;