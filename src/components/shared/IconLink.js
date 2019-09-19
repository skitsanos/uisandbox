import React from 'react';
import { Link } from 'rebass';

class IconLink extends React.Component {
  render() {
    const { name, brands, ...rest } = this.props;

    return (
      <Link {...rest} variant="iconlink">
        <i className={`fa${brands ? 'b' : ''} fa-${name}`} />{' '}
        {this.props.children}
      </Link>
    );
  }
}

export default IconLink;
