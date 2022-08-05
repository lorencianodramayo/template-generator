
const fs = require('fs');

let CustomJsValue = '';

const customJS = (req,uuid,res) => {
	let CustomJsVal = '';
	let { SplitText, CustomEase, GoogleMap } = req.body.CustomJS;
	console.log("*****PREPARING CUSTOM JS*****")
	if(SplitText){
		let SplitTextScript = "<script src=\"splittext.min.js\"></script>"
		customjsval +=  "\t\t" + SplitTextScript + "\n";
		fs.copyFile(`templates/js/splittext.min.js`, `generated/${uuid}/splittext.min.js`, (err) => {
			if (err) throw err;
			console.log(`splittext.min.js was copied to generated/${uuid}/`);
		});
	}
	if(CustomEase){
		let CustomEaseScript = "<script src=\"CustomEase.min.js\"></script>"
		CustomJsVal +=  "\t\t" + CustomEaseScript + "\n";
		fs.copyFile(`templates/js/CustomEase.min.js`, `generated/${uuid}/CustomEase.min.js`, (err) => {
			if (err) throw err;
			console.log(`CustomEase.min.js was copied to generated/${uuid}/`);
		});
	}
	if(GoogleMap){
		let GoogleMapIframe = '<iframe width="100%" height="100%" id="mapCanvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=\'+defaultValues.locationName+\'&ie=UTF8&iwloc=&output=embed&z=11"></iframe>'
		CustomJsVal +=  "\t\t" + GoogleMapIframe + "\n";
	}
	CustomJsValue = CustomJsVal;
	//console.log(CustomJsValue);
	//htmlTags(req.body.headlines,req,uuid,res, creativesize);
}


module.exports = customJS;
