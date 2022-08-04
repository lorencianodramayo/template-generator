
// const {upperCase} = require('upper-case');
// const path = require('path');
// const fs = require('fs');
// let customjsvalue = '';
// let htmltagvalue = '';
// let defaultvaluesvalue = '';
// let elementcroppingsizevalue = '';
// let csscodevalue = '';
// let possiblevaluesvalue = '';
// const copyFolder = require('./copyFolder.js');
// const fs = require('fs');
const writeIndex = require('./writeIndex.js')

// var copyFolder = (uuid, req, res, creativesize)=>{
// 	console.log(customjsvalue)

// 	// include fs-extra package
// 	var fs = require("fs-extra");

// 	var source = `templates/Display`
// 	var destination = `generated/${uuid}`

// 	// copy source folder to destination
// 	fs.copy(source, destination, function (err) {
// 		if (err){
// 			console.log('An error occured while copying the folder.')
// 			return console.error(err)
// 		}
// 		console.log('Copy completed!')
// 		customJS(req,uuid,res, creativesize);
// 	});
// 	}


// var customJS = (req,uuid,res, creativesize) => {
// 	var customjsval = '';
// 	//PREPARING CUSTOM JS
// 	console.log("*****PREPARING CUSTOM JS*****")
// 	if(req.body.customJS.splittext){
// 		var splittext = "<script src=\"splittext.min.js\"></script>"
// 		//console.log(splittext)
// 		customjsval +=  "\t\t" + splittext + "\n";

// 		// File destination.txt will be created or overwritten by default.
// 		fs.copyFile(`templates/js/splittext.min.js`, `generated/${uuid}/splittext.min.js`, (err) => {
// 			if (err) throw err;
// 			console.log(`splittext.min.js was copied to generated/${uuid}/`);
// 		});

// 	}
// 	if(req.body.customJS.customease){
// 		var customease = "<script src=\"CustomEase.min.js\"></script>"
// 		//console.log(customease)
// 		customjsval +=  "\t\t" + customease + "\n";

// 		// File destination.txt will be created or overwritten by default.
// 		fs.copyFile(`templates/js/CustomEase.min.js`, `generated/${uuid}/CustomEase.min.js`, (err) => {
// 			if (err) throw err;
// 			console.log(`CustomEase.min.js was copied to generated/${uuid}/`);
// 		});
// 		//console.log(`CustomEase.min.js was copied to generated/${uuid}/`);
// 	}
// 	if(req.body.customJS.googlemap){
// 		var googlemap = '<iframe width="100%" height="100%" id="mapCanvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=\'+defaultValues.locationName+\'&ie=UTF8&iwloc=&output=embed&z=11"></iframe>'
// 		//console.log(googlemap)
// 		customjsval +=  "\t\t" + googlemap + "\n";
// 	}

// 	//console.log(customjsvalue);
// 	//return customjsvalue;
// 	customjsvalue = customjsval;
// 	htmlTags(req.body.headlines,req,uuid,res, creativesize);
// }

// var htmlTags = (headlines, req,uuid,res, creativesize) => {
// 	var injectheadlines = "";
// 	//PREPARING HTML TAGS
// 	console.log("*****PREPARING HTML TAGS*****")
// 	headlines.forEach((element, index) => {
// 		//console.log(element.headlinearr.name)
// 		if(element.headlinearr.hasShrinkToFit == true){
// 			injectheadlines +=
// 			`\t\t\t<div id="${element.headlinearr.name}-wrapper" textResize=true maxFontSize="${element.headlinearr.maxFontSize}">\n\t\t\t\t<p id="${element.headlinearr.name}" adlib-text="${element.headlinearr.name}"></p>\n\t\t\t</div>\n`
// 		}
// 		if(element.headlinearr.hasShrinkToFit == false){
// 			injectheadlines +=
// 			`\t\t\t<div id="${element.headlinearr.name}-wrapper">\n\t\t\t\t<p id="${element.headlinearr.name}" adlib-text="${element.headlinearr.name}" ></p>\n\t\t\t</div> \n`
// 		}
// 	});
// 	//console.log(injectheadlines)
// 	htmltagvalue = injectheadlines;
// 	defaultValues(req.body.headlines, req.body.singleelements, req.body.landingpage,req,uuid,res, creativesize);
// }

// var defaultValues = (headlines, singleelement, landingpage, req,uuid,res, creativesize) => {
// 	var str = '\t\t\tcssAttrib:"/*CSS HERE*/",\n';
// 	var str2 = '';
// 	var str3 = '';
// 	var dynamicelement;
// 	//PREPARING DEFAULT VALUES
// 	console.log("*****PREPARING DEFAULT VALUES*****")
// 	headlines.forEach((element, index) => {
// 		//console.log(element.headlinearr.name)
// 		let Value;
// 		if(element.headlinearr.uppercase == true){
// 			 Value = upperCase(element.headlinearr.value)
// 			//console.log(Value)
// 		}else{
// 			Value = element.headlinearr.value;
// 		}


