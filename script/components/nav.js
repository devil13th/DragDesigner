import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const nav = {
	id:"nav",
	name : "导航",
	nameEN : "nav",
	createFaceDom : function(){
		const faceDom = $(
			
			'<ul class="nav nav-pills">'+
			'	<li role="presentation" class="active"><a >Home</a></li>'+
			'	<li role="presentation"><a >Profile</a></li>'+
			'	<li role="presentation"><a >Messages</a></li>'+
			'</ul>'
		);
		createFaceDomWapper(faceDom[0]);

		//faceDom.attr('style','margin:3px;border:1px dashed #aaa;padding:5px');
		//faceDom.html("");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		//dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default nav;