import { Link } from "react-router-dom";
import React from "react";

const BookList = () => {
    return (
        <div>
            <h1>Welcome to the Bookpage</h1>
            <p>Discover a world of books at your fingertips.</p>
            <p>Expore</p>
            <Link to="/">Go to Home List</Link>
        </div>
    );
}

export default BookList;
// bookstore-app/src/data/booksData.js
// ข้อมูลหนังสือ