import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../constants';

import Spacer from './Spacer';

const PricingCard = () => {
  const [sliderValue, setSliderValue] = useState('1');
  const [pageViews, setPageViews] = useState('10');
  const [yearlyBilling, setYearlyBilling] = useState(false);
  const [price, setPrice] = useState('8');

  useEffect(() => {
    if (sliderValue === '1') {
      setPageViews('10');
      setPrice(yearlyBilling ? addDiscount(8) : '8');
    } else if (sliderValue === '2') {
      setPageViews('50');
      setPrice(yearlyBilling ? addDiscount(12) : '12');
    } else if (sliderValue === '3') {
      setPageViews('100');
      setPrice(yearlyBilling ? addDiscount(16) : '16');
    } else if (sliderValue === '4') {
      setPageViews('500');
      setPrice(yearlyBilling ? addDiscount(24) : '24');
    } else if (sliderValue === '5') {
      setPageViews('1');
      setPrice(yearlyBilling ? addDiscount(36) : '36');
    }
  }, [sliderValue, yearlyBilling]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleBillingChange = () => {
    yearlyBilling ? setYearlyBilling(false) : setYearlyBilling(true);
  };

  const addDiscount = (number) => {
    const newPrice = number * 0.75;
    return newPrice.toString();
  };

  return (
    <Wrapper>
      <PageViewsSliderWrapper>
        <label for='pageViewsPerMonth'>
          <span className='viewCount'>
            {pageViews}
            {sliderValue === '5' ? 'M' : 'K'}
          </span>{' '}
          PAGEVIEWS
        </label>
        <PageViewInput
          type='range'
          id='pageViewsPerMonth'
          name='pageViewsPerMonth'
          max='5'
          min='1'
          value={sliderValue}
          style={{
            '--val': sliderValue,
            '--max': '5',
            '--min': '1',
          }}
          onChange={handleSliderChange}
        />
        <div>
          <span>${price}.00</span> / month
        </div>
        <Billing>
          <span>Monthly Billing</span>
          <Switch>
            <input type='checkbox' onChange={handleBillingChange} />
            <span class='slider round'></span>
          </Switch>
          <span>
            Yearly Billing
            <Spacer axis='horizontal' size='8' />
            <Pill>-25%</Pill>
          </span>
        </Billing>
      </PageViewsSliderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 1em 2em;
  min-height: 300px;
  box-shadow: 0 5px 5px #0000001c, 0 5px 5px -2px #00000014;
`;

const PageViewsSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageViewInput = styled.input`
  --track-w: 24.5em;
  --track-h: 0.8em;
  --thumb-d: 1.5em;
  --track-c: #ebebeb;
  --fill-c: ${COLORS.softCyan};
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * var(--thumb-d) + var(--ratio) * (100% - var(--thumb-d)));

  --fixed-bg-gradient: linear-gradient(
    to right,
    ${COLORS.softCyan},
    ${COLORS.strongCyan}
  );
  --track-fill: ${COLORS.softCyan};

  --thumb-size: 3.2em;
  --thumb-offset: -1.2em;
  --thumb-highlight-size: 0px;
  --thumb-highlight-color: hsl(0, 0%, 5%);

  display: block;
  width: var(--track-w);
  height: var(--track-height);
  margin: 1em 0;
  appearance: none;
  background: transparent;
  outline-offset: 5px;

  &::-webkit-slider-runnable-track {
    box-sizing: border-box;
    border: none;
    border-radius: 5em;
    width: var(--track-w);
    height: var(--track-h);
    background: var(--track-c);
    background: linear-gradient(var(--fill-c), var(--fill-c)) 0 / var(--sx) 100%
      no-repeat var(--track-c);
  }
  &::-moz-range-track {
    box-sizing: border-box;
    border: none;
    border-radius: 5em;
    width: var(--track-w);
    height: var(--track-h);
    background: var(--track-c);
    background: linear-gradient(var(--fill-c), var(--fill-c)) 0 / var(--sx) 100%
      no-repeat var(--track-c);
  }

  &::-moz-range-progress {
    height: var(--track-height);
    background: var(--fill-c);
  }
  &::-ms-fill-lower {
    height: var(--track-height);
    background: var(--fill-c);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    cursor: ew-resize;
    height: var(--thumb-size);
    width: var(--thumb-size);
    margin-top: var(--thumb-offset);
    border-radius: 50%;
    background: url('/images/icon-slider.svg') ${COLORS.strongCyan};
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 8px 12px 0 ${COLORS.softCyan};
    transition: box-shadow 0.1s ease;
  }
  &::-moz-range-thumb {
    appearance: none;
    cursor: ew-resize;
    height: var(--thumb-size);
    width: var(--thumb-size);
    margin-top: var(--thumb-offset);
    border-radius: 50%;
    background: url('/images/icon-slider.svg') ${COLORS.strongCyan};
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 8px 12px 0 ${COLORS.softCyan};
    transition: box-shadow 0.1s ease;
  }

  &:matches(:hover, :active) {
    --thumb-highlight-size: 10px;
  }
`;

const Billing = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Pill = styled.span`
  background: ${COLORS.lightGrayish};
  color: ${COLORS.lightRed};
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 80%;
  font-weight: bold;
`;

const Switch = styled.label`
  /* The switch - the box around the slider */
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  /* Hide default HTML checkbox */
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 7px;
    bottom: 7px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${COLORS.strongCyan};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${COLORS.strongCyan};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default PricingCard;
