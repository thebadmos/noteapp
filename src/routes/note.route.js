const express = require ('express');
const {getAllNotes, addNote , getNoteById, editNote,deleteNote} = require('../controllers')

const NoteRouter = new express.Router();

NoteRouter.get('/notes', getAllNotes);
NoteRouter.post('/notes', addNote);
NoteRouter.get('/notes/:id', getNoteById);
NoteRouter.patch('/notes/:id', editNote);
NoteRouter.delete('/notes/:id', deleteNote);

module.exports = NoteRouter;