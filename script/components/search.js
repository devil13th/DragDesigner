import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const search = {
	id:"search",
	name : "搜索框",
	nameEN : "search",
	createFaceDom : function(){
		const faceDom = $(
			'<div class="input-group">'+
			'<input type="text" class="form-control" placeholder="Search for...">'+
			'<span class="input-group-btn">'+
			'	<button class="btn btn-default" type="button">Go!</button>'+
			'</span>'+
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
export default search;