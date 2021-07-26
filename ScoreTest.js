var TotalScore;
var TotalScoreVars = 0;
var ore_block_last_value_FHM = 0;

function ScoreMain() {
  ore_block_last_value_FHM = JSON.parse(localStorage.getItem("OreBlockLastSaveFHM"));
  TotalScoreVars = ore_block_last_value_FHM
  TotalScore = new component("75px", "Source Sans Pro", "cyan", 280, 100, "text");
  TotalScore.text = "Total Score " + TotalScoreVars
}
