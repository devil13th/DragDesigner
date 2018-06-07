import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const alert = {
	id:"alert",
	name : "警告框",
	nameEN : "alert",
	type:"component",
	createFaceDom : function(){
		const faceDom = $(
			'<div class="alert alert-danger" role="alert">'+
			'	<a href="#" class="alert-link">...</a>'+
			'</div>'
		);
		createFaceDomWapper(faceDom[0]);

		//faceDom.attr('style','margin:3px;border:1px dashed #aaa;padding:5px');
		//faceDom.html("");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default alert;