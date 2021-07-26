var TotalScore;
var TotalScoreVars = 0;
var ore_block_last_value_FHM = 0;
var elem = document.getElementById('TotalGameScore');

ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));
TotalScoreVars = ore_block_last_value_FHM
if (typeof elem !== null && elem !== 'undefined' ) {
  document.getElementById("TotalGameScore").innerHTML = ("Total Game Score: " + TotalScoreVars);
}
