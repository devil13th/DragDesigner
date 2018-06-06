import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const tab = {
	id:"tab",
	name : "选项卡",
	nameEN : "tab",
	createFaceDom : function(){
		const faceDom = $("<div></div>");

		createFaceDomWapper(faceDom[0]);

		faceDom.attr('style','margin:3px;border:1px dashed #aaa;padding:5px');
		
		const tab1 = $("<div style='cursor:pointer;float:left;width:50px;height:20px;line-height:20px;'>tab1</div>");
		const tab2 = $("<div style='cursor:pointer;float:left;width:50px;height:20px;line-height:20px;'>tab2</div>");

		const hd = $("<div style='overflow:hidden;'></div>");
		hd.append(tab1);
		hd.append(tab2);
		faceDom.append(hd);

		faceDom.append($("<div style='clear:both'></div>"));
		const content1 = $("<div style='height:200px;border:1px solid red;'></div>");
		const content2 = $("<div style='height:200px;border:1px solid red;'></div>");

		content2.hide();


		dragTargetWapper(content1[0]);
		dragTargetWapper(content2[0]);

		

		faceDom.append(content1);
		faceDom.append(content2);

		tab1.css("border","1px solid #000");
		tab1.click(function(){
			content1.show();
			content2.hide();
			tab1.css("border","1px solid #000");
			tab2.css("border","1px solid #fff");
		})
		tab2.click(function(){
			content2.show();
			content1.hide();
			tab2.css("border","1px solid #000");
			tab1.css("border","1px solid #fff");
		})

		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		//dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default tab;