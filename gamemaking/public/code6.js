gdjs._25104_21151Code = {};
gdjs._25104_21151Code.localVariables = [];
gdjs._25104_21151Code.GDNewSpriteObjects1= [];
gdjs._25104_21151Code.GDNewSpriteObjects2= [];
gdjs._25104_21151Code.GDNewSpriteObjects3= [];
gdjs._25104_21151Code.GDNewSpriteObjects4= [];
gdjs._25104_21151Code.GDNewSprite2Objects1= [];
gdjs._25104_21151Code.GDNewSprite2Objects2= [];
gdjs._25104_21151Code.GDNewSprite2Objects3= [];
gdjs._25104_21151Code.GDNewSprite2Objects4= [];
gdjs._25104_21151Code.GDNewSprite3Objects1= [];
gdjs._25104_21151Code.GDNewSprite3Objects2= [];
gdjs._25104_21151Code.GDNewSprite3Objects3= [];
gdjs._25104_21151Code.GDNewSprite3Objects4= [];
gdjs._25104_21151Code.GDNewSprite4Objects1= [];
gdjs._25104_21151Code.GDNewSprite4Objects2= [];
gdjs._25104_21151Code.GDNewSprite4Objects3= [];
gdjs._25104_21151Code.GDNewSprite4Objects4= [];
gdjs._25104_21151Code.GDNewTextObjects1= [];
gdjs._25104_21151Code.GDNewTextObjects2= [];
gdjs._25104_21151Code.GDNewTextObjects3= [];
gdjs._25104_21151Code.GDNewTextObjects4= [];
gdjs._25104_21151Code.GDRank1Objects1= [];
gdjs._25104_21151Code.GDRank1Objects2= [];
gdjs._25104_21151Code.GDRank1Objects3= [];
gdjs._25104_21151Code.GDRank1Objects4= [];
gdjs._25104_21151Code.GDRank2Objects1= [];
gdjs._25104_21151Code.GDRank2Objects2= [];
gdjs._25104_21151Code.GDRank2Objects3= [];
gdjs._25104_21151Code.GDRank2Objects4= [];
gdjs._25104_21151Code.GDRank3Objects1= [];
gdjs._25104_21151Code.GDRank3Objects2= [];
gdjs._25104_21151Code.GDRank3Objects3= [];
gdjs._25104_21151Code.GDRank3Objects4= [];
gdjs._25104_21151Code.GDNewText2Objects1= [];
gdjs._25104_21151Code.GDNewText2Objects2= [];
gdjs._25104_21151Code.GDNewText2Objects3= [];
gdjs._25104_21151Code.GDNewText2Objects4= [];


gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs._25104_21151Code.GDNewSpriteObjects1});
gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_21151Code.GDNewSprite3Objects1});
gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_21151Code.GDNewSprite3Objects1});
gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_21151Code.GDNewSprite3Objects1});
gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._25104_21151Code.GDNewSprite3Objects1});
gdjs._25104_21151Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(3));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rank1"), gdjs._25104_21151Code.GDRank1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Rank2"), gdjs._25104_21151Code.GDRank2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Rank3"), gdjs._25104_21151Code.GDRank3Objects2);
{for(var i = 0, len = gdjs._25104_21151Code.GDRank3Objects2.length ;i < len;++i) {
    gdjs._25104_21151Code.GDRank3Objects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(2).getChild("time").getAsNumber()));
}
}{for(var i = 0, len = gdjs._25104_21151Code.GDRank2Objects2.length ;i < len;++i) {
    gdjs._25104_21151Code.GDRank2Objects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(1).getChild("time").getAsNumber()));
}
}{for(var i = 0, len = gdjs._25104_21151Code.GDRank1Objects2.length ;i < len;++i) {
    gdjs._25104_21151Code.GDRank1Objects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getChild(0).getChild("time").getAsNumber()));
}
}}

}


};gdjs._25104_21151Code.asyncCallback12710220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._25104_21151Code.localVariables);

