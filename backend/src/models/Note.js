const {Schema,model}=require("mongoose");

const noteSchema=new Schema({
	title:String,
	content:{
		type:String,
		required:true,
	},
	cuit:{
		type:Number,
		unique:true,
		trim:true,
		index:true,
		required:true,
	},
	author:String,
	date:{
		type:Date,
		default:Date.now
	}
},{
	timestamps:true
});
module.exports=model("Note",noteSchema);