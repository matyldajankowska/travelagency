import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
          name={name}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
  setOrderOption: PropTypes.func,
  type: PropTypes.node,
};

export default OrderOption;