

import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const button = {
	id:"button",
	name : "按钮",
	nameEN : "button",
	//template : "<button style='border:1px solid #aaa,border-radius:3px;height:24px;line-height:24px;'>按钮</button>",
	createFaceDom : function() {
		const faceDom = $("<button></button>");

		createFaceDomWapper(faceDom[0]);

		faceDom.attr('style','border:1px solid #aaa,border-radius:25px;height:24px;line-height:24px;');
		faceDom.attr('draggable',true);
		faceDom.html("按钮");

		faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		return faceDom[0];
	}
}




export default button;