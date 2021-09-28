import React, { Component } from "react";


 class Bookform extends Component {
  render() {

    return (
      <div>
        <form onSubmit={this.props.addBookFun}>
          <input type="text" name="title" placeholder="enter book title" />
          <br/>
          <input type="text" name="description" placeholder="enter description" />
          <br/>
          <input type="text" name="status" placeholder="enter status" />
          <br/>
          <input type="text" name="email" placeholder="enter email" />
          <br/>
          <input type="submit" value="Add book" />
        </form>
      </div>
    );
  }
}

export default Bookform;
