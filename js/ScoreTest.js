var TotalScoreVars = 0;
var ScoreVars_FHM = 0;
var ScoreVars_PPM = 0;
var ScoreVars_FHEY = 0;
var PPM_ore_block_last_value = 0;
var ore_block_last_value_FHM = 0;
var Owned_Buy_Got_Character_Object = 0;

Owned_Buy_Got_Character_Object = JSON.parse(localStorage.getItem("OwnedCharacterSaveFHEY"));
PPM_ore_block_last_value = JSON.parse(localStorage.getItem("OreBlockLastSave"));
ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));

TotalScoreVars = ore_block_last_value_FHM
TotalScoreVars += PPM_ore_block_last_value
TotalScoreVars += Owned_Buy_Got_Character_Object

ScoreVars_FHM += ore_block_last_value_FHM
ScoreVars_PPM += PPM_ore_block_last_value
ScoreVars_FHEY += Owned_Buy_Got_Character_Object
