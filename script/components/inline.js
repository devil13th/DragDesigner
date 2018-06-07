import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const inline = {
	id:"inline",
	name : "内联层",
	nameEN : "inline",
	type:"container",
	createFaceDom : function(){
		const faceDom = $("<div></div>");
		createFaceDomWapper(faceDom[0]);

		faceDom.attr('style','display:inline-block;padding:5px;border:1px dashed #aaa;');
		faceDom.html("");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default inline;