// Create web server
// 1. Import express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// 2. Create a router
// 3. Define router
router.get('/comments', commentController.getComments);
router.get('/comments/:id', commentController.getCommentById);
router.post('/comments', commentController.postComment);
router.put('/comments/:id', commentController.putComment);
router.delete('/comments/:id', commentController.deleteComment);

// 4. Export router
module.exports = router;