gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDPlayerObjects1= [];
gdjs.MainMenuCode.GDPlayerObjects2= [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDCreatorObjects1= [];
gdjs.MainMenuCode.GDCreatorObjects2= [];
gdjs.MainMenuCode.GDSkeletonObjects1= [];
gdjs.MainMenuCode.GDSkeletonObjects2= [];
gdjs.MainMenuCode.GDGoblinObjects1= [];
gdjs.MainMenuCode.GDGoblinObjects2= [];
gdjs.MainMenuCode.GDFlyingEyeObjects1= [];
gdjs.MainMenuCode.GDFlyingEyeObjects2= [];
gdjs.MainMenuCode.GDMushroomObjects1= [];
gdjs.MainMenuCode.GDMushroomObjects2= [];
gdjs.MainMenuCode.GDInstruction1Objects1= [];
gdjs.MainMenuCode.GDInstruction1Objects2= [];
gdjs.MainMenuCode.GDInstruction2Objects1= [];
gdjs.MainMenuCode.GDInstruction2Objects2= [];
gdjs.MainMenuCode.GDInstruction3Objects1= [];
gdjs.MainMenuCode.GDInstruction3Objects2= [];
gdjs.MainMenuCode.GDCreditObjects1= [];
gdjs.MainMenuCode.GDCreditObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", true);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controls", true);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "x");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cheats", true);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDPlayerObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDCreatorObjects1.length = 0;
gdjs.MainMenuCode.GDCreatorObjects2.length = 0;
gdjs.MainMenuCode.GDSkeletonObjects1.length = 0;
gdjs.MainMenuCode.GDSkeletonObjects2.length = 0;
gdjs.MainMenuCode.GDGoblinObjects1.length = 0;
gdjs.MainMenuCode.GDGoblinObjects2.length = 0;
gdjs.MainMenuCode.GDFlyingEyeObjects1.length = 0;
gdjs.MainMenuCode.GDFlyingEyeObjects2.length = 0;
gdjs.MainMenuCode.GDMushroomObjects1.length = 0;
gdjs.MainMenuCode.GDMushroomObjects2.length = 0;
gdjs.MainMenuCode.GDInstruction1Objects1.length = 0;
gdjs.MainMenuCode.GDInstruction1Objects2.length = 0;
gdjs.MainMenuCode.GDInstruction2Objects1.length = 0;
gdjs.MainMenuCode.GDInstruction2Objects2.length = 0;
gdjs.MainMenuCode.GDInstruction3Objects1.length = 0;
gdjs.MainMenuCode.GDInstruction3Objects2.length = 0;
gdjs.MainMenuCode.GDCreditObjects1.length = 0;
gdjs.MainMenuCode.GDCreditObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
