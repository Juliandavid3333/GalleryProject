import norway1 from '../assets/img/Norway1.jpg';
import PropTypes from 'prop-types';

export const Norway1 = ({ className }) => {
  return (
    <img src={norway1} alt="Paisaje Noruega" className={className} />
  )
}

Norway1.propTypes = {
    className: PropTypes.string
}
