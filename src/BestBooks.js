import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import Databook from "./components/Databook";
import { Row } from "react-bootstrap";
import Bookform from "./components/Bookform";
import UpdateForm from "./components/updateForm";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BookData: [],
      showUpdateForm:false,
      searchQuery: "",
      bookInfoUpdate:{}
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

  addBook = async (e) => {
    e.preventDefault();
    console.log("addBook func");

    let bookFormInfo = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    let newData = await axios.post(
      `${process.env.REACT_APP_SERVER}/addBook`, bookFormInfo);
    

    this.setState({
      BookData : newData.data,
      books: newData.data,
    });
  };

  deleteBook = async (bookID) =>{
    console.log('inside book')
    console.log(bookID)

    let newBook = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBook?bookID=${bookID}&email=${this.state.email}`)

    this.setState({
      BookData : newBook.data,
      books: newBook.data
    })
  }

  showUpdateForm = async (bookInfo) =>{

    await this.setState({
      showUpdateForm: true,
      bookInfoUpdate : bookInfo
    })
  }

  updateBook = async (e) =>{
    e.preventDefault();

    console.log('bookInfo' , this.state.bookInfoUpdate._id);

    let bookFormInfo = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,

      bookID: this.state.bookInfoUpdate._id,
    }

    let newBook = await axios.put(`${process.env.REACT_APP_SERVER}/updateBook`, bookFormInfo);

    this.setState({
      BookData : newBook.data,
      books: newBook.data
    })
  }



  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>This is a collection of my favorite books</p>
        </Jumbotron>
        <Row>
          {this.state.BookData.map((element, index) => {
            return <Databook key={index} book={element} 
            deleteFunc={this.deleteBook} showUpdateForm={this.showUpdateForm}/>;
          })}

         
        </Row>
        <Bookform addBookFun={this.addBook} />




        {this.state.showUpdateForm && 
        <UpdateForm 
        bookInfo={this.state.bookInfoUpdate}
        updateBook={this.updateBook}/>}

      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
