import styled from 'styled-components';

const Hero = (props) => {
  const { title, description, svg } = props;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Background>{svg}</Background>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const Background = styled.span`
  svg {
    width: 100%;
  }
`;

export default Hero;
