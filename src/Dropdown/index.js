import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

function Dropdown({ options }) {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <button
        onClick={toggleHidden}
        aria-expanded={!hidden}
        type="button"
        aria-haspopup="menu"
      >
        Dropdown
      </button>
      <div
        role="menu"
        aria-labelledby="dropdown-menu"
        hidden={hidden}
        tabIndex={-1}
      >
        <div role="menuitem" tabIndex={-1}>
          Item 1
        </div>
        <div role="menuitem" tabIndex={-1}>
          Item 2
        </div>
      </div>
    </div>
  );
};

// Dropdown.propTypes = {
//   options: PropTypes.arrayOf({
//     onSelect: PropTypes.func.isRequired,
//     children: PropTypes.children.isRequired,
//   }).isRequired,
// };

export default Dropdown;
