const notesController={}

const Note=require("../models/Note");


notesController.getNotes= async (req,res)=>{
	const notes=await Note.find();
	res.json(notes)
};
notesController.createNote=async(req,res)=>{
	console.log(req.body);
	const {title,content,date,author}= req.body;
	const newNote=new Note({
		title,
		content,
		date,
		author
	});
		await newNote.save();
	console.log(`created a ${newNote}`);
	res.json({message:"Note Saved"});
	 
};
notesController.getNote=async(req,res)=>{
    const note=await Note.findById(req.params.id);
	console.log("this is the ID ",note);
	res.json(note)
};

notesController.updateNote=async(req,res)=>{
	const {title,content,date,author}=req.body;
	await Note.findOneAndUpdate({_id:req.params.id},{
		title,
		content,
		date,
		author
	});
	
	res.json({message: "Note Update"});
}
notesController.deleteNote=async(req,res)=>{
    const note=await Note.findByIdAndDelete(req.params.id);
	console.log("this is the ID removed ",note);
	res.json({message: "Note Delete"});
}

module.exports=notesController;