{ //Subevents
gdjs._25104_21151Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._25104_21151Code.localVariables.length = 0;
}
gdjs._25104_21151Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._25104_21151Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("/postscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(4)), "POST", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs._25104_21151Code.asyncCallback12710220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._25104_21151Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._25104_21151Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._25104_21151Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewText2Objects1[i].getBehavior("Text").setText("秒數：" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("time"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._25104_21151Code.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSpriteObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_21151Code.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs._25104_21151Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._25104_21151Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_21151Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._25104_21151Code.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs._25104_21151Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSprite3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._25104_21151Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSprite3Objects1[i].getBehavior("Scale").setScale(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_21151Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16582964);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "CL.mp3", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_21151Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "遊戲場景2", false);
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
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs._25104_21151Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_21151Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs._25104_21151Code.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs._25104_21151Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSpriteObjects1[i].rotate(1000, runtimeScene);
}
}{for(var i = 0, len = gdjs._25104_21151Code.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSprite3Objects1[i].rotate(200, runtimeScene);
}
}{for(var i = 0, len = gdjs._25104_21151Code.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs._25104_21151Code.GDNewSprite4Objects1[i].rotate(500, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._25104_21151Code.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._25104_21151Code.mapOfGDgdjs_9546_959525104_959521151Code_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16585964);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "button01a.mp3", false, 20, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16586564);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "good.mp3", true, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._25104_21151Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs._25104_21151Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._25104_21151Code.GDNewSpriteObjects1.length = 0;
gdjs._25104_21151Code.GDNewSpriteObjects2.length = 0;
gdjs._25104_21151Code.GDNewSpriteObjects3.length = 0;
gdjs._25104_21151Code.GDNewSpriteObjects4.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects1.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects2.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects3.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects4.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects1.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects2.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects3.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects4.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects1.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects2.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects3.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects4.length = 0;
gdjs._25104_21151Code.GDNewTextObjects1.length = 0;
gdjs._25104_21151Code.GDNewTextObjects2.length = 0;
gdjs._25104_21151Code.GDNewTextObjects3.length = 0;
gdjs._25104_21151Code.GDNewTextObjects4.length = 0;
gdjs._25104_21151Code.GDRank1Objects1.length = 0;
gdjs._25104_21151Code.GDRank1Objects2.length = 0;
gdjs._25104_21151Code.GDRank1Objects3.length = 0;
gdjs._25104_21151Code.GDRank1Objects4.length = 0;
gdjs._25104_21151Code.GDRank2Objects1.length = 0;
gdjs._25104_21151Code.GDRank2Objects2.length = 0;
gdjs._25104_21151Code.GDRank2Objects3.length = 0;
gdjs._25104_21151Code.GDRank2Objects4.length = 0;
gdjs._25104_21151Code.GDRank3Objects1.length = 0;
gdjs._25104_21151Code.GDRank3Objects2.length = 0;
gdjs._25104_21151Code.GDRank3Objects3.length = 0;
gdjs._25104_21151Code.GDRank3Objects4.length = 0;
gdjs._25104_21151Code.GDNewText2Objects1.length = 0;
gdjs._25104_21151Code.GDNewText2Objects2.length = 0;
gdjs._25104_21151Code.GDNewText2Objects3.length = 0;
gdjs._25104_21151Code.GDNewText2Objects4.length = 0;

gdjs._25104_21151Code.eventsList2(runtimeScene);
gdjs._25104_21151Code.GDNewSpriteObjects1.length = 0;
gdjs._25104_21151Code.GDNewSpriteObjects2.length = 0;
gdjs._25104_21151Code.GDNewSpriteObjects3.length = 0;
gdjs._25104_21151Code.GDNewSpriteObjects4.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects1.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects2.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects3.length = 0;
gdjs._25104_21151Code.GDNewSprite2Objects4.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects1.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects2.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects3.length = 0;
gdjs._25104_21151Code.GDNewSprite3Objects4.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects1.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects2.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects3.length = 0;
gdjs._25104_21151Code.GDNewSprite4Objects4.length = 0;
gdjs._25104_21151Code.GDNewTextObjects1.length = 0;
gdjs._25104_21151Code.GDNewTextObjects2.length = 0;
gdjs._25104_21151Code.GDNewTextObjects3.length = 0;
gdjs._25104_21151Code.GDNewTextObjects4.length = 0;
gdjs._25104_21151Code.GDRank1Objects1.length = 0;
gdjs._25104_21151Code.GDRank1Objects2.length = 0;
gdjs._25104_21151Code.GDRank1Objects3.length = 0;
gdjs._25104_21151Code.GDRank1Objects4.length = 0;
gdjs._25104_21151Code.GDRank2Objects1.length = 0;
gdjs._25104_21151Code.GDRank2Objects2.length = 0;
gdjs._25104_21151Code.GDRank2Objects3.length = 0;
gdjs._25104_21151Code.GDRank2Objects4.length = 0;
gdjs._25104_21151Code.GDRank3Objects1.length = 0;
gdjs._25104_21151Code.GDRank3Objects2.length = 0;
gdjs._25104_21151Code.GDRank3Objects3.length = 0;
gdjs._25104_21151Code.GDRank3Objects4.length = 0;
gdjs._25104_21151Code.GDNewText2Objects1.length = 0;
gdjs._25104_21151Code.GDNewText2Objects2.length = 0;
gdjs._25104_21151Code.GDNewText2Objects3.length = 0;
gdjs._25104_21151Code.GDNewText2Objects4.length = 0;


return;

}

gdjs['_25104_21151Code'] = gdjs._25104_21151Code;
