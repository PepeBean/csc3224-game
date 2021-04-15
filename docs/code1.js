gdjs.GameplayCode = {};
gdjs.GameplayCode.GDPlayerObjects1= [];
gdjs.GameplayCode.GDPlayerObjects2= [];
gdjs.GameplayCode.GDPlayerObjects3= [];
gdjs.GameplayCode.GDPlayerObjects4= [];
gdjs.GameplayCode.GDJumpthruObjects1= [];
gdjs.GameplayCode.GDJumpthruObjects2= [];
gdjs.GameplayCode.GDJumpthruObjects3= [];
gdjs.GameplayCode.GDJumpthruObjects4= [];
gdjs.GameplayCode.GDTiledGrassPlatformObjects1= [];
gdjs.GameplayCode.GDTiledGrassPlatformObjects2= [];
gdjs.GameplayCode.GDTiledGrassPlatformObjects3= [];
gdjs.GameplayCode.GDTiledGrassPlatformObjects4= [];
gdjs.GameplayCode.GDSkeletonEnemyObjects1= [];
gdjs.GameplayCode.GDSkeletonEnemyObjects2= [];
gdjs.GameplayCode.GDSkeletonEnemyObjects3= [];
gdjs.GameplayCode.GDSkeletonEnemyObjects4= [];
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1= [];
gdjs.GameplayCode.GDFlyingEyeEnemyObjects2= [];
gdjs.GameplayCode.GDFlyingEyeEnemyObjects3= [];
gdjs.GameplayCode.GDFlyingEyeEnemyObjects4= [];
gdjs.GameplayCode.GDTiledForestBackgroundObjects1= [];
gdjs.GameplayCode.GDTiledForestBackgroundObjects2= [];
gdjs.GameplayCode.GDTiledForestBackgroundObjects3= [];
gdjs.GameplayCode.GDTiledForestBackgroundObjects4= [];
gdjs.GameplayCode.GDHouseObjects1= [];
gdjs.GameplayCode.GDHouseObjects2= [];
gdjs.GameplayCode.GDHouseObjects3= [];
gdjs.GameplayCode.GDHouseObjects4= [];
gdjs.GameplayCode.GDArrowProjectileObjects1= [];
gdjs.GameplayCode.GDArrowProjectileObjects2= [];
gdjs.GameplayCode.GDArrowProjectileObjects3= [];
gdjs.GameplayCode.GDArrowProjectileObjects4= [];
gdjs.GameplayCode.GDDirtObjects1= [];
gdjs.GameplayCode.GDDirtObjects2= [];
gdjs.GameplayCode.GDDirtObjects3= [];
gdjs.GameplayCode.GDDirtObjects4= [];
gdjs.GameplayCode.GDGoblinEnemyObjects1= [];
gdjs.GameplayCode.GDGoblinEnemyObjects2= [];
gdjs.GameplayCode.GDGoblinEnemyObjects3= [];
gdjs.GameplayCode.GDGoblinEnemyObjects4= [];
gdjs.GameplayCode.GDMushroomEnemyObjects1= [];
gdjs.GameplayCode.GDMushroomEnemyObjects2= [];
gdjs.GameplayCode.GDMushroomEnemyObjects3= [];
gdjs.GameplayCode.GDMushroomEnemyObjects4= [];
gdjs.GameplayCode.GDHealthBarObjects1= [];
gdjs.GameplayCode.GDHealthBarObjects2= [];
gdjs.GameplayCode.GDHealthBarObjects3= [];
gdjs.GameplayCode.GDHealthBarObjects4= [];
gdjs.GameplayCode.GDeggObjects1= [];
gdjs.GameplayCode.GDeggObjects2= [];
gdjs.GameplayCode.GDeggObjects3= [];
gdjs.GameplayCode.GDeggObjects4= [];
gdjs.GameplayCode.GDHomeButtonObjects1= [];
gdjs.GameplayCode.GDHomeButtonObjects2= [];
gdjs.GameplayCode.GDHomeButtonObjects3= [];
gdjs.GameplayCode.GDHomeButtonObjects4= [];

