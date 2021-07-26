var TotalScore;
var TotalScoreVars = 0;
var ore_block_last_value_FHM = 0;

ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));
TotalScoreVars = ore_block_last_value_FHM
document.getElementById("TotalGameScore").innerHTML = myFunction(TotalScoreVars);
