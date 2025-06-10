gdjs._22833_25943Code = {};
gdjs._22833_25943Code.localVariables = [];
gdjs._22833_25943Code.GDNewSprite2Objects1= [];
gdjs._22833_25943Code.GDNewSprite2Objects2= [];
gdjs._22833_25943Code.GDNewSpriteObjects1= [];
gdjs._22833_25943Code.GDNewSpriteObjects2= [];
gdjs._22833_25943Code.GDNewSprite3Objects1= [];
gdjs._22833_25943Code.GDNewSprite3Objects2= [];
gdjs._22833_25943Code.GDNewSprite4Objects1= [];
gdjs._22833_25943Code.GDNewSprite4Objects2= [];
gdjs._22833_25943Code.GDNewSprite5Objects1= [];
gdjs._22833_25943Code.GDNewSprite5Objects2= [];


gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22833_25943Code.GDNewSprite4Objects1});
gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22833_25943Code.GDNewSprite4Objects1});
gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22833_25943Code.GDNewSprite4Objects1});
gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22833_25943Code.GDNewSprite4Objects1});
gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs._22833_25943Code.GDNewSprite4Objects1});
gdjs._22833_25943Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._22833_25943Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_25943Code.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._22833_25943Code.GDNewSprite5Objects1);
{for(var i = 0, len = gdjs._22833_25943Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._22833_25943Code.GDNewSprite3Objects1[i].rotate(50, runtimeScene);
}
}{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}{for(var i = 0, len = gdjs._22833_25943Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._22833_25943Code.GDNewSprite5Objects1[i].getBehavior("Scale").setScale(0.3 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.1);
}
}{for(var i = 0, len = gdjs._22833_25943Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._22833_25943Code.GDNewSprite4Objects1[i].rotate(1000, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_25943Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._22833_25943Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs._22833_25943Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._22833_25943Code.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_25943Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "遊戲場景1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_25943Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._22833_25943Code.GDNewSprite4Objects1 */
{for(var i = 0, len = gdjs._22833_25943Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._22833_25943Code.GDNewSprite4Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16503860);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "bad.mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_25943Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16504868);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "CL.mp3", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._22833_25943Code.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._22833_25943Code.mapOfGDgdjs_9546_959522833_959525943Code_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16505692);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "button01a.mp3", false, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._22833_25943Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22833_25943Code.GDNewSprite2Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite2Objects2.length = 0;
gdjs._22833_25943Code.GDNewSpriteObjects1.length = 0;
gdjs._22833_25943Code.GDNewSpriteObjects2.length = 0;
gdjs._22833_25943Code.GDNewSprite3Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite3Objects2.length = 0;
gdjs._22833_25943Code.GDNewSprite4Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite4Objects2.length = 0;
gdjs._22833_25943Code.GDNewSprite5Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite5Objects2.length = 0;

gdjs._22833_25943Code.eventsList0(runtimeScene);
gdjs._22833_25943Code.GDNewSprite2Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite2Objects2.length = 0;
gdjs._22833_25943Code.GDNewSpriteObjects1.length = 0;
gdjs._22833_25943Code.GDNewSpriteObjects2.length = 0;
gdjs._22833_25943Code.GDNewSprite3Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite3Objects2.length = 0;
gdjs._22833_25943Code.GDNewSprite4Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite4Objects2.length = 0;
gdjs._22833_25943Code.GDNewSprite5Objects1.length = 0;
gdjs._22833_25943Code.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['_22833_25943Code'] = gdjs._22833_25943Code;
