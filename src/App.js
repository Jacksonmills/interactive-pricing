import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Hero from './components/Hero';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import PricingCard from './components/PricingCard';
import Spacer from './components/Spacer';
import PatternBackground from './components/svg/PatternBackground';
import PatternCircles from './components/svg/PatternCircles';

export const App = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Background>
          <PatternBackground />
        </Background>
        <Foreground>
          <Hero
            title='Simple, traffic-based pricing'
            description='Sign-up for our 30-day trial. No credit card required.'
            svg={<PatternCircles />}
          />
          <Spacer axis='vertical' size='48' />
          <PricingCard />
        </Foreground>
      </MaxWidthWrapper>
      <GlobalStyles />
    </>
  );
};

const Foreground = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  svg {
    width: 100%;
  }
`;
