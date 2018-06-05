import componentMap from '../componentsDic.js'
const uuid = () => {
	var s = [];
	var hexDigits = "0123456789abcdef";
	for (var i = 0; i < 36; i++) {
	  s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = "-";
   
	var uuid = s.join("");
	return uuid;
}

const dragWapper = (dom) => {
    dom.ondragenter = function(e){
        e.preventDefault();
        e.stopPropagation();
    }

    dom.ondragover = function(e){
        e.preventDefault();
        e.stopPropagation();
    }

    dom.ondrop = function(e){
        e.stopPropagation();
        //获取正在拖动的对象ID
        const dragObjId = e.dataTransfer.getData("dragObjId");
        console.log("放下[" + dragObjId + "]");
        $(this).append(componentMap.get(dragObjId).createFaceDom());
    }
}

export{
	dragWapper as dragWapper,
	uuid as uuid

}
