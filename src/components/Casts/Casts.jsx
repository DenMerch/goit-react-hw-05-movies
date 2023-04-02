import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreditsById } from "../../Utils/FetchData";
import { CastItem } from "../CastsItem/CastsItem";

export const Cast = () => {
    const { id } = useParams();
    const [actors, setActors] = useState('');
    useEffect(() => {
        const getMoviesList = async () => {
            try {
                const responseCredits = await fetchCreditsById(id);
                setActors(responseCredits.data.cast)

            } catch (error) { }
        };
        getMoviesList()

    }, [id])
    return (
        <ul>
            {actors && actors.map(actor => (<CastItem key={actor.id} item={actor} />))}
        </ul>
    )
}