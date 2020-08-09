const notesController={};

const Note=require("../models/Note");


notesController.getNotes= async (req,res)=>{
	const notes=await Note.find();
	res.json(notes)
};
notesController.createNote=async(req,res,next)=>{
	console.log(req.body);
	const {name,email,direction,phone,registeredManager,content,date,cuit}= req.body;
	const newNote=new Note({
		name,
		email,
		direction,
		phone,
		registeredManager,
		content,
		date,
		cuit,
	});
	await newNote.save().then((noteSaved)=>{
		console.log(`created a ${newNote}`);
		 res.status(200)
	    res.json({message:"Note Saved"});
	}).catch((error) => {
	if(error.code === 11000)
		    res.status(403).json({
			status: 403,
			statusCode: 403,
			name: 'DuplicateError',
			message: 'Ya existe el usuario'
		});
	else
		next(error);
});
	
	 
};
notesController.getNote=async(req,res)=>{
    const note=await Note.findById(req.params.id);
	console.log("this is the ID ",note);
	res.json(note)
};

notesController.updateNote=async(req,res)=>{
	const {name,email,direction,phone,registeredManager,content,date,cuit}=req.body;
	await Note.findOneAndUpdate({_id:req.params.id},{
		name,
		email,
		direction,
		phone,
		registeredManager,
		content,
		date,
		cuit,
	});
	
	res.json({message: "Note Update"});
};
notesController.deleteNote=async(req,res)=>{
    const note=await Note.findByIdAndDelete(req.params.id);
	console.log("this is the ID removed ",note);
	res.json({message: "Note Delete"});
};

module.exports=notesController;