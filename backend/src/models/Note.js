const {Schema,model}=require("mongoose");

const noteSchema=new Schema({
	name:String,
	email:String,
	direction:String,
	phone:String,
	cuit:{
		type:Number,
		unique:true,
		trim:true,
		index:true,
		required:true,
	},
	content:{
		type:String,
		required:true,
	},
	registeredManager:String,
	date:{
		type:Date,
		default:Date.now
	}
},{
	timestamps:true
});
module.exports=model("Note",noteSchema);