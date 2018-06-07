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
	return "uuid_" + uuid;
}

const dragTargetWapper = (dom) => {

    dom.id = uuid();
    dom.ondragenter = function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass("drogHover");
    }

    dom.ondragleave = function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("drogHover");
    }

    dom.ondragover = function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass("drogHover");
    }

    dom.ondrop = function(e){
       
        e.stopPropagation();

        //获取正在拖动的对象ID
        const dragObjId = e.dataTransfer.getData("dragObjId");
        //console.log("放下[" + dragObjId + "]");
        
        const dragDom = document.getElementById(dragObjId);

        //console.log(this.id + "|" + dragDom.id)


        //用jquery判断是否拖动父DOM向子DOM中放
        const c = $("#" + dragObjId).find(this);
        console.log(c.length)


        //用while的方式判断是否拖动父DOM向子DOM中放
        var parentNode = document.getElementById(this.id).parentNode;
        var isDragParentToChild = false;
        while(parentNode){
            //console.log("----------------------");
            //console.log(parentNode.id + "--" + dragDom.id);
            if(parentNode.id == dragDom.id){
                isDragParentToChild = true;
                break;
            }
            parentNode = parentNode.parentNode;
        }

        //console.log(isDragParentToChild);




        
        if(dragDom.getAttribute("datatype") == "template"){
            const copyDom = componentMap.get(dragObjId).createFaceDom();
            $(this).append(copyDom);
        }else{
            if(!isDragParentToChild){
                $(this).append(dragDom);
            }
        }

        $(this).removeClass("drogHover");


    }
}


const dragWapper = (dom) => {
    
    dom.id = uuid();
    dom.setAttribute('draggable',true);
    dom.ondragstart = function(e){
        e.stopPropagation();
        //e.dataTransfer.setData("dragObjId",this.id);
        e.dataTransfer.setData("dragObjId",e.target.id);
        console.log("开始拖动[" + this.id + "]" + "(" + this.outerHTML + ")");
        console.log($(this));
        $(this).addClass("dragHover");
    }

    dom.ondragend = function(e){
        
        e.dataTransfer.setData("dragObjId",e.target.id);
        console.log("结束拖动[" + this.id + "]");

        $(this).removeClass("dragHover");


    }

    /*dom.onselectstart = function(e){
        return false;
    }
    dom.onclick = function(e){
        alert(1);
    }*/
}


const createFaceDomWapper = (dom) => {
    dom.setAttribute("data-type","element");
    dom.setAttribute("contenteditable",true);
}

export{
    dragWapper as dragWapper,
    dragTargetWapper as dragTargetWapper,
    createFaceDomWapper as createFaceDomWapper,
	uuid as uuid

}