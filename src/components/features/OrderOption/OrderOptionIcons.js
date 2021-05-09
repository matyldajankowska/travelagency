import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({values, required, setOptionValue}) => {
    return(
      <div
        className={styles.icon}
      >
        {required ? '' : (
          <div
            className={styles.icon}
            onClick={() => setOptionValue('')}
          >
            <Icon
              className={styles.icon}
              name={'times-circle'}
            />
            none
          </div>
        )}
        {values.map(value => (
          <div
            className={styles.icon}
            key={value.id}
            onClick={value => setOptionValue(value.id)}
          >
            <Icon name={value.icon} />
            {value.name}
            ({formatPrice(value.price)})
          </div>
        ))}
      </div>
    );};
  
  OrderOptionIcons.propTypes ={
    values: PropTypes.array,
    setOptionValue: PropTypes.func,
    required: PropTypes.bool,
  };
  
  export default OrderOptionIcons;