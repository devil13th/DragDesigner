import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const layout = {
	id:"layout",
	name : "布局",
	nameEN : "layout",
	type:"layout",
	createFaceDom : function(){
		const faceDom = $(
			'<div class="row">'+
			'</div>'
		);


		createFaceDomWapper(faceDom[0]);

		var col1 = $('<div class="col-sm-4"></div>');
		var colDiv1 = $('<div style="padding:3px;border:1px dashed #aaa "></div>');
		col1.append(colDiv1);
		dragTargetWapper(colDiv1[0]);
		var col2 = $('<div class="col-sm-4"></div>');
		var colDiv2 = $('<div style="padding:3px;border:1px dashed #aaa "></div>');
		col2.append(colDiv2);
		dragTargetWapper(colDiv2[0]);
		var col3 = $('<div class="col-sm-4"></div>');
		var colDiv3 = $('<div style="padding:3px;border:1px dashed #aaa "></div>');
		col3.append(colDiv3);
		dragTargetWapper(colDiv3[0]);

		
		faceDom.append(col1).append(col2).append(col3);


		//faceDom.attr('style','margin:3px;border:1px dashed #aaa;padding:5px');
		//faceDom.html("");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		//dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default layout;