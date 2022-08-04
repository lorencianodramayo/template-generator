
let htmltagvalue = '';

const htmlTags = (req,uuid,res) => {
	let injectheadlines = "";
	let { headlines } = req.body;

	console.log("*****PREPARING HTML TAGS*****")

	headlines.forEach((element, index) => {
		let { hasShrinkToFit, name, maxFontSize } = element.headlinearr;

		if(hasShrinkToFit == true){
			injectheadlines += `\t\t\t<div id="${name}-wrapper" textResize=true maxFontSize="${maxFontSize}">\n\t\t\t\t<p id="${name}" adlib-text="${name}"></p>\n\t\t\t</div>\n`
		}
		if(hasShrinkToFit == false){
			injectheadlines += `\t\t\t<div id="${name}-wrapper">\n\t\t\t\t<p id="${name}" adlib-text="${name}" ></p>\n\t\t\t</div> \n`
		}
	});

	htmltagvalue = injectheadlines;
	//console.log(htmltagvalue)
	//defaultValues(req.body.headlines, req.body.singleelements, req.body.landingpage,req,uuid,res, creativesize);
}
