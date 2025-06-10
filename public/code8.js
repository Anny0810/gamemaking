gdjs._22823_25104_21151ENDCode = {};
gdjs._22823_25104_21151ENDCode.localVariables = [];
gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects1= [];
gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects2= [];
gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1= [];
gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects2= [];
gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects1= [];
gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects2= [];
gdjs._22823_25104_21151ENDCode.GDNewTextObjects1= [];
gdjs._22823_25104_21151ENDCode.GDNewTextObjects2= [];


gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1});
gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1});
gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1});
gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewTextObjects1Objects = Hashtable.newFrom({"NewText": gdjs._22823_25104_21151ENDCode.GDNewTextObjects1});
gdjs._22823_25104_21151ENDCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects1[i].rotate(1000, runtimeScene);
}
}{for(var i = 0, len = gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects1[i].rotate(1000, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "CL.mp3", false, 10, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "遊戲場景1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1[i].setColor("97;16;16");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "button01a.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1 */
{for(var i = 0, len = gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1[i].setColor("255;255;255");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16641372);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "good2.mp3", true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._22823_25104_21151ENDCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22823_25104_21151ENDCode.mapOfGDgdjs_9546_959522823_959525104_959521151ENDCode_9546GDNewTextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://ilab.nutc.edu.tw/menu", runtimeScene);
}}

}


};

gdjs._22823_25104_21151ENDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects2.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects2.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects2.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewTextObjects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewTextObjects2.length = 0;

gdjs._22823_25104_21151ENDCode.eventsList0(runtimeScene);
gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSpriteObjects2.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite2Objects2.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewSprite3Objects2.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewTextObjects1.length = 0;
gdjs._22823_25104_21151ENDCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['_22823_25104_21151ENDCode'] = gdjs._22823_25104_21151ENDCode;
