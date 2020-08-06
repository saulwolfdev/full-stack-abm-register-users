const notesController={}

notesController.getNotes=(req,res)=>res.json({message:"GET CONTROLLER"});
notesController.getNote=(req,res)=>res.json({message:"GET CONTROLLER"});
notesController.createNote=(req,res)=>res.json({message:"POST CONTROLLER"});
notesController.updateNote=(req,res)=>res.json({message:"PUT CONTROLLER"});
notesController.deleteNote=(req,res)=>res.json({message:"DELETE CONTROLLER"});

module.exports=notesController;