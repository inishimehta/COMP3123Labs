const express = require("express")
const BookModel = require("../models/books")
const { default: mongoose } = require("mongoose")

const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {
    BookModel.find()
        .then((books) => {
            res.status(200).json({
                status: true,
                message: "Books fetched successfully",
                count: books.length,
                data: books
            })
        })
        .catch((err) => {
            res.status(500).json({
                status: false,
                message: err.message
            })
        })
})

//Add NEW Book
routes.post("/books", async (req, res) => {
    const newBookData = req.body
    try {
            const newBookModel = new BookModel(newBookData)
            const newBook = await newBookModel.save()
            res.status(200).json({
                status: true,
                message: "New Book added successfully",
                data: newBook
            })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }

})

//Update existing Book By Id
routes.put("/book/:bookid", async (req, res) => {
    const bookId = req.params.bookid
    const updateData = req.body

    try {
        if(!mongoose.Types.ObjectId.isValid(bookId)){
            return res.status(400).json({
                status: false,
                message: "Invalid Book ID"
            })
        }

         //logic to update book by id
        const updatedBook = await BookModel.findByIdAndUpdate(bookId, updateData, {new: true})
        if(!updatedBook) {
            return res.status(404).json({
                status: false,
                message: `Book not found for id: ${bookId}`
            })
        }

        res.status(200).json({
            status: true,
            message: `Book updated successfully for id: ${bookId}`,
            data: updatedBook,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})
   

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    const bookId = req.params.bookid

    try {
        if(!mongoose.Types.ObjectId.isValid(bookId)){
            return res.status(400).json({
                status: false,
                message: "Invalid Book ID"
            })
        }
        
         //logic to delete book by id
         const deletedBook = await BookModel.findByIdAndDelete(bookId)
         if(!deletedBook) {
             return res.status(404).json({
                 status: false,
                 message: `Book not found for id: ${bookId}`
             })
         }

        res.status(200).json({
            status: true,
            message: `Book deleted successfully for id: ${bookId}`,
            data: deletedBook,
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
    const bookId = req.params.bookid

    if(!mongoose.Types.ObjectId.isValid(bookId)){
        return res.status(400).json({
            status: false,
            message: "Invalid Book ID"
        })
    }
    
    //logic to get book by id
    const book = await BookModel.findById(bookId)
    //const book = await BookModel.findOne({_id: bookId})
    //const book = await BookModel.findOne({title: 'book title 2'})
    //const book = await BookModel.find({_id: bookId})

    if(!book) {
        return res.status(404).json({
            status: false,
            message: `Book not found for id: ${bookId}`
        })
    }

    res.status(200).json({
        status: true,
        message: `Book fetched successfully for id: ${bookId}`,
        data: book,
    })
   
})

//Get All Books in sorted order
routes.get("/books/sort", async (req, res) => {

    try {
        const books = await BookModel.find().sort({title: 1}) //1 for ascending order, -1 for descending order
        res.status(200).json({
            status: true,
            message: "Books fetched and sorted successfully",
            count: books.length,
            data: books
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
})

module.exports = routes