gdjs.CheatsCode = {};
gdjs.CheatsCode.GDCheatsObjects1= [];
gdjs.CheatsCode.GDCheatsObjects2= [];
gdjs.CheatsCode.GDInvincibilityObjects1= [];
gdjs.CheatsCode.GDInvincibilityObjects2= [];
gdjs.CheatsCode.GDPlayerObjects1= [];
gdjs.CheatsCode.GDPlayerObjects2= [];
gdjs.CheatsCode.GDInvincibilitySwitchObjects1= [];
gdjs.CheatsCode.GDInvincibilitySwitchObjects2= [];
gdjs.CheatsCode.GDMovementSwitchObjects1= [];
gdjs.CheatsCode.GDMovementSwitchObjects2= [];
gdjs.CheatsCode.GDMovementObjects1= [];
gdjs.CheatsCode.GDMovementObjects2= [];
gdjs.CheatsCode.GDBackObjects1= [];
gdjs.CheatsCode.GDBackObjects2= [];
gdjs.CheatsCode.GDMovementInfoObjects1= [];
gdjs.CheatsCode.GDMovementInfoObjects2= [];

gdjs.CheatsCode.conditionTrue_0 = {val:false};
gdjs.CheatsCode.condition0IsTrue_0 = {val:false};
gdjs.CheatsCode.condition1IsTrue_0 = {val:false};
gdjs.CheatsCode.condition2IsTrue_0 = {val:false};


gdjs.CheatsCode.mapOfGDgdjs_46CheatsCode_46GDInvincibilitySwitchObjects1Objects = Hashtable.newFrom({"InvincibilitySwitch": gdjs.CheatsCode.GDInvincibilitySwitchObjects1});gdjs.CheatsCode.mapOfGDgdjs_46CheatsCode_46GDMovementSwitchObjects1Objects = Hashtable.newFrom({"MovementSwitch": gdjs.CheatsCode.GDMovementSwitchObjects1});gdjs.CheatsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CheatsCode.condition0IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
}if (gdjs.CheatsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InvincibilitySwitch"), gdjs.CheatsCode.GDInvincibilitySwitchObjects1);

gdjs.CheatsCode.condition0IsTrue_0.val = false;
gdjs.CheatsCode.condition1IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CheatsCode.mapOfGDgdjs_46CheatsCode_46GDInvincibilitySwitchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CheatsCode.condition0IsTrue_0.val ) {
{
gdjs.CheatsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CheatsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).mul(-(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MovementSwitch"), gdjs.CheatsCode.GDMovementSwitchObjects1);

gdjs.CheatsCode.condition0IsTrue_0.val = false;
gdjs.CheatsCode.condition1IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CheatsCode.mapOfGDgdjs_46CheatsCode_46GDMovementSwitchObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CheatsCode.condition0IsTrue_0.val ) {
{
gdjs.CheatsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CheatsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).mul(-(1));
}}

}


{


gdjs.CheatsCode.condition0IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(1);
}if (gdjs.CheatsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InvincibilitySwitch"), gdjs.CheatsCode.GDInvincibilitySwitchObjects1);
{for(var i = 0, len = gdjs.CheatsCode.GDInvincibilitySwitchObjects1.length ;i < len;++i) {
    gdjs.CheatsCode.GDInvincibilitySwitchObjects1[i].setAnimationName("switch-off");
}
}}

}


{


gdjs.CheatsCode.condition0IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.CheatsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InvincibilitySwitch"), gdjs.CheatsCode.GDInvincibilitySwitchObjects1);
{for(var i = 0, len = gdjs.CheatsCode.GDInvincibilitySwitchObjects1.length ;i < len;++i) {
    gdjs.CheatsCode.GDInvincibilitySwitchObjects1[i].setAnimationName("switch-on");
}
}}

}


{


gdjs.CheatsCode.condition0IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(1);
}if (gdjs.CheatsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MovementSwitch"), gdjs.CheatsCode.GDMovementSwitchObjects1);
{for(var i = 0, len = gdjs.CheatsCode.GDMovementSwitchObjects1.length ;i < len;++i) {
    gdjs.CheatsCode.GDMovementSwitchObjects1[i].setAnimationName("switch-off");
}
}}

}


{


gdjs.CheatsCode.condition0IsTrue_0.val = false;
{
gdjs.CheatsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.CheatsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MovementSwitch"), gdjs.CheatsCode.GDMovementSwitchObjects1);
{for(var i = 0, len = gdjs.CheatsCode.GDMovementSwitchObjects1.length ;i < len;++i) {
    gdjs.CheatsCode.GDMovementSwitchObjects1[i].setAnimationName("switch-on");
}
}}

}


};

gdjs.CheatsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CheatsCode.GDCheatsObjects1.length = 0;
gdjs.CheatsCode.GDCheatsObjects2.length = 0;
gdjs.CheatsCode.GDInvincibilityObjects1.length = 0;
gdjs.CheatsCode.GDInvincibilityObjects2.length = 0;
gdjs.CheatsCode.GDPlayerObjects1.length = 0;
gdjs.CheatsCode.GDPlayerObjects2.length = 0;
gdjs.CheatsCode.GDInvincibilitySwitchObjects1.length = 0;
gdjs.CheatsCode.GDInvincibilitySwitchObjects2.length = 0;
gdjs.CheatsCode.GDMovementSwitchObjects1.length = 0;
gdjs.CheatsCode.GDMovementSwitchObjects2.length = 0;
gdjs.CheatsCode.GDMovementObjects1.length = 0;
gdjs.CheatsCode.GDMovementObjects2.length = 0;
gdjs.CheatsCode.GDBackObjects1.length = 0;
gdjs.CheatsCode.GDBackObjects2.length = 0;
gdjs.CheatsCode.GDMovementInfoObjects1.length = 0;
gdjs.CheatsCode.GDMovementInfoObjects2.length = 0;

gdjs.CheatsCode.eventsList0(runtimeScene);
return;

}

gdjs['CheatsCode'] = gdjs.CheatsCode;
