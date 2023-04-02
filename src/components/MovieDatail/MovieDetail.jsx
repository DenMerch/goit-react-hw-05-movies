import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../Utils/FetchData";
import { BackLink } from "../BackLink/backLink";
import css from './MovieDetail.module.css'

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    useEffect(() => {
        const getMoviesList = async () => {
            try {
                const responseMovie = await fetchMovieById(id);

                setMovie(responseMovie.data);

            } catch (error) { }
        };
        getMoviesList()

    }, [id])

    return (
        <div>
            <BackLink to={backLinkHref}>Go back</BackLink>
            <div className={css.wrap}>

                {<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />}
                <div>
                    <h2>{movie.title}</h2>
                    <p>User score: {Math.round(movie.vote_average * 10)}%</p>
                    <b>Overview: </b>
                    <p>{movie.overview}</p>

                    <b>Genres: </b>
                    <p >{movie.genres?.map(item => <span key={item.id}>{item.name} </span>
                    )}</p>

                </div>

            </div>

            <div>
                <b>Additional Information</b>
                <ul>
                    <li>
                        <Link to={`/movies/${id}/cast`}>Cast</Link>
                    </li>
                    <li><Link to={`/movies/${id}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>

        </div>

    )
}