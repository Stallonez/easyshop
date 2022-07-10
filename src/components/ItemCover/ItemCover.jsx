import './ItemCover.css';

const ItemCover = ({ img }) => {
    return (
        <div
            className="game-cover"
            style={{ backgroundImage: `url(${img})` }}
        />
    )
}

export default ItemCover;