var TotalScoreVars = 0;
var ScoreVars_FHM = 0;
var ScoreVars_PPM = 0;
var ScoreVars_FHEY = 0;
var Owned_Buy_Got_Character_Object = 0;
var ore_block_last_value_FHM = 0;
var ore_block_last_value_PPM = 0;

ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));
ore_block_last_value_PPM = JSON.parse(localStorage.getItem("OreBlockLastSave"));
Owned_Buy_Got_Character_Object = JSON.parse(localStorage.getItem("OwnedCharacterSaveFHEY"));
TotalScoreVars = ore_block_last_value_FHM
TotalScoreVars += ore_block_last_value_PPM
TotalScoreVars += Owned_Buy_Got_Character_Object

ScoreVars_FHM = ore_block_last_value_FHM
ScoreVars_PPM = ore_block_last_value_PPM
ScoreVars_FHEY = Owned_Buy_Got_Character_Object

document.fillStyle = "rgb( 0,255,255)";
document.font = "40px Source Sans Pro";
document.fillText = ("Total Game Score: " + TotalScoreVars, 400, 80);
document.fillText = ("Score: " + ScoreVars_FHEY, 20, 400);
document.fillText = ("Score: " + ScoreVars_PPM, 300, 400);
document.fillText = ("Score: " + ScoreVars_FHM, 580, 400);
