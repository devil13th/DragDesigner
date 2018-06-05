
import componentMap from './componentsDic.js';



$(function(){
	const componentList = $("#componentList");
	[...componentMap].forEach(item=>{
		let componentDiv = $("<div class='dragComponent l' draggable='true' id='" + item[1].id + "'> " + item[1].name + " </div>");
        componentList.append(componentDiv);
        // console.log(componentDiv[0])

        componentDiv[0].ondragstart = function(e){
            //设置拖动对象的ID
            e.dataTransfer.setData("dragObjId",this.id);
            //console.log(this.id)

            console.log("开始拖动[" + this.id + "]");
        }


    })
    

    //console.log($("#targetDiv")[0])
    
    $("#targetDiv")[0].ondragenter = function(e){
        e.stopPropagation();
        e.preventDefault();
    }

    $("#targetDiv")[0].ondragover = function(e){
        e.stopPropagation();
        e.preventDefault();
    }

    $("#targetDiv")[0].ondrop = function(e){
        e.stopPropagation();
        //获取正在拖动的对象ID
        const dragObjId = e.dataTransfer.getData("dragObjId");
        console.log("放下[" + dragObjId + "]");
        console.log(componentMap.get(dragObjId))
        const copyDom = componentMap.get(dragObjId).createFaceDom();
        $(this).append(copyDom);

        copyDom.ondragstart = function(e){
			e.dataTransfer.setData("dragObjId",this.id);
			console.log("开始拖动[" + this.id + "]");
		}
    }


    
})