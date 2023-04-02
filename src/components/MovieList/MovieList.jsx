import { MovieItem } from "../MovieItem/MovieItem"

export const MovieList = ({ movieList }) => {


    return (
        < ul >
            {movieList.map((item) => (<MovieItem key={item.id} id={item.id} title={item.title} />))}
        </ul >
    )
}