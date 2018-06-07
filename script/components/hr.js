import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const hr = {
	id:"hr",
	name : "分割线",
	nameEN : "hr",
	type:"component",
	createFaceDom : function(){
		const faceDom = $("<hr></hr>");
		createFaceDomWapper(faceDom[0]);

		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		dragWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default hr;