let elementcroppingsizevalue = '';

const elementCroppingSize = (req,res,uuid) =>{
	let str = '';
	let str2 = '';
	let elementSize = '';
	let { images } = req.body;

	images.forEach((element, index) => {
		let { wrapperCSS, name } = element.headlinearr;
		// search start
		let widthValue = wrapperCSS.search("width:");
		let heightValue = wrapperCSS.search("height:");
		// search end
		let w = wrapperCSS.indexOf("px;", widthValue)
		let h = wrapperCSS.indexOf("px;", heightValue)

		let wi = wrapperCSS.substring(widthValue + 6, w);
		let he = wrapperCSS.substring(heightValue + 7, h);

		elementSize += `${name}:[${wi},${he}] \n`
	});

	str = `var imageElementSizes = {\n${elementSize}\n\t\t}`
	str2 = JSON.stringify(str);
	elemsize1 = JSON.parse(str2);
	elementcroppingsizevalue = elemsize1;
	//console.log(elementcroppingsizevalue)
	//cssCode(req.body.headlines,req,uuid,res, creativesize)
}


module.exports = elementCroppingSize;
