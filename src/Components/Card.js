import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #262626;
  border-radius: 5px;
  margin: 0 0 55px 0;
  transition: all .3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.19);
  &:hover{
    transform: scale(1.2);
    cursor: pointer;
  }
`
const Button = styled.div`
  background: #262626;
  color: #fafafa;
  padding: 8px 0 8px 10px;
  &:hover {
    background: #fafafa;
    border-top: 1px solid #262626;
    border-radius: 5px;
    color: #262626;
  } 
`

const Card = ({ title, tag }) => {
  return (
    <ScrollAnimation animateIn='fadeInUp'>
      <Container>
        <div style={{ padding: '0 0 0 15px' }}>
          <h2 style= {{margin: '50px 0 15px 0'}}>{title}</h2>
        </div>
        <Button>
          <a href={`https://github.com/josephdodge8141/${tag}`} target="_blank" rel='noreferrer'>
            <p>View in Github</p>
          </a>
        </Button>
      </Container>
    </ScrollAnimation>
  );
}
export default Card