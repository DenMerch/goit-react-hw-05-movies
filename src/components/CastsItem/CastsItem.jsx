export const CastItem = ({ item }) => {

    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt="profile_path" />
            <p>{item.name}</p>
            <p>Chadacter: {item.character}</p>
        </li>
    )
}