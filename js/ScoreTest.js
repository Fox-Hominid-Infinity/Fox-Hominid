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

var element = document.getElementById("TotalGameScore").innerHTML = ("Total Game Score: " + TotalScoreVars);
var element1 = document.getElementById("FHEYScore").innerHTML = ("Score: " + ScoreVars_FHEY);
var element2 = document.getElementById("PPMScore").innerHTML = ("Score: " + ScoreVars_PPM);
var element3 = document.getElementById("FHMScore").innerHTML = ("Score: " + ScoreVars_FHM);
