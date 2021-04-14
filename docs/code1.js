gdjs.GameplayCode = {};
gdjs.GameplayCode.GDPlayerObjects1= [];
gdjs.GameplayCode.GDPlayerObjects2= [];
gdjs.GameplayCode.GDPlayerObjects3= [];
gdjs.GameplayCode.GDPlayerObjects4= [];
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
gdjs.GameplayCode.GDScoreTextObjects1= [];
gdjs.GameplayCode.GDScoreTextObjects2= [];
gdjs.GameplayCode.GDScoreTextObjects3= [];
gdjs.GameplayCode.GDScoreTextObjects4= [];
gdjs.GameplayCode.GDHighScoreObjects1= [];
gdjs.GameplayCode.GDHighScoreObjects2= [];
gdjs.GameplayCode.GDHighScoreObjects3= [];
gdjs.GameplayCode.GDHighScoreObjects4= [];
gdjs.GameplayCode.GDBossObjects1= [];
gdjs.GameplayCode.GDBossObjects2= [];
gdjs.GameplayCode.GDBossObjects3= [];
gdjs.GameplayCode.GDBossObjects4= [];
gdjs.GameplayCode.GDBossSummonObjects1= [];
gdjs.GameplayCode.GDBossSummonObjects2= [];
gdjs.GameplayCode.GDBossSummonObjects3= [];
gdjs.GameplayCode.GDBossSummonObjects4= [];
gdjs.GameplayCode.GDPlatformObjects1= [];
gdjs.GameplayCode.GDPlatformObjects2= [];
gdjs.GameplayCode.GDPlatformObjects3= [];
gdjs.GameplayCode.GDPlatformObjects4= [];
gdjs.GameplayCode.GDHealthTextObjects1= [];
gdjs.GameplayCode.GDHealthTextObjects2= [];
gdjs.GameplayCode.GDHealthTextObjects3= [];
gdjs.GameplayCode.GDHealthTextObjects4= [];

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


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.GameplayCode.GDBossObjects1});gdjs.GameplayCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "enemyspawn");
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition1IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9659492);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
gdjs.GameplayCode.GDBossObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossObjects1Objects, 1500, 475, "");
}{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setScale(gdjs.GameplayCode.GDBossObjects1[i].getScale() * (2));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].resetTimer("teleport");
}
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossSummonObjects1Objects = Hashtable.newFrom({"BossSummon": gdjs.GameplayCode.GDBossSummonObjects1});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossSummonObjects1Objects = Hashtable.newFrom({"BossSummon": gdjs.GameplayCode.GDBossSummonObjects1});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameplayCode.GDPlayerObjects1});gdjs.GameplayCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition1IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9660308);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "HighScore", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.GameplayCode.GDHomeButtonObjects1});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects1Objects = Hashtable.newFrom({"ArrowProjectile": gdjs.GameplayCode.GDArrowProjectileObjects1});gdjs.GameplayCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.72, "firerate");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
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


};gdjs.GameplayCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameplayCode.GDPlatformObjects2);
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects2[i].activateBehavior("Platform", false);
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameplayCode.GDPlatformObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlatformObjects1[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.GameplayCode.eventsList6 = function(runtimeScene) {

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


};gdjs.GameplayCode.eventsList7 = function(runtimeScene) {

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
gdjs.GameplayCode.eventsList6(runtimeScene);} //End of subevents
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


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDBossObjects2Objects = Hashtable.newFrom({"SkeletonEnemy": gdjs.GameplayCode.GDSkeletonEnemyObjects2, "FlyingEyeEnemy": gdjs.GameplayCode.GDFlyingEyeEnemyObjects2, "MushroomEnemy": gdjs.GameplayCode.GDMushroomEnemyObjects2, "GoblinEnemy": gdjs.GameplayCode.GDGoblinEnemyObjects2, "Boss": gdjs.GameplayCode.GDBossObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHouseObjects2Objects = Hashtable.newFrom({"House": gdjs.GameplayCode.GDHouseObjects2});gdjs.GameplayCode.eventsList8 = function(runtimeScene) {

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


};gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossObjects2Objects = Hashtable.newFrom({"Boss": gdjs.GameplayCode.GDBossObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHouseObjects2Objects = Hashtable.newFrom({"House": gdjs.GameplayCode.GDHouseObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects2Objects = Hashtable.newFrom({"ArrowProjectile": gdjs.GameplayCode.GDArrowProjectileObjects2});gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDBossObjects2Objects = Hashtable.newFrom({"SkeletonEnemy": gdjs.GameplayCode.GDSkeletonEnemyObjects2, "FlyingEyeEnemy": gdjs.GameplayCode.GDFlyingEyeEnemyObjects2, "MushroomEnemy": gdjs.GameplayCode.GDMushroomEnemyObjects2, "GoblinEnemy": gdjs.GameplayCode.GDGoblinEnemyObjects2, "Boss": gdjs.GameplayCode.GDBossObjects2});gdjs.GameplayCode.eventsList9 = function(runtimeScene) {

{


{
gdjs.copyArray(gdjs.GameplayCode.GDBossObjects1, gdjs.GameplayCode.GDBossObjects2);

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
for(var i = 0, len = gdjs.GameplayCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.GameplayCode.GDBossObjects1, gdjs.GameplayCode.GDBossObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1, gdjs.GameplayCode.GDFlyingEyeEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDGoblinEnemyObjects1, gdjs.GameplayCode.GDGoblinEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.GameplayCode.GDHouseObjects2);
gdjs.copyArray(gdjs.GameplayCode.GDMushroomEnemyObjects1, gdjs.GameplayCode.GDMushroomEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDSkeletonEnemyObjects1, gdjs.GameplayCode.GDSkeletonEnemyObjects2);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDBossObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHouseObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects2 */
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
for(var i = 0, len = gdjs.GameplayCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameplayCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.GameplayCode.GDBossObjects1, gdjs.GameplayCode.GDBossObjects2);

gdjs.copyArray(runtimeScene.getObjects("House"), gdjs.GameplayCode.GDHouseObjects2);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDHouseObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
gdjs.GameplayCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == -(1);
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDHouseObjects2 */
{for(var i = 0, len = gdjs.GameplayCode.GDHouseObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDHouseObjects2[i].returnVariable(gdjs.GameplayCode.GDHouseObjects2[i].getVariables().get("HouseHealth")).sub(5);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).add(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowProjectile"), gdjs.GameplayCode.GDArrowProjectileObjects2);
gdjs.copyArray(gdjs.GameplayCode.GDBossObjects1, gdjs.GameplayCode.GDBossObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDFlyingEyeEnemyObjects1, gdjs.GameplayCode.GDFlyingEyeEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDGoblinEnemyObjects1, gdjs.GameplayCode.GDGoblinEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDMushroomEnemyObjects1, gdjs.GameplayCode.GDMushroomEnemyObjects2);

gdjs.copyArray(gdjs.GameplayCode.GDSkeletonEnemyObjects1, gdjs.GameplayCode.GDSkeletonEnemyObjects2);


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDArrowProjectileObjects2Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDSkeletonEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDFlyingEyeEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDMushroomEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDGoblinEnemyObjects2ObjectsGDgdjs_46GameplayCode_46GDBossObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDArrowProjectileObjects2 */
/* Reuse gdjs.GameplayCode.GDBossObjects2 */
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
for(var i = 0, len = gdjs.GameplayCode.GDBossObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects2[i].returnVariable(gdjs.GameplayCode.GDBossObjects2[i].getVariables().get("EnemyHealth")).sub(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDArrowProjectileObjects2.length ;i < len;++i) {
    gdjs.GameplayCode.GDArrowProjectileObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

/* Reuse gdjs.GameplayCode.GDBossObjects1 */
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
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].getVariableNumber(gdjs.GameplayCode.GDBossObjects1[i].getVariables().get("EnemyHealth")) <= 0 ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition1IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9768964);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
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
for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setAnimationName("Dead");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "soundbits_ScreamsShouts2_Monsters_Monster_Pain_Death_133.mp3", false, 30, 1);
}{runtimeScene.getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.GameplayCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameplayCode.GDHighScoreObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, 40, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.5, "", 0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "music_orlamusic_Epic+010.mp3", true, 10, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "HighScore", runtimeScene, runtimeScene.getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.GameplayCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHighScoreObjects1[i].setString("High Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
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
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "enemyspawn");
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
gdjs.GameplayCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
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
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameplayCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDHealthBarObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDHealthBarObjects1[i].setWidth(40 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameplayCode.GDHouseObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameplayCode.GDHouseObjects1[0].getVariables()).get("HouseHealth"))));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDScoreTextObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition0IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = (gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), 200) == 0);
}
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
gdjs.GameplayCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 0;
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].timerElapsedTime("teleport", 5) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setAnimationName("TeleportStart");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].resetTimer("teleport");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("TeleportStart") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].hasAnimationEnded() ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setY(gdjs.randomWithStep(100, 500, 200));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setAnimationName("TeleportEnd");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("TeleportEnd") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].hasAnimationEnded() ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("Idle") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].timerElapsedTime("summon", 3) ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
gdjs.GameplayCode.GDBossSummonObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossSummonObjects1Objects, (( gdjs.GameplayCode.GDBossObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDBossObjects1[0].getPointX("")), (( gdjs.GameplayCode.GDBossObjects1.length === 0 ) ? 0 :gdjs.GameplayCode.GDBossObjects1[0].getPointY("")) + 50, "");
}{for(var i = 0, len = gdjs.GameplayCode.GDBossSummonObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossSummonObjects1[i].setScale(gdjs.GameplayCode.GDBossSummonObjects1[i].getScale() * (2));
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossSummonObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossSummonObjects1[i].setAnimationName("Appear");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setAnimationName("Summon");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].resetTimer("summon");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("Summon") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].hasAnimationEnded() ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BossSummon"), gdjs.GameplayCode.GDBossSummonObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossSummonObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossSummonObjects1[i].isCurrentAnimationName("Appear") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossSummonObjects1[k] = gdjs.GameplayCode.GDBossSummonObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossSummonObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossSummonObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossSummonObjects1[i].hasAnimationEnded() ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossSummonObjects1[k] = gdjs.GameplayCode.GDBossSummonObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossSummonObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossSummonObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDBossSummonObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossSummonObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BossSummon"), gdjs.GameplayCode.GDBossSummonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDBossSummonObjects1Objects, gdjs.GameplayCode.mapOfGDgdjs_46GameplayCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossSummonObjects1 */
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].returnVariable(gdjs.GameplayCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].resetTimer("disabled");
}
}{for(var i = 0, len = gdjs.GameplayCode.GDBossSummonObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossSummonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BossSummon"), gdjs.GameplayCode.GDBossSummonObjects1);
{for(var i = 0, len = gdjs.GameplayCode.GDBossSummonObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossSummonObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects1[i].timerElapsedTime("disabled", 5) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects1[k] = gdjs.GameplayCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].returnVariable(gdjs.GameplayCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
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
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9653188);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}
{ //Subevents
gdjs.GameplayCode.eventsList3(runtimeScene);} //End of subevents
}

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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameplayCode.GDPlayerObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDPlayerObjects1[i].getVariableNumber(gdjs.GameplayCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDPlayerObjects1[k] = gdjs.GameplayCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDPlayerObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameplayCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDPlayerObjects1[i].setAnimationName("NormalAttack");
}
}
{ //Subevents
gdjs.GameplayCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.GameplayCode.condition0IsTrue_0.val = false;
{
gdjs.GameplayCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}if (gdjs.GameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}
{ //Subevents
gdjs.GameplayCode.eventsList7(runtimeScene);} //End of subevents
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

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);
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
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if (gdjs.GameplayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameplayCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);
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
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
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
gdjs.GameplayCode.GDGoblinEnemyObjects1.length = k;for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( !(gdjs.GameplayCode.GDBossObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        gdjs.GameplayCode.condition1IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameplayCode.GDBossObjects1 */
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
for(var i = 0, len = gdjs.GameplayCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.GameplayCode.GDBossObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeOut", 0, "easeOutQuad", 1500, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boss"), gdjs.GameplayCode.GDBossObjects1);

gdjs.GameplayCode.condition0IsTrue_0.val = false;
gdjs.GameplayCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameplayCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.GameplayCode.GDBossObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.GameplayCode.condition0IsTrue_0.val = true;
        gdjs.GameplayCode.GDBossObjects1[k] = gdjs.GameplayCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.GameplayCode.GDBossObjects1.length = k;}if ( gdjs.GameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameplayCode.conditionTrue_1 = gdjs.GameplayCode.condition1IsTrue_0;
gdjs.GameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9771852);
}
}}
if (gdjs.GameplayCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).add(50);
}}

}


};