gdjs.GameplayCode.conditionTrue_0 = {val:false};
gdjs.GameplayCode.condition0IsTrue_0 = {val:false};
gdjs.GameplayCode.condition1IsTrue_0 = {val:false};
gdjs.GameplayCode.condition2IsTrue_0 = {val:false};
gdjs.GameplayCode.condition3IsTrue_0 = {val:false};
gdjs.GameplayCode.conditionTrue_1 = {val:false};
gdjs.GameplayCode.condition0IsTrue_1 = {val:false};
gdjs.GameplayCode.condition1IsTrue_1 = {val:false};
gdjs.GameplayCode.condition2IsTrue_1 = {val:false};
gdjs.GameplayCode.condition3IsTrue_1 = {val:false};


gdjs.GameplayCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2Objects = Hashtable.newFrom({"SkeletonEnemy": gdjs.GameplayCode.GDSkeletonEnemyObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2Objects = Hashtable.newFrom({"GoblinEnemy": gdjs.GameplayCode.GDGoblinEnemyObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2Objects = Hashtable.newFrom({"MushroomEnemy": gdjs.GameplayCode.GDMushroomEnemyObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects1Objects = Hashtable.newFrom({"FlyingEyeEnemy": gdjs.GameplayCode.GDFlyingEyeEnemyObjects1});gdjs.GameplayCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDSkeletonEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2Objects, 1500, 450, "");
}{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].setScale(gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].getScale() * (2));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].getVariables().get("EnemyHealth")).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemyspawn");
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDGoblinEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2Objects, 1500, 450, "");
}{for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects2[i].setScale(gdjs.GameplayCode.GDGoblinEnemyObjects2[i].getScale() * (2));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDGoblinEnemyObjects2[i].getVariables().get("EnemyHealth")).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemyspawn");
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDMushroomEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2Objects, 1500, 300, "");
}{for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects2[i].setScale(gdjs.GameplayCode.GDMushroomEnemyObjects2[i].getScale() * (4));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDMushroomEnemyObjects2[i].getVariables().get("EnemyHealth")).setNumber(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemyspawn");
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition0IsTrue_0;
gdjs.GameplayCode.condition0IsTrue_1.val = false;
gdjs.GameplayCode.condition1IsTrue_1.val = false;
gdjs.GameplayCode.condition2IsTrue_1.val = false;
{
gdjs.GameplayCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
if( gdjs.GameplayCode.condition0IsTrue_1.val ) {
    gdjs.GameplayCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameplayCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
if( gdjs.GameplayCode.condition1IsTrue_1.val ) {
    gdjs.GameplayCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameplayCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
if( gdjs.GameplayCode.condition2IsTrue_1.val ) {
    gdjs.GameplayCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects1Objects, 1500, gdjs.randomWithStep(50, 250, 200), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].setScale(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].getScale() * (2));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].returnVariable(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].getVariables().get("EnemyHealth")).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemyspawn");
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.GameplayCode.GDHomeButtonObjects1});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects1Objects = Hashtable.newFrom({"ArrowProjectile": gdjs.GameplayCode.GDArrowProjectileObjects1});gdjs.GameplayCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameplayCode.GDPlayerObjects2, gdjs.GameplayCode.GDPlayerObjects3);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects3[k] = gdjs.GameplayCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects3.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects3[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.GameplayCode.GDPlayerObjects2 */

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].setAnimationName("Running");
}
}}

}


};gdjs.GameplayCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects2[k] = gdjs.GameplayCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects2.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects1[k] = gdjs.GameplayCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2Objects = Hashtable.newFrom({"SkeletonEnemy": gdjs.GameplayCode.GDSkeletonEnemyObjects2, "FlyingEyeEnemy": gdjs.GameplayCode.GDFlyingEyeEnemyObjects2, "MushroomEnemy": gdjs.GameplayCode.GDMushroomEnemyObjects2, "GoblinEnemy": gdjs.GameplayCode.GDGoblinEnemyObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHouseObjects2Objects = Hashtable.newFrom({"House": gdjs.GameplayCode.GDHouseObjects2});gdjs.GameplayCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(1);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDHouseObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDHouseObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDHouseObjects2[i].returnVariable(gdjs.GameplayCode.GDHouseObjects2[i].getVariables().get("HouseHealth")).sub(1);
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects2Objects = Hashtable.newFrom({"ArrowProjectile": gdjs.GameplayCode.GDArrowProjectileObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2Objects = Hashtable.newFrom({"SkeletonEnemy": gdjs.GameplayCode.GDSkeletonEnemyObjects2, "FlyingEyeEnemy": gdjs.GameplayCode.GDFlyingEyeEnemyObjects2, "MushroomEnemy": gdjs.GameplayCode.GDMushroomEnemyObjects2, "GoblinEnemy": gdjs.GameplayCode.GDGoblinEnemyObjects2});gdjs.GameplayCode.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1, gdjs.GameplayCode.GDFlyingEyeEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDGoblinEnemyObjects1, gdjs.GameplayCode.GDGoblinEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDMushroomEnemyObjects1, gdjs.GameplayCode.GDMushroomEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDSkeletonEnemyObjects1, gdjs.GameplayCode.GDSkeletonEnemyObjects2);

{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1, gdjs.GameplayCode.GDFlyingEyeEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDGoblinEnemyObjects1, gdjs.GameplayCode.GDGoblinEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.GameplayCode.GDHouseObjects2);
gdjs.copyArray(gdjs.GameplayCode.GDMushroomEnemyObjects1, gdjs.GameplayCode.GDMushroomEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDSkeletonEnemyObjects1, gdjs.GameplayCode.GDSkeletonEnemyObjects2);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHouseObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDFlyingEyeEnemyObjects2 */
/* Reuse gdjs.GameplayCode.GDGoblinEnemyObjects2 */
/* Reuse gdjs.GameplayCode.GDMushroomEnemyObjects2 */
/* Reuse gdjs.GameplayCode.GDSkeletonEnemyObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowProjectile"), gdjs.GameplayCode.GDArrowProjectileObjects2);
gdjs.copyArray(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1, gdjs.GameplayCode.GDFlyingEyeEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDGoblinEnemyObjects1, gdjs.GameplayCode.GDGoblinEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDMushroomEnemyObjects1, gdjs.GameplayCode.GDMushroomEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDSkeletonEnemyObjects1, gdjs.GameplayCode.GDSkeletonEnemyObjects2);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDArrowProjectileObjects2 */
/* Reuse gdjs.GameplayCode.GDFlyingEyeEnemyObjects2 */
/* Reuse gdjs.GameplayCode.GDGoblinEnemyObjects2 */
/* Reuse gdjs.GameplayCode.GDMushroomEnemyObjects2 */
/* Reuse gdjs.GameplayCode.GDSkeletonEnemyObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDSkeletonEnemyObjects2[i].getVariables().get("EnemyHealth")).sub(1);
}
for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDFlyingEyeEnemyObjects2[i].getVariables().get("EnemyHealth")).sub(1);
}
for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDMushroomEnemyObjects2[i].getVariables().get("EnemyHealth")).sub(1);
}
for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects2[i].returnVariable(gdjs.GameplayCode.GDGoblinEnemyObjects2[i].getVariables().get("EnemyHealth")).sub(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDArrowProjectileObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDArrowProjectileObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.GameplayCode.GDFlyingEyeEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDGoblinEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDMushroomEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDSkeletonEnemyObjects1 */

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDSkeletonEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].getVariableNumber(gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].getVariables().get("EnemyHealth")) <= 0 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDSkeletonEnemyObjects1[k] = gdjs.GameplayCode.GDSkeletonEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDSkeletonEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].getVariableNumber(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].getVariables().get("EnemyHealth")) <= 0 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[k] = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDMushroomEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDMushroomEnemyObjects1[i].getVariableNumber(gdjs.GameplayCode.GDMushroomEnemyObjects1[i].getVariables().get("EnemyHealth")) <= 0 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDMushroomEnemyObjects1[k] = gdjs.GameplayCode.GDMushroomEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDMushroomEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDGoblinEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDGoblinEnemyObjects1[i].getVariableNumber(gdjs.GameplayCode.GDGoblinEnemyObjects1[i].getVariables().get("EnemyHealth")) <= 0 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDGoblinEnemyObjects1[k] = gdjs.GameplayCode.GDGoblinEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition1IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8101660);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDFlyingEyeEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDGoblinEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDMushroomEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDSkeletonEnemyObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].setAnimationName("Dead");
}
for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].setAnimationName("Dead");
}
for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects1[i].setAnimationName("Dead");
}
for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects1[i].setAnimationName("Dead");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "soundbits_ScreamsShouts2_Monsters_Monster_Pain_Death_133.mp3", false, 50, 1);
}}

}


};gdjs.GameplayCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 40, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "music_orlamusic_Epic+010.mp3", true, 10, 1);
}
{ //Subevents
gdjs.GameplayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "enemyspawn");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 6));
}
{ //Subevents
gdjs.GameplayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.GameplayCode.GDHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.GameplayCode.GDHouseObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHealthBarObjects1[i].setScaleX((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameplayCode.GDHouseObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameplayCode.GDHouseObjects1[0].getVariables()).get("HouseHealth"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.GameplayCode.GDHouseObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDHouseObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDHouseObjects1[i].getVariableNumber(gdjs.GameplayCode.GDHouseObjects1[i].getVariables().get("HouseHealth")) < 1 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDHouseObjects1[k] = gdjs.GameplayCode.GDHouseObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDHouseObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition1IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9006108);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "life lost sound.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.GameplayCode.GDHomeButtonObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
gdjs.GameplayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHomeButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", true);
}}

}


