import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const panel = {
	id:"panel",
	name : "面板",
	nameEN : "panel",
	type:"container",
	createFaceDom : function(){

		

		const faceDom = $(
			'<div class="panel panel-primary">'+
			'<div class="panel-heading">Panel heading without title</div>'+
			'<div class="panel-body">'+
			'</div>'+
			'</div>'
		);
		createFaceDomWapper(faceDom[0]);


		const contentDiv = $("<div style='padding:5px;border:1px dashed #aaa'></div>");
		faceDom.find(".panel-body").append(contentDiv);
		//faceDom.attr('style','margin:3px;border:1px dashed #aaa;padding:5px');
		//faceDom.html("");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		dragTargetWapper(contentDiv[0]);
		//dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default panel;