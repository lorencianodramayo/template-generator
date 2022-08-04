
// include fs-extra package
let fs = require("fs-extra");

const copyFolder = (req,res,uuid)=>{

	let source = `templates/Display`
	let destination = `generated/${uuid}`

	// copy source folder to destination
	fs.copy(source, destination, function (err) {
		if (err){
			console.log('An error occured while copying the folder.')
			return console.error(err)
		}
		console.log('Copy completed!')
		//customJS(req,uuid,res, creativesize);
	});
	}


module.exports = copyFolder;
