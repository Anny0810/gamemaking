gdjs._25104_211512Code = {};
gdjs._25104_211512Code.localVariables = [];
gdjs._25104_211512Code.GDNewSpriteObjects1= [];
gdjs._25104_211512Code.GDNewSpriteObjects2= [];
gdjs._25104_211512Code.GDNewSprite2Objects1= [];
gdjs._25104_211512Code.GDNewSprite2Objects2= [];
gdjs._25104_211512Code.GDNewSprite3Objects1= [];
gdjs._25104_211512Code.GDNewSprite3Objects2= [];
gdjs._25104_211512Code.GDNewSprite4Objects1= [];
gdjs._25104_211512Code.GDNewSprite4Objects2= [];


gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_211512Code.GDNewSprite3Objects1});
gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._25104_211512Code.GDNewSpriteObjects1});
gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_211512Code.GDNewSprite3Objects1});
gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_211512Code.GDNewSprite3Objects1});
gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_211512Code.GDNewSprite3Objects1});
gdjs._25104_211512Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_211512Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16614020);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "button01a.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._25104_211512Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_211512Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs._25104_211512Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._25104_211512Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_211512Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._25104_211512Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs._25104_211512Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._25104_211512Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_211512Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16617140);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "CL.mp3", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_211512Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_211512Code.mapOfGDgdjs_9546_959525104_9595211512Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "遊戲場景3", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._25104_211512Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_211512Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._25104_211512Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs._25104_211512Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSpriteObjects1[i].rotate(1000, runtimeScene);
}
}{for(var i = 0, len = gdjs._25104_211512Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSprite3Objects1[i].rotate(200, runtimeScene);
}
}{for(var i = 0, len = gdjs._25104_211512Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._25104_211512Code.GDNewSprite4Objects1[i].rotate(500, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16620020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "good.mp3", true, 50, 1);
}}

}


};

gdjs._25104_211512Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25104_211512Code.GDNewSpriteObjects1.length = 0;
gdjs._25104_211512Code.GDNewSpriteObjects2.length = 0;
gdjs._25104_211512Code.GDNewSprite2Objects1.length = 0;
gdjs._25104_211512Code.GDNewSprite2Objects2.length = 0;
gdjs._25104_211512Code.GDNewSprite3Objects1.length = 0;
gdjs._25104_211512Code.GDNewSprite3Objects2.length = 0;
gdjs._25104_211512Code.GDNewSprite4Objects1.length = 0;
gdjs._25104_211512Code.GDNewSprite4Objects2.length = 0;

gdjs._25104_211512Code.eventsList0(runtimeScene);
gdjs._25104_211512Code.GDNewSpriteObjects1.length = 0;
gdjs._25104_211512Code.GDNewSpriteObjects2.length = 0;
gdjs._25104_211512Code.GDNewSprite2Objects1.length = 0;
gdjs._25104_211512Code.GDNewSprite2Objects2.length = 0;
gdjs._25104_211512Code.GDNewSprite3Objects1.length = 0;
gdjs._25104_211512Code.GDNewSprite3Objects2.length = 0;
gdjs._25104_211512Code.GDNewSprite4Objects1.length = 0;
gdjs._25104_211512Code.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['_25104_211512Code'] = gdjs._25104_211512Code;
