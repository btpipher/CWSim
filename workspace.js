

//rankings dropdown html
<button class="button" type="button" data-toggle="example-dropdown">Rankings</button>
<div class="dropdown-pane" id="example-dropdown" data-dropdown>

        <ul class="tabs" data-tabs id="example-tabs">
  <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Team Rankings</a></li>
  <li class="tabs-title"><a href="#panel2">125 Rankings</a></li>
  <li class="tabs-title"><a href="#panel3">133 Rankings</a></li>
  <li class="tabs-title"><a href="#panel4">141 Rankings</a></li>
  <li class="tabs-title"><a href="#panel5">149 Rankings</a></li>
  <li class="tabs-title"><a href="#panel6">157 Rankings</a></li>
  <li class="tabs-title"><a href="#panel7">165 Rankings</a></li>
  <li class="tabs-title"><a href="#panel8">174 Rankings</a></li>
  <li class="tabs-title"><a href="#panel9">184 Rankings</a></li>
  <li class="tabs-title"><a href="#panel10">197 Rankings</a></li>
  <li class="tabs-title"><a href="#panel11">285 Rankings</a></li>
</ul>

  <div class="tabs-content" data-tabs-content="example-tabs">
      <div class="tabs-panel is-active" id="panel1">
        <p>Team Rankings</p>
            <p id="teamr"></p>
      </div>
      <div class="tabs-panel" id="panel2">
        <p>125 Rankings</p>
            <p id="r125"></p>
      </div>
      <div class="tabs-panel" id="panel3">
        <p>133 Rankings</p>
            <p id="r133"></p>
      </div>
      <div class="tabs-panel" id="panel4">
        <p>141 Rankings</p>
            <p id="r141"></p>
      </div>
      <div class="tabs-panel" id="panel5">
        <p>149 Rankings</p>
            <p id="r149"></p>
      </div>
      <div class="tabs-panel" id="panel6">
        <p>157 Rankings</p>
            <p id="r157"></p>
      </div>
      <div class="tabs-panel" id="panel7">
        <p>165 Rankings</p>
            <p id="r165"></p>
      </div>
      <div class="tabs-panel" id="panel8">
        <p>174 Rankings</p>
            <p id="r174"></p>
      </div>
      <div class="tabs-panel" id="panel9">
        <p>184 Rankings</p>
            <p id="r184"></p>
      </div>
      <div class="tabs-panel" id="panel10">
        <p>197 Rankings</p>
            <p id="r197"></p>
      </div>
      <div class="tabs-panel" id="panel11">
        <p>285 Rankings</p>
            <p id="r285"></p>
      </div>
  </div>
</div>
//end





//html for viewing duals by week
<div style="position: absolute; top: 1750px; left: 80px; height:400px;width:75%;overflow:scroll;border:9px inset #0ADA0A;">
<div class="responsive-blog-post">
  <div class="individual-post">
    <button class="button" type="button" data-toggle="example-dropdownduals">Week 1</button>
    <div class="dropdown-pane" id="example-dropdownduals" data-dropdown>
          <a class="button-group" onclick="dualMeetDiv.innerHTML = week1Dual1">Mizz vs UNI</a>
          <a class="button-group" onclick="dualMeetDiv.innerHTML = week1Dual2">UNC vs Ohio</a>
          <a class="button-group" onclick="dualMeetDiv.innerHTML = week1Dual3">Pitt vs WVU</a>
          <a class="button-group" onclick="dualMeetDiv.innerHTML = week1Dual4">Navy vs Army</a>
  </div>
  <button class="button" type="button" data-toggle="example-dropdownduals2">Week 2</button>
  <div class="dropdown-pane" id="example-dropdownduals2" data-dropdown>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual1">PSU vs Lehigh</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual2">LochHaven vs Ohio State</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual3">Iowa vs ISU</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual4">Ohio vs Pitt</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual5">Cornell vs UNC</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual6">NC State vs ASU</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual7">Stanford vs Illinois</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual8">Chatt vs Army</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual9">Buffalo vs Navy</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual10">Air Force vs Drexel</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual11">OU vs Oklahoma State</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual12">Michigan vs UNI</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual13">Bucknell vs Virginia</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual14">MSU vs Virginia Tech</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual15">WVU vs Indiana</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual16">Nebraska vs Missouri</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual17">PSU vs Drexel</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual18">Lehigh vs OU</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual19">LockHaven vs Oklahoma State</a>
        <a class="button-group" onclick="dualMeetDiv.innerHTML = week2Dual20">Ohio State vs Michigan</a>
