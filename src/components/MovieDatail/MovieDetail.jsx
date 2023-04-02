import { useParams } from "react-router-dom";

export const MovieDetail = () => {
    const { id } = useParams();

    console.log(id);
    return (
        <>{id}</>
    )
}