// 		if(element.headlinearr.value == ""){
// 		//adding space inside qoute
// 		str += `\t\t\t${element.headlinearr.name}:\"${Value} \", \n`
// 		}else{
// 		str += `\t\t\t${element.headlinearr.name}:\"${Value}\", \n`
// 		}
// 	});

// 	singleelement.forEach((element, index) => {
// 		//console.log(element.headlinearr.name)
// 		if(element.headlinearr.value == ""){
// 		//adding space inside qoute
// 		str += `\t\t\t${element.headlinearr.name}:\"${element.headlinearr.value} \", //${element.headlinearr.comment} \n`
// 		}else{
// 		str += `\t\t\t${element.headlinearr.name}:\"${element.headlinearr.value}\", //${element.headlinearr.comment} \n`
// 		}

// 	});

// 	landingpage.forEach((element, index) => {
// 		//console.log(element.headlinearr.name)
// 		if(element.headlinearr.value == ""){
// 		//adding space inside qoute
// 		str += `\tcssAttrib:"/* CSS Here */",\n\tlandingPage:"${element.headlinearr.value }"\n`
// 		}else{
// 		str += `\tcssAttrib:"/* CSS Here */",\n\tlandingPage:"${element.headlinearr.value}"\n`
// 		}

// 	});
// 	//var str = '';

// 	//	console.log(str)
// 	str2 = `var defaultValues = {\n${str}\t\t\t}`
// 	str3 = JSON.stringify(str2);
// 	dynamicelement = JSON.parse(str3)
// 	//console.log(dynamicelement)
// 	defaultvaluesvalue = dynamicelement;
// 	elementCroppingSize(req.body.images,req,uuid,res, creativesize)
// }


// var elementCroppingSize = (images, req,uuid,res, creativesize) =>{
// 	var str4 = '';
// 	var str5 = '';
// 	var widthValue = '';

// 	var elementSize = '';
// 	var h = '';
// 	var w = '';
// 	//PREPARING ELEMENT CROPPING
// 	images.forEach((element, index) => {
// 		//console.log(element.headlinearr.name)

// 		widthValue = element.headlinearr.wrapperCSS.search("width:");
// 		heightValue = element.headlinearr.wrapperCSS.search("height:");

// 		w = element.headlinearr.wrapperCSS.indexOf("px;", widthValue)
// 		h = element.headlinearr.wrapperCSS.indexOf("px;", heightValue)
// 		var wi = element.headlinearr.wrapperCSS.substring(widthValue + 6, w);
// 		var he = element.headlinearr.wrapperCSS.substring(heightValue + 7, h);


// 		elementSize += `${element.headlinearr.name}:[${wi},${he}] \n`
// 	});

// 	str4 = `var ElementImageSize = {\n${elementSize}\n\t\t}`
// 	str5 = JSON.stringify(str4);
// 	elemsize1 = JSON.parse(str5);
// 	//console.log(elemsize1)
// 	elementcroppingsizevalue = elemsize1;
// 	cssCode(req.body.headlines,req,uuid,res, creativesize)
// }

// var cssCode = (headlines, req,uuid,res, creativesize) => {
// 	var cssCodeValue = '';
// 	var childcssval = '';
// 	var wrappercssval = '';
// 	//PREPARING CSS
// 	console.log("*****PREPARING CSS*****")
// 	headlines.forEach((element, index) => {
// 		//console.log(element.headlinearr.name)

// 		wrappercssval = element.headlinearr.wrapperCSS.replace(/\s/g, '');
// 		wrappercssval2 = wrappercssval.replace(/;/g, ";\n\t");
// 		childcssval = element.headlinearr.childCSS.replace(/\s/g, '');
// 		childcssval2 = childcssval.replace(/;/g, ";\n\t");
// 		cssCodeValue += `#${element.headlinearr.name}-wrapper{\n\t${wrappercssval2}\n}\n#${element.headlinearr.name}{\n\t${childcssval2}\n} \n`
// 	});
// 	//console.log(cssCodeValue)
// 	csscodevalue = cssCodeValue;
// 	possibleValues(req,uuid,res, creativesize);
// }



// var possibleValues = (req,uuid,res, creativesize) => {
// //PREPARING CUSTOM JS
// console.log("*****PREPARING POSSIBLE VALUES*****")
//     writeIndex(uuid, customjsvalue,htmltagvalue,defaultvaluesvalue,csscodevalue,elementcroppingsizevalue,possiblevaluesvalue,res, creativesize)
// }




module.exports = {copyFolder, customJS, customjsvalue, htmlTags,possibleValues,cssCode, elementCroppingSize, defaultValues}
