
let csscodevalue = '';

const cssCode = (req,res,uuid) => {
	let cssCodeValue = '';
	let childcssval = '';
	let wrappercssval = '';
	let { headlines } = req.body;
	console.log("*****PREPARING CSS*****")
	headlines.forEach((element, index) => {
		let { childCSS, wrapperCSS, name } = element.headlinearr;
		wrappercssval = wrapperCSS.replace(/\s/g, '');
		wrappercssval2 = wrappercssval.replace(/;/g, ";\n\t");
		childcssval = childCSS.replace(/\s/g, '');
		childcssval2 = childcssval.replace(/;/g, ";\n\t");
		cssCodeValue += `#${name}-wrapper{\n\t${wrappercssval2}\n}\n#${name}{\n\t${childcssval2}\n} \n`
	});

	csscodevalue = cssCodeValue;
	//console.log(csscodevalue)
	//possibleValues(req,uuid,res, creativesize);
}


module.exports = cssCode;
