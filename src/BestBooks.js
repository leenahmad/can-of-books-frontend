import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Databook from './components/Databook'
import { Row } from "react-bootstrap";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BookData: [],
      searchQuery: "",
    };
  }

  componentDidMount = async () => {
    let email1 = this.props.auth0.user.email;
    let bookURL = `${process.env.REACT_APP_SERVER}/books?email=${email1}`;
    let data = await axios.get(bookURL);

    await this.setState({
      BookData: data.data,
    });
    console.log("array data ", this.state.BookData);
  };

  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        </Jumbotron>
        <Row>
         {this.state.BookData.map((element, index) =>{
           return(
             <Databook key={index} book={element}/>
           )
         })}
      </Row>
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
