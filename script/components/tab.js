import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const tab = {
	id:"tab",
	name : "选项卡",
	nameEN : "tab",
	createFaceDom : function(){
		const faceDom = $("<div></div>");


		const ul = $("<ul></ul>");
		createFaceDomWapper(faceDom[0]);
		ul.addClass("nav nav-tabs");
		
		const tab1 = $("<li><a href='#'>Tab1</a></li>");
		const tab2 = $("<li><a href='#'>Tab2</a></li>");

		tab1.addClass("active");

		
		ul.append(tab1);
		ul.append(tab2);
		faceDom.append(ul);

		faceDom.append($("<div style='clear:both;height:10px;overflow:hidden;'></div>"));

		const contentDiv = $("<div class='panel panel-default'></div>");

		const content1 = $("<div></div>");
		const content2 = $("<div></div>");
		content1.addClass(" panel-body");
		content2.addClass(" panel-body");
		

		content2.hide();
		contentDiv.append(content1);
		contentDiv.append(content2);

		dragTargetWapper(content1[0]);
		dragTargetWapper(content2[0]);

		faceDom.append(contentDiv);


		//tab1.css("border","1px solid #000");
		tab1.click(function(){
			tab1.addClass("active");
			tab2.removeClass("active");
			content1.show();
			content2.hide();
		})
		tab2.click(function(){
			tab2.addClass("active");
			tab1.removeClass("active");
			content2.show();
			content1.hide();
		})

		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		//dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default tab;