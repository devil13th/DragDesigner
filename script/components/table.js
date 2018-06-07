import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const table = {
	id:"table",
	name : "布局表格",
	nameEN : "table",
	createFaceDom : function(){
		const faceDom = $("<table class='table' border='1'></table>");
		const tbody = $("<tbody></tbody>");
		//tbody.attr("style","background:#000;")
		faceDom.append(tbody);
		const colAndRowSetting = {col:4,row:5};
		
		for(var i = 0 , j = colAndRowSetting.row ; i < j ; i++){
			const tr = $("<tr></tr>");
			tbody.append(tr);
			tr.attr('id',uuid());
			for(var x = 0 , y = colAndRowSetting.col ; x < y ; x++){
				const td = $("<td></td>");
				//td.attr('style','margin:1px;background:#fff;height:24px;');
				td.attr('id',uuid());
				dragTargetWapper(td[0]);
				tr.append(td);
			}
		}


		const tr = $("<tr></tr>");


		

		createFaceDomWapper(faceDom[0]);
		dragWapper(faceDom[0]);

		//faceDom.attr('style','margin:3px;border:1px dashed #aaa;background:#eee;width:100%');
		//faceDom[0].id = uuid();
		

		return faceDom[0];
	}
}
export default table;