</div>
<button class="button" type="button" data-toggle="example-dropdownduals3">Week 3</button>
<div class="dropdown-pane" id="example-dropdownduals3" data-dropdown>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual1">PSU vs LockHaven</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual2">Lehigh vs Ohio State</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual3">Iowa vs Ohio</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual4">ISU vs Pitt</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual5">Cornell vs NC State</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual6">North Carolina vs ASU</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual7">Stanford vs Chatt</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual8">Illinois vs Army</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual9">Buffalo vs Air Force</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual10">Navy vs Drexel</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual11">OU vs Michigan</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual12">Oklahoma State vs UNI</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual13">Bucknell vs MSU</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual14">Virginia vs Virginia Tech</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual15">WVU vs Nebraska</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual16">Indiana vs Missouri</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual17">Iowa vs UNI</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual18">ISU vs Bucknell</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual19">Ohio vs Virginia</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week3Dual20">Pitt vs MSU</a>
</div>
<button class="button" type="button" data-toggle="example-dropdownduals4">Week 4</button>
<div class="dropdown-pane" id="example-dropdownduals4" data-dropdown>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual1">PSU vs Ohio State</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual2">Lehigh vs LockHaven</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual3">Iowa vs Pitt</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual4">ISU vs Ohio</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual5">Cornell vs ASU</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual6">North Carolina vs NC State</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual7">Stanford vs Army</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual8">Illinois vs Chatt</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual9">Buffalo vs Drexel</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual10">Navy vs Air Force</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual11">OU vs UNI</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual12">Oklahoma State vs Michigan</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual13">Bucknell vs Virginia Tech</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual14">Virginia vs MSU</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual15">WVU vs Missouri</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual16">Indiana vs Nebraska</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual17">Cornell vs Virginia Tech</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual18">UNC vs WVU</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual19">NC State vs Indiana</a>
      <a class="button-group" onclick="dualMeetDiv.innerHTML = week4Dual20">ASU vs Nebraska</a>
</div>
    <h4>Duals</h4>
    <div id="dualMeetDiv">
    <p id="dualHeadline"></p>
    <p id="dualp125"></p>
    <p id="dualp133"></p>
    <p id="dualp141"></p>
    <p id="dualp149"></p>
    <p id="dualp157"></p>
    <p id="dualp165"></p>
    <p id="dualp174"></p>
    <p id="dualp184"></p>
    <p id="dualp197"></p>
    <p id="dualp285"></p>
    <p id="dualResults"></p>
    </div>

  </div>
</div>
</div>
//end


//ncaa history for html
<button class="button" type="button" data-toggle="example-dropdown4">NCAA's</button>
<div class="dropdown-pane" id="example-dropdown4" data-dropdown>
  <ul class="tabs" data-tabs id="example-tabs4">
    <li class="tabs-title is-active"><a href="#panelTS" aria-selected="true">Team Scores</a></li>
    <li class="tabs-title"><a href="#panel125AA" aria-selected="true">All-Americans</a></li>
  </ul>
              <div class="tabs-content" data-tabs-content="example-tabs4">
                  <div class="tabs-panel is-active" id="panelTS">
                    <p id="ncaaTF"></p>
                </div>
                <div class="tabs-panel" id="panel125AA">
                  <p id="ncaa125AA"></p>
              </div>
              </div>
            </div>
//ncaa history for html
