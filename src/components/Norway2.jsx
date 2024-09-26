import norway2 from '../assets/img/Norway2.jpg';
import PropTypes from 'prop-types';

export const Norway2 = ({className}) => {
  return (
    <img src={norway2} alt="Paisaje Noruega" className={className} />
  )
}

Norway2.propTypes = {
    className: PropTypes.string
}