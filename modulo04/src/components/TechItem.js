import React from 'react';
import PropTypes from 'prop-types';

// another way is: function TechItem(props) { const tech = props.tech; }
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button
        type="button"
        onClick={onDelete}>
        Remover
    </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;