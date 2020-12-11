const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:_id').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:_id/:commentId').delete(removeComment);

module.exports = router;