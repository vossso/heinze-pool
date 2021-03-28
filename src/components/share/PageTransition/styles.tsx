import { motion } from "framer-motion";
import styled from "styled-components";

export const MotionCurtain = styled(motion.div)`
  z-index: 9999;
  position: fixed;
  top: 100vh;
  left: 0px;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1e3769;
  opacity: 0.8;

  will-change: transform;
`;
