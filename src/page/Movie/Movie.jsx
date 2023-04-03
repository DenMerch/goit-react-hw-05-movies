import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";
import { fetchMovieByTitle } from "../../Utils/FetchData";
import { Form } from '../../components/Form/Form'

export const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieLists, setMovieLists] = useState('');
    const query = searchParams.get('query') ?? '';
    useEffect(() => {
        if (!query) return
        const getMoviesList = async () => {
            try {
                const response = await fetchMovieByTitle(query);
                setMovieLists(response.data.results);

            } catch (error) { }
        };
        getMoviesList()

    }, [query])
    const setParams = (value) => {
        setSearchParams({ query: value })
    };

    return (
        < div >
            <Form submit={setParams} />
            {movieLists && <MovieList movieList={movieLists} />}
        </div>

    )
}