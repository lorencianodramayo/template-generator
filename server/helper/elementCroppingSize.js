let elementcroppingsizevalue = '';

const elementCroppingSize = (req,res,uuid,images) =>{
	let str4 = '';
	let str5 = '';
	let widthValue = '';

	let elementSize = '';
	let h = '';
	let w = '';
	//PREPARING ELEMENT CROPPING
	images.forEach((element, index) => {
		//console.log(element.headlinearr.name)

		widthValue = element.headlinearr.wrapperCSS.search("width:");
		heightValue = element.headlinearr.wrapperCSS.search("height:");

		w = element.headlinearr.wrapperCSS.indexOf("px;", widthValue)
		h = element.headlinearr.wrapperCSS.indexOf("px;", heightValue)

		let wi = element.headlinearr.wrapperCSS.substring(widthValue + 6, w);
		let he = element.headlinearr.wrapperCSS.substring(heightValue + 7, h);


		elementSize += `${element.headlinearr.name}:[${wi},${he}] \n`
	});

	str4 = `var ElementImageSize = {\n${elementSize}\n\t\t}`
	str5 = JSON.stringify(str4);
	elemsize1 = JSON.parse(str5);
	//console.log(elemsize1)
	elementcroppingsizevalue = elemsize1;
	//cssCode(req.body.headlines,req,uuid,res, creativesize)
}


module.exports = elementCroppingSize;
