
let csscodevalue = '';

const cssCode = (req,res,uuid,headlines) => {
	let cssCodeValue = '';
	let childcssval = '';
	let wrappercssval = '';
	//PREPARING CSS
	console.log("*****PREPARING CSS*****")
	headlines.forEach((element, index) => {
		//console.log(element.headlinearr.name)

		wrappercssval = element.headlinearr.wrapperCSS.replace(/\s/g, '');
		wrappercssval2 = wrappercssval.replace(/;/g, ";\n\t");
		childcssval = element.headlinearr.childCSS.replace(/\s/g, '');
		childcssval2 = childcssval.replace(/;/g, ";\n\t");
		cssCodeValue += `#${element.headlinearr.name}-wrapper{\n\t${wrappercssval2}\n}\n#${element.headlinearr.name}{\n\t${childcssval2}\n} \n`
	});
	//console.log(cssCodeValue)
	csscodevalue = cssCodeValue;
	//possibleValues(req,uuid,res, creativesize);
}


module.exports = cssCode;