{



}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
gdjs.GameplayCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.72, "firerate");
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
gdjs.GameplayCode.GDArrowProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects1Objects, (( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getPointX("Bow")), (( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getPointY("Bow")), "");
}{for(var i = 0, len = gdjs.GameplayCode.GDArrowProjectileObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDArrowProjectileObjects1[i].addPolarForce((( gdjs.GameplayCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDPlayerObjects1[0].getAngle()), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}{for(var i = 0, len = gdjs.GameplayCode.GDArrowProjectileObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDArrowProjectileObjects1[i].setScale(gdjs.GameplayCode.GDArrowProjectileObjects1[i].getScale() * (2));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "zapsplat_warfare_bow_arrow_release_002_15477.mp3", false, 100, 1);
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].setAnimationName("NormalAttack");
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Jumpthru"), gdjs.GameplayCode.GDJumpthruObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDJumpthruObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDJumpthruObjects1[i].activateBehavior("Platform", false);
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Jumpthru"), gdjs.GameplayCode.GDJumpthruObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDJumpthruObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDJumpthruObjects1[i].activateBehavior("Platform", true);
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}
{ //Subevents
gdjs.GameplayCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects1[i].getY() > 1000 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects1[k] = gdjs.GameplayCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", true);
}}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEyeEnemy"), gdjs.GameplayCode.GDFlyingEyeEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoblinEnemy"), gdjs.GameplayCode.GDGoblinEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("MushroomEnemy"), gdjs.GameplayCode.GDMushroomEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkeletonEnemy"), gdjs.GameplayCode.GDSkeletonEnemyObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDSkeletonEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDSkeletonEnemyObjects1[k] = gdjs.GameplayCode.GDSkeletonEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDSkeletonEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[k] = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDMushroomEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDMushroomEnemyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDMushroomEnemyObjects1[k] = gdjs.GameplayCode.GDMushroomEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDMushroomEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDGoblinEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDGoblinEnemyObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDGoblinEnemyObjects1[k] = gdjs.GameplayCode.GDGoblinEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("FlyingEyeEnemy"), gdjs.GameplayCode.GDFlyingEyeEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoblinEnemy"), gdjs.GameplayCode.GDGoblinEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("MushroomEnemy"), gdjs.GameplayCode.GDMushroomEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkeletonEnemy"), gdjs.GameplayCode.GDSkeletonEnemyObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDSkeletonEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDSkeletonEnemyObjects1[k] = gdjs.GameplayCode.GDSkeletonEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDSkeletonEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[k] = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDMushroomEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDMushroomEnemyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDMushroomEnemyObjects1[k] = gdjs.GameplayCode.GDMushroomEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDMushroomEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDGoblinEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDGoblinEnemyObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDGoblinEnemyObjects1[k] = gdjs.GameplayCode.GDGoblinEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDSkeletonEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDSkeletonEnemyObjects1[k] = gdjs.GameplayCode.GDSkeletonEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDSkeletonEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[k] = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDMushroomEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDMushroomEnemyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDMushroomEnemyObjects1[k] = gdjs.GameplayCode.GDMushroomEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDMushroomEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDGoblinEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDGoblinEnemyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDGoblinEnemyObjects1[k] = gdjs.GameplayCode.GDGoblinEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDFlyingEyeEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDGoblinEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDMushroomEnemyObjects1 */
/* Reuse gdjs.GameplayCode.GDSkeletonEnemyObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDSkeletonEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDSkeletonEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDFlyingEyeEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs.GameplayCode.GDMushroomEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDMushroomEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
for(var i = 0, len = gdjs.GameplayCode.GDGoblinEnemyObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDGoblinEnemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
}}

}


};

gdjs.GameplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameplayCode.GDPlayerObjects1.length = 0;
gdjs.GameplayCode.GDPlayerObjects2.length = 0;
gdjs.GameplayCode.GDPlayerObjects3.length = 0;
gdjs.GameplayCode.GDPlayerObjects4.length = 0;
gdjs.GameplayCode.GDJumpthruObjects1.length = 0;
gdjs.GameplayCode.GDJumpthruObjects2.length = 0;
gdjs.GameplayCode.GDJumpthruObjects3.length = 0;
gdjs.GameplayCode.GDJumpthruObjects4.length = 0;
gdjs.GameplayCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.GameplayCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.GameplayCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.GameplayCode.GDTiledGrassPlatformObjects4.length = 0;
gdjs.GameplayCode.GDSkeletonEnemyObjects1.length = 0;
gdjs.GameplayCode.GDSkeletonEnemyObjects2.length = 0;
gdjs.GameplayCode.GDSkeletonEnemyObjects3.length = 0;
gdjs.GameplayCode.GDSkeletonEnemyObjects4.length = 0;
gdjs.GameplayCode.GDFlyingEyeEnemyObjects1.length = 0;
gdjs.GameplayCode.GDFlyingEyeEnemyObjects2.length = 0;
gdjs.GameplayCode.GDFlyingEyeEnemyObjects3.length = 0;
gdjs.GameplayCode.GDFlyingEyeEnemyObjects4.length = 0;
gdjs.GameplayCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.GameplayCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.GameplayCode.GDTiledForestBackgroundObjects3.length = 0;
gdjs.GameplayCode.GDTiledForestBackgroundObjects4.length = 0;
gdjs.GameplayCode.GDHouseObjects1.length = 0;
gdjs.GameplayCode.GDHouseObjects2.length = 0;
gdjs.GameplayCode.GDHouseObjects3.length = 0;
gdjs.GameplayCode.GDHouseObjects4.length = 0;
gdjs.GameplayCode.GDArrowProjectileObjects1.length = 0;
gdjs.GameplayCode.GDArrowProjectileObjects2.length = 0;
gdjs.GameplayCode.GDArrowProjectileObjects3.length = 0;
gdjs.GameplayCode.GDArrowProjectileObjects4.length = 0;
gdjs.GameplayCode.GDDirtObjects1.length = 0;
gdjs.GameplayCode.GDDirtObjects2.length = 0;
gdjs.GameplayCode.GDDirtObjects3.length = 0;
gdjs.GameplayCode.GDDirtObjects4.length = 0;
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = 0;
gdjs.GameplayCode.GDGoblinEnemyObjects2.length = 0;
gdjs.GameplayCode.GDGoblinEnemyObjects3.length = 0;
gdjs.GameplayCode.GDGoblinEnemyObjects4.length = 0;
gdjs.GameplayCode.GDMushroomEnemyObjects1.length = 0;
gdjs.GameplayCode.GDMushroomEnemyObjects2.length = 0;
gdjs.GameplayCode.GDMushroomEnemyObjects3.length = 0;
gdjs.GameplayCode.GDMushroomEnemyObjects4.length = 0;
gdjs.GameplayCode.GDHealthBarObjects1.length = 0;
gdjs.GameplayCode.GDHealthBarObjects2.length = 0;
gdjs.GameplayCode.GDHealthBarObjects3.length = 0;
gdjs.GameplayCode.GDHealthBarObjects4.length = 0;
gdjs.GameplayCode.GDeggObjects1.length = 0;
gdjs.GameplayCode.GDeggObjects2.length = 0;
gdjs.GameplayCode.GDeggObjects3.length = 0;
gdjs.GameplayCode.GDeggObjects4.length = 0;
gdjs.GameplayCode.GDHomeButtonObjects1.length = 0;
gdjs.GameplayCode.GDHomeButtonObjects2.length = 0;
gdjs.GameplayCode.GDHomeButtonObjects3.length = 0;
gdjs.GameplayCode.GDHomeButtonObjects4.length = 0;

gdjs.GameplayCode.eventsList6(runtimeScene);
return;

}

gdjs['GameplayCode'] = gdjs.GameplayCode;
