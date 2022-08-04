const {upperCase} = require('upper-case');

let defaultvaluesvalue = '';

const defaultValues = (req,res,uuid,headlines, singleelement, landingpage,creativesize) => {
	let str = '\t\t\tcssAttrib:"/*CSS HERE*/",\n';
	let str2 = '';
	let str3 = '';
	let dynamicelement;
	//PREPARING DEFAULT VALUES
	console.log("*****PREPARING DEFAULT VALUES*****")

	headlines.forEach((element, index) => {
		//console.log(element.headlinearr.name)
		let Value;
		if(element.headlinearr.uppercase == true){
			 Value = upperCase(element.headlinearr.value)
			//console.log(Value)
		}else{
			Value = element.headlinearr.value;
		}


		if(element.headlinearr.value == ""){
		//adding space inside qoute
		str += `\t\t\t${element.headlinearr.name}:\"${Value} \", \n`
		}else{
		str += `\t\t\t${element.headlinearr.name}:\"${Value}\", \n`
		}
	});

	singleelement.forEach((element, index) => {
		//console.log(element.headlinearr.name)
		if(element.headlinearr.value == ""){
		//adding space inside qoute
		str += `\t\t\t${element.headlinearr.name}:\"${element.headlinearr.value} \", //${element.headlinearr.comment} \n`
		}else{
		str += `\t\t\t${element.headlinearr.name}:\"${element.headlinearr.value}\", //${element.headlinearr.comment} \n`
		}

	});

	landingpage.forEach((element, index) => {
		//console.log(element.headlinearr.name)
		if(element.headlinearr.value == ""){
		//adding space inside qoute
		str += `\tcssAttrib:"/* CSS Here */",\n\tlandingPage:"${element.headlinearr.value }"\n`
		}else{
		str += `\tcssAttrib:"/* CSS Here */",\n\tlandingPage:"${element.headlinearr.value}"\n`
		}

	});
	//var str = '';

	//	console.log(str)
	str2 = `var defaultValues = {\n${str}\t\t\t}`
	str3 = JSON.stringify(str2);
	dynamicelement = JSON.parse(str3)
	//console.log(dynamicelement)
	defaultvaluesvalue = dynamicelement;
	elementCroppingSize(req.body.images,req,uuid,res, creativesize)
}


module.exports = defaultValues;
