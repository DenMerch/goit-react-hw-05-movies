import { useEffect, useState } from "react"
import { fetchTrendingMovie } from "../../Utils/FetchData";
import { MovieList } from "../MovieList/MovieList"

export const Home = () => {
    const [movieLists, setMovieLists] = useState('');
    useEffect(() => {
        const getMoviesList = async () => {
            try {
                const response = await fetchTrendingMovie();
                setMovieLists(response.data.results);

            } catch (error) { }
        };
        getMoviesList()

    }, [])

    return (
        <>
            <h1>Tremding toodeay</h1>

            {movieLists && <MovieList movieList={movieLists} />}

        </>

    )
}