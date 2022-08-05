//requiring path and fs modules
const path = require('path');
const fs = require('fs');
var writeCode = (uuid, CustomJsValue, HtmlTagValue,DefaultValuesValue,CssCodeValue,ElementCroppingSizeValue,possiblevaluesvalue,res, creativesize)=>{

	//Injecting to index.html
	fs.readFile(`generated/${uuid}/index.html`, 'utf8', function(err, Data){
		// Display the file content
			//console.log(Data);
			//var splitted = Data.split('');

			var EncodedString = Buffer.from(`${Data}`, 'utf-8').toString();
			var Matched = EncodedString.split("<!--customjs-->");

			Matched.splice(1, 0, CustomJsValue);
			let AddedCustomJs = `${Matched[0]} ${Matched[1]} ${Matched[2]}`;

			var Matched2 = AddedCustomJs.split("<!--htmltags-->");
			Matched2.splice(1, 0, HtmlTagValue);
			let AddedHtmlTags = `${Matched2[0]} ${Matched2[1]} ${Matched2[2]}`;

			var Matched3 = AddedHtmlTags.split("/*dynamicelement*/");
			Matched3.splice(1, 0, DefaultValuesValue);
			let AddedDefaultValues = `${Matched3[0]} ${Matched3[1]} ${Matched3[2]}`;

			var Matched4 = AddedDefaultValues.split("/*elementcroppingsize*/");
			Matched4.splice(1, 0, ElementCroppingSizeValue);
			let AddedElementCroppingSize = `${Matched4[0]} ${Matched4[1]} ${Matched4[2]}`;

			var Dimension = creativesize[0].replace('s','');
			var Dimension2 = Dimension.replace(/\s/g, '')
			var Matched5 = AddedElementCroppingSize.split("/*creativesize*/");
			Matched5.splice(1, 0, `\"${Dimension2}\"`);
			let AddedCreativeSize = `${Matched5[0]} ${Matched5[1]} ${Matched5[2]}`;
			// console.log(Dimension2)


			fs.writeFile(`generated/${uuid}/index.html`, AddedCreativeSize, {encoding: "utf8"}, (err) => {
			  if (err)
				console.log(err);
			  else {
				console.log("File written successfully [customjs,htmltag,defaultvalues,elementcroppingsize]");
				//console.log("The written has the following contents:");
				//console.log(fs.readFileSync(`generated/${uuid}/index.html`, "utf8"));
			  }
			});

		});

		//Adding CSS CODE to adStyle.css
		fs.readFile(`generated/${uuid}/adStyle.css`, 'utf8', function(err, Data){
			fs.writeFile(`generated/${uuid}/adStyle.css`, CssCodeValue, {encoding: "utf8"}, (err) => {
				if (err)
				  console.log(err);
				else {
				  console.log("File written successfully [csscode]");
				  //console.log("The written has the following contents:");
				  //console.log(fs.readFileSync(`generated/${uuid}/index.html`, "utf8"));
				}
			  });
		});

		res.send({"Data":"done"});

	}

	module.exports = writeCode;
