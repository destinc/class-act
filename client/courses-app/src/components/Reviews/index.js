import React from 'react'
import Axios from 'axios';
import api from '../../services/apiServices'


class ReviewManager extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            review: ''


        }

    }

    componentDidMount = async (res, req)=>{
        // const resp = await Axios.get(`http://localhost:3001/courses/${this.props.match.params.id}/reviews`, api)
        // this.setState ({
        //     review: resp.data
        // })
        console.log(await Axios.get(`http://localhost:3001/courses/${this.props.match.params.id}/reviews)
    }

    





    render(){
        return(
            <div></div>
        )
    }
}