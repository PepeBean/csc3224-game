gdjs.ControlsCode = {};
gdjs.ControlsCode.GDPlayerObjects1= [];
gdjs.ControlsCode.GDPlayerObjects2= [];
gdjs.ControlsCode.GDTitleObjects1= [];
gdjs.ControlsCode.GDTitleObjects2= [];
gdjs.ControlsCode.GDCreatorObjects1= [];
gdjs.ControlsCode.GDCreatorObjects2= [];
gdjs.ControlsCode.GDSkeletonObjects1= [];
gdjs.ControlsCode.GDSkeletonObjects2= [];
gdjs.ControlsCode.GDGoblinObjects1= [];
gdjs.ControlsCode.GDGoblinObjects2= [];
gdjs.ControlsCode.GDFlyingEyeObjects1= [];
gdjs.ControlsCode.GDFlyingEyeObjects2= [];
gdjs.ControlsCode.GDMushroomObjects1= [];
gdjs.ControlsCode.GDMushroomObjects2= [];
gdjs.ControlsCode.GDPlayerDetailsObjects1= [];
gdjs.ControlsCode.GDPlayerDetailsObjects2= [];
gdjs.ControlsCode.GDControlsObjects1= [];
gdjs.ControlsCode.GDControlsObjects2= [];
gdjs.ControlsCode.GDSkeletonTextObjects1= [];
gdjs.ControlsCode.GDSkeletonTextObjects2= [];
gdjs.ControlsCode.GDGoblinTextObjects1= [];
gdjs.ControlsCode.GDGoblinTextObjects2= [];
gdjs.ControlsCode.GDFlyingEyeTextObjects1= [];
gdjs.ControlsCode.GDFlyingEyeTextObjects2= [];
gdjs.ControlsCode.GDMushroomTextObjects1= [];
gdjs.ControlsCode.GDMushroomTextObjects2= [];
gdjs.ControlsCode.GDInstructionObjects1= [];
gdjs.ControlsCode.GDInstructionObjects2= [];

gdjs.ControlsCode.conditionTrue_0 = {val:false};
gdjs.ControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ControlsCode.condition1IsTrue_0 = {val:false};


gdjs.ControlsCode.eventsList0 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", true);
}}

}


};

gdjs.ControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlsCode.GDPlayerObjects1.length = 0;
gdjs.ControlsCode.GDPlayerObjects2.length = 0;
gdjs.ControlsCode.GDTitleObjects1.length = 0;
gdjs.ControlsCode.GDTitleObjects2.length = 0;
gdjs.ControlsCode.GDCreatorObjects1.length = 0;
gdjs.ControlsCode.GDCreatorObjects2.length = 0;
gdjs.ControlsCode.GDSkeletonObjects1.length = 0;
gdjs.ControlsCode.GDSkeletonObjects2.length = 0;
gdjs.ControlsCode.GDGoblinObjects1.length = 0;
gdjs.ControlsCode.GDGoblinObjects2.length = 0;
gdjs.ControlsCode.GDFlyingEyeObjects1.length = 0;
gdjs.ControlsCode.GDFlyingEyeObjects2.length = 0;
gdjs.ControlsCode.GDMushroomObjects1.length = 0;
gdjs.ControlsCode.GDMushroomObjects2.length = 0;
gdjs.ControlsCode.GDPlayerDetailsObjects1.length = 0;
gdjs.ControlsCode.GDPlayerDetailsObjects2.length = 0;
gdjs.ControlsCode.GDControlsObjects1.length = 0;
gdjs.ControlsCode.GDControlsObjects2.length = 0;
gdjs.ControlsCode.GDSkeletonTextObjects1.length = 0;
gdjs.ControlsCode.GDSkeletonTextObjects2.length = 0;
gdjs.ControlsCode.GDGoblinTextObjects1.length = 0;
gdjs.ControlsCode.GDGoblinTextObjects2.length = 0;
gdjs.ControlsCode.GDFlyingEyeTextObjects1.length = 0;
gdjs.ControlsCode.GDFlyingEyeTextObjects2.length = 0;
gdjs.ControlsCode.GDMushroomTextObjects1.length = 0;
gdjs.ControlsCode.GDMushroomTextObjects2.length = 0;
gdjs.ControlsCode.GDInstructionObjects1.length = 0;
gdjs.ControlsCode.GDInstructionObjects2.length = 0;

gdjs.ControlsCode.eventsList0(runtimeScene);
return;

}

gdjs['ControlsCode'] = gdjs.ControlsCode;
