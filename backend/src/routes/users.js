const { Router } = require("express");
const router =Router();
//CONTROLLERS
const {createUser,getUsers,updateUser,deleteUser} = require("../controllers/users.controllers");

router.route("/")
	.get(getUsers)
	.post(createUser);

router.route("/:id")
	.put(updateUser)
	.delete(deleteUser);

module.exports=router;