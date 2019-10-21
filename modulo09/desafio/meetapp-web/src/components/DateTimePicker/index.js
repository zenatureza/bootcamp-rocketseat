import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DateTimePicker({ name, placeholder }) {
  const { fieldName, registerField, defaultValue } = useField(name);
  const [selectedDate, setSelectedDate] = useState(defaultValue);

  const ref = useRef(null);

  useEffect(() => {
    if (defaultValue) {
      setSelectedDate(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: inputRef => {
        inputRef.clearValue();
      },
    });
  }, [ref.current, fieldName]);

  return (
    <Container>
      <ReactDatePicker
        ref={ref}
        name={fieldName}
        placeholderText={placeholder}
        locale={pt}
        minDate={new Date()}
        timeformat="HH:mm"
        dateFormat="dd/MM/yyyy ' às ' HH:mm"
        selected={selectedDate}
        showTimeSelect
        onChange={date => setSelectedDate(date)}
      />
    </Container>
  );
}

DateTimePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DateTimePicker.defaultProps = {
  placeholder: '',
};
