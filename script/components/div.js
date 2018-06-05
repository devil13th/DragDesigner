import {uuid} from '../help/util.js'
import {dragWapper} from '../help/util.js';


const div = {
	id:"div",
	name : "层",
	nameEN : "div",
	template : "<div style='border:1px dashed #aaa'>1</div>",
	createFaceDom : function(){
		const faceDom = $("<div></div>");
		faceDom.attr('style','border:1px dashed #aaa;padding:5px');
		faceDom.html("");
		faceDom[0].id = uuid();
		dragWapper(faceDom[0])
		return faceDom[0];
	}
}
export default div;