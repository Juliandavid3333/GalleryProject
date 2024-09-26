import norway2 from '../assets/img/Norway2.jpg';
import PropTypes from 'prop-types';

export const Norway2 = ({props}) => {
  return (
    <img src={norway2} alt="Paisaje Noruega" className={props} />
  )
}

Norway2.propTypes = {
    className: PropTypes.string
}