
let htmltagvalue = '';

const htmlTags = (headlines, req,uuid,res, creativesize) => {
	let injectheadlines = "";
	//PREPARING HTML TAGS
	console.log("*****PREPARING HTML TAGS*****")
	headlines.forEach((element, index) => {
		//console.log(element.headlinearr.name)
		if(element.headlinearr.hasShrinkToFit == true){
			injectheadlines +=
			`\t\t\t<div id="${element.headlinearr.name}-wrapper" textResize=true maxFontSize="${element.headlinearr.maxFontSize}">\n\t\t\t\t<p id="${element.headlinearr.name}" adlib-text="${element.headlinearr.name}"></p>\n\t\t\t</div>\n`
		}
		if(element.headlinearr.hasShrinkToFit == false){
			injectheadlines +=
			`\t\t\t<div id="${element.headlinearr.name}-wrapper">\n\t\t\t\t<p id="${element.headlinearr.name}" adlib-text="${element.headlinearr.name}" ></p>\n\t\t\t</div> \n`
		}
	});
	//console.log(injectheadlines)
	htmltagvalue = injectheadlines;
	//defaultValues(req.body.headlines, req.body.singleelements, req.body.landingpage,req,uuid,res, creativesize);
}
