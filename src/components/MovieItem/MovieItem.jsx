import { Link } from "react-router-dom";

export const MovieItem = ({ id, movie }) => {

    return (
        <li >
            <Link to={`/movies/:${movie.id}`}>{movie.title}</Link>
        </li >
    );
}