const router = require('express').router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
  removeThought,
} = require('../../controller/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
