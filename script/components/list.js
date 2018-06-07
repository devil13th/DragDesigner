import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const list = {
	id:"list",
	name : "列表",
	nameEN : "list",
	type:"component",
	createFaceDom : function(){
		const faceDom = $(
			'<ul class="list-group">' +
			'	<li class="list-group-item active">Cras justo odio</li>' +
			'	<li class="list-group-item">Dapibus ac facilisis in</li>' +
			'	<li class="list-group-item">Morbi leo risus</li>' +
			'	<li class="list-group-item">Porta ac consectetur ac</li>' +
			'	<li class="list-group-item">Vestibulum at eros</li>' +
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
export default list;