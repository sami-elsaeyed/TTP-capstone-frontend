import { Component } from "react";
import { connect } from "react-redux";
import { getNews } from '../redux/reducers';

class News extends Component {
    async componentDidMount(){
        console.log("News mounted.");
        await this.props.getNews();
    }

    render(){
        return (
            <>
            <h1>News</h1>
                {
                this.props.news.data !== undefined ? this.props.news.data.map((entry) => (
                    <>
                    Title: {entry.title} <br/>
                    Author: {entry.author} <br/>   
                    Category: {entry.category} <br/>
                    Published: {entry.published} <br/>             
                    Source: {entry.source} <br/>
                    URL: {entry.url} <br/>
                    <br/>
                    </>

                                        )) : <h1>Loading News</h1>
                
                
                
                }  
            </>
        )
    }

}

const mapStateToProp = (state) => {
    console.log('MAPPING STATE TO PROPS');
    return {
        news: state.news,
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log('MAPPING DISPATCH TO PROPS');
    return { 
        getNews: () => dispatch(getNews())
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(News);