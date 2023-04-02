import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreditsById } from "../../Utils/FetchData";

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
    console.log(actors);

    return (
        <ul>
            kjegafhbiogahbin
        </ul>
    )
}