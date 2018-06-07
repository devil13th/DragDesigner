

import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';




const button = {
	id:"button",
	name : "按钮",
	nameEN : "button",
	type:"component",
	createFaceDom : function() {
		const faceDom = $("<button class='btn btn-primary btn-md '></button>");
		createFaceDomWapper(faceDom[0]);
		//faceDom.attr('style','border:1px solid #aaa,border-radius:25px;height:24px;line-height:24px;');
		faceDom.html("按钮");
		faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		return faceDom[0];
	}
}




export default button;