import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

class Tooltip extends Component {
  onMouseLeave = () => {
    if (this.props.callout) {
      this.props.callout(true);
    }
  }

  onMouseEnter = () => {
    if (this.props.callout) {
      this.props.callout(false);
    }
  }

  render() {
    const {
      children,
      id,
      position,
      tooltipContent
    } = this.props;
    return (
      <div data-tip data-for={id} className="tooltip-container" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <span>{children}</span>
        <ReactTooltip id={id} effect='solid' place={position} className="tooltip">
          {tooltipContent}
        </ReactTooltip>
      </div>
    );
  }
}

export default Tooltip;

Tooltip.proptypes = {
  children: PropTypes.element.isRequired,
  tooltipContent: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  callout: PropTypes.func
};