import React, { Component } from 'react'

export class updateForm extends Component {
    render() {
        return (
            <div>
                 <form onSubmit={this.props.updateBook} >
                    <input type="text" name='title' defaultValue={this.props.bookInfo.title} />
                    <input type="text" name='description' defaultValue={this.props.bookInfo.description} />
                    <input type="text" name='status' defaultValue={this.props.bookInfo.status} />
                    <input type="text" name='email' defaultValue={this.props.bookInfo.email} />
                    <input type="submit" value="Update Book" />
                </form>
            </div>
        )
    }
}

export default updateForm;
