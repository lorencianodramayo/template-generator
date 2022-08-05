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
		//let NewValue;
		let { Name, Value, UpperCase } = element.headlinearr;
		//converting to uppercase
		if(UpperCase == true){
			Value = upperCase(Value)
		}else{
			Value = Value;
		}
		//adding space if the value is empty
		if(Value == ""){
			str += `\t\t\t${Name}:\" \", \n`
		}else{
			str += `\t\t\t${Name}:\"${Value}\", \n`
		}
	});

	SingleElement.forEach((element, index) => {
		let { Name, Value, Comment } = element.headlinearr;
		//adding space if the value is empty
		if(Value == ""){
			str += `\t\t\t${Name}:\" \", //${Comment} \n`
		}else{
			str += `\t\t\t${Name}:\"${Value}\", //${Comment} \n`
		}
	});

	LandingPage.forEach((element, index) => {
		let { Value } = element.headlinearr;
		//adding space if the value is empty
		if(Value == ""){
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
