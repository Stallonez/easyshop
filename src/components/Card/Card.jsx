import ItemBuy from '../ItemBuy/ItemBuy';
import './Card.css';


const Card = (props) => {

    let getStatePrice = (price) => {
        let numberPrice = Number(price)
        let result = numberPrice + (numberPrice / 100) * 10
        return result
    }
    // console.log(props.item);
    return (
        <div className="mainCard">
            <div className='creditInfo_flex_container'>
                <div className='creditInfo_flex_element'>
                    <div className='year'>
                        0-0-12
                    </div>
                </div>
                <div className='creditInfo_flex_element'>
                    <div className='percent'>
                        -10%
                    </div>
                </div>
            </div>
            <div className="imgCard">
                <img src={props.item.photos.small === null ? props.cardPhoto : props.item.photos.small} alt="" className="imgCard" />
            </div>
            <div className='productInfo'>
                <div>{props.description}</div>
                <div>{props.item.name}</div>
            </div>
            <div className='priceInfo'>
                <div className='priceInfo__currentPrice'>{props.item.id}</div>
                <div className='priceInfo__discountPrice'>{getStatePrice(props.item.id)}</div>
            </div>
            <div>
                <ItemBuy item={props.item} />
            </div>
        </div>
    )
}

export default Card;