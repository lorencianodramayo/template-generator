
const fs = require('fs');

let customjsvalue = '';

const customJS = (req,uuid,res) => {
	let customjsval = '';
	//PREPARING CUSTOM JS
	console.log("*****PREPARING CUSTOM JS*****")
	if(req.body.customJS.splittext){
		let splittext = "<script src=\"splittext.min.js\"></script>"
		//console.log(splittext)
		customjsval +=  "\t\t" + splittext + "\n";

		// File destination.txt will be created or overwritten by default.
		fs.copyFile(`templates/js/splittext.min.js`, `generated/${uuid}/splittext.min.js`, (err) => {
			if (err) throw err;
			console.log(`splittext.min.js was copied to generated/${uuid}/`);
		});

	}
	if(req.body.customJS.customease){
		let customease = "<script src=\"CustomEase.min.js\"></script>"
		//console.log(customease)
		customjsval +=  "\t\t" + customease + "\n";

		// File destination.txt will be created or overwritten by default.
		fs.copyFile(`templates/js/CustomEase.min.js`, `generated/${uuid}/CustomEase.min.js`, (err) => {
			if (err) throw err;
			console.log(`CustomEase.min.js was copied to generated/${uuid}/`);
		});
		//console.log(`CustomEase.min.js was copied to generated/${uuid}/`);
	}
	if(req.body.customJS.googlemap){
		let googlemap = '<iframe width="100%" height="100%" id="mapCanvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=\'+defaultValues.locationName+\'&ie=UTF8&iwloc=&output=embed&z=11"></iframe>'
		//console.log(googlemap)
		customjsval +=  "\t\t" + googlemap + "\n";
	}

	customjsvalue = customjsval;
	//htmlTags(req.body.headlines,req,uuid,res, creativesize);
}


module.exports = customJS;
