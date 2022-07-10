import { connect } from "react-redux";
import { deleteItemFromCartAC, setItemInCartAC } from "../../redux/cartData-reducer";


const ItemBuy = (props) => {

    const handleClick = e => {
        e.stopPropagation();
        props.setItemInCart(props.item)
    }
    console.log(props.cart);
    return (
        <div>
            <div>
                <button onClick={handleClick}>В Корзину</button>
            </div>
        </div>
    )
}

let mapStateToProps = state => ({
    cart: state.cart_Data.itemsInCart
})

let mapDispatchToProps = dispatch => ({
    setItemInCart: (item) => dispatch(setItemInCartAC(item)),
    deleteItemInCart: (id) => dispatch(deleteItemFromCartAC(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemBuy)
