//requiring path and fs modules
const path = require('path');
const fs = require('fs');
var writeCode = (uuid, customjsvalue, htmltagvalue,defaultvaluesvalue,csscodevalue,elementcroppingsizevalue,possiblevaluesvalue,res, creativesize)=>{
	//console.log(customjsvalue)


	//Injecting to index.html
	fs.readFile(`generated/${uuid}/index.html`, 'utf8', function(err, data){
		// Display the file content
			//console.log(data);
			//var splitted = data.split('');

			var encodedString = Buffer.from(`${data}`, 'utf-8').toString();
			var matched =encodedString.split("<!--customjs-->");

			matched.splice(1, 0, customjsvalue);
			let addedcustomjs = `${matched[0]} ${matched[1]} ${matched[2]}`;

			var matched2 = addedcustomjs.split("<!--htmltags-->");
			matched2.splice(1, 0, htmltagvalue);
			let addedhtmltags = `${matched2[0]} ${matched2[1]} ${matched2[2]}`;

			var matched3 = addedhtmltags.split("/*dynamicelement*/");
			matched3.splice(1, 0, defaultvaluesvalue);
			let addeddefaultvalues = `${matched3[0]} ${matched3[1]} ${matched3[2]}`;

			var matched4 = addeddefaultvalues.split("/*elementcroppingsize*/");
			matched4.splice(1, 0, elementcroppingsizevalue);
			let addedelementcroppingsize = `${matched4[0]} ${matched4[1]} ${matched4[2]}`;

			var dimension = creativesize[0].replace('s','');
			var dimension2 = dimension.replace(/\s/g, '')
			var matched5 = addedelementcroppingsize.split("/*creativesize*/");
			matched5.splice(1, 0, `\"${dimension2}\"`);
			let addedcreativesize = `${matched5[0]} ${matched5[1]} ${matched5[2]}`;
			console.log(dimension2)


			fs.writeFile(`generated/${uuid}/index.html`, addedcreativesize, {encoding: "utf8"}, (err) => {
			  if (err)
				console.log(err);
			  else {
				console.log("File written successfully [customjs,htmltag,defaultvalues]");
				//console.log("The written has the following contents:");
				//console.log(fs.readFileSync(`generated/${uuid}/index.html`, "utf8"));
			  }
			});

		});

		//Adding CSS CODE to adStyle.css
		fs.readFile(`generated/${uuid}/adStyle.css`, 'utf8', function(err, data){
			fs.writeFile(`generated/${uuid}/adStyle.css`, csscodevalue, {encoding: "utf8"}, (err) => {
				if (err)
				  console.log(err);
				else {
				  console.log("File written successfully [csscode]");
				  //console.log("The written has the following contents:");
				  //console.log(fs.readFileSync(`generated/${uuid}/index.html`, "utf8"));
				}
			  });
		});

		res.send({"data":"done"});

	}

	module.exports = writeCode;
