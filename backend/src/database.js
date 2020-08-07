
const mongoose=require("mongoose");

const URI = process.env.MONGOOSE_URI? process.env.MONGOOSE_URI: 'mongodb://localhost/mernstackabm';
mongoose.connect(URI,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology: true,
	useFindAndModify:false
});
const connection=mongoose.connection;

connection.once("open",()=>{
	console.log(`DB is connected ${URI}`);
});