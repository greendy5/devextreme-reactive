import * as React from 'react';
import * as PropTypes from 'prop-types';

export const TableTreeIndent = ({ level }) =>
  Array.from({ length: level })
    .map((value, currentLevel) => (
      <span
        // eslint-disable-next-line react/no-array-index-key
        key={currentLevel}
        className="d-inline-block mr-4"
      />
    ));

TableTreeIndent.propTypes = {
  level: PropTypes.number,
};

TableTreeIndent.defaultProps = {
  level: 0,
};
