import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../Utils/FetchData";
import { ReviewsItem } from "../ReviewsItem/ReviewsItem";

export const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState('');
    useEffect(() => {
        const getMoviesList = async () => {
            try {
                const responseCredits = await fetchReviewsById(id);
                setReviews(responseCredits.data.results)

            } catch (error) { }
        };
        getMoviesList()

    }, [id])

    return (
        <div>
            {reviews.length !== 0 ? <ul>{reviews.map((item) => (<ReviewsItem key={item.id} data={item} />))}</ul> :
                <p>We don't have any reviews</p>}
        </div>
    )
}