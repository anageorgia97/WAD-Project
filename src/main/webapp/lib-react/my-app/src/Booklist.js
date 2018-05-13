import React, { Component } from 'react';
import Book from './Book';

class Booklist extends Component{



        render() {
            // console.log(this.props.title);
            const books = this.props.title.map(book => <Book isLogged={this.props.isLogged} title={book.title} id={book.id} rating={book.rating} avalability={book.noAvailableCopies}/>);
            return (
                <ul id="content">{books}</ul>
            );
        }
}

export default Booklist;