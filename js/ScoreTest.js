var TotalScoreVars = 0;
var ScoreVars_FHM = 0;;
var ScoreVars_MCM = 0;
var ScoreVars_PPM = 0;
var ScoreVars_FHEY = 0;
var ScoreVars_PPPJ = 0;
var ore_block_last_value = 0;
var ore_block_last_value_FHM = 0;
var ore_block_last_value_MCM = 0;
var Owned_Buy_Got_Character_Object = 0;
var totallevelsvar = 0;


var Year_Date = 2023;


Owned_Buy_Got_Character_Object = JSON.parse(localStorage.getItem("OwnedCharacterSaveFHEY"));
ore_block_last_value = JSON.parse(localStorage.getItem("OreBlockLastSave"));
ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));
ore_block_last_value_MCM = JSON.parse(localStorage.getItem("OreBlockLastSaveMCM"));
totallevelsvar = JSON.parse(localStorage.getItem("TotalLevelSavePPPJ"));

TotalScoreVars = ore_block_last_value_MCM
TotalScoreVars += ore_block_last_value_FHM
TotalScoreVars += ore_block_last_value
TotalScoreVars += Owned_Buy_Got_Character_Object
TotalScoreVars += totallevelsvar


ScoreVars_MCM += ore_block_last_value_MCM
ScoreVars_FHM += ore_block_last_value_FHM
ScoreVars_PPM += ore_block_last_value
ScoreVars_FHEY += Owned_Buy_Got_Character_Object
ScoreVars_PPPJ += totallevelsvar


if (ore_block_last_value == null) {
  ore_block_last_value = JSON.parse(localStorage.getItem("OreBlockLastSave"));
  TotalScoreVars += ore_block_last_value
  ScoreVars_PPM += ore_block_last_value
}

console.log("MCM " + ore_block_last_value_MCM);
console.log("FHM " + ore_block_last_value_FHM);
console.log("PPM " + ore_block_last_value);
console.log("FHEY " + Owned_Buy_Got_Character_Object);
console.log("PPPJ " + totallevelsvar);


console.log("MCMScore " + ScoreVars_MCM);
console.log("FHMScore " + ScoreVars_FHM);
console.log("PPMScore " + ScoreVars_PPM);
console.log("FHEYScore " + ScoreVars_FHEY);
console.log("PPPJScore " + ScoreVars_PPPJ);
