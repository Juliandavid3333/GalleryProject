import norway5 from '../assets/img/Norway5.jpg';
import PropTypes from 'prop-types';

export const Norway5 = ({props}) => {
  return (
   <img src={norway5} alt='Paisaje Noruega' className={props} />
  )
}

Norway5.propTypes = {
    className: PropTypes.string
}
