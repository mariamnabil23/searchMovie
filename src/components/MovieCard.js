import React from 'react'
import './MovieCard.css'

const MovieCard = ({movie}) => {
    return (
        <div className='movie-card'>

            <div className='movie-poster'>
                {
                movie.Poster ? (<img src={movie.Poster} alt={movie.Title} />)
                : (<div className='filler-poster'></div>)
                }
            </div>

            <div className='movie-info'>
                <div className='movie-head'>
                    <h2>{movie.Title}</h2>
                    {movie.Year ? <h4>{movie.Year}</h4> : <h4>published year not found</h4>}
                </div>
            </div>

        </div>
    )
}

export default MovieCard;
