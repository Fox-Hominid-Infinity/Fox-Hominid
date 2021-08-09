var TotalScoreVars = 0;
var ScoreVars_FHM = 0;
var ScoreVars_PPM = 0;
var ScoreVars_FHEY = 0;
var ore_block_last_value = 0;
var ore_block_last_value_FHM = 0;
var Owned_Buy_Got_Character_Object = 0;

Owned_Buy_Got_Character_Object = JSON.parse(localStorage.getItem("OwnedCharacterSaveFHEY"));
ore_block_last_value = JSON.parse(localStorage.getItem("OreBlockLastSave"));
ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));


ore_block_last_value = JSON.parse(localStorage.getItem("OreBlockLastSave"));


TotalScoreVars = ore_block_last_value_FHM
TotalScoreVars += ore_block_last_value
TotalScoreVars += Owned_Buy_Got_Character_Object

TotalScoreVars += ore_block_last_value


ScoreVars_FHM += ore_block_last_value_FHM
ScoreVars_PPM += ore_block_last_value
ScoreVars_FHEY += Owned_Buy_Got_Character_Object

ScoreVars_PPM += ore_block_last_value


console.log("FHM" + ore_block_last_value_FHM);
console.log("PPM" + ore_block_last_value);
console.log("FHEY" + Owned_Buy_Got_Character_Object);
