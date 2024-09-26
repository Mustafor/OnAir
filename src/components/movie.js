import Movie1 from '../assets/images/movie 1.png';
import Movie2 from '../assets/images/movie 2.png';
import Movie3 from '../assets/images/movie 3.png';
import Movie4 from '../assets/images/movie 4.png';
import Movie5 from '../assets/images/movie 5.png';
import Movie6 from '../assets/images/movied 6.png';
import Movie7 from '../assets/images/movied 7.png';

function Movie(){
    return (
      <section className='movies-section'>
        <div className='conatiner'>
        <div className='movies'>
          <ul className='movies__list'>
            <li className='movies__item'>
              <img className='movies__img' src={Movie1} alt='movie' width={231} height={348}/>
            </li>
            <li className='movies__item'>
              <img className='movies__img' src={Movie2} alt='movie' width={231} height={348}/>
            </li>
            <li className='movies__item'>
              <img className='movies__img' src={Movie3} alt='movie' width={231} height={348}/>
            </li>
            <li className='movies__item'>
              <img className='movies__img' src={Movie4} alt='movie' width={231} height={348}/>
            </li>
            <li className='movies__item'>
              <img className='movies__img' src={Movie5} alt='movie' width={231} height={348}/>
            </li>
            <li className='movies__item'>
              <img className='movies__img' src={Movie6} alt='movie' width={231} height={348}/>
            </li>
            <li className='movies__item'>
              <img className='movies__img' src={Movie7} alt='movie' width={231} height={348}/>
            </li>
          </ul>
      </div>
    </div>
    </section>
    )
}

export default Movie