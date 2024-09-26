import norway3 from '../assets/img/Norway3.jpg';
import PropTypes from 'prop-types';

export const Norway3 = ({className}) => {
  return (
    <img src={norway3} alt="Noruega Paisaje" className={className} />
  )
}

Norway3.propTypes = {
    className: PropTypes.string
}