import norway4 from '../assets/img/Norway4.jpg';
import PropTypes from 'prop-types';

export const Norway4 = ({props}) => {
  return (
    <img src={norway4} alt="Paisaje Noruega" className={props}/>
  )
}

Norway4.propTypes = {
    className: PropTypes.string
}