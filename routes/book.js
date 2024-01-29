const { Router } = require("express");
const { getBooks, getBook, postBook, patchBook, deleteBook } = require("../controllers/book");

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBook);

router.patch('/:id', patchBook);

router.delete('/:id', deleteBook);

router.post('/', postBook);

module.exports = router;