gdjs.GameplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameplayCode.GDPlayerObjects1.length = 0;
gdjs.GameplayCode.GDPlayerObjects2.length = 0;
gdjs.GameplayCode.GDPlayerObjects3.length = 0;
gdjs.GameplayCode.GDPlayerObjects4.length = 0;
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
gdjs.GameplayCode.GDScoreTextObjects1.length = 0;
gdjs.GameplayCode.GDScoreTextObjects2.length = 0;
gdjs.GameplayCode.GDScoreTextObjects3.length = 0;
gdjs.GameplayCode.GDScoreTextObjects4.length = 0;
gdjs.GameplayCode.GDHighScoreObjects1.length = 0;
gdjs.GameplayCode.GDHighScoreObjects2.length = 0;
gdjs.GameplayCode.GDHighScoreObjects3.length = 0;
gdjs.GameplayCode.GDHighScoreObjects4.length = 0;
gdjs.GameplayCode.GDBossObjects1.length = 0;
gdjs.GameplayCode.GDBossObjects2.length = 0;
gdjs.GameplayCode.GDBossObjects3.length = 0;
gdjs.GameplayCode.GDBossObjects4.length = 0;
gdjs.GameplayCode.GDBossSummonObjects1.length = 0;
gdjs.GameplayCode.GDBossSummonObjects2.length = 0;
gdjs.GameplayCode.GDBossSummonObjects3.length = 0;
gdjs.GameplayCode.GDBossSummonObjects4.length = 0;
gdjs.GameplayCode.GDPlatformObjects1.length = 0;
gdjs.GameplayCode.GDPlatformObjects2.length = 0;
gdjs.GameplayCode.GDPlatformObjects3.length = 0;
gdjs.GameplayCode.GDPlatformObjects4.length = 0;
gdjs.GameplayCode.GDHealthTextObjects1.length = 0;
gdjs.GameplayCode.GDHealthTextObjects2.length = 0;
gdjs.GameplayCode.GDHealthTextObjects3.length = 0;
gdjs.GameplayCode.GDHealthTextObjects4.length = 0;

gdjs.GameplayCode.eventsList10(runtimeScene);
return;

}

gdjs['GameplayCode'] = gdjs.GameplayCode;
