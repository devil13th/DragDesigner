import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const inputText = {
	id:"inputText",
	name : "文本框",
	nameEN : "inputText",
	createFaceDom : function(){
		const faceDom = $("<input type='text' class='form-control input-md' value='文本框'/>");
		createFaceDomWapper(faceDom[0]);
		//faceDom.attr('style','border:1px solid #ccc;height:20px;line-height:20px;padding:1px 3px');
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		return faceDom[0];
	}
}
export default inputText;