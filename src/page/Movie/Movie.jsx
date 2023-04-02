import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";
import { fetchMovieByTitle } from "../../Utils/FetchData";
import css from './Searchbar.module.css'

export const Movie = () => {
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [movieLists, setMovieLists] = useState('');
    useEffect(() => {
        if (!searchParams.get('query')) return
        const getMoviesList = async () => {
            try {
                const response = await fetchMovieByTitle(searchParams.get("query"));
                setMovieLists(response.data.results);

            } catch (error) { }
        };
        getMoviesList()

    }, [searchParams])
    const handleInput = e => {
        setSearch(e.target.value)
    }
    const handBtnSubmit = e => {
        e.preventDefault()
        setSearchParams({ query: search })
        reset()
    }
    const reset = () => {
        setSearch('')
    }

    return (
        < div >
            <form className={css.SearchForm} onSubmit={handBtnSubmit}>
                <input
                    value={search}
                    className={css.SearchFormInput}
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    onChange={handleInput}
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.SearchFormButton} onClick={handBtnSubmit}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>
            </form>
            {movieLists && <MovieList movieList={movieLists} />}
        </div>

    )
}