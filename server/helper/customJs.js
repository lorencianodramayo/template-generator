
const fs = require('fs');

let customjsvalue = '';

const customJS = (req,uuid,res) => {
	let customjsval = '';
	let {splittext,customease,googlemap } = req.body.customJS;
	console.log("*****PREPARING CUSTOM JS*****")
	if(splittext){
		let splittextscript = "<script src=\"splittext.min.js\"></script>"
		customjsval +=  "\t\t" + splittextscript + "\n";
		fs.copyFile(`templates/js/splittext.min.js`, `generated/${uuid}/splittext.min.js`, (err) => {
			if (err) throw err;
			console.log(`splittext.min.js was copied to generated/${uuid}/`);
		});
	}
	if(customease){
		let customeasescript = "<script src=\"CustomEase.min.js\"></script>"
		customjsval +=  "\t\t" + customeasescript + "\n";
		fs.copyFile(`templates/js/CustomEase.min.js`, `generated/${uuid}/CustomEase.min.js`, (err) => {
			if (err) throw err;
			console.log(`CustomEase.min.js was copied to generated/${uuid}/`);
		});
	}
	if(googlemap){
		let googlemapiframe = '<iframe width="100%" height="100%" id="mapCanvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=\'+defaultValues.locationName+\'&ie=UTF8&iwloc=&output=embed&z=11"></iframe>'
		customjsval +=  "\t\t" + googlemapiframe + "\n";
	}
	customjsvalue = customjsval;
	//console.log(customjsvalue);
	//htmlTags(req.body.headlines,req,uuid,res, creativesize);
}


module.exports = customJS;
