const express = require('express');
const router = express.Router();
 const Book = require('../models/book');

 // GET ALL BOOKS
router.get('/', async (req,res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.json({message:error});
    }
});

// ADD NEW BOOK
router.post('/', async (req, res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author
    });
    try{
        const saveBook = await book.save();
        res.json(saveBook);
    } catch(error){
        res.json({message: error
        })}
    
});

// GET Book by ID
router.get('/:id', async (req,res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.json({message: error});
    }
})


// UPDATE Book by ID
router.patch('/:id', async (req,res) => {
    try {
        const book = await Book.updateOne({_id: req.params.id}, {$set: {
            name: req.body.name,
            author: req.body.author
        }});
        res.json(book);
    } catch (error) {
        res.json({message:error});
    }
});
// DELETE Book by ID
router.delete('/:id', async (req,res) => {
    try {
        const removeBook = await Book.remove({_id: req.params.id});
        res.json(removeBook);
    } catch (error) {
        res.json({message: error});
    }
});
module.exports = router;