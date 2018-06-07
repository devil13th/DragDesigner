import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const span = {
	id:"span",
	name : "文本",
	nameEN : "span",
	createFaceDom : function(){
		const faceDom = $("<span></span>");

		createFaceDomWapper(faceDom[0]);

		faceDom.attr('style','display:inline-block;border:1px dashed #aaa;background:#eee;');
		faceDom.html("文本");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		dragTargetWapper(faceDom[0]);


		return faceDom[0];
	}
}
export default span;