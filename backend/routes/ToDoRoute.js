const {Router} = require("express");
const router = Router(); // Add 'express.' before 'Router'
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/ToDoController");



router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;

