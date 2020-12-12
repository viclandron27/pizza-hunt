const router = require('express').Router();
const { 
    addComment, 
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:_id').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:_id/:commentId')
    .put(addReply)
    .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:_id/:commentId/:replyId').delete(removeReply);

module.exports = router;