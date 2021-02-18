import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { set_data } from '../../store/action'
class Home extends React.Component {
    static getDerivedStateFromProps(props, state) {
        console.log("Props=>",props)
        return {

        }
    }
    render() {
        let user = {
            name: "Mubashir",
            email: "mubashir@gmail.com"
        }
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={() => this.props.set_data(user)}>Set Data</button>
            </div>
        );
    }
}
const mapStateToProps = (state /*, ownProps*/) => {

    return {
        user: state.user

    }
}
const mapDispatchToProp = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data))
})

//   const mapDispatchToProp = (dispatch) => ({
//     set_data: (data) => { dispatch(set_data(data)) }
//   })
export default connect(mapStateToProps, mapDispatchToProp)(Home); 