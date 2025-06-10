gdjs._38283_22987_20171_38754Code = {};
gdjs._38283_22987_20171_38754Code.localVariables = [];
gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1= [];
gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects2= [];
gdjs._38283_22987_20171_38754Code.GDNewSprite2Objects1= [];
gdjs._38283_22987_20171_38754Code.GDNewSprite2Objects2= [];
gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1= [];
gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects2= [];
gdjs._38283_22987_20171_38754Code.GDNewSprite4Objects1= [];
gdjs._38283_22987_20171_38754Code.GDNewSprite4Objects2= [];


gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1});
gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1});
gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1});
gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1});
gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1});
gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1});
gdjs._38283_22987_20171_38754Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].setAngle(gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getAngle() + (1000));
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getBehavior("Scale").setScale(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].rotate(0, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "對話", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.1);
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScaleX(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.2);
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScaleY(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.2);
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getBehavior("Scale").setScale(0.1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.1);
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getBehavior("Scale").setScaleY(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.1);
}
}{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getBehavior("Scale").setScaleX(1 + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 2) * 0.1);
}
}{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16481308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "BGMB.mp3", true, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16482132);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "button01a.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._38283_22987_20171_38754Code.mapOfGDgdjs_9546_959538283_959522987_959520171_959538754Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16483172);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "beeeggg.mp3", false, 10, 1);
}}

}


};

gdjs._38283_22987_20171_38754Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite2Objects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite2Objects2.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects2.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite4Objects2.length = 0;

gdjs._38283_22987_20171_38754Code.eventsList0(runtimeScene);
gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSpriteObjects2.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite2Objects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite2Objects2.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite3Objects2.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite4Objects1.length = 0;
gdjs._38283_22987_20171_38754Code.GDNewSprite4Objects2.length = 0;


return;

}

gdjs['_38283_22987_20171_38754Code'] = gdjs._38283_22987_20171_38754Code;
