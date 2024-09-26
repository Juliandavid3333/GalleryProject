import { Link } from 'react-router-dom';
import { Norway1 } from './Norway1';
import { Norway2 } from './Norway2';
import { Norway3 } from './Norway3';
import { Norway4 } from './Norway4';
import { Norway5 } from './Norway5';


export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/norway1' className='links'>
        <figure className='thumbnail-image-size'>
          <Norway1 />
          <figcaption>Noruega 1</figcaption>
        </figure>
      </Link>
      <Link to='/norway2' className='links'>
        <figure className='thumbnail-image-size'>
          <Norway2 />
          <figcaption>Noruega 2</figcaption>
        </figure>
      </Link>
      <Link to='/norway3' className='links'>
        <figure className='thumbnail-image-size'>
          <Norway3 />
          <figcaption>Noruega 3</figcaption>
        </figure>
      </Link>
      <Link to='/norway4' className='links'>
        <figure className='thumbnail-image-size'>
          <Norway4 />
          <figcaption>Noruega 4</figcaption>
        </figure>
      </Link>
      <Link to='/norway5' className='links'>
        <figure className='thumbnail-image-size'>
          <Norway5 />
          <figcaption>Noruega 5</figcaption>
        </figure>
      </Link>
    </div>
  )
}