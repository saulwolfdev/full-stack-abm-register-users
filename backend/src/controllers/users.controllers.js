const userController={}

userController.getUsers=(req,res)=>res.json({message:"GET CONTROLLER"});
userController.createUser=(req,res)=>res.json({message:"POST CONTROLLER"});
userController.updateUser=(req,res)=>res.json({message:"PUT CONTROLLER"});
userController.deleteUser=(req,res)=>res.json({message:"DELETE CONTROLLER"});

module.exports=userController;