const {upperCase} = require('upper-case');

let defaultvaluesvalue = '';

const defaultValues = (req,res,uuid) => {
	let str = '\t\t\tcssAttrib:"/*CSS HERE*/",\n';
	let str2 = '';
	let str3 = '';
	let dynamicelement;
	let {headlines, singleelement, landingpage} = req.body;

	console.log("*****PREPARING DEFAULT VALUES*****")

	headlines.forEach((element, index) => {
		let newvalue;
		let { name, value, uppercase } = element.headlinearr;
		//converting to uppercase
		if(uppercase == true){
			 newvalue = upperCase(value)
		}else{
			newvalue = value;
		}
		//adding space if the value is empty
		if(element.headlinearr.value == ""){
			str += `\t\t\t${name}:\" \", \n`
		}else{
			str += `\t\t\t${name}:\"${newvalue}\", \n`
		}
	});

	singleelement.forEach((element, index) => {
		let { name, value, 	comment } = element.headlinearr;
		//adding space if the value is empty
		if(value == ""){
			str += `\t\t\t${name}:\" \", //${comment} \n`
		}else{
			str += `\t\t\t${name}:\"${value}\", //${comment} \n`
		}
	});

	landingpage.forEach((element, index) => {
		let {value} = element.headlinearr;
		//adding space if the value is empty
		if(value == ""){
			str += `\tlandingPage:" "\n`
		}else{
			str += `\tlandingPage:"${value}"\n`
		}
	});
	//	console.log(str)
	str2 = `var defaultValues = {\n${str}\t\t\t}`
	str3 = JSON.stringify(str2);
	dynamicelement = JSON.parse(str3)
	//console.log(dynamicelement)
	defaultvaluesvalue = dynamicelement;
	//elementCroppingSize(req.body.images,req,uuid,res, creativesize)
}


module.exports = defaultValues;
