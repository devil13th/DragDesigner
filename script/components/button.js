

import {uuid} from '../help/util.js'



const button = {
	id:"button",
	name : "按钮",
	nameEN : "button",
	//template : "<button style='border:1px solid #aaa,border-radius:3px;height:24px;line-height:24px;'>按钮</button>",
	createFaceDom : function() {
		const faceDom = $("<button></button>");
		faceDom.attr('style','border:1px solid #aaa,border-radius:25px;height:24px;line-height:24px;');
		faceDom.html("按钮");

		faceDom[0].id = uuid();
		faceDom[0].ondragstart = function(e){
			e.dataTransfer.setData("dragObjId",this.id);
			console.log("开始拖动[" + this.id + "]");
		}
		return faceDom[0];
	}
}




export default button;