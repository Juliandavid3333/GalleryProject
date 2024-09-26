import norway4 from '../assets/img/Norway4.jpg';
import PropTypes from 'prop-types';

export const Norway4 = ({className}) => {
  return (
    <img src={norway4} alt="Paisaje Noruega" className={className}/>
  )
}

Norway4.propTypes = {
    className: PropTypes.string
}