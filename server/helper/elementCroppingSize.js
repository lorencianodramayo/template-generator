let ElementCroppingSizeValue = '';

const elementCroppingSize = (req,res,uuid) =>{
	let str, str2, ElementSize = '';
	let { Images } = req.body;

	Images.forEach((element, index) => {
		let { WrapperCss, Name } = element.headlinearr;
		// search start
		let WidthValue = WrapperCss.search("width:");
		let HeightValue = WrapperCss.search("height:");
		// search end
		let w = WrapperCss.indexOf("px;", WidthValue)
		let h = WrapperCss.indexOf("px;", HeightValue)

		let wi = WrapperCss.substring(WidthValue + 6, w);
		let he = WrapperCss.substring(HeightValue + 7, h);

		ElementSize += `${Name}:[${wi},${he}] \n`
	});

	str = `var imageElementSizes = {\n${ElementSize}\n\t\t}`
	str2 = JSON.stringify(str);
	ElemSize1 = JSON.parse(str2);
	ElementCroppingSizeValue = ElemSize1;
	//console.log(ElementCroppingSizeValue)
	//cssCode(req.body.headlines,req,uuid,res, creativesize)
}


module.exports = elementCroppingSize;
