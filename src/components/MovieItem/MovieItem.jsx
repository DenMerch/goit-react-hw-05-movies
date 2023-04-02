import { Link } from "react-router-dom";
import css from './MovieItem.module.css'

export const MovieItem = ({ id, title }) => {

    return (
        <li className={css.movieItem}>
            <Link to={`/movies/${id}`}>{title}</Link>
        </li >
    );
}