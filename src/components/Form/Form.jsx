import { useState } from 'react';
import css from './Searchbar.module.css'
export const Form = ({ submit }) => {
    const [search, setSearch] = useState('');
    const handleInput = e => {
        setSearch(e.target.value)
    }
    const handBtnSubmit = e => {
        e.preventDefault()
        submit(search)
        reset()
    }
    const reset = () => {
        setSearch('')
    }
    return (
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
    )
}