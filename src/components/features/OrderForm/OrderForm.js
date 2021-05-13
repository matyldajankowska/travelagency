import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import PropTypes from 'prop-types';

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({options, tripCost, setOrderOption}) => (
  <Row>
    {pricing.map(option => (
      <Col md={4} key={option.id}>
        <OrderOption currentValue={options[option.id]} {...option} 
        setOrderOption={setOrderOption} />
      </Col>
    ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
        <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
      </Col>
  </Row>
  );

  OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.any,
    setOrderOption: PropTypes.func,
    name: PropTypes.string,
    tripDetails: PropTypes.object,
  };
  
  export default OrderForm;