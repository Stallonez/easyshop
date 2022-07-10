import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { setTabletsItemsAC } from "../../redux/tabletsData-reducer";
import Card from "../Card/Card";
import tabletPhoto from './../../assets/images/tabletphoto.jpg';

class Tablets extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setTabletsItems(response.data.items);
            })
    }
    render() {
        return <div>
            {this.props.tabletsItems.map(item => {
                return <Card item={item} cardPhoto={tabletPhoto} description={'Настольный планшет'} />
            })}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        tabletsItems: state.tablet_Data.tabletsItems
    }
}

let mapDispatchToProps = dispatch => ({
    setTabletsItems: items => dispatch(setTabletsItemsAC(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tablets);