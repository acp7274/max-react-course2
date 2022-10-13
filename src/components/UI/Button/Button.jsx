// import styled from 'styled-components';
import styles from "./Button.module.css";
import React from "react";
// const Button = styled.button`
//   margin-top: .5rem;
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #000;
//   color: white;
//   background: #116e77;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   @media (min-width: 768px) {
//     width: auto;
//     background: #8b005d;
//   }
//   &:focus {
//     outline: none;
//   }
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;