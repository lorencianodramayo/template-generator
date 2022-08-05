
let CssCodeValue = '';

const cssCode = (req,res,uuid) => {
	let CssCodeValue, ChildCSSVal, WrapperCssVal = '';
	let { Headlines } = req.body;

	console.log("*****PREPARING CSS*****")

	Headlines.forEach((element, index) => {
		let { ChildCSS, wrapperCSS, Name } = element.headlinearr;
		WrapperCssVal = wrapperCSS.replace(/\s/g, '');
		WrapperCssVal2 = WrapperCssVal.replace(/;/g, ";\n\t");
		ChildCSSVal = ChildCSS.replace(/\s/g, '');
		ChildCSSVal2 = ChildCSSVal.replace(/;/g, ";\n\t");
		CssCodeValue += `#${Name}-wrapper{\n\t${WrapperCssVal2}\n}\n#${Name}{\n\t${ChildCSSVal2}\n} \n`
	});

	CssCodeValue = CssCodeValue;
	//console.log(CssCodeValue)
	//possibleValues(req,uuid,res, creativesize);
}


module.exports = cssCode;
