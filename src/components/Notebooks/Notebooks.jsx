import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { setNotesItemsAC } from "../../redux/notebookData-reducer";
import Card from "../Card/Card";
import './Notebooks.css';
import notePhoto from './../../assets/images/notephoto.jpg';

class Notebooks extends React.Component {

    componentDidMount() {
        console.log('CDM');
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setNotesItems(response.data.items);
            })
    }

    render() {
        console.log('render');
        return <div>
            {this.props.notesItems.map(item => {
                return <div className="row-cards">
                    <Card item={item} cardPhoto={notePhoto} description={'Игровой ноутбук'} />
                </div>
            })}
        </div>
    }
}

let mapStateToProps = (state) => ({
    notesItems: state.notebook_Data.notesItems,
});
let mapDispatchToProps = (dispatch) => ({
    setNotesItems: notesItems => dispatch(setNotesItemsAC(notesItems))
})


export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);