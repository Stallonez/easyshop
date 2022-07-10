import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to='/' className="header__store-title" >
                    Вернуться в магазин
                </Link>
            </div>
            <div></div>
        </div>
    )
}

export default Header;