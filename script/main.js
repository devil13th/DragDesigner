
import componentMap from './componentsDic.js';

$(function(){
    const componentList = $("#componentList");
    
	[...componentMap].forEach(item=>{
		let componentDiv = $("<div class='dragComponent' datatype='template'  draggable='true' id='" + item[1].id + "'> " + item[1].name + "[" + item[1].id + "]" + " </div>");
        
        $("#" + item[1].type + "Menu").append(componentDiv);
        
        //componentList.append(componentDiv);
        
        // console.log(componentDiv[0])
        componentDiv[0].ondragstart = function(e){
            e.stopPropagation();
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
        const dom = document.getElementById(dragObjId);
        console.log("放下[" + dragObjId + "]");
        console.log(componentMap.get(dragObjId))

        if(dom.getAttribute("datatype") == "template"){
            const copyDom = componentMap.get(dragObjId).createFaceDom();
            /*copyDom.ondragstart = function(e){
                e.dataTransfer.setData("dragObjId",this.id);
                console.log("开始拖动[" + this.id + "]");
            }*/
            $(this).append(copyDom);
        }else{
            $(this).append(dom);
        }
    }
})