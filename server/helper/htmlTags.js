
let HtmlTagValue = '';

const htmlTags = (req,uuid,res) => {
	let InjectHeadlines = "";
	let { Headlines } = req.body;

	console.log("*****PREPARING HTML TAGS*****")

	Headlines.forEach((element, index) => {
		let { ShrinkToFit, Name, MaxFontSize } = element.headlinearr;

		if(ShrinkToFit == true){
			InjectHeadlines += `\t\t\t<div id="${Name}-wrapper" textResize=true maxFontSize="${MaxFontSize}">\n\t\t\t\t<p id="${Name}" adlib-text="${Name}"></p>\n\t\t\t</div>\n`
		}
		if(ShrinkToFit == false){
			InjectHeadlines += `\t\t\t<div id="${Name}-wrapper">\n\t\t\t\t<p id="${Name}" adlib-text="${Name}" ></p>\n\t\t\t</div> \n`
		}
	});

	HtmlTagValue = InjectHeadlines;
	//console.log(HtmlTagValue)
	//defaultValues(req.body.headlines, req.body.singleelements, req.body.landingpage,req,uuid,res, creativesize);
}
