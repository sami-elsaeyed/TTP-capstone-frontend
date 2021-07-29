import { Component } from "react";
import { connect } from "react-redux";
import { getNews } from '../redux/reducers';
import  './styles.css';


class News extends Component {
    async componentDidMount(){
        console.log("News mounted.");
        await this.props.getNews();
    }

    render(){
        return (
            <>
            <div className="container">
            <div class="news" >
                 <div class="fp-item">
                     <h4 class="headNews" ><span >NEWS</span></h4>
                    {(this.props.news.data !== undefined) ? this.props.news.data.map((entry) => (
                    <>
                    <a href="{entry.url}" style={{fontSize: 22, fontFamily:"sans-serif"}}>{entry.title} <br/></a>
                    <caption style={{fontSize:15}} >
                    Author: {entry.author} <br/>   
                    Category: {entry.category} <br/>
                    Published: {entry.published} <br/>             
                    Source: {entry.source} <br/>
                   
                    <br/>
                    </caption>
                    <hr style={{color:"#007bff",backgroundColor: "#007bff" ,height:5}}/>
                    </>
                ))
                 : <> 
                 Loading News..
                 </>
                } 
                 </div>

            </div>
            

                 </div>
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