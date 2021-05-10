import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({name, setOptionValue}) => (
  <div className={styles.component}>
    <input className={styles.input} type='text' placeholder={name}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);
OrderOptionText.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;