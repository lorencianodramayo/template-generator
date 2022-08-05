const {upperCase} = require('upper-case');

let DefaultValuesValue = '';

const defaultValues = (req,res,uuid) => {
	let str = '\t\t\tcssAttrib:"/*CSS HERE*/",\n';
	let str2 = '';
	let str3 = '';
	let DynamicElement;
	let { Headlines, SingleElement, LandingPage } = req.body;

	console.log("*****PREPARING DEFAULT VALUES*****")

	Headlines.forEach((element, index) => {
		let NewValue;
		let { Name, Value, uppercase } = element.headlinearr;
		//converting to uppercase
		if(uppercase == true){
			 NewValue = upperCase(Value)
		}else{
			NewValue = Value;
		}
		//adding space if the value is empty
		if(Value == ""){
			str += `\t\t\t${Name}:\" \", \n`
		}else{
			str += `\t\t\t${Name}:\"${NewValue}\", \n`
		}
	});

	SingleElement.forEach((element, index) => {
		let { Name, Value, comment } = element.headlinearr;
		//adding space if the value is empty
		if(value == ""){
			str += `\t\t\t${Name}:\" \", //${comment} \n`
		}else{
			str += `\t\t\t${Name}:\"${Value}\", //${comment} \n`
		}
	});

	LandingPage.forEach((element, index) => {
		let { Value } = element.headlinearr;
		//adding space if the value is empty
		if(value == ""){
			str += `\tlandingPage:" "\n`
		}else{
			str += `\tlandingPage:"${Value}"\n`
		}
	});
	//	console.log(str)
	str2 = `var defaultValues = {\n${str}\t\t\t}`
	str3 = JSON.stringify(str2);
	DynamicElement = JSON.parse(str3)
	//console.log(DynamicElement)
	DefaultValuesValue = DynamicElement;
	//elementCroppingSize(req.body.images,req,uuid,res, creativesize)
}


module.exports = defaultValues;
