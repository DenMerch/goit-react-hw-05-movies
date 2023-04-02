import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../Utils/FetchData";
import { BackLink } from "../BackLink/backLink";

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
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />}
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <div>
                <b>Overview</b>
                {movie.overview}
            </div>
            <div>
                <b>Genres</b>
                {movie.genres?.map(item => <span key={item.id}>{item.name}</span>
                )}
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