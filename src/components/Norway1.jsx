import norway1 from '../assets/img/Norway1.jpg';
import PropTypes from 'prop-types';

export const Norway1 = ({props}) => {
  return (
    <img src={norway1} alt="Paisaje Noruega" className={props.className} />
  )
}

Norway1.propTypes = {
    className: PropTypes.string
}
