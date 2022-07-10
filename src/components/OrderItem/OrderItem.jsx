import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../../../unit_5/src/store/cart/reducer";
import ItemCover from "../ItemCover/ItemCover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './OrderItem.css';


const OrderItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(item.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <ItemCover img={item.img} />
            </div>
            <div className="order-item__title">
                {item.title}
            </div>
            <div className="order-item__price">
                <span>{item.price} руб.</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}

export default OrderItem;