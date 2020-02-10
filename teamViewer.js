

//Team Viewer Tables
function tableTeam1() {
    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t1.W125.Weight, t1.W125.Name, t1.Name,t1.W125.sWin+"-"+t1.W125.sLoss,t1.W125.cWin+"-"+t1.W125.cLoss,t1.W125.pFinish,t1.W125.Ovr,yearConverter(t1.W125.Year)]);
    customers.push([t1.W133.Weight, t1.W133.Name, t1.Name,t1.W133.sWin+"-"+t1.W133.sLoss,t1.W133.cWin+"-"+t1.W133.cLoss,t1.W133.pFinish,t1.W133.Ovr,yearConverter(t1.W133.Year)]);
    customers.push([t1.W141.Weight, t1.W141.Name, t1.Name,t1.W141.sWin+"-"+t1.W141.sLoss,t1.W141.cWin+"-"+t1.W141.cLoss,t1.W141.pFinish,t1.W141.Ovr,yearConverter(t1.W141.Year)]);
    customers.push([t1.W149.Weight, t1.W149.Name, t1.Name,t1.W149.sWin+"-"+t1.W149.sLoss,t1.W149.cWin+"-"+t1.W149.cLoss,t1.W149.pFinish,t1.W149.Ovr,yearConverter(t1.W149.Year)]);
    customers.push([t1.W157.Weight, t1.W157.Name, t1.Name,t1.W157.sWin+"-"+t1.W157.sLoss,t1.W157.cWin+"-"+t1.W157.cLoss,t1.W157.pFinish,t1.W157.Ovr,yearConverter(t1.W157.Year)]);
    customers.push([t1.W165.Weight, t1.W165.Name, t1.Name,t1.W165.sWin+"-"+t1.W165.sLoss,t1.W165.cWin+"-"+t1.W165.cLoss,t1.W165.pFinish,t1.W165.Ovr,yearConverter(t1.W165.Year)]);
    customers.push([t1.W174.Weight, t1.W174.Name, t1.Name,t1.W174.sWin+"-"+t1.W174.sLoss,t1.W174.cWin+"-"+t1.W174.cLoss,t1.W174.pFinish,t1.W174.Ovr,yearConverter(t1.W174.Year)]);
    customers.push([t1.W184.Weight, t1.W184.Name, t1.Name,t1.W184.sWin+"-"+t1.W184.sLoss,t1.W184.cWin+"-"+t1.W184.cLoss,t1.W184.pFinish,t1.W184.Ovr,yearConverter(t1.W184.Year)]);
    customers.push([t1.W197.Weight, t1.W197.Name, t1.Name,t1.W197.sWin+"-"+t1.W197.sLoss,t1.W197.cWin+"-"+t1.W197.cLoss,t1.W197.pFinish,t1.W197.Ovr,yearConverter(t1.W197.Year)]);
    customers.push([t1.W285.Weight, t1.W285.Name, t1.Name,t1.W285.sWin+"-"+t1.W285.sLoss,t1.W285.cWin+"-"+t1.W285.cLoss,t1.W285.pFinish,t1.W285.Ovr,yearConverter(t1.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t1)[0].Weight,rankNS(t1)[0].Name,t1.Name,rankNS(t1)[0].sWin+"-"+rankNS(t1)[0].sLoss,rankNS(t1)[0].cWin+"-"+rankNS(t1)[0].cLoss,rankNS(t1)[0].pFinish,rankNS(t1)[0].Ovr,yearConverter(rankNS(t1)[0].Year)]);
    customers.push([rankNS(t1)[1].Weight,rankNS(t1)[1].Name,t1.Name,rankNS(t1)[1].sWin+"-"+rankNS(t1)[1].sLoss,rankNS(t1)[1].cWin+"-"+rankNS(t1)[1].cLoss,rankNS(t1)[1].pFinish,rankNS(t1)[1].Ovr,yearConverter(rankNS(t1)[1].Year)]);
    customers.push([rankNS(t1)[2].Weight,rankNS(t1)[2].Name,t1.Name,rankNS(t1)[2].sWin+"-"+rankNS(t1)[2].sLoss,rankNS(t1)[2].cWin+"-"+rankNS(t1)[2].cLoss,rankNS(t1)[2].pFinish,rankNS(t1)[2].Ovr,yearConverter(rankNS(t1)[2].Year)]);
    customers.push([rankNS(t1)[3].Weight,rankNS(t1)[3].Name,t1.Name,rankNS(t1)[3].sWin+"-"+rankNS(t1)[3].sLoss,rankNS(t1)[3].cWin+"-"+rankNS(t1)[3].cLoss,rankNS(t1)[3].pFinish,rankNS(t1)[3].Ovr,yearConverter(rankNS(t1)[3].Year)]);
    customers.push([rankNS(t1)[4].Weight,rankNS(t1)[4].Name,t1.Name,rankNS(t1)[4].sWin+"-"+rankNS(t1)[4].sLoss,rankNS(t1)[4].cWin+"-"+rankNS(t1)[4].cLoss,rankNS(t1)[4].pFinish,rankNS(t1)[4].Ovr,yearConverter(rankNS(t1)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTableT1 = document.getElementById("dvTableT1");
    dvTableT1.innerHTML = "";
    dvTableT1.appendChild(table);
};

function tableTeam2() {
    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t2.W125.Weight, t2.W125.Name, t2.Name,t2.W125.sWin+"-"+t2.W125.sLoss,t2.W125.cWin+"-"+t2.W125.cLoss,t2.W125.pFinish,t2.W125.Ovr,yearConverter(t2.W125.Year)]);
    customers.push([t2.W133.Weight, t2.W133.Name, t2.Name,t2.W133.sWin+"-"+t2.W133.sLoss,t2.W133.cWin+"-"+t2.W133.cLoss,t2.W133.pFinish,t2.W133.Ovr,yearConverter(t2.W133.Year)]);
    customers.push([t2.W141.Weight, t2.W141.Name, t2.Name,t2.W141.sWin+"-"+t2.W141.sLoss,t2.W141.cWin+"-"+t2.W141.cLoss,t2.W141.pFinish,t2.W141.Ovr,yearConverter(t2.W141.Year)]);
    customers.push([t2.W149.Weight, t2.W149.Name, t2.Name,t2.W149.sWin+"-"+t2.W149.sLoss,t2.W149.cWin+"-"+t2.W149.cLoss,t2.W149.pFinish,t2.W149.Ovr,yearConverter(t2.W149.Year)]);
    customers.push([t2.W157.Weight, t2.W157.Name, t2.Name,t2.W157.sWin+"-"+t2.W157.sLoss,t2.W157.cWin+"-"+t2.W157.cLoss,t2.W157.pFinish,t2.W157.Ovr,yearConverter(t2.W157.Year)]);
    customers.push([t2.W165.Weight, t2.W165.Name, t2.Name,t2.W165.sWin+"-"+t2.W165.sLoss,t2.W165.cWin+"-"+t2.W165.cLoss,t2.W165.pFinish,t2.W165.Ovr,yearConverter(t2.W165.Year)]);
    customers.push([t2.W174.Weight, t2.W174.Name, t2.Name,t2.W174.sWin+"-"+t2.W174.sLoss,t2.W174.cWin+"-"+t2.W174.cLoss,t2.W174.pFinish,t2.W174.Ovr,yearConverter(t2.W174.Year)]);
    customers.push([t2.W184.Weight, t2.W184.Name, t2.Name,t2.W184.sWin+"-"+t2.W184.sLoss,t2.W184.cWin+"-"+t2.W184.cLoss,t2.W184.pFinish,t2.W184.Ovr,yearConverter(t2.W184.Year)]);
    customers.push([t2.W197.Weight, t2.W197.Name, t2.Name,t2.W197.sWin+"-"+t2.W197.sLoss,t2.W197.cWin+"-"+t2.W197.cLoss,t2.W197.pFinish,t2.W197.Ovr,yearConverter(t2.W197.Year)]);
    customers.push([t2.W285.Weight, t2.W285.Name, t2.Name,t2.W285.sWin+"-"+t2.W285.sLoss,t2.W285.cWin+"-"+t2.W285.cLoss,t2.W285.pFinish,t2.W285.Ovr,yearConverter(t2.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t2)[0].Weight,rankNS(t2)[0].Name,t2.Name,rankNS(t2)[0].sWin+"-"+rankNS(t2)[0].sLoss,rankNS(t2)[0].cWin+"-"+rankNS(t2)[0].cLoss,rankNS(t2)[0].pFinish,rankNS(t2)[0].Ovr,yearConverter(rankNS(t2)[0].Year)]);
    customers.push([rankNS(t2)[1].Weight,rankNS(t2)[1].Name,t2.Name,rankNS(t2)[1].sWin+"-"+rankNS(t2)[1].sLoss,rankNS(t2)[1].cWin+"-"+rankNS(t2)[1].cLoss,rankNS(t2)[1].pFinish,rankNS(t2)[1].Ovr,yearConverter(rankNS(t2)[1].Year)]);
    customers.push([rankNS(t2)[2].Weight,rankNS(t2)[2].Name,t2.Name,rankNS(t2)[2].sWin+"-"+rankNS(t2)[2].sLoss,rankNS(t2)[2].cWin+"-"+rankNS(t2)[2].cLoss,rankNS(t2)[2].pFinish,rankNS(t2)[2].Ovr,yearConverter(rankNS(t2)[2].Year)]);
    customers.push([rankNS(t2)[3].Weight,rankNS(t2)[3].Name,t2.Name,rankNS(t2)[3].sWin+"-"+rankNS(t2)[3].sLoss,rankNS(t2)[3].cWin+"-"+rankNS(t2)[3].cLoss,rankNS(t2)[3].pFinish,rankNS(t2)[3].Ovr,yearConverter(rankNS(t2)[3].Year)]);
    customers.push([rankNS(t2)[4].Weight,rankNS(t2)[4].Name,t2.Name,rankNS(t2)[4].sWin+"-"+rankNS(t2)[4].sLoss,rankNS(t2)[4].cWin+"-"+rankNS(t2)[4].cLoss,rankNS(t2)[4].pFinish,rankNS(t2)[4].Ovr,yearConverter(rankNS(t2)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet2 = document.getElementById("dvTablet2");
    dvTablet2.innerHTML = "";
    dvTablet2.appendChild(table);
};

function tableTeam3() {
    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t3.W125.Weight, t3.W125.Name, t3.Name,t3.W125.sWin+"-"+t3.W125.sLoss,t3.W125.cWin+"-"+t3.W125.cLoss,t3.W125.pFinish,t3.W125.Ovr,yearConverter(t3.W125.Year)]);
    customers.push([t3.W133.Weight, t3.W133.Name, t3.Name,t3.W133.sWin+"-"+t3.W133.sLoss,t3.W133.cWin+"-"+t3.W133.cLoss,t3.W133.pFinish,t3.W133.Ovr,yearConverter(t3.W133.Year)]);
    customers.push([t3.W141.Weight, t3.W141.Name, t3.Name,t3.W141.sWin+"-"+t3.W141.sLoss,t3.W141.cWin+"-"+t3.W141.cLoss,t3.W141.pFinish,t3.W141.Ovr,yearConverter(t3.W141.Year)]);
    customers.push([t3.W149.Weight, t3.W149.Name, t3.Name,t3.W149.sWin+"-"+t3.W149.sLoss,t3.W149.cWin+"-"+t3.W149.cLoss,t3.W149.pFinish,t3.W149.Ovr,yearConverter(t3.W149.Year)]);
    customers.push([t3.W157.Weight, t3.W157.Name, t3.Name,t3.W157.sWin+"-"+t3.W157.sLoss,t3.W157.cWin+"-"+t3.W157.cLoss,t3.W157.pFinish,t3.W157.Ovr,yearConverter(t3.W157.Year)]);
    customers.push([t3.W165.Weight, t3.W165.Name, t3.Name,t3.W165.sWin+"-"+t3.W165.sLoss,t3.W165.cWin+"-"+t3.W165.cLoss,t3.W165.pFinish,t3.W165.Ovr,yearConverter(t3.W165.Year)]);
    customers.push([t3.W174.Weight, t3.W174.Name, t3.Name,t3.W174.sWin+"-"+t3.W174.sLoss,t3.W174.cWin+"-"+t3.W174.cLoss,t3.W174.pFinish,t3.W174.Ovr,yearConverter(t3.W174.Year)]);
    customers.push([t3.W184.Weight, t3.W184.Name, t3.Name,t3.W184.sWin+"-"+t3.W184.sLoss,t3.W184.cWin+"-"+t3.W184.cLoss,t3.W184.pFinish,t3.W184.Ovr,yearConverter(t3.W184.Year)]);
    customers.push([t3.W197.Weight, t3.W197.Name, t3.Name,t3.W197.sWin+"-"+t3.W197.sLoss,t3.W197.cWin+"-"+t3.W197.cLoss,t3.W197.pFinish,t3.W197.Ovr,yearConverter(t3.W197.Year)]);
    customers.push([t3.W285.Weight, t3.W285.Name, t3.Name,t3.W285.sWin+"-"+t3.W285.sLoss,t3.W285.cWin+"-"+t3.W285.cLoss,t3.W285.pFinish,t3.W285.Ovr,yearConverter(t3.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t3)[0].Weight,rankNS(t3)[0].Name,t3.Name,rankNS(t3)[0].sWin+"-"+rankNS(t3)[0].sLoss,rankNS(t3)[0].cWin+"-"+rankNS(t3)[0].cLoss,rankNS(t3)[0].pFinish,rankNS(t3)[0].Ovr,yearConverter(rankNS(t3)[0].Year)]);
    customers.push([rankNS(t3)[1].Weight,rankNS(t3)[1].Name,t3.Name,rankNS(t3)[1].sWin+"-"+rankNS(t3)[1].sLoss,rankNS(t3)[1].cWin+"-"+rankNS(t3)[1].cLoss,rankNS(t3)[1].pFinish,rankNS(t3)[1].Ovr,yearConverter(rankNS(t3)[1].Year)]);
    customers.push([rankNS(t3)[2].Weight,rankNS(t3)[2].Name,t3.Name,rankNS(t3)[2].sWin+"-"+rankNS(t3)[2].sLoss,rankNS(t3)[2].cWin+"-"+rankNS(t3)[2].cLoss,rankNS(t3)[2].pFinish,rankNS(t3)[2].Ovr,yearConverter(rankNS(t3)[2].Year)]);
    customers.push([rankNS(t3)[3].Weight,rankNS(t3)[3].Name,t3.Name,rankNS(t3)[3].sWin+"-"+rankNS(t3)[3].sLoss,rankNS(t3)[3].cWin+"-"+rankNS(t3)[3].cLoss,rankNS(t3)[3].pFinish,rankNS(t3)[3].Ovr,yearConverter(rankNS(t3)[3].Year)]);
    customers.push([rankNS(t3)[4].Weight,rankNS(t3)[4].Name,t3.Name,rankNS(t3)[4].sWin+"-"+rankNS(t3)[4].sLoss,rankNS(t3)[4].cWin+"-"+rankNS(t3)[4].cLoss,rankNS(t3)[4].pFinish,rankNS(t3)[4].Ovr,yearConverter(rankNS(t3)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet3 = document.getElementById("dvTablet3");
    dvTablet3.innerHTML = "";
    dvTablet3.appendChild(table);
};

function tableTeam4() {
    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t4.W125.Weight, t4.W125.Name, t4.Name,t4.W125.sWin+"-"+t4.W125.sLoss,t4.W125.cWin+"-"+t4.W125.cLoss,t4.W125.pFinish,t4.W125.Ovr,yearConverter(t4.W125.Year)]);
    customers.push([t4.W133.Weight, t4.W133.Name, t4.Name,t4.W133.sWin+"-"+t4.W133.sLoss,t4.W133.cWin+"-"+t4.W133.cLoss,t4.W133.pFinish,t4.W133.Ovr,yearConverter(t4.W133.Year)]);
    customers.push([t4.W141.Weight, t4.W141.Name, t4.Name,t4.W141.sWin+"-"+t4.W141.sLoss,t4.W141.cWin+"-"+t4.W141.cLoss,t4.W141.pFinish,t4.W141.Ovr,yearConverter(t4.W141.Year)]);
    customers.push([t4.W149.Weight, t4.W149.Name, t4.Name,t4.W149.sWin+"-"+t4.W149.sLoss,t4.W149.cWin+"-"+t4.W149.cLoss,t4.W149.pFinish,t4.W149.Ovr,yearConverter(t4.W149.Year)]);
    customers.push([t4.W157.Weight, t4.W157.Name, t4.Name,t4.W157.sWin+"-"+t4.W157.sLoss,t4.W157.cWin+"-"+t4.W157.cLoss,t4.W157.pFinish,t4.W157.Ovr,yearConverter(t4.W157.Year)]);
    customers.push([t4.W165.Weight, t4.W165.Name, t4.Name,t4.W165.sWin+"-"+t4.W165.sLoss,t4.W165.cWin+"-"+t4.W165.cLoss,t4.W165.pFinish,t4.W165.Ovr,yearConverter(t4.W165.Year)]);
    customers.push([t4.W174.Weight, t4.W174.Name, t4.Name,t4.W174.sWin+"-"+t4.W174.sLoss,t4.W174.cWin+"-"+t4.W174.cLoss,t4.W174.pFinish,t4.W174.Ovr,yearConverter(t4.W174.Year)]);
    customers.push([t4.W184.Weight, t4.W184.Name, t4.Name,t4.W184.sWin+"-"+t4.W184.sLoss,t4.W184.cWin+"-"+t4.W184.cLoss,t4.W184.pFinish,t4.W184.Ovr,yearConverter(t4.W184.Year)]);
    customers.push([t4.W197.Weight, t4.W197.Name, t4.Name,t4.W197.sWin+"-"+t4.W197.sLoss,t4.W197.cWin+"-"+t4.W197.cLoss,t4.W197.pFinish,t4.W197.Ovr,yearConverter(t4.W197.Year)]);
    customers.push([t4.W285.Weight, t4.W285.Name, t4.Name,t4.W285.sWin+"-"+t4.W285.sLoss,t4.W285.cWin+"-"+t4.W285.cLoss,t4.W285.pFinish,t4.W285.Ovr,yearConverter(t4.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t4)[0].Weight,rankNS(t4)[0].Name,t4.Name,rankNS(t4)[0].sWin+"-"+rankNS(t4)[0].sLoss,rankNS(t4)[0].cWin+"-"+rankNS(t4)[0].cLoss,rankNS(t4)[0].pFinish,rankNS(t4)[0].Ovr,yearConverter(rankNS(t4)[0].Year)]);
    customers.push([rankNS(t4)[1].Weight,rankNS(t4)[1].Name,t4.Name,rankNS(t4)[1].sWin+"-"+rankNS(t4)[1].sLoss,rankNS(t4)[1].cWin+"-"+rankNS(t4)[1].cLoss,rankNS(t4)[1].pFinish,rankNS(t4)[1].Ovr,yearConverter(rankNS(t4)[1].Year)]);
    customers.push([rankNS(t4)[2].Weight,rankNS(t4)[2].Name,t4.Name,rankNS(t4)[2].sWin+"-"+rankNS(t4)[2].sLoss,rankNS(t4)[2].cWin+"-"+rankNS(t4)[2].cLoss,rankNS(t4)[2].pFinish,rankNS(t4)[2].Ovr,yearConverter(rankNS(t4)[2].Year)]);
    customers.push([rankNS(t4)[3].Weight,rankNS(t4)[3].Name,t4.Name,rankNS(t4)[3].sWin+"-"+rankNS(t4)[3].sLoss,rankNS(t4)[3].cWin+"-"+rankNS(t4)[3].cLoss,rankNS(t4)[3].pFinish,rankNS(t4)[3].Ovr,yearConverter(rankNS(t4)[3].Year)]);
    customers.push([rankNS(t4)[4].Weight,rankNS(t4)[4].Name,t4.Name,rankNS(t4)[4].sWin+"-"+rankNS(t4)[4].sLoss,rankNS(t4)[4].cWin+"-"+rankNS(t4)[4].cLoss,rankNS(t4)[4].pFinish,rankNS(t4)[4].Ovr,yearConverter(rankNS(t4)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet4 = document.getElementById("dvTablet4");
    dvTablet4.innerHTML = "";
    dvTablet4.appendChild(table);
};

function tableTeam5() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t5.W125.Weight, t5.W125.Name, t5.Name,t5.W125.sWin+"-"+t5.W125.sLoss,t5.W125.cWin+"-"+t5.W125.cLoss,t5.W125.pFinish,t5.W125.Ovr,yearConverter(t5.W125.Year)]);
    customers.push([t5.W133.Weight, t5.W133.Name, t5.Name,t5.W133.sWin+"-"+t5.W133.sLoss,t5.W133.cWin+"-"+t5.W133.cLoss,t5.W133.pFinish,t5.W133.Ovr,yearConverter(t5.W133.Year)]);
    customers.push([t5.W141.Weight, t5.W141.Name, t5.Name,t5.W141.sWin+"-"+t5.W141.sLoss,t5.W141.cWin+"-"+t5.W141.cLoss,t5.W141.pFinish,t5.W141.Ovr,yearConverter(t5.W141.Year)]);
    customers.push([t5.W149.Weight, t5.W149.Name, t5.Name,t5.W149.sWin+"-"+t5.W149.sLoss,t5.W149.cWin+"-"+t5.W149.cLoss,t5.W149.pFinish,t5.W149.Ovr,yearConverter(t5.W149.Year)]);
    customers.push([t5.W157.Weight, t5.W157.Name, t5.Name,t5.W157.sWin+"-"+t5.W157.sLoss,t5.W157.cWin+"-"+t5.W157.cLoss,t5.W157.pFinish,t5.W157.Ovr,yearConverter(t5.W157.Year)]);
    customers.push([t5.W165.Weight, t5.W165.Name, t5.Name,t5.W165.sWin+"-"+t5.W165.sLoss,t5.W165.cWin+"-"+t5.W165.cLoss,t5.W165.pFinish,t5.W165.Ovr,yearConverter(t5.W165.Year)]);
    customers.push([t5.W174.Weight, t5.W174.Name, t5.Name,t5.W174.sWin+"-"+t5.W174.sLoss,t5.W174.cWin+"-"+t5.W174.cLoss,t5.W174.pFinish,t5.W174.Ovr,yearConverter(t5.W174.Year)]);
    customers.push([t5.W184.Weight, t5.W184.Name, t5.Name,t5.W184.sWin+"-"+t5.W184.sLoss,t5.W184.cWin+"-"+t5.W184.cLoss,t5.W184.pFinish,t5.W184.Ovr,yearConverter(t5.W184.Year)]);
    customers.push([t5.W197.Weight, t5.W197.Name, t5.Name,t5.W197.sWin+"-"+t5.W197.sLoss,t5.W197.cWin+"-"+t5.W197.cLoss,t5.W197.pFinish,t5.W197.Ovr,yearConverter(t5.W197.Year)]);
    customers.push([t5.W285.Weight, t5.W285.Name, t5.Name,t5.W285.sWin+"-"+t5.W285.sLoss,t5.W285.cWin+"-"+t5.W285.cLoss,t5.W285.pFinish,t5.W285.Ovr,yearConverter(t5.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t5)[0].Weight,rankNS(t5)[0].Name,t5.Name,rankNS(t5)[0].sWin+"-"+rankNS(t5)[0].sLoss,rankNS(t5)[0].cWin+"-"+rankNS(t5)[0].cLoss,rankNS(t5)[0].pFinish,rankNS(t5)[0].Ovr,yearConverter(rankNS(t5)[0].Year)]);
    customers.push([rankNS(t5)[1].Weight,rankNS(t5)[1].Name,t5.Name,rankNS(t5)[1].sWin+"-"+rankNS(t5)[1].sLoss,rankNS(t5)[1].cWin+"-"+rankNS(t5)[1].cLoss,rankNS(t5)[1].pFinish,rankNS(t5)[1].Ovr,yearConverter(rankNS(t5)[1].Year)]);
    customers.push([rankNS(t5)[2].Weight,rankNS(t5)[2].Name,t5.Name,rankNS(t5)[2].sWin+"-"+rankNS(t5)[2].sLoss,rankNS(t5)[2].cWin+"-"+rankNS(t5)[2].cLoss,rankNS(t5)[2].pFinish,rankNS(t5)[2].Ovr,yearConverter(rankNS(t5)[2].Year)]);
    customers.push([rankNS(t5)[3].Weight,rankNS(t5)[3].Name,t5.Name,rankNS(t5)[3].sWin+"-"+rankNS(t5)[3].sLoss,rankNS(t5)[3].cWin+"-"+rankNS(t5)[3].cLoss,rankNS(t5)[3].pFinish,rankNS(t5)[3].Ovr,yearConverter(rankNS(t5)[3].Year)]);
    customers.push([rankNS(t5)[4].Weight,rankNS(t5)[4].Name,t5.Name,rankNS(t5)[4].sWin+"-"+rankNS(t5)[4].sLoss,rankNS(t5)[4].cWin+"-"+rankNS(t5)[4].cLoss,rankNS(t5)[4].pFinish,rankNS(t5)[4].Ovr,yearConverter(rankNS(t5)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet5 = document.getElementById("dvTablet5");
    dvTablet5.innerHTML = "";
    dvTablet5.appendChild(table);
};

function tableTeam6() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t6.W125.Weight, t6.W125.Name, t6.Name,t6.W125.sWin+"-"+t6.W125.sLoss,t6.W125.cWin+"-"+t6.W125.cLoss,t6.W125.pFinish,t6.W125.Ovr,yearConverter(t6.W125.Year)]);
    customers.push([t6.W133.Weight, t6.W133.Name, t6.Name,t6.W133.sWin+"-"+t6.W133.sLoss,t6.W133.cWin+"-"+t6.W133.cLoss,t6.W133.pFinish,t6.W133.Ovr,yearConverter(t6.W133.Year)]);
    customers.push([t6.W141.Weight, t6.W141.Name, t6.Name,t6.W141.sWin+"-"+t6.W141.sLoss,t6.W141.cWin+"-"+t6.W141.cLoss,t6.W141.pFinish,t6.W141.Ovr,yearConverter(t6.W141.Year)]);
    customers.push([t6.W149.Weight, t6.W149.Name, t6.Name,t6.W149.sWin+"-"+t6.W149.sLoss,t6.W149.cWin+"-"+t6.W149.cLoss,t6.W149.pFinish,t6.W149.Ovr,yearConverter(t6.W149.Year)]);
    customers.push([t6.W157.Weight, t6.W157.Name, t6.Name,t6.W157.sWin+"-"+t6.W157.sLoss,t6.W157.cWin+"-"+t6.W157.cLoss,t6.W157.pFinish,t6.W157.Ovr,yearConverter(t6.W157.Year)]);
    customers.push([t6.W165.Weight, t6.W165.Name, t6.Name,t6.W165.sWin+"-"+t6.W165.sLoss,t6.W165.cWin+"-"+t6.W165.cLoss,t6.W165.pFinish,t6.W165.Ovr,yearConverter(t6.W165.Year)]);
    customers.push([t6.W174.Weight, t6.W174.Name, t6.Name,t6.W174.sWin+"-"+t6.W174.sLoss,t6.W174.cWin+"-"+t6.W174.cLoss,t6.W174.pFinish,t6.W174.Ovr,yearConverter(t6.W174.Year)]);
    customers.push([t6.W184.Weight, t6.W184.Name, t6.Name,t6.W184.sWin+"-"+t6.W184.sLoss,t6.W184.cWin+"-"+t6.W184.cLoss,t6.W184.pFinish,t6.W184.Ovr,yearConverter(t6.W184.Year)]);
    customers.push([t6.W197.Weight, t6.W197.Name, t6.Name,t6.W197.sWin+"-"+t6.W197.sLoss,t6.W197.cWin+"-"+t6.W197.cLoss,t6.W197.pFinish,t6.W197.Ovr,yearConverter(t6.W197.Year)]);
    customers.push([t6.W285.Weight, t6.W285.Name, t6.Name,t6.W285.sWin+"-"+t6.W285.sLoss,t6.W285.cWin+"-"+t6.W285.cLoss,t6.W285.pFinish,t6.W285.Ovr,yearConverter(t6.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t6)[0].Weight,rankNS(t6)[0].Name,t6.Name,rankNS(t6)[0].sWin+"-"+rankNS(t6)[0].sLoss,rankNS(t6)[0].cWin+"-"+rankNS(t6)[0].cLoss,rankNS(t6)[0].pFinish,rankNS(t6)[0].Ovr,yearConverter(rankNS(t6)[0].Year)]);
    customers.push([rankNS(t6)[1].Weight,rankNS(t6)[1].Name,t6.Name,rankNS(t6)[1].sWin+"-"+rankNS(t6)[1].sLoss,rankNS(t6)[1].cWin+"-"+rankNS(t6)[1].cLoss,rankNS(t6)[1].pFinish,rankNS(t6)[1].Ovr,yearConverter(rankNS(t6)[1].Year)]);
    customers.push([rankNS(t6)[2].Weight,rankNS(t6)[2].Name,t6.Name,rankNS(t6)[2].sWin+"-"+rankNS(t6)[2].sLoss,rankNS(t6)[2].cWin+"-"+rankNS(t6)[2].cLoss,rankNS(t6)[2].pFinish,rankNS(t6)[2].Ovr,yearConverter(rankNS(t6)[2].Year)]);
    customers.push([rankNS(t6)[3].Weight,rankNS(t6)[3].Name,t6.Name,rankNS(t6)[3].sWin+"-"+rankNS(t6)[3].sLoss,rankNS(t6)[3].cWin+"-"+rankNS(t6)[3].cLoss,rankNS(t6)[3].pFinish,rankNS(t6)[3].Ovr,yearConverter(rankNS(t6)[3].Year)]);
    customers.push([rankNS(t6)[4].Weight,rankNS(t6)[4].Name,t6.Name,rankNS(t6)[4].sWin+"-"+rankNS(t6)[4].sLoss,rankNS(t6)[4].cWin+"-"+rankNS(t6)[4].cLoss,rankNS(t6)[4].pFinish,rankNS(t6)[4].Ovr,yearConverter(rankNS(t6)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet6 = document.getElementById("dvTablet6");
    dvTablet6.innerHTML = "";
    dvTablet6.appendChild(table);
};

function tableTeam7() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t7.W125.Weight, t7.W125.Name, t7.Name,t7.W125.sWin+"-"+t7.W125.sLoss,t7.W125.cWin+"-"+t7.W125.cLoss,t7.W125.pFinish,t7.W125.Ovr,yearConverter(t7.W125.Year)]);
    customers.push([t7.W133.Weight, t7.W133.Name, t7.Name,t7.W133.sWin+"-"+t7.W133.sLoss,t7.W133.cWin+"-"+t7.W133.cLoss,t7.W133.pFinish,t7.W133.Ovr,yearConverter(t7.W133.Year)]);
    customers.push([t7.W141.Weight, t7.W141.Name, t7.Name,t7.W141.sWin+"-"+t7.W141.sLoss,t7.W141.cWin+"-"+t7.W141.cLoss,t7.W141.pFinish,t7.W141.Ovr,yearConverter(t7.W141.Year)]);
    customers.push([t7.W149.Weight, t7.W149.Name, t7.Name,t7.W149.sWin+"-"+t7.W149.sLoss,t7.W149.cWin+"-"+t7.W149.cLoss,t7.W149.pFinish,t7.W149.Ovr,yearConverter(t7.W149.Year)]);
    customers.push([t7.W157.Weight, t7.W157.Name, t7.Name,t7.W157.sWin+"-"+t7.W157.sLoss,t7.W157.cWin+"-"+t7.W157.cLoss,t7.W157.pFinish,t7.W157.Ovr,yearConverter(t7.W157.Year)]);
    customers.push([t7.W165.Weight, t7.W165.Name, t7.Name,t7.W165.sWin+"-"+t7.W165.sLoss,t7.W165.cWin+"-"+t7.W165.cLoss,t7.W165.pFinish,t7.W165.Ovr,yearConverter(t7.W165.Year)]);
    customers.push([t7.W174.Weight, t7.W174.Name, t7.Name,t7.W174.sWin+"-"+t7.W174.sLoss,t7.W174.cWin+"-"+t7.W174.cLoss,t7.W174.pFinish,t7.W174.Ovr,yearConverter(t7.W174.Year)]);
    customers.push([t7.W184.Weight, t7.W184.Name, t7.Name,t7.W184.sWin+"-"+t7.W184.sLoss,t7.W184.cWin+"-"+t7.W184.cLoss,t7.W184.pFinish,t7.W184.Ovr,yearConverter(t7.W184.Year)]);
    customers.push([t7.W197.Weight, t7.W197.Name, t7.Name,t7.W197.sWin+"-"+t7.W197.sLoss,t7.W197.cWin+"-"+t7.W197.cLoss,t7.W197.pFinish,t7.W197.Ovr,yearConverter(t7.W197.Year)]);
    customers.push([t7.W285.Weight, t7.W285.Name, t7.Name,t7.W285.sWin+"-"+t7.W285.sLoss,t7.W285.cWin+"-"+t7.W285.cLoss,t7.W285.pFinish,t7.W285.Ovr,yearConverter(t7.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t7)[0].Weight,rankNS(t7)[0].Name,t7.Name,rankNS(t7)[0].sWin+"-"+rankNS(t7)[0].sLoss,rankNS(t7)[0].cWin+"-"+rankNS(t7)[0].cLoss,rankNS(t7)[0].pFinish,rankNS(t7)[0].Ovr,yearConverter(rankNS(t7)[0].Year)]);
    customers.push([rankNS(t7)[1].Weight,rankNS(t7)[1].Name,t7.Name,rankNS(t7)[1].sWin+"-"+rankNS(t7)[1].sLoss,rankNS(t7)[1].cWin+"-"+rankNS(t7)[1].cLoss,rankNS(t7)[1].pFinish,rankNS(t7)[1].Ovr,yearConverter(rankNS(t7)[1].Year)]);
    customers.push([rankNS(t7)[2].Weight,rankNS(t7)[2].Name,t7.Name,rankNS(t7)[2].sWin+"-"+rankNS(t7)[2].sLoss,rankNS(t7)[2].cWin+"-"+rankNS(t7)[2].cLoss,rankNS(t7)[2].pFinish,rankNS(t7)[2].Ovr,yearConverter(rankNS(t7)[2].Year)]);
    customers.push([rankNS(t7)[3].Weight,rankNS(t7)[3].Name,t7.Name,rankNS(t7)[3].sWin+"-"+rankNS(t7)[3].sLoss,rankNS(t7)[3].cWin+"-"+rankNS(t7)[3].cLoss,rankNS(t7)[3].pFinish,rankNS(t7)[3].Ovr,yearConverter(rankNS(t7)[3].Year)]);
    customers.push([rankNS(t7)[4].Weight,rankNS(t7)[4].Name,t7.Name,rankNS(t7)[4].sWin+"-"+rankNS(t7)[4].sLoss,rankNS(t7)[4].cWin+"-"+rankNS(t7)[4].cLoss,rankNS(t7)[4].pFinish,rankNS(t7)[4].Ovr,yearConverter(rankNS(t7)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet7 = document.getElementById("dvTablet7");
    dvTablet7.innerHTML = "";
    dvTablet7.appendChild(table);
};

function tableTeam8() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t8.W125.Weight, t8.W125.Name, t8.Name,t8.W125.sWin+"-"+t8.W125.sLoss,t8.W125.cWin+"-"+t8.W125.cLoss,t8.W125.pFinish,t8.W125.Ovr,yearConverter(t8.W125.Year)]);
    customers.push([t8.W133.Weight, t8.W133.Name, t8.Name,t8.W133.sWin+"-"+t8.W133.sLoss,t8.W133.cWin+"-"+t8.W133.cLoss,t8.W133.pFinish,t8.W133.Ovr,yearConverter(t8.W133.Year)]);
    customers.push([t8.W141.Weight, t8.W141.Name, t8.Name,t8.W141.sWin+"-"+t8.W141.sLoss,t8.W141.cWin+"-"+t8.W141.cLoss,t8.W141.pFinish,t8.W141.Ovr,yearConverter(t8.W141.Year)]);
    customers.push([t8.W149.Weight, t8.W149.Name, t8.Name,t8.W149.sWin+"-"+t8.W149.sLoss,t8.W149.cWin+"-"+t8.W149.cLoss,t8.W149.pFinish,t8.W149.Ovr,yearConverter(t8.W149.Year)]);
    customers.push([t8.W157.Weight, t8.W157.Name, t8.Name,t8.W157.sWin+"-"+t8.W157.sLoss,t8.W157.cWin+"-"+t8.W157.cLoss,t8.W157.pFinish,t8.W157.Ovr,yearConverter(t8.W157.Year)]);
    customers.push([t8.W165.Weight, t8.W165.Name, t8.Name,t8.W165.sWin+"-"+t8.W165.sLoss,t8.W165.cWin+"-"+t8.W165.cLoss,t8.W165.pFinish,t8.W165.Ovr,yearConverter(t8.W165.Year)]);
    customers.push([t8.W174.Weight, t8.W174.Name, t8.Name,t8.W174.sWin+"-"+t8.W174.sLoss,t8.W174.cWin+"-"+t8.W174.cLoss,t8.W174.pFinish,t8.W174.Ovr,yearConverter(t8.W174.Year)]);
    customers.push([t8.W184.Weight, t8.W184.Name, t8.Name,t8.W184.sWin+"-"+t8.W184.sLoss,t8.W184.cWin+"-"+t8.W184.cLoss,t8.W184.pFinish,t8.W184.Ovr,yearConverter(t8.W184.Year)]);
    customers.push([t8.W197.Weight, t8.W197.Name, t8.Name,t8.W197.sWin+"-"+t8.W197.sLoss,t8.W197.cWin+"-"+t8.W197.cLoss,t8.W197.pFinish,t8.W197.Ovr,yearConverter(t8.W197.Year)]);
    customers.push([t8.W285.Weight, t8.W285.Name, t8.Name,t8.W285.sWin+"-"+t8.W285.sLoss,t8.W285.cWin+"-"+t8.W285.cLoss,t8.W285.pFinish,t8.W285.Ovr,yearConverter(t8.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t8)[0].Weight,rankNS(t8)[0].Name,t8.Name,rankNS(t8)[0].sWin+"-"+rankNS(t8)[0].sLoss,rankNS(t8)[0].cWin+"-"+rankNS(t8)[0].cLoss,rankNS(t8)[0].pFinish,rankNS(t8)[0].Ovr,yearConverter(rankNS(t8)[0].Year)]);
    customers.push([rankNS(t8)[1].Weight,rankNS(t8)[1].Name,t8.Name,rankNS(t8)[1].sWin+"-"+rankNS(t8)[1].sLoss,rankNS(t8)[1].cWin+"-"+rankNS(t8)[1].cLoss,rankNS(t8)[1].pFinish,rankNS(t8)[1].Ovr,yearConverter(rankNS(t8)[1].Year)]);
    customers.push([rankNS(t8)[2].Weight,rankNS(t8)[2].Name,t8.Name,rankNS(t8)[2].sWin+"-"+rankNS(t8)[2].sLoss,rankNS(t8)[2].cWin+"-"+rankNS(t8)[2].cLoss,rankNS(t8)[2].pFinish,rankNS(t8)[2].Ovr,yearConverter(rankNS(t8)[2].Year)]);
    customers.push([rankNS(t8)[3].Weight,rankNS(t8)[3].Name,t8.Name,rankNS(t8)[3].sWin+"-"+rankNS(t8)[3].sLoss,rankNS(t8)[3].cWin+"-"+rankNS(t8)[3].cLoss,rankNS(t8)[3].pFinish,rankNS(t8)[3].Ovr,yearConverter(rankNS(t8)[3].Year)]);
    customers.push([rankNS(t8)[4].Weight,rankNS(t8)[4].Name,t8.Name,rankNS(t8)[4].sWin+"-"+rankNS(t8)[4].sLoss,rankNS(t8)[4].cWin+"-"+rankNS(t8)[4].cLoss,rankNS(t8)[4].pFinish,rankNS(t8)[4].Ovr,yearConverter(rankNS(t8)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet8 = document.getElementById("dvTablet8");
    dvTablet8.innerHTML = "";
    dvTablet8.appendChild(table);
};

function tableTeam9() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t9.W125.Weight, t9.W125.Name, t9.Name,t9.W125.sWin+"-"+t9.W125.sLoss,t9.W125.cWin+"-"+t9.W125.cLoss,t9.W125.pFinish,t9.W125.Ovr,yearConverter(t9.W125.Year)]);
    customers.push([t9.W133.Weight, t9.W133.Name, t9.Name,t9.W133.sWin+"-"+t9.W133.sLoss,t9.W133.cWin+"-"+t9.W133.cLoss,t9.W133.pFinish,t9.W133.Ovr,yearConverter(t9.W133.Year)]);
    customers.push([t9.W141.Weight, t9.W141.Name, t9.Name,t9.W141.sWin+"-"+t9.W141.sLoss,t9.W141.cWin+"-"+t9.W141.cLoss,t9.W141.pFinish,t9.W141.Ovr,yearConverter(t9.W141.Year)]);
    customers.push([t9.W149.Weight, t9.W149.Name, t9.Name,t9.W149.sWin+"-"+t9.W149.sLoss,t9.W149.cWin+"-"+t9.W149.cLoss,t9.W149.pFinish,t9.W149.Ovr,yearConverter(t9.W149.Year)]);
    customers.push([t9.W157.Weight, t9.W157.Name, t9.Name,t9.W157.sWin+"-"+t9.W157.sLoss,t9.W157.cWin+"-"+t9.W157.cLoss,t9.W157.pFinish,t9.W157.Ovr,yearConverter(t9.W157.Year)]);
    customers.push([t9.W165.Weight, t9.W165.Name, t9.Name,t9.W165.sWin+"-"+t9.W165.sLoss,t9.W165.cWin+"-"+t9.W165.cLoss,t9.W165.pFinish,t9.W165.Ovr,yearConverter(t9.W165.Year)]);
    customers.push([t9.W174.Weight, t9.W174.Name, t9.Name,t9.W174.sWin+"-"+t9.W174.sLoss,t9.W174.cWin+"-"+t9.W174.cLoss,t9.W174.pFinish,t9.W174.Ovr,yearConverter(t9.W174.Year)]);
    customers.push([t9.W184.Weight, t9.W184.Name, t9.Name,t9.W184.sWin+"-"+t9.W184.sLoss,t9.W184.cWin+"-"+t9.W184.cLoss,t9.W184.pFinish,t9.W184.Ovr,yearConverter(t9.W184.Year)]);
    customers.push([t9.W197.Weight, t9.W197.Name, t9.Name,t9.W197.sWin+"-"+t9.W197.sLoss,t9.W197.cWin+"-"+t9.W197.cLoss,t9.W197.pFinish,t9.W197.Ovr,yearConverter(t9.W197.Year)]);
    customers.push([t9.W285.Weight, t9.W285.Name, t9.Name,t9.W285.sWin+"-"+t9.W285.sLoss,t9.W285.cWin+"-"+t9.W285.cLoss,t9.W285.pFinish,t9.W285.Ovr,yearConverter(t9.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t9)[0].Weight,rankNS(t9)[0].Name,t9.Name,rankNS(t9)[0].sWin+"-"+rankNS(t9)[0].sLoss,rankNS(t9)[0].cWin+"-"+rankNS(t9)[0].cLoss,rankNS(t9)[0].pFinish,rankNS(t9)[0].Ovr,yearConverter(rankNS(t9)[0].Year)]);
    customers.push([rankNS(t9)[1].Weight,rankNS(t9)[1].Name,t9.Name,rankNS(t9)[1].sWin+"-"+rankNS(t9)[1].sLoss,rankNS(t9)[1].cWin+"-"+rankNS(t9)[1].cLoss,rankNS(t9)[1].pFinish,rankNS(t9)[1].Ovr,yearConverter(rankNS(t9)[1].Year)]);
    customers.push([rankNS(t9)[2].Weight,rankNS(t9)[2].Name,t9.Name,rankNS(t9)[2].sWin+"-"+rankNS(t9)[2].sLoss,rankNS(t9)[2].cWin+"-"+rankNS(t9)[2].cLoss,rankNS(t9)[2].pFinish,rankNS(t9)[2].Ovr,yearConverter(rankNS(t9)[2].Year)]);
    customers.push([rankNS(t9)[3].Weight,rankNS(t9)[3].Name,t9.Name,rankNS(t9)[3].sWin+"-"+rankNS(t9)[3].sLoss,rankNS(t9)[3].cWin+"-"+rankNS(t9)[3].cLoss,rankNS(t9)[3].pFinish,rankNS(t9)[3].Ovr,yearConverter(rankNS(t9)[3].Year)]);
    customers.push([rankNS(t9)[4].Weight,rankNS(t9)[4].Name,t9.Name,rankNS(t9)[4].sWin+"-"+rankNS(t9)[4].sLoss,rankNS(t9)[4].cWin+"-"+rankNS(t9)[4].cLoss,rankNS(t9)[4].pFinish,rankNS(t9)[4].Ovr,yearConverter(rankNS(t9)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet9 = document.getElementById("dvTablet9");
    dvTablet9.innerHTML = "";
    dvTablet9.appendChild(table);
};

function tableTeam10() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t10.W125.Weight, t10.W125.Name, t10.Name,t10.W125.sWin+"-"+t10.W125.sLoss,t10.W125.cWin+"-"+t10.W125.cLoss,t10.W125.pFinish,t10.W125.Ovr,yearConverter(t10.W125.Year)]);
    customers.push([t10.W133.Weight, t10.W133.Name, t10.Name,t10.W133.sWin+"-"+t10.W133.sLoss,t10.W133.cWin+"-"+t10.W133.cLoss,t10.W133.pFinish,t10.W133.Ovr,yearConverter(t10.W133.Year)]);
    customers.push([t10.W141.Weight, t10.W141.Name, t10.Name,t10.W141.sWin+"-"+t10.W141.sLoss,t10.W141.cWin+"-"+t10.W141.cLoss,t10.W141.pFinish,t10.W141.Ovr,yearConverter(t10.W141.Year)]);
    customers.push([t10.W149.Weight, t10.W149.Name, t10.Name,t10.W149.sWin+"-"+t10.W149.sLoss,t10.W149.cWin+"-"+t10.W149.cLoss,t10.W149.pFinish,t10.W149.Ovr,yearConverter(t10.W149.Year)]);
    customers.push([t10.W157.Weight, t10.W157.Name, t10.Name,t10.W157.sWin+"-"+t10.W157.sLoss,t10.W157.cWin+"-"+t10.W157.cLoss,t10.W157.pFinish,t10.W157.Ovr,yearConverter(t10.W157.Year)]);
    customers.push([t10.W165.Weight, t10.W165.Name, t10.Name,t10.W165.sWin+"-"+t10.W165.sLoss,t10.W165.cWin+"-"+t10.W165.cLoss,t10.W165.pFinish,t10.W165.Ovr,yearConverter(t10.W165.Year)]);
    customers.push([t10.W174.Weight, t10.W174.Name, t10.Name,t10.W174.sWin+"-"+t10.W174.sLoss,t10.W174.cWin+"-"+t10.W174.cLoss,t10.W174.pFinish,t10.W174.Ovr,yearConverter(t10.W174.Year)]);
    customers.push([t10.W184.Weight, t10.W184.Name, t10.Name,t10.W184.sWin+"-"+t10.W184.sLoss,t10.W184.cWin+"-"+t10.W184.cLoss,t10.W184.pFinish,t10.W184.Ovr,yearConverter(t10.W184.Year)]);
    customers.push([t10.W197.Weight, t10.W197.Name, t10.Name,t10.W197.sWin+"-"+t10.W197.sLoss,t10.W197.cWin+"-"+t10.W197.cLoss,t10.W197.pFinish,t10.W197.Ovr,yearConverter(t10.W197.Year)]);
    customers.push([t10.W285.Weight, t10.W285.Name, t10.Name,t10.W285.sWin+"-"+t10.W285.sLoss,t10.W285.cWin+"-"+t10.W285.cLoss,t10.W285.pFinish,t10.W285.Ovr,yearConverter(t10.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t10)[0].Weight,rankNS(t10)[0].Name,t10.Name,rankNS(t10)[0].sWin+"-"+rankNS(t10)[0].sLoss,rankNS(t10)[0].cWin+"-"+rankNS(t10)[0].cLoss,rankNS(t10)[0].pFinish,rankNS(t10)[0].Ovr,yearConverter(rankNS(t10)[0].Year)]);
    customers.push([rankNS(t10)[1].Weight,rankNS(t10)[1].Name,t10.Name,rankNS(t10)[1].sWin+"-"+rankNS(t10)[1].sLoss,rankNS(t10)[1].cWin+"-"+rankNS(t10)[1].cLoss,rankNS(t10)[1].pFinish,rankNS(t10)[1].Ovr,yearConverter(rankNS(t10)[1].Year)]);
    customers.push([rankNS(t10)[2].Weight,rankNS(t10)[2].Name,t10.Name,rankNS(t10)[2].sWin+"-"+rankNS(t10)[2].sLoss,rankNS(t10)[2].cWin+"-"+rankNS(t10)[2].cLoss,rankNS(t10)[2].pFinish,rankNS(t10)[2].Ovr,yearConverter(rankNS(t10)[2].Year)]);
    customers.push([rankNS(t10)[3].Weight,rankNS(t10)[3].Name,t10.Name,rankNS(t10)[3].sWin+"-"+rankNS(t10)[3].sLoss,rankNS(t10)[3].cWin+"-"+rankNS(t10)[3].cLoss,rankNS(t10)[3].pFinish,rankNS(t10)[3].Ovr,yearConverter(rankNS(t10)[3].Year)]);
    customers.push([rankNS(t10)[4].Weight,rankNS(t10)[4].Name,t10.Name,rankNS(t10)[4].sWin+"-"+rankNS(t10)[4].sLoss,rankNS(t10)[4].cWin+"-"+rankNS(t10)[4].cLoss,rankNS(t10)[4].pFinish,rankNS(t10)[4].Ovr,yearConverter(rankNS(t10)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet10 = document.getElementById("dvTablet10");
    dvTablet10.innerHTML = "";
    dvTablet10.appendChild(table);
};

function tableTeam11() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t11.W125.Weight, t11.W125.Name, t11.Name,t11.W125.sWin+"-"+t11.W125.sLoss,t11.W125.cWin+"-"+t11.W125.cLoss,t11.W125.pFinish,t11.W125.Ovr,yearConverter(t11.W125.Year)]);
    customers.push([t11.W133.Weight, t11.W133.Name, t11.Name,t11.W133.sWin+"-"+t11.W133.sLoss,t11.W133.cWin+"-"+t11.W133.cLoss,t11.W133.pFinish,t11.W133.Ovr,yearConverter(t11.W133.Year)]);
    customers.push([t11.W141.Weight, t11.W141.Name, t11.Name,t11.W141.sWin+"-"+t11.W141.sLoss,t11.W141.cWin+"-"+t11.W141.cLoss,t11.W141.pFinish,t11.W141.Ovr,yearConverter(t11.W141.Year)]);
    customers.push([t11.W149.Weight, t11.W149.Name, t11.Name,t11.W149.sWin+"-"+t11.W149.sLoss,t11.W149.cWin+"-"+t11.W149.cLoss,t11.W149.pFinish,t11.W149.Ovr,yearConverter(t11.W149.Year)]);
    customers.push([t11.W157.Weight, t11.W157.Name, t11.Name,t11.W157.sWin+"-"+t11.W157.sLoss,t11.W157.cWin+"-"+t11.W157.cLoss,t11.W157.pFinish,t11.W157.Ovr,yearConverter(t11.W157.Year)]);
    customers.push([t11.W165.Weight, t11.W165.Name, t11.Name,t11.W165.sWin+"-"+t11.W165.sLoss,t11.W165.cWin+"-"+t11.W165.cLoss,t11.W165.pFinish,t11.W165.Ovr,yearConverter(t11.W165.Year)]);
    customers.push([t11.W174.Weight, t11.W174.Name, t11.Name,t11.W174.sWin+"-"+t11.W174.sLoss,t11.W174.cWin+"-"+t11.W174.cLoss,t11.W174.pFinish,t11.W174.Ovr,yearConverter(t11.W174.Year)]);
    customers.push([t11.W184.Weight, t11.W184.Name, t11.Name,t11.W184.sWin+"-"+t11.W184.sLoss,t11.W184.cWin+"-"+t11.W184.cLoss,t11.W184.pFinish,t11.W184.Ovr,yearConverter(t11.W184.Year)]);
    customers.push([t11.W197.Weight, t11.W197.Name, t11.Name,t11.W197.sWin+"-"+t11.W197.sLoss,t11.W197.cWin+"-"+t11.W197.cLoss,t11.W197.pFinish,t11.W197.Ovr,yearConverter(t11.W197.Year)]);
    customers.push([t11.W285.Weight, t11.W285.Name, t11.Name,t11.W285.sWin+"-"+t11.W285.sLoss,t11.W285.cWin+"-"+t11.W285.cLoss,t11.W285.pFinish,t11.W285.Ovr,yearConverter(t11.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t11)[0].Weight,rankNS(t11)[0].Name,t11.Name,rankNS(t11)[0].sWin+"-"+rankNS(t11)[0].sLoss,rankNS(t11)[0].cWin+"-"+rankNS(t11)[0].cLoss,rankNS(t11)[0].pFinish,rankNS(t11)[0].Ovr,yearConverter(rankNS(t11)[0].Year)]);
    customers.push([rankNS(t11)[1].Weight,rankNS(t11)[1].Name,t11.Name,rankNS(t11)[1].sWin+"-"+rankNS(t11)[1].sLoss,rankNS(t11)[1].cWin+"-"+rankNS(t11)[1].cLoss,rankNS(t11)[1].pFinish,rankNS(t11)[1].Ovr,yearConverter(rankNS(t11)[1].Year)]);
    customers.push([rankNS(t11)[2].Weight,rankNS(t11)[2].Name,t11.Name,rankNS(t11)[2].sWin+"-"+rankNS(t11)[2].sLoss,rankNS(t11)[2].cWin+"-"+rankNS(t11)[2].cLoss,rankNS(t11)[2].pFinish,rankNS(t11)[2].Ovr,yearConverter(rankNS(t11)[2].Year)]);
    customers.push([rankNS(t11)[3].Weight,rankNS(t11)[3].Name,t11.Name,rankNS(t11)[3].sWin+"-"+rankNS(t11)[3].sLoss,rankNS(t11)[3].cWin+"-"+rankNS(t11)[3].cLoss,rankNS(t11)[3].pFinish,rankNS(t11)[3].Ovr,yearConverter(rankNS(t11)[3].Year)]);
    customers.push([rankNS(t11)[4].Weight,rankNS(t11)[4].Name,t11.Name,rankNS(t11)[4].sWin+"-"+rankNS(t11)[4].sLoss,rankNS(t11)[4].cWin+"-"+rankNS(t11)[4].cLoss,rankNS(t11)[4].pFinish,rankNS(t11)[4].Ovr,yearConverter(rankNS(t11)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet11 = document.getElementById("dvTablet11");
    dvTablet11.innerHTML = "";
    dvTablet11.appendChild(table);
};

function tableTeam12() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t12.W125.Weight, t12.W125.Name, t12.Name,t12.W125.sWin+"-"+t12.W125.sLoss,t12.W125.cWin+"-"+t12.W125.cLoss,t12.W125.pFinish,t12.W125.Ovr,yearConverter(t12.W125.Year)]);
    customers.push([t12.W133.Weight, t12.W133.Name, t12.Name,t12.W133.sWin+"-"+t12.W133.sLoss,t12.W133.cWin+"-"+t12.W133.cLoss,t12.W133.pFinish,t12.W133.Ovr,yearConverter(t12.W133.Year)]);
    customers.push([t12.W141.Weight, t12.W141.Name, t12.Name,t12.W141.sWin+"-"+t12.W141.sLoss,t12.W141.cWin+"-"+t12.W141.cLoss,t12.W141.pFinish,t12.W141.Ovr,yearConverter(t12.W141.Year)]);
    customers.push([t12.W149.Weight, t12.W149.Name, t12.Name,t12.W149.sWin+"-"+t12.W149.sLoss,t12.W149.cWin+"-"+t12.W149.cLoss,t12.W149.pFinish,t12.W149.Ovr,yearConverter(t12.W149.Year)]);
    customers.push([t12.W157.Weight, t12.W157.Name, t12.Name,t12.W157.sWin+"-"+t12.W157.sLoss,t12.W157.cWin+"-"+t12.W157.cLoss,t12.W157.pFinish,t12.W157.Ovr,yearConverter(t12.W157.Year)]);
    customers.push([t12.W165.Weight, t12.W165.Name, t12.Name,t12.W165.sWin+"-"+t12.W165.sLoss,t12.W165.cWin+"-"+t12.W165.cLoss,t12.W165.pFinish,t12.W165.Ovr,yearConverter(t12.W165.Year)]);
    customers.push([t12.W174.Weight, t12.W174.Name, t12.Name,t12.W174.sWin+"-"+t12.W174.sLoss,t12.W174.cWin+"-"+t12.W174.cLoss,t12.W174.pFinish,t12.W174.Ovr,yearConverter(t12.W174.Year)]);
    customers.push([t12.W184.Weight, t12.W184.Name, t12.Name,t12.W184.sWin+"-"+t12.W184.sLoss,t12.W184.cWin+"-"+t12.W184.cLoss,t12.W184.pFinish,t12.W184.Ovr,yearConverter(t12.W184.Year)]);
    customers.push([t12.W197.Weight, t12.W197.Name, t12.Name,t12.W197.sWin+"-"+t12.W197.sLoss,t12.W197.cWin+"-"+t12.W197.cLoss,t12.W197.pFinish,t12.W197.Ovr,yearConverter(t12.W197.Year)]);
    customers.push([t12.W285.Weight, t12.W285.Name, t12.Name,t12.W285.sWin+"-"+t12.W285.sLoss,t12.W285.cWin+"-"+t12.W285.cLoss,t12.W285.pFinish,t12.W285.Ovr,yearConverter(t12.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t12)[0].Weight,rankNS(t12)[0].Name,t12.Name,rankNS(t12)[0].sWin+"-"+rankNS(t12)[0].sLoss,rankNS(t12)[0].cWin+"-"+rankNS(t12)[0].cLoss,rankNS(t12)[0].pFinish,rankNS(t12)[0].Ovr,yearConverter(rankNS(t12)[0].Year)]);
    customers.push([rankNS(t12)[1].Weight,rankNS(t12)[1].Name,t12.Name,rankNS(t12)[1].sWin+"-"+rankNS(t12)[1].sLoss,rankNS(t12)[1].cWin+"-"+rankNS(t12)[1].cLoss,rankNS(t12)[1].pFinish,rankNS(t12)[1].Ovr,yearConverter(rankNS(t12)[1].Year)]);
    customers.push([rankNS(t12)[2].Weight,rankNS(t12)[2].Name,t12.Name,rankNS(t12)[2].sWin+"-"+rankNS(t12)[2].sLoss,rankNS(t12)[2].cWin+"-"+rankNS(t12)[2].cLoss,rankNS(t12)[2].pFinish,rankNS(t12)[2].Ovr,yearConverter(rankNS(t12)[2].Year)]);
    customers.push([rankNS(t12)[3].Weight,rankNS(t12)[3].Name,t12.Name,rankNS(t12)[3].sWin+"-"+rankNS(t12)[3].sLoss,rankNS(t12)[3].cWin+"-"+rankNS(t12)[3].cLoss,rankNS(t12)[3].pFinish,rankNS(t12)[3].Ovr,yearConverter(rankNS(t12)[3].Year)]);
    customers.push([rankNS(t12)[4].Weight,rankNS(t12)[4].Name,t12.Name,rankNS(t12)[4].sWin+"-"+rankNS(t12)[4].sLoss,rankNS(t12)[4].cWin+"-"+rankNS(t12)[4].cLoss,rankNS(t12)[4].pFinish,rankNS(t12)[4].Ovr,yearConverter(rankNS(t12)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet12 = document.getElementById("dvTablet12");
    dvTablet12.innerHTML = "";
    dvTablet12.appendChild(table);
};

function tableTeam13() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t13.W125.Weight, t13.W125.Name, t13.Name,t13.W125.sWin+"-"+t13.W125.sLoss,t13.W125.cWin+"-"+t13.W125.cLoss,t13.W125.pFinish,t13.W125.Ovr,yearConverter(t13.W125.Year)]);
    customers.push([t13.W133.Weight, t13.W133.Name, t13.Name,t13.W133.sWin+"-"+t13.W133.sLoss,t13.W133.cWin+"-"+t13.W133.cLoss,t13.W133.pFinish,t13.W133.Ovr,yearConverter(t13.W133.Year)]);
    customers.push([t13.W141.Weight, t13.W141.Name, t13.Name,t13.W141.sWin+"-"+t13.W141.sLoss,t13.W141.cWin+"-"+t13.W141.cLoss,t13.W141.pFinish,t13.W141.Ovr,yearConverter(t13.W141.Year)]);
    customers.push([t13.W149.Weight, t13.W149.Name, t13.Name,t13.W149.sWin+"-"+t13.W149.sLoss,t13.W149.cWin+"-"+t13.W149.cLoss,t13.W149.pFinish,t13.W149.Ovr,yearConverter(t13.W149.Year)]);
    customers.push([t13.W157.Weight, t13.W157.Name, t13.Name,t13.W157.sWin+"-"+t13.W157.sLoss,t13.W157.cWin+"-"+t13.W157.cLoss,t13.W157.pFinish,t13.W157.Ovr,yearConverter(t13.W157.Year)]);
    customers.push([t13.W165.Weight, t13.W165.Name, t13.Name,t13.W165.sWin+"-"+t13.W165.sLoss,t13.W165.cWin+"-"+t13.W165.cLoss,t13.W165.pFinish,t13.W165.Ovr,yearConverter(t13.W165.Year)]);
    customers.push([t13.W174.Weight, t13.W174.Name, t13.Name,t13.W174.sWin+"-"+t13.W174.sLoss,t13.W174.cWin+"-"+t13.W174.cLoss,t13.W174.pFinish,t13.W174.Ovr,yearConverter(t13.W174.Year)]);
    customers.push([t13.W184.Weight, t13.W184.Name, t13.Name,t13.W184.sWin+"-"+t13.W184.sLoss,t13.W184.cWin+"-"+t13.W184.cLoss,t13.W184.pFinish,t13.W184.Ovr,yearConverter(t13.W184.Year)]);
    customers.push([t13.W197.Weight, t13.W197.Name, t13.Name,t13.W197.sWin+"-"+t13.W197.sLoss,t13.W197.cWin+"-"+t13.W197.cLoss,t13.W197.pFinish,t13.W197.Ovr,yearConverter(t13.W197.Year)]);
    customers.push([t13.W285.Weight, t13.W285.Name, t13.Name,t13.W285.sWin+"-"+t13.W285.sLoss,t13.W285.cWin+"-"+t13.W285.cLoss,t13.W285.pFinish,t13.W285.Ovr,yearConverter(t13.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t13)[0].Weight,rankNS(t13)[0].Name,t13.Name,rankNS(t13)[0].sWin+"-"+rankNS(t13)[0].sLoss,rankNS(t13)[0].cWin+"-"+rankNS(t13)[0].cLoss,rankNS(t13)[0].pFinish,rankNS(t13)[0].Ovr,yearConverter(rankNS(t13)[0].Year)]);
    customers.push([rankNS(t13)[1].Weight,rankNS(t13)[1].Name,t13.Name,rankNS(t13)[1].sWin+"-"+rankNS(t13)[1].sLoss,rankNS(t13)[1].cWin+"-"+rankNS(t13)[1].cLoss,rankNS(t13)[1].pFinish,rankNS(t13)[1].Ovr,yearConverter(rankNS(t13)[1].Year)]);
    customers.push([rankNS(t13)[2].Weight,rankNS(t13)[2].Name,t13.Name,rankNS(t13)[2].sWin+"-"+rankNS(t13)[2].sLoss,rankNS(t13)[2].cWin+"-"+rankNS(t13)[2].cLoss,rankNS(t13)[2].pFinish,rankNS(t13)[2].Ovr,yearConverter(rankNS(t13)[2].Year)]);
    customers.push([rankNS(t13)[3].Weight,rankNS(t13)[3].Name,t13.Name,rankNS(t13)[3].sWin+"-"+rankNS(t13)[3].sLoss,rankNS(t13)[3].cWin+"-"+rankNS(t13)[3].cLoss,rankNS(t13)[3].pFinish,rankNS(t13)[3].Ovr,yearConverter(rankNS(t13)[3].Year)]);
    customers.push([rankNS(t13)[4].Weight,rankNS(t13)[4].Name,t13.Name,rankNS(t13)[4].sWin+"-"+rankNS(t13)[4].sLoss,rankNS(t13)[4].cWin+"-"+rankNS(t13)[4].cLoss,rankNS(t13)[4].pFinish,rankNS(t13)[4].Ovr,yearConverter(rankNS(t13)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet13 = document.getElementById("dvTablet13");
    dvTablet13.innerHTML = "";
    dvTablet13.appendChild(table);
};

function tableTeam14() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t14.W125.Weight, t14.W125.Name, t14.Name,t14.W125.sWin+"-"+t14.W125.sLoss,t14.W125.cWin+"-"+t14.W125.cLoss,t14.W125.pFinish,t14.W125.Ovr,yearConverter(t14.W125.Year)]);
    customers.push([t14.W133.Weight, t14.W133.Name, t14.Name,t14.W133.sWin+"-"+t14.W133.sLoss,t14.W133.cWin+"-"+t14.W133.cLoss,t14.W133.pFinish,t14.W133.Ovr,yearConverter(t14.W133.Year)]);
    customers.push([t14.W141.Weight, t14.W141.Name, t14.Name,t14.W141.sWin+"-"+t14.W141.sLoss,t14.W141.cWin+"-"+t14.W141.cLoss,t14.W141.pFinish,t14.W141.Ovr,yearConverter(t14.W141.Year)]);
    customers.push([t14.W149.Weight, t14.W149.Name, t14.Name,t14.W149.sWin+"-"+t14.W149.sLoss,t14.W149.cWin+"-"+t14.W149.cLoss,t14.W149.pFinish,t14.W149.Ovr,yearConverter(t14.W149.Year)]);
    customers.push([t14.W157.Weight, t14.W157.Name, t14.Name,t14.W157.sWin+"-"+t14.W157.sLoss,t14.W157.cWin+"-"+t14.W157.cLoss,t14.W157.pFinish,t14.W157.Ovr,yearConverter(t14.W157.Year)]);
    customers.push([t14.W165.Weight, t14.W165.Name, t14.Name,t14.W165.sWin+"-"+t14.W165.sLoss,t14.W165.cWin+"-"+t14.W165.cLoss,t14.W165.pFinish,t14.W165.Ovr,yearConverter(t14.W165.Year)]);
    customers.push([t14.W174.Weight, t14.W174.Name, t14.Name,t14.W174.sWin+"-"+t14.W174.sLoss,t14.W174.cWin+"-"+t14.W174.cLoss,t14.W174.pFinish,t14.W174.Ovr,yearConverter(t14.W174.Year)]);
    customers.push([t14.W184.Weight, t14.W184.Name, t14.Name,t14.W184.sWin+"-"+t14.W184.sLoss,t14.W184.cWin+"-"+t14.W184.cLoss,t14.W184.pFinish,t14.W184.Ovr,yearConverter(t14.W184.Year)]);
    customers.push([t14.W197.Weight, t14.W197.Name, t14.Name,t14.W197.sWin+"-"+t14.W197.sLoss,t14.W197.cWin+"-"+t14.W197.cLoss,t14.W197.pFinish,t14.W197.Ovr,yearConverter(t14.W197.Year)]);
    customers.push([t14.W285.Weight, t14.W285.Name, t14.Name,t14.W285.sWin+"-"+t14.W285.sLoss,t14.W285.cWin+"-"+t14.W285.cLoss,t14.W285.pFinish,t14.W285.Ovr,yearConverter(t14.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t14)[0].Weight,rankNS(t14)[0].Name,t14.Name,rankNS(t14)[0].sWin+"-"+rankNS(t14)[0].sLoss,rankNS(t14)[0].cWin+"-"+rankNS(t14)[0].cLoss,rankNS(t14)[0].pFinish,rankNS(t14)[0].Ovr,yearConverter(rankNS(t14)[0].Year)]);
    customers.push([rankNS(t14)[1].Weight,rankNS(t14)[1].Name,t14.Name,rankNS(t14)[1].sWin+"-"+rankNS(t14)[1].sLoss,rankNS(t14)[1].cWin+"-"+rankNS(t14)[1].cLoss,rankNS(t14)[1].pFinish,rankNS(t14)[1].Ovr,yearConverter(rankNS(t14)[1].Year)]);
    customers.push([rankNS(t14)[2].Weight,rankNS(t14)[2].Name,t14.Name,rankNS(t14)[2].sWin+"-"+rankNS(t14)[2].sLoss,rankNS(t14)[2].cWin+"-"+rankNS(t14)[2].cLoss,rankNS(t14)[2].pFinish,rankNS(t14)[2].Ovr,yearConverter(rankNS(t14)[2].Year)]);
    customers.push([rankNS(t14)[3].Weight,rankNS(t14)[3].Name,t14.Name,rankNS(t14)[3].sWin+"-"+rankNS(t14)[3].sLoss,rankNS(t14)[3].cWin+"-"+rankNS(t14)[3].cLoss,rankNS(t14)[3].pFinish,rankNS(t14)[3].Ovr,yearConverter(rankNS(t14)[3].Year)]);
    customers.push([rankNS(t14)[4].Weight,rankNS(t14)[4].Name,t14.Name,rankNS(t14)[4].sWin+"-"+rankNS(t14)[4].sLoss,rankNS(t14)[4].cWin+"-"+rankNS(t14)[4].cLoss,rankNS(t14)[4].pFinish,rankNS(t14)[4].Ovr,yearConverter(rankNS(t14)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet14 = document.getElementById("dvTablet14");
    dvTablet14.innerHTML = "";
    dvTablet14.appendChild(table);
};

function tableTeam15() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t15.W125.Weight, t15.W125.Name, t15.Name,t15.W125.sWin+"-"+t15.W125.sLoss,t15.W125.cWin+"-"+t15.W125.cLoss,t15.W125.pFinish,t15.W125.Ovr,yearConverter(t15.W125.Year)]);
    customers.push([t15.W133.Weight, t15.W133.Name, t15.Name,t15.W133.sWin+"-"+t15.W133.sLoss,t15.W133.cWin+"-"+t15.W133.cLoss,t15.W133.pFinish,t15.W133.Ovr,yearConverter(t15.W133.Year)]);
    customers.push([t15.W141.Weight, t15.W141.Name, t15.Name,t15.W141.sWin+"-"+t15.W141.sLoss,t15.W141.cWin+"-"+t15.W141.cLoss,t15.W141.pFinish,t15.W141.Ovr,yearConverter(t15.W141.Year)]);
    customers.push([t15.W149.Weight, t15.W149.Name, t15.Name,t15.W149.sWin+"-"+t15.W149.sLoss,t15.W149.cWin+"-"+t15.W149.cLoss,t15.W149.pFinish,t15.W149.Ovr,yearConverter(t15.W149.Year)]);
    customers.push([t15.W157.Weight, t15.W157.Name, t15.Name,t15.W157.sWin+"-"+t15.W157.sLoss,t15.W157.cWin+"-"+t15.W157.cLoss,t15.W157.pFinish,t15.W157.Ovr,yearConverter(t15.W157.Year)]);
    customers.push([t15.W165.Weight, t15.W165.Name, t15.Name,t15.W165.sWin+"-"+t15.W165.sLoss,t15.W165.cWin+"-"+t15.W165.cLoss,t15.W165.pFinish,t15.W165.Ovr,yearConverter(t15.W165.Year)]);
    customers.push([t15.W174.Weight, t15.W174.Name, t15.Name,t15.W174.sWin+"-"+t15.W174.sLoss,t15.W174.cWin+"-"+t15.W174.cLoss,t15.W174.pFinish,t15.W174.Ovr,yearConverter(t15.W174.Year)]);
    customers.push([t15.W184.Weight, t15.W184.Name, t15.Name,t15.W184.sWin+"-"+t15.W184.sLoss,t15.W184.cWin+"-"+t15.W184.cLoss,t15.W184.pFinish,t15.W184.Ovr,yearConverter(t15.W184.Year)]);
    customers.push([t15.W197.Weight, t15.W197.Name, t15.Name,t15.W197.sWin+"-"+t15.W197.sLoss,t15.W197.cWin+"-"+t15.W197.cLoss,t15.W197.pFinish,t15.W197.Ovr,yearConverter(t15.W197.Year)]);
    customers.push([t15.W285.Weight, t15.W285.Name, t15.Name,t15.W285.sWin+"-"+t15.W285.sLoss,t15.W285.cWin+"-"+t15.W285.cLoss,t15.W285.pFinish,t15.W285.Ovr,yearConverter(t15.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t15)[0].Weight,rankNS(t15)[0].Name,t15.Name,rankNS(t15)[0].sWin+"-"+rankNS(t15)[0].sLoss,rankNS(t15)[0].cWin+"-"+rankNS(t15)[0].cLoss,rankNS(t15)[0].pFinish,rankNS(t15)[0].Ovr,yearConverter(rankNS(t15)[0].Year)]);
    customers.push([rankNS(t15)[1].Weight,rankNS(t15)[1].Name,t15.Name,rankNS(t15)[1].sWin+"-"+rankNS(t15)[1].sLoss,rankNS(t15)[1].cWin+"-"+rankNS(t15)[1].cLoss,rankNS(t15)[1].pFinish,rankNS(t15)[1].Ovr,yearConverter(rankNS(t15)[1].Year)]);
    customers.push([rankNS(t15)[2].Weight,rankNS(t15)[2].Name,t15.Name,rankNS(t15)[2].sWin+"-"+rankNS(t15)[2].sLoss,rankNS(t15)[2].cWin+"-"+rankNS(t15)[2].cLoss,rankNS(t15)[2].pFinish,rankNS(t15)[2].Ovr,yearConverter(rankNS(t15)[2].Year)]);
    customers.push([rankNS(t15)[3].Weight,rankNS(t15)[3].Name,t15.Name,rankNS(t15)[3].sWin+"-"+rankNS(t15)[3].sLoss,rankNS(t15)[3].cWin+"-"+rankNS(t15)[3].cLoss,rankNS(t15)[3].pFinish,rankNS(t15)[3].Ovr,yearConverter(rankNS(t15)[3].Year)]);
    customers.push([rankNS(t15)[4].Weight,rankNS(t15)[4].Name,t15.Name,rankNS(t15)[4].sWin+"-"+rankNS(t15)[4].sLoss,rankNS(t15)[4].cWin+"-"+rankNS(t15)[4].cLoss,rankNS(t15)[4].pFinish,rankNS(t15)[4].Ovr,yearConverter(rankNS(t15)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet15 = document.getElementById("dvTablet15");
    dvTablet15.innerHTML = "";
    dvTablet15.appendChild(table);
};

function tableTeam16() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t16.W125.Weight, t16.W125.Name, t16.Name,t16.W125.sWin+"-"+t16.W125.sLoss,t16.W125.cWin+"-"+t16.W125.cLoss,t16.W125.pFinish,t16.W125.Ovr,yearConverter(t16.W125.Year)]);
    customers.push([t16.W133.Weight, t16.W133.Name, t16.Name,t16.W133.sWin+"-"+t16.W133.sLoss,t16.W133.cWin+"-"+t16.W133.cLoss,t16.W133.pFinish,t16.W133.Ovr,yearConverter(t16.W133.Year)]);
    customers.push([t16.W141.Weight, t16.W141.Name, t16.Name,t16.W141.sWin+"-"+t16.W141.sLoss,t16.W141.cWin+"-"+t16.W141.cLoss,t16.W141.pFinish,t16.W141.Ovr,yearConverter(t16.W141.Year)]);
    customers.push([t16.W149.Weight, t16.W149.Name, t16.Name,t16.W149.sWin+"-"+t16.W149.sLoss,t16.W149.cWin+"-"+t16.W149.cLoss,t16.W149.pFinish,t16.W149.Ovr,yearConverter(t16.W149.Year)]);
    customers.push([t16.W157.Weight, t16.W157.Name, t16.Name,t16.W157.sWin+"-"+t16.W157.sLoss,t16.W157.cWin+"-"+t16.W157.cLoss,t16.W157.pFinish,t16.W157.Ovr,yearConverter(t16.W157.Year)]);
    customers.push([t16.W165.Weight, t16.W165.Name, t16.Name,t16.W165.sWin+"-"+t16.W165.sLoss,t16.W165.cWin+"-"+t16.W165.cLoss,t16.W165.pFinish,t16.W165.Ovr,yearConverter(t16.W165.Year)]);
    customers.push([t16.W174.Weight, t16.W174.Name, t16.Name,t16.W174.sWin+"-"+t16.W174.sLoss,t16.W174.cWin+"-"+t16.W174.cLoss,t16.W174.pFinish,t16.W174.Ovr,yearConverter(t16.W174.Year)]);
    customers.push([t16.W184.Weight, t16.W184.Name, t16.Name,t16.W184.sWin+"-"+t16.W184.sLoss,t16.W184.cWin+"-"+t16.W184.cLoss,t16.W184.pFinish,t16.W184.Ovr,yearConverter(t16.W184.Year)]);
    customers.push([t16.W197.Weight, t16.W197.Name, t16.Name,t16.W197.sWin+"-"+t16.W197.sLoss,t16.W197.cWin+"-"+t16.W197.cLoss,t16.W197.pFinish,t16.W197.Ovr,yearConverter(t16.W197.Year)]);
    customers.push([t16.W285.Weight, t16.W285.Name, t16.Name,t16.W285.sWin+"-"+t16.W285.sLoss,t16.W285.cWin+"-"+t16.W285.cLoss,t16.W285.pFinish,t16.W285.Ovr,yearConverter(t16.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t16)[0].Weight,rankNS(t16)[0].Name,t16.Name,rankNS(t16)[0].sWin+"-"+rankNS(t16)[0].sLoss,rankNS(t16)[0].cWin+"-"+rankNS(t16)[0].cLoss,rankNS(t16)[0].pFinish,rankNS(t16)[0].Ovr,yearConverter(rankNS(t16)[0].Year)]);
    customers.push([rankNS(t16)[1].Weight,rankNS(t16)[1].Name,t16.Name,rankNS(t16)[1].sWin+"-"+rankNS(t16)[1].sLoss,rankNS(t16)[1].cWin+"-"+rankNS(t16)[1].cLoss,rankNS(t16)[1].pFinish,rankNS(t16)[1].Ovr,yearConverter(rankNS(t16)[1].Year)]);
    customers.push([rankNS(t16)[2].Weight,rankNS(t16)[2].Name,t16.Name,rankNS(t16)[2].sWin+"-"+rankNS(t16)[2].sLoss,rankNS(t16)[2].cWin+"-"+rankNS(t16)[2].cLoss,rankNS(t16)[2].pFinish,rankNS(t16)[2].Ovr,yearConverter(rankNS(t16)[2].Year)]);
    customers.push([rankNS(t16)[3].Weight,rankNS(t16)[3].Name,t16.Name,rankNS(t16)[3].sWin+"-"+rankNS(t16)[3].sLoss,rankNS(t16)[3].cWin+"-"+rankNS(t16)[3].cLoss,rankNS(t16)[3].pFinish,rankNS(t16)[3].Ovr,yearConverter(rankNS(t16)[3].Year)]);
    customers.push([rankNS(t16)[4].Weight,rankNS(t16)[4].Name,t16.Name,rankNS(t16)[4].sWin+"-"+rankNS(t16)[4].sLoss,rankNS(t16)[4].cWin+"-"+rankNS(t16)[4].cLoss,rankNS(t16)[4].pFinish,rankNS(t16)[4].Ovr,yearConverter(rankNS(t16)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet16 = document.getElementById("dvTablet16");
    dvTablet16.innerHTML = "";
    dvTablet16.appendChild(table);
};

function tableTeam17() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t17.W125.Weight, t17.W125.Name, t17.Name,t17.W125.sWin+"-"+t17.W125.sLoss,t17.W125.cWin+"-"+t17.W125.cLoss,t17.W125.pFinish,t17.W125.Ovr,yearConverter(t17.W125.Year)]);
    customers.push([t17.W133.Weight, t17.W133.Name, t17.Name,t17.W133.sWin+"-"+t17.W133.sLoss,t17.W133.cWin+"-"+t17.W133.cLoss,t17.W133.pFinish,t17.W133.Ovr,yearConverter(t17.W133.Year)]);
    customers.push([t17.W141.Weight, t17.W141.Name, t17.Name,t17.W141.sWin+"-"+t17.W141.sLoss,t17.W141.cWin+"-"+t17.W141.cLoss,t17.W141.pFinish,t17.W141.Ovr,yearConverter(t17.W141.Year)]);
    customers.push([t17.W149.Weight, t17.W149.Name, t17.Name,t17.W149.sWin+"-"+t17.W149.sLoss,t17.W149.cWin+"-"+t17.W149.cLoss,t17.W149.pFinish,t17.W149.Ovr,yearConverter(t17.W149.Year)]);
    customers.push([t17.W157.Weight, t17.W157.Name, t17.Name,t17.W157.sWin+"-"+t17.W157.sLoss,t17.W157.cWin+"-"+t17.W157.cLoss,t17.W157.pFinish,t17.W157.Ovr,yearConverter(t17.W157.Year)]);
    customers.push([t17.W165.Weight, t17.W165.Name, t17.Name,t17.W165.sWin+"-"+t17.W165.sLoss,t17.W165.cWin+"-"+t17.W165.cLoss,t17.W165.pFinish,t17.W165.Ovr,yearConverter(t17.W165.Year)]);
    customers.push([t17.W174.Weight, t17.W174.Name, t17.Name,t17.W174.sWin+"-"+t17.W174.sLoss,t17.W174.cWin+"-"+t17.W174.cLoss,t17.W174.pFinish,t17.W174.Ovr,yearConverter(t17.W174.Year)]);
    customers.push([t17.W184.Weight, t17.W184.Name, t17.Name,t17.W184.sWin+"-"+t17.W184.sLoss,t17.W184.cWin+"-"+t17.W184.cLoss,t17.W184.pFinish,t17.W184.Ovr,yearConverter(t17.W184.Year)]);
    customers.push([t17.W197.Weight, t17.W197.Name, t17.Name,t17.W197.sWin+"-"+t17.W197.sLoss,t17.W197.cWin+"-"+t17.W197.cLoss,t17.W197.pFinish,t17.W197.Ovr,yearConverter(t17.W197.Year)]);
    customers.push([t17.W285.Weight, t17.W285.Name, t17.Name,t17.W285.sWin+"-"+t17.W285.sLoss,t17.W285.cWin+"-"+t17.W285.cLoss,t17.W285.pFinish,t17.W285.Ovr,yearConverter(t17.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t17)[0].Weight,rankNS(t17)[0].Name,t17.Name,rankNS(t17)[0].sWin+"-"+rankNS(t17)[0].sLoss,rankNS(t17)[0].cWin+"-"+rankNS(t17)[0].cLoss,rankNS(t17)[0].pFinish,rankNS(t17)[0].Ovr,yearConverter(rankNS(t17)[0].Year)]);
    customers.push([rankNS(t17)[1].Weight,rankNS(t17)[1].Name,t17.Name,rankNS(t17)[1].sWin+"-"+rankNS(t17)[1].sLoss,rankNS(t17)[1].cWin+"-"+rankNS(t17)[1].cLoss,rankNS(t17)[1].pFinish,rankNS(t17)[1].Ovr,yearConverter(rankNS(t17)[1].Year)]);
    customers.push([rankNS(t17)[2].Weight,rankNS(t17)[2].Name,t17.Name,rankNS(t17)[2].sWin+"-"+rankNS(t17)[2].sLoss,rankNS(t17)[2].cWin+"-"+rankNS(t17)[2].cLoss,rankNS(t17)[2].pFinish,rankNS(t17)[2].Ovr,yearConverter(rankNS(t17)[2].Year)]);
    customers.push([rankNS(t17)[3].Weight,rankNS(t17)[3].Name,t17.Name,rankNS(t17)[3].sWin+"-"+rankNS(t17)[3].sLoss,rankNS(t17)[3].cWin+"-"+rankNS(t17)[3].cLoss,rankNS(t17)[3].pFinish,rankNS(t17)[3].Ovr,yearConverter(rankNS(t17)[3].Year)]);
    customers.push([rankNS(t17)[4].Weight,rankNS(t17)[4].Name,t17.Name,rankNS(t17)[4].sWin+"-"+rankNS(t17)[4].sLoss,rankNS(t17)[4].cWin+"-"+rankNS(t17)[4].cLoss,rankNS(t17)[4].pFinish,rankNS(t17)[4].Ovr,yearConverter(rankNS(t17)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet17 = document.getElementById("dvTablet17");
    dvTablet17.innerHTML = "";
    dvTablet17.appendChild(table);
};

function tableTeam18() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t18.W125.Weight, t18.W125.Name, t18.Name,t18.W125.sWin+"-"+t18.W125.sLoss,t18.W125.cWin+"-"+t18.W125.cLoss,t18.W125.pFinish,t18.W125.Ovr,yearConverter(t18.W125.Year)]);
    customers.push([t18.W133.Weight, t18.W133.Name, t18.Name,t18.W133.sWin+"-"+t18.W133.sLoss,t18.W133.cWin+"-"+t18.W133.cLoss,t18.W133.pFinish,t18.W133.Ovr,yearConverter(t18.W133.Year)]);
    customers.push([t18.W141.Weight, t18.W141.Name, t18.Name,t18.W141.sWin+"-"+t18.W141.sLoss,t18.W141.cWin+"-"+t18.W141.cLoss,t18.W141.pFinish,t18.W141.Ovr,yearConverter(t18.W141.Year)]);
    customers.push([t18.W149.Weight, t18.W149.Name, t18.Name,t18.W149.sWin+"-"+t18.W149.sLoss,t18.W149.cWin+"-"+t18.W149.cLoss,t18.W149.pFinish,t18.W149.Ovr,yearConverter(t18.W149.Year)]);
    customers.push([t18.W157.Weight, t18.W157.Name, t18.Name,t18.W157.sWin+"-"+t18.W157.sLoss,t18.W157.cWin+"-"+t18.W157.cLoss,t18.W157.pFinish,t18.W157.Ovr,yearConverter(t18.W157.Year)]);
    customers.push([t18.W165.Weight, t18.W165.Name, t18.Name,t18.W165.sWin+"-"+t18.W165.sLoss,t18.W165.cWin+"-"+t18.W165.cLoss,t18.W165.pFinish,t18.W165.Ovr,yearConverter(t18.W165.Year)]);
    customers.push([t18.W174.Weight, t18.W174.Name, t18.Name,t18.W174.sWin+"-"+t18.W174.sLoss,t18.W174.cWin+"-"+t18.W174.cLoss,t18.W174.pFinish,t18.W174.Ovr,yearConverter(t18.W174.Year)]);
    customers.push([t18.W184.Weight, t18.W184.Name, t18.Name,t18.W184.sWin+"-"+t18.W184.sLoss,t18.W184.cWin+"-"+t18.W184.cLoss,t18.W184.pFinish,t18.W184.Ovr,yearConverter(t18.W184.Year)]);
    customers.push([t18.W197.Weight, t18.W197.Name, t18.Name,t18.W197.sWin+"-"+t18.W197.sLoss,t18.W197.cWin+"-"+t18.W197.cLoss,t18.W197.pFinish,t18.W197.Ovr,yearConverter(t18.W197.Year)]);
    customers.push([t18.W285.Weight, t18.W285.Name, t18.Name,t18.W285.sWin+"-"+t18.W285.sLoss,t18.W285.cWin+"-"+t18.W285.cLoss,t18.W285.pFinish,t18.W285.Ovr,yearConverter(t18.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t18)[0].Weight,rankNS(t18)[0].Name,t18.Name,rankNS(t18)[0].sWin+"-"+rankNS(t18)[0].sLoss,rankNS(t18)[0].cWin+"-"+rankNS(t18)[0].cLoss,rankNS(t18)[0].pFinish,rankNS(t18)[0].Ovr,yearConverter(rankNS(t18)[0].Year)]);
    customers.push([rankNS(t18)[1].Weight,rankNS(t18)[1].Name,t18.Name,rankNS(t18)[1].sWin+"-"+rankNS(t18)[1].sLoss,rankNS(t18)[1].cWin+"-"+rankNS(t18)[1].cLoss,rankNS(t18)[1].pFinish,rankNS(t18)[1].Ovr,yearConverter(rankNS(t18)[1].Year)]);
    customers.push([rankNS(t18)[2].Weight,rankNS(t18)[2].Name,t18.Name,rankNS(t18)[2].sWin+"-"+rankNS(t18)[2].sLoss,rankNS(t18)[2].cWin+"-"+rankNS(t18)[2].cLoss,rankNS(t18)[2].pFinish,rankNS(t18)[2].Ovr,yearConverter(rankNS(t18)[2].Year)]);
    customers.push([rankNS(t18)[3].Weight,rankNS(t18)[3].Name,t18.Name,rankNS(t18)[3].sWin+"-"+rankNS(t18)[3].sLoss,rankNS(t18)[3].cWin+"-"+rankNS(t18)[3].cLoss,rankNS(t18)[3].pFinish,rankNS(t18)[3].Ovr,yearConverter(rankNS(t18)[3].Year)]);
    customers.push([rankNS(t18)[4].Weight,rankNS(t18)[4].Name,t18.Name,rankNS(t18)[4].sWin+"-"+rankNS(t18)[4].sLoss,rankNS(t18)[4].cWin+"-"+rankNS(t18)[4].cLoss,rankNS(t18)[4].pFinish,rankNS(t18)[4].Ovr,yearConverter(rankNS(t18)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet18 = document.getElementById("dvTablet18");
    dvTablet18.innerHTML = "";
    dvTablet18.appendChild(table);
};

function tableTeam19() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t19.W125.Weight, t19.W125.Name, t19.Name,t19.W125.sWin+"-"+t19.W125.sLoss,t19.W125.cWin+"-"+t19.W125.cLoss,t19.W125.pFinish,t19.W125.Ovr,yearConverter(t19.W125.Year)]);
    customers.push([t19.W133.Weight, t19.W133.Name, t19.Name,t19.W133.sWin+"-"+t19.W133.sLoss,t19.W133.cWin+"-"+t19.W133.cLoss,t19.W133.pFinish,t19.W133.Ovr,yearConverter(t19.W133.Year)]);
    customers.push([t19.W141.Weight, t19.W141.Name, t19.Name,t19.W141.sWin+"-"+t19.W141.sLoss,t19.W141.cWin+"-"+t19.W141.cLoss,t19.W141.pFinish,t19.W141.Ovr,yearConverter(t19.W141.Year)]);
    customers.push([t19.W149.Weight, t19.W149.Name, t19.Name,t19.W149.sWin+"-"+t19.W149.sLoss,t19.W149.cWin+"-"+t19.W149.cLoss,t19.W149.pFinish,t19.W149.Ovr,yearConverter(t19.W149.Year)]);
    customers.push([t19.W157.Weight, t19.W157.Name, t19.Name,t19.W157.sWin+"-"+t19.W157.sLoss,t19.W157.cWin+"-"+t19.W157.cLoss,t19.W157.pFinish,t19.W157.Ovr,yearConverter(t19.W157.Year)]);
    customers.push([t19.W165.Weight, t19.W165.Name, t19.Name,t19.W165.sWin+"-"+t19.W165.sLoss,t19.W165.cWin+"-"+t19.W165.cLoss,t19.W165.pFinish,t19.W165.Ovr,yearConverter(t19.W165.Year)]);
    customers.push([t19.W174.Weight, t19.W174.Name, t19.Name,t19.W174.sWin+"-"+t19.W174.sLoss,t19.W174.cWin+"-"+t19.W174.cLoss,t19.W174.pFinish,t19.W174.Ovr,yearConverter(t19.W174.Year)]);
    customers.push([t19.W184.Weight, t19.W184.Name, t19.Name,t19.W184.sWin+"-"+t19.W184.sLoss,t19.W184.cWin+"-"+t19.W184.cLoss,t19.W184.pFinish,t19.W184.Ovr,yearConverter(t19.W184.Year)]);
    customers.push([t19.W197.Weight, t19.W197.Name, t19.Name,t19.W197.sWin+"-"+t19.W197.sLoss,t19.W197.cWin+"-"+t19.W197.cLoss,t19.W197.pFinish,t19.W197.Ovr,yearConverter(t19.W197.Year)]);
    customers.push([t19.W285.Weight, t19.W285.Name, t19.Name,t19.W285.sWin+"-"+t19.W285.sLoss,t19.W285.cWin+"-"+t19.W285.cLoss,t19.W285.pFinish,t19.W285.Ovr,yearConverter(t19.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t19)[0].Weight,rankNS(t19)[0].Name,t19.Name,rankNS(t19)[0].sWin+"-"+rankNS(t19)[0].sLoss,rankNS(t19)[0].cWin+"-"+rankNS(t19)[0].cLoss,rankNS(t19)[0].pFinish,rankNS(t19)[0].Ovr,yearConverter(rankNS(t19)[0].Year)]);
    customers.push([rankNS(t19)[1].Weight,rankNS(t19)[1].Name,t19.Name,rankNS(t19)[1].sWin+"-"+rankNS(t19)[1].sLoss,rankNS(t19)[1].cWin+"-"+rankNS(t19)[1].cLoss,rankNS(t19)[1].pFinish,rankNS(t19)[1].Ovr,yearConverter(rankNS(t19)[1].Year)]);
    customers.push([rankNS(t19)[2].Weight,rankNS(t19)[2].Name,t19.Name,rankNS(t19)[2].sWin+"-"+rankNS(t19)[2].sLoss,rankNS(t19)[2].cWin+"-"+rankNS(t19)[2].cLoss,rankNS(t19)[2].pFinish,rankNS(t19)[2].Ovr,yearConverter(rankNS(t19)[2].Year)]);
    customers.push([rankNS(t19)[3].Weight,rankNS(t19)[3].Name,t19.Name,rankNS(t19)[3].sWin+"-"+rankNS(t19)[3].sLoss,rankNS(t19)[3].cWin+"-"+rankNS(t19)[3].cLoss,rankNS(t19)[3].pFinish,rankNS(t19)[3].Ovr,yearConverter(rankNS(t19)[3].Year)]);
    customers.push([rankNS(t19)[4].Weight,rankNS(t19)[4].Name,t19.Name,rankNS(t19)[4].sWin+"-"+rankNS(t19)[4].sLoss,rankNS(t19)[4].cWin+"-"+rankNS(t19)[4].cLoss,rankNS(t19)[4].pFinish,rankNS(t19)[4].Ovr,yearConverter(rankNS(t19)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet19 = document.getElementById("dvTablet19");
    dvTablet19.innerHTML = "";
    dvTablet19.appendChild(table);
};

function tableTeam20() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t20.W125.Weight, t20.W125.Name, t20.Name,t20.W125.sWin+"-"+t20.W125.sLoss,t20.W125.cWin+"-"+t20.W125.cLoss,t20.W125.pFinish,t20.W125.Ovr,yearConverter(t20.W125.Year)]);
    customers.push([t20.W133.Weight, t20.W133.Name, t20.Name,t20.W133.sWin+"-"+t20.W133.sLoss,t20.W133.cWin+"-"+t20.W133.cLoss,t20.W133.pFinish,t20.W133.Ovr,yearConverter(t20.W133.Year)]);
    customers.push([t20.W141.Weight, t20.W141.Name, t20.Name,t20.W141.sWin+"-"+t20.W141.sLoss,t20.W141.cWin+"-"+t20.W141.cLoss,t20.W141.pFinish,t20.W141.Ovr,yearConverter(t20.W141.Year)]);
    customers.push([t20.W149.Weight, t20.W149.Name, t20.Name,t20.W149.sWin+"-"+t20.W149.sLoss,t20.W149.cWin+"-"+t20.W149.cLoss,t20.W149.pFinish,t20.W149.Ovr,yearConverter(t20.W149.Year)]);
    customers.push([t20.W157.Weight, t20.W157.Name, t20.Name,t20.W157.sWin+"-"+t20.W157.sLoss,t20.W157.cWin+"-"+t20.W157.cLoss,t20.W157.pFinish,t20.W157.Ovr,yearConverter(t20.W157.Year)]);
    customers.push([t20.W165.Weight, t20.W165.Name, t20.Name,t20.W165.sWin+"-"+t20.W165.sLoss,t20.W165.cWin+"-"+t20.W165.cLoss,t20.W165.pFinish,t20.W165.Ovr,yearConverter(t20.W165.Year)]);
    customers.push([t20.W174.Weight, t20.W174.Name, t20.Name,t20.W174.sWin+"-"+t20.W174.sLoss,t20.W174.cWin+"-"+t20.W174.cLoss,t20.W174.pFinish,t20.W174.Ovr,yearConverter(t20.W174.Year)]);
    customers.push([t20.W184.Weight, t20.W184.Name, t20.Name,t20.W184.sWin+"-"+t20.W184.sLoss,t20.W184.cWin+"-"+t20.W184.cLoss,t20.W184.pFinish,t20.W184.Ovr,yearConverter(t20.W184.Year)]);
    customers.push([t20.W197.Weight, t20.W197.Name, t20.Name,t20.W197.sWin+"-"+t20.W197.sLoss,t20.W197.cWin+"-"+t20.W197.cLoss,t20.W197.pFinish,t20.W197.Ovr,yearConverter(t20.W197.Year)]);
    customers.push([t20.W285.Weight, t20.W285.Name, t20.Name,t20.W285.sWin+"-"+t20.W285.sLoss,t20.W285.cWin+"-"+t20.W285.cLoss,t20.W285.pFinish,t20.W285.Ovr,yearConverter(t20.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t20)[0].Weight,rankNS(t20)[0].Name,t20.Name,rankNS(t20)[0].sWin+"-"+rankNS(t20)[0].sLoss,rankNS(t20)[0].cWin+"-"+rankNS(t20)[0].cLoss,rankNS(t20)[0].pFinish,rankNS(t20)[0].Ovr,yearConverter(rankNS(t20)[0].Year)]);
    customers.push([rankNS(t20)[1].Weight,rankNS(t20)[1].Name,t20.Name,rankNS(t20)[1].sWin+"-"+rankNS(t20)[1].sLoss,rankNS(t20)[1].cWin+"-"+rankNS(t20)[1].cLoss,rankNS(t20)[1].pFinish,rankNS(t20)[1].Ovr,yearConverter(rankNS(t20)[1].Year)]);
    customers.push([rankNS(t20)[2].Weight,rankNS(t20)[2].Name,t20.Name,rankNS(t20)[2].sWin+"-"+rankNS(t20)[2].sLoss,rankNS(t20)[2].cWin+"-"+rankNS(t20)[2].cLoss,rankNS(t20)[2].pFinish,rankNS(t20)[2].Ovr,yearConverter(rankNS(t20)[2].Year)]);
    customers.push([rankNS(t20)[3].Weight,rankNS(t20)[3].Name,t20.Name,rankNS(t20)[3].sWin+"-"+rankNS(t20)[3].sLoss,rankNS(t20)[3].cWin+"-"+rankNS(t20)[3].cLoss,rankNS(t20)[3].pFinish,rankNS(t20)[3].Ovr,yearConverter(rankNS(t20)[3].Year)]);
    customers.push([rankNS(t20)[4].Weight,rankNS(t20)[4].Name,t20.Name,rankNS(t20)[4].sWin+"-"+rankNS(t20)[4].sLoss,rankNS(t20)[4].cWin+"-"+rankNS(t20)[4].cLoss,rankNS(t20)[4].pFinish,rankNS(t20)[4].Ovr,yearConverter(rankNS(t20)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet20 = document.getElementById("dvTablet20");
    dvTablet20.innerHTML = "";
    dvTablet20.appendChild(table);
};


function tableTeam21() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t21.W125.Weight, t21.W125.Name, t21.Name,t21.W125.sWin+"-"+t21.W125.sLoss,t21.W125.cWin+"-"+t21.W125.cLoss,t21.W125.pFinish,t21.W125.Ovr,yearConverter(t21.W125.Year)]);
    customers.push([t21.W133.Weight, t21.W133.Name, t21.Name,t21.W133.sWin+"-"+t21.W133.sLoss,t21.W133.cWin+"-"+t21.W133.cLoss,t21.W133.pFinish,t21.W133.Ovr,yearConverter(t21.W133.Year)]);
    customers.push([t21.W141.Weight, t21.W141.Name, t21.Name,t21.W141.sWin+"-"+t21.W141.sLoss,t21.W141.cWin+"-"+t21.W141.cLoss,t21.W141.pFinish,t21.W141.Ovr,yearConverter(t21.W141.Year)]);
    customers.push([t21.W149.Weight, t21.W149.Name, t21.Name,t21.W149.sWin+"-"+t21.W149.sLoss,t21.W149.cWin+"-"+t21.W149.cLoss,t21.W149.pFinish,t21.W149.Ovr,yearConverter(t21.W149.Year)]);
    customers.push([t21.W157.Weight, t21.W157.Name, t21.Name,t21.W157.sWin+"-"+t21.W157.sLoss,t21.W157.cWin+"-"+t21.W157.cLoss,t21.W157.pFinish,t21.W157.Ovr,yearConverter(t21.W157.Year)]);
    customers.push([t21.W165.Weight, t21.W165.Name, t21.Name,t21.W165.sWin+"-"+t21.W165.sLoss,t21.W165.cWin+"-"+t21.W165.cLoss,t21.W165.pFinish,t21.W165.Ovr,yearConverter(t21.W165.Year)]);
    customers.push([t21.W174.Weight, t21.W174.Name, t21.Name,t21.W174.sWin+"-"+t21.W174.sLoss,t21.W174.cWin+"-"+t21.W174.cLoss,t21.W174.pFinish,t21.W174.Ovr,yearConverter(t21.W174.Year)]);
    customers.push([t21.W184.Weight, t21.W184.Name, t21.Name,t21.W184.sWin+"-"+t21.W184.sLoss,t21.W184.cWin+"-"+t21.W184.cLoss,t21.W184.pFinish,t21.W184.Ovr,yearConverter(t21.W184.Year)]);
    customers.push([t21.W197.Weight, t21.W197.Name, t21.Name,t21.W197.sWin+"-"+t21.W197.sLoss,t21.W197.cWin+"-"+t21.W197.cLoss,t21.W197.pFinish,t21.W197.Ovr,yearConverter(t21.W197.Year)]);
    customers.push([t21.W285.Weight, t21.W285.Name, t21.Name,t21.W285.sWin+"-"+t21.W285.sLoss,t21.W285.cWin+"-"+t21.W285.cLoss,t21.W285.pFinish,t21.W285.Ovr,yearConverter(t21.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t21)[0].Weight,rankNS(t21)[0].Name,t21.Name,rankNS(t21)[0].sWin+"-"+rankNS(t21)[0].sLoss,rankNS(t21)[0].cWin+"-"+rankNS(t21)[0].cLoss,rankNS(t21)[0].pFinish,rankNS(t21)[0].Ovr,yearConverter(rankNS(t21)[0].Year)]);
    customers.push([rankNS(t21)[1].Weight,rankNS(t21)[1].Name,t21.Name,rankNS(t21)[1].sWin+"-"+rankNS(t21)[1].sLoss,rankNS(t21)[1].cWin+"-"+rankNS(t21)[1].cLoss,rankNS(t21)[1].pFinish,rankNS(t21)[1].Ovr,yearConverter(rankNS(t21)[1].Year)]);
    customers.push([rankNS(t21)[2].Weight,rankNS(t21)[2].Name,t21.Name,rankNS(t21)[2].sWin+"-"+rankNS(t21)[2].sLoss,rankNS(t21)[2].cWin+"-"+rankNS(t21)[2].cLoss,rankNS(t21)[2].pFinish,rankNS(t21)[2].Ovr,yearConverter(rankNS(t21)[2].Year)]);
    customers.push([rankNS(t21)[3].Weight,rankNS(t21)[3].Name,t21.Name,rankNS(t21)[3].sWin+"-"+rankNS(t21)[3].sLoss,rankNS(t21)[3].cWin+"-"+rankNS(t21)[3].cLoss,rankNS(t21)[3].pFinish,rankNS(t21)[3].Ovr,yearConverter(rankNS(t21)[3].Year)]);
    customers.push([rankNS(t21)[4].Weight,rankNS(t21)[4].Name,t21.Name,rankNS(t21)[4].sWin+"-"+rankNS(t21)[4].sLoss,rankNS(t21)[4].cWin+"-"+rankNS(t21)[4].cLoss,rankNS(t21)[4].pFinish,rankNS(t21)[4].Ovr,yearConverter(rankNS(t21)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet21 = document.getElementById("dvTablet21");
    dvTablet21.innerHTML = "";
    dvTablet21.appendChild(table);
};

function tableTeam22() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t22.W125.Weight, t22.W125.Name, t22.Name,t22.W125.sWin+"-"+t22.W125.sLoss,t22.W125.cWin+"-"+t22.W125.cLoss,t22.W125.pFinish,t22.W125.Ovr,yearConverter(t22.W125.Year)]);
    customers.push([t22.W133.Weight, t22.W133.Name, t22.Name,t22.W133.sWin+"-"+t22.W133.sLoss,t22.W133.cWin+"-"+t22.W133.cLoss,t22.W133.pFinish,t22.W133.Ovr,yearConverter(t22.W133.Year)]);
    customers.push([t22.W141.Weight, t22.W141.Name, t22.Name,t22.W141.sWin+"-"+t22.W141.sLoss,t22.W141.cWin+"-"+t22.W141.cLoss,t22.W141.pFinish,t22.W141.Ovr,yearConverter(t22.W141.Year)]);
    customers.push([t22.W149.Weight, t22.W149.Name, t22.Name,t22.W149.sWin+"-"+t22.W149.sLoss,t22.W149.cWin+"-"+t22.W149.cLoss,t22.W149.pFinish,t22.W149.Ovr,yearConverter(t22.W149.Year)]);
    customers.push([t22.W157.Weight, t22.W157.Name, t22.Name,t22.W157.sWin+"-"+t22.W157.sLoss,t22.W157.cWin+"-"+t22.W157.cLoss,t22.W157.pFinish,t22.W157.Ovr,yearConverter(t22.W157.Year)]);
    customers.push([t22.W165.Weight, t22.W165.Name, t22.Name,t22.W165.sWin+"-"+t22.W165.sLoss,t22.W165.cWin+"-"+t22.W165.cLoss,t22.W165.pFinish,t22.W165.Ovr,yearConverter(t22.W165.Year)]);
    customers.push([t22.W174.Weight, t22.W174.Name, t22.Name,t22.W174.sWin+"-"+t22.W174.sLoss,t22.W174.cWin+"-"+t22.W174.cLoss,t22.W174.pFinish,t22.W174.Ovr,yearConverter(t22.W174.Year)]);
    customers.push([t22.W184.Weight, t22.W184.Name, t22.Name,t22.W184.sWin+"-"+t22.W184.sLoss,t22.W184.cWin+"-"+t22.W184.cLoss,t22.W184.pFinish,t22.W184.Ovr,yearConverter(t22.W184.Year)]);
    customers.push([t22.W197.Weight, t22.W197.Name, t22.Name,t22.W197.sWin+"-"+t22.W197.sLoss,t22.W197.cWin+"-"+t22.W197.cLoss,t22.W197.pFinish,t22.W197.Ovr,yearConverter(t22.W197.Year)]);
    customers.push([t22.W285.Weight, t22.W285.Name, t22.Name,t22.W285.sWin+"-"+t22.W285.sLoss,t22.W285.cWin+"-"+t22.W285.cLoss,t22.W285.pFinish,t22.W285.Ovr,yearConverter(t22.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t22)[0].Weight,rankNS(t22)[0].Name,t22.Name,rankNS(t22)[0].sWin+"-"+rankNS(t22)[0].sLoss,rankNS(t22)[0].cWin+"-"+rankNS(t22)[0].cLoss,rankNS(t22)[0].pFinish,rankNS(t22)[0].Ovr,yearConverter(rankNS(t22)[0].Year)]);
    customers.push([rankNS(t22)[1].Weight,rankNS(t22)[1].Name,t22.Name,rankNS(t22)[1].sWin+"-"+rankNS(t22)[1].sLoss,rankNS(t22)[1].cWin+"-"+rankNS(t22)[1].cLoss,rankNS(t22)[1].pFinish,rankNS(t22)[1].Ovr,yearConverter(rankNS(t22)[1].Year)]);
    customers.push([rankNS(t22)[2].Weight,rankNS(t22)[2].Name,t22.Name,rankNS(t22)[2].sWin+"-"+rankNS(t22)[2].sLoss,rankNS(t22)[2].cWin+"-"+rankNS(t22)[2].cLoss,rankNS(t22)[2].pFinish,rankNS(t22)[2].Ovr,yearConverter(rankNS(t22)[2].Year)]);
    customers.push([rankNS(t22)[3].Weight,rankNS(t22)[3].Name,t22.Name,rankNS(t22)[3].sWin+"-"+rankNS(t22)[3].sLoss,rankNS(t22)[3].cWin+"-"+rankNS(t22)[3].cLoss,rankNS(t22)[3].pFinish,rankNS(t22)[3].Ovr,yearConverter(rankNS(t22)[3].Year)]);
    customers.push([rankNS(t22)[4].Weight,rankNS(t22)[4].Name,t22.Name,rankNS(t22)[4].sWin+"-"+rankNS(t22)[4].sLoss,rankNS(t22)[4].cWin+"-"+rankNS(t22)[4].cLoss,rankNS(t22)[4].pFinish,rankNS(t22)[4].Ovr,yearConverter(rankNS(t22)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet22 = document.getElementById("dvTablet22");
    dvTablet22.innerHTML = "";
    dvTablet22.appendChild(table);
};

function tableTeam23() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t23.W125.Weight, t23.W125.Name, t23.Name,t23.W125.sWin+"-"+t23.W125.sLoss,t23.W125.cWin+"-"+t23.W125.cLoss,t23.W125.pFinish,t23.W125.Ovr,yearConverter(t23.W125.Year)]);
    customers.push([t23.W133.Weight, t23.W133.Name, t23.Name,t23.W133.sWin+"-"+t23.W133.sLoss,t23.W133.cWin+"-"+t23.W133.cLoss,t23.W133.pFinish,t23.W133.Ovr,yearConverter(t23.W133.Year)]);
    customers.push([t23.W141.Weight, t23.W141.Name, t23.Name,t23.W141.sWin+"-"+t23.W141.sLoss,t23.W141.cWin+"-"+t23.W141.cLoss,t23.W141.pFinish,t23.W141.Ovr,yearConverter(t23.W141.Year)]);
    customers.push([t23.W149.Weight, t23.W149.Name, t23.Name,t23.W149.sWin+"-"+t23.W149.sLoss,t23.W149.cWin+"-"+t23.W149.cLoss,t23.W149.pFinish,t23.W149.Ovr,yearConverter(t23.W149.Year)]);
    customers.push([t23.W157.Weight, t23.W157.Name, t23.Name,t23.W157.sWin+"-"+t23.W157.sLoss,t23.W157.cWin+"-"+t23.W157.cLoss,t23.W157.pFinish,t23.W157.Ovr,yearConverter(t23.W157.Year)]);
    customers.push([t23.W165.Weight, t23.W165.Name, t23.Name,t23.W165.sWin+"-"+t23.W165.sLoss,t23.W165.cWin+"-"+t23.W165.cLoss,t23.W165.pFinish,t23.W165.Ovr,yearConverter(t23.W165.Year)]);
    customers.push([t23.W174.Weight, t23.W174.Name, t23.Name,t23.W174.sWin+"-"+t23.W174.sLoss,t23.W174.cWin+"-"+t23.W174.cLoss,t23.W174.pFinish,t23.W174.Ovr,yearConverter(t23.W174.Year)]);
    customers.push([t23.W184.Weight, t23.W184.Name, t23.Name,t23.W184.sWin+"-"+t23.W184.sLoss,t23.W184.cWin+"-"+t23.W184.cLoss,t23.W184.pFinish,t23.W184.Ovr,yearConverter(t23.W184.Year)]);
    customers.push([t23.W197.Weight, t23.W197.Name, t23.Name,t23.W197.sWin+"-"+t23.W197.sLoss,t23.W197.cWin+"-"+t23.W197.cLoss,t23.W197.pFinish,t23.W197.Ovr,yearConverter(t23.W197.Year)]);
    customers.push([t23.W285.Weight, t23.W285.Name, t23.Name,t23.W285.sWin+"-"+t23.W285.sLoss,t23.W285.cWin+"-"+t23.W285.cLoss,t23.W285.pFinish,t23.W285.Ovr,yearConverter(t23.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t23)[0].Weight,rankNS(t23)[0].Name,t23.Name,rankNS(t23)[0].sWin+"-"+rankNS(t23)[0].sLoss,rankNS(t23)[0].cWin+"-"+rankNS(t23)[0].cLoss,rankNS(t23)[0].pFinish,rankNS(t23)[0].Ovr,yearConverter(rankNS(t23)[0].Year)]);
    customers.push([rankNS(t23)[1].Weight,rankNS(t23)[1].Name,t23.Name,rankNS(t23)[1].sWin+"-"+rankNS(t23)[1].sLoss,rankNS(t23)[1].cWin+"-"+rankNS(t23)[1].cLoss,rankNS(t23)[1].pFinish,rankNS(t23)[1].Ovr,yearConverter(rankNS(t23)[1].Year)]);
    customers.push([rankNS(t23)[2].Weight,rankNS(t23)[2].Name,t23.Name,rankNS(t23)[2].sWin+"-"+rankNS(t23)[2].sLoss,rankNS(t23)[2].cWin+"-"+rankNS(t23)[2].cLoss,rankNS(t23)[2].pFinish,rankNS(t23)[2].Ovr,yearConverter(rankNS(t23)[2].Year)]);
    customers.push([rankNS(t23)[3].Weight,rankNS(t23)[3].Name,t23.Name,rankNS(t23)[3].sWin+"-"+rankNS(t23)[3].sLoss,rankNS(t23)[3].cWin+"-"+rankNS(t23)[3].cLoss,rankNS(t23)[3].pFinish,rankNS(t23)[3].Ovr,yearConverter(rankNS(t23)[3].Year)]);
    customers.push([rankNS(t23)[4].Weight,rankNS(t23)[4].Name,t23.Name,rankNS(t23)[4].sWin+"-"+rankNS(t23)[4].sLoss,rankNS(t23)[4].cWin+"-"+rankNS(t23)[4].cLoss,rankNS(t23)[4].pFinish,rankNS(t23)[4].Ovr,yearConverter(rankNS(t23)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet23 = document.getElementById("dvTablet23");
    dvTablet23.innerHTML = "";
    dvTablet23.appendChild(table);
};

function tableTeam24() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t24.W125.Weight, t24.W125.Name, t24.Name,t24.W125.sWin+"-"+t24.W125.sLoss,t24.W125.cWin+"-"+t24.W125.cLoss,t24.W125.pFinish,t24.W125.Ovr,yearConverter(t24.W125.Year)]);
    customers.push([t24.W133.Weight, t24.W133.Name, t24.Name,t24.W133.sWin+"-"+t24.W133.sLoss,t24.W133.cWin+"-"+t24.W133.cLoss,t24.W133.pFinish,t24.W133.Ovr,yearConverter(t24.W133.Year)]);
    customers.push([t24.W141.Weight, t24.W141.Name, t24.Name,t24.W141.sWin+"-"+t24.W141.sLoss,t24.W141.cWin+"-"+t24.W141.cLoss,t24.W141.pFinish,t24.W141.Ovr,yearConverter(t24.W141.Year)]);
    customers.push([t24.W149.Weight, t24.W149.Name, t24.Name,t24.W149.sWin+"-"+t24.W149.sLoss,t24.W149.cWin+"-"+t24.W149.cLoss,t24.W149.pFinish,t24.W149.Ovr,yearConverter(t24.W149.Year)]);
    customers.push([t24.W157.Weight, t24.W157.Name, t24.Name,t24.W157.sWin+"-"+t24.W157.sLoss,t24.W157.cWin+"-"+t24.W157.cLoss,t24.W157.pFinish,t24.W157.Ovr,yearConverter(t24.W157.Year)]);
    customers.push([t24.W165.Weight, t24.W165.Name, t24.Name,t24.W165.sWin+"-"+t24.W165.sLoss,t24.W165.cWin+"-"+t24.W165.cLoss,t24.W165.pFinish,t24.W165.Ovr,yearConverter(t24.W165.Year)]);
    customers.push([t24.W174.Weight, t24.W174.Name, t24.Name,t24.W174.sWin+"-"+t24.W174.sLoss,t24.W174.cWin+"-"+t24.W174.cLoss,t24.W174.pFinish,t24.W174.Ovr,yearConverter(t24.W174.Year)]);
    customers.push([t24.W184.Weight, t24.W184.Name, t24.Name,t24.W184.sWin+"-"+t24.W184.sLoss,t24.W184.cWin+"-"+t24.W184.cLoss,t24.W184.pFinish,t24.W184.Ovr,yearConverter(t24.W184.Year)]);
    customers.push([t24.W197.Weight, t24.W197.Name, t24.Name,t24.W197.sWin+"-"+t24.W197.sLoss,t24.W197.cWin+"-"+t24.W197.cLoss,t24.W197.pFinish,t24.W197.Ovr,yearConverter(t24.W197.Year)]);
    customers.push([t24.W285.Weight, t24.W285.Name, t24.Name,t24.W285.sWin+"-"+t24.W285.sLoss,t24.W285.cWin+"-"+t24.W285.cLoss,t24.W285.pFinish,t24.W285.Ovr,yearConverter(t24.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t24)[0].Weight,rankNS(t24)[0].Name,t24.Name,rankNS(t24)[0].sWin+"-"+rankNS(t24)[0].sLoss,rankNS(t24)[0].cWin+"-"+rankNS(t24)[0].cLoss,rankNS(t24)[0].pFinish,rankNS(t24)[0].Ovr,yearConverter(rankNS(t24)[0].Year)]);
    customers.push([rankNS(t24)[1].Weight,rankNS(t24)[1].Name,t24.Name,rankNS(t24)[1].sWin+"-"+rankNS(t24)[1].sLoss,rankNS(t24)[1].cWin+"-"+rankNS(t24)[1].cLoss,rankNS(t24)[1].pFinish,rankNS(t24)[1].Ovr,yearConverter(rankNS(t24)[1].Year)]);
    customers.push([rankNS(t24)[2].Weight,rankNS(t24)[2].Name,t24.Name,rankNS(t24)[2].sWin+"-"+rankNS(t24)[2].sLoss,rankNS(t24)[2].cWin+"-"+rankNS(t24)[2].cLoss,rankNS(t24)[2].pFinish,rankNS(t24)[2].Ovr,yearConverter(rankNS(t24)[2].Year)]);
    customers.push([rankNS(t24)[3].Weight,rankNS(t24)[3].Name,t24.Name,rankNS(t24)[3].sWin+"-"+rankNS(t24)[3].sLoss,rankNS(t24)[3].cWin+"-"+rankNS(t24)[3].cLoss,rankNS(t24)[3].pFinish,rankNS(t24)[3].Ovr,yearConverter(rankNS(t24)[3].Year)]);
    customers.push([rankNS(t24)[4].Weight,rankNS(t24)[4].Name,t24.Name,rankNS(t24)[4].sWin+"-"+rankNS(t24)[4].sLoss,rankNS(t24)[4].cWin+"-"+rankNS(t24)[4].cLoss,rankNS(t24)[4].pFinish,rankNS(t24)[4].Ovr,yearConverter(rankNS(t24)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet24 = document.getElementById("dvTablet24");
    dvTablet24.innerHTML = "";
    dvTablet24.appendChild(table);
};

function tableTeam25() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t25.W125.Weight, t25.W125.Name, t25.Name,t25.W125.sWin+"-"+t25.W125.sLoss,t25.W125.cWin+"-"+t25.W125.cLoss,t25.W125.pFinish,t25.W125.Ovr,yearConverter(t25.W125.Year)]);
    customers.push([t25.W133.Weight, t25.W133.Name, t25.Name,t25.W133.sWin+"-"+t25.W133.sLoss,t25.W133.cWin+"-"+t25.W133.cLoss,t25.W133.pFinish,t25.W133.Ovr,yearConverter(t25.W133.Year)]);
    customers.push([t25.W141.Weight, t25.W141.Name, t25.Name,t25.W141.sWin+"-"+t25.W141.sLoss,t25.W141.cWin+"-"+t25.W141.cLoss,t25.W141.pFinish,t25.W141.Ovr,yearConverter(t25.W141.Year)]);
    customers.push([t25.W149.Weight, t25.W149.Name, t25.Name,t25.W149.sWin+"-"+t25.W149.sLoss,t25.W149.cWin+"-"+t25.W149.cLoss,t25.W149.pFinish,t25.W149.Ovr,yearConverter(t25.W149.Year)]);
    customers.push([t25.W157.Weight, t25.W157.Name, t25.Name,t25.W157.sWin+"-"+t25.W157.sLoss,t25.W157.cWin+"-"+t25.W157.cLoss,t25.W157.pFinish,t25.W157.Ovr,yearConverter(t25.W157.Year)]);
    customers.push([t25.W165.Weight, t25.W165.Name, t25.Name,t25.W165.sWin+"-"+t25.W165.sLoss,t25.W165.cWin+"-"+t25.W165.cLoss,t25.W165.pFinish,t25.W165.Ovr,yearConverter(t25.W165.Year)]);
    customers.push([t25.W174.Weight, t25.W174.Name, t25.Name,t25.W174.sWin+"-"+t25.W174.sLoss,t25.W174.cWin+"-"+t25.W174.cLoss,t25.W174.pFinish,t25.W174.Ovr,yearConverter(t25.W174.Year)]);
    customers.push([t25.W184.Weight, t25.W184.Name, t25.Name,t25.W184.sWin+"-"+t25.W184.sLoss,t25.W184.cWin+"-"+t25.W184.cLoss,t25.W184.pFinish,t25.W184.Ovr,yearConverter(t25.W184.Year)]);
    customers.push([t25.W197.Weight, t25.W197.Name, t25.Name,t25.W197.sWin+"-"+t25.W197.sLoss,t25.W197.cWin+"-"+t25.W197.cLoss,t25.W197.pFinish,t25.W197.Ovr,yearConverter(t25.W197.Year)]);
    customers.push([t25.W285.Weight, t25.W285.Name, t25.Name,t25.W285.sWin+"-"+t25.W285.sLoss,t25.W285.cWin+"-"+t25.W285.cLoss,t25.W285.pFinish,t25.W285.Ovr,yearConverter(t25.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t25)[0].Weight,rankNS(t25)[0].Name,t25.Name,rankNS(t25)[0].sWin+"-"+rankNS(t25)[0].sLoss,rankNS(t25)[0].cWin+"-"+rankNS(t25)[0].cLoss,rankNS(t25)[0].pFinish,rankNS(t25)[0].Ovr,yearConverter(rankNS(t25)[0].Year)]);
    customers.push([rankNS(t25)[1].Weight,rankNS(t25)[1].Name,t25.Name,rankNS(t25)[1].sWin+"-"+rankNS(t25)[1].sLoss,rankNS(t25)[1].cWin+"-"+rankNS(t25)[1].cLoss,rankNS(t25)[1].pFinish,rankNS(t25)[1].Ovr,yearConverter(rankNS(t25)[1].Year)]);
    customers.push([rankNS(t25)[2].Weight,rankNS(t25)[2].Name,t25.Name,rankNS(t25)[2].sWin+"-"+rankNS(t25)[2].sLoss,rankNS(t25)[2].cWin+"-"+rankNS(t25)[2].cLoss,rankNS(t25)[2].pFinish,rankNS(t25)[2].Ovr,yearConverter(rankNS(t25)[2].Year)]);
    customers.push([rankNS(t25)[3].Weight,rankNS(t25)[3].Name,t25.Name,rankNS(t25)[3].sWin+"-"+rankNS(t25)[3].sLoss,rankNS(t25)[3].cWin+"-"+rankNS(t25)[3].cLoss,rankNS(t25)[3].pFinish,rankNS(t25)[3].Ovr,yearConverter(rankNS(t25)[3].Year)]);
    customers.push([rankNS(t25)[4].Weight,rankNS(t25)[4].Name,t25.Name,rankNS(t25)[4].sWin+"-"+rankNS(t25)[4].sLoss,rankNS(t25)[4].cWin+"-"+rankNS(t25)[4].cLoss,rankNS(t25)[4].pFinish,rankNS(t25)[4].Ovr,yearConverter(rankNS(t25)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet25 = document.getElementById("dvTablet25");
    dvTablet25.innerHTML = "";
    dvTablet25.appendChild(table);
};

function tableTeam26() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t26.W125.Weight, t26.W125.Name, t26.Name,t26.W125.sWin+"-"+t26.W125.sLoss,t26.W125.cWin+"-"+t26.W125.cLoss,t26.W125.pFinish,t26.W125.Ovr,yearConverter(t26.W125.Year)]);
    customers.push([t26.W133.Weight, t26.W133.Name, t26.Name,t26.W133.sWin+"-"+t26.W133.sLoss,t26.W133.cWin+"-"+t26.W133.cLoss,t26.W133.pFinish,t26.W133.Ovr,yearConverter(t26.W133.Year)]);
    customers.push([t26.W141.Weight, t26.W141.Name, t26.Name,t26.W141.sWin+"-"+t26.W141.sLoss,t26.W141.cWin+"-"+t26.W141.cLoss,t26.W141.pFinish,t26.W141.Ovr,yearConverter(t26.W141.Year)]);
    customers.push([t26.W149.Weight, t26.W149.Name, t26.Name,t26.W149.sWin+"-"+t26.W149.sLoss,t26.W149.cWin+"-"+t26.W149.cLoss,t26.W149.pFinish,t26.W149.Ovr,yearConverter(t26.W149.Year)]);
    customers.push([t26.W157.Weight, t26.W157.Name, t26.Name,t26.W157.sWin+"-"+t26.W157.sLoss,t26.W157.cWin+"-"+t26.W157.cLoss,t26.W157.pFinish,t26.W157.Ovr,yearConverter(t26.W157.Year)]);
    customers.push([t26.W165.Weight, t26.W165.Name, t26.Name,t26.W165.sWin+"-"+t26.W165.sLoss,t26.W165.cWin+"-"+t26.W165.cLoss,t26.W165.pFinish,t26.W165.Ovr,yearConverter(t26.W165.Year)]);
    customers.push([t26.W174.Weight, t26.W174.Name, t26.Name,t26.W174.sWin+"-"+t26.W174.sLoss,t26.W174.cWin+"-"+t26.W174.cLoss,t26.W174.pFinish,t26.W174.Ovr,yearConverter(t26.W174.Year)]);
    customers.push([t26.W184.Weight, t26.W184.Name, t26.Name,t26.W184.sWin+"-"+t26.W184.sLoss,t26.W184.cWin+"-"+t26.W184.cLoss,t26.W184.pFinish,t26.W184.Ovr,yearConverter(t26.W184.Year)]);
    customers.push([t26.W197.Weight, t26.W197.Name, t26.Name,t26.W197.sWin+"-"+t26.W197.sLoss,t26.W197.cWin+"-"+t26.W197.cLoss,t26.W197.pFinish,t26.W197.Ovr,yearConverter(t26.W197.Year)]);
    customers.push([t26.W285.Weight, t26.W285.Name, t26.Name,t26.W285.sWin+"-"+t26.W285.sLoss,t26.W285.cWin+"-"+t26.W285.cLoss,t26.W285.pFinish,t26.W285.Ovr,yearConverter(t26.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t26)[0].Weight,rankNS(t26)[0].Name,t26.Name,rankNS(t26)[0].sWin+"-"+rankNS(t26)[0].sLoss,rankNS(t26)[0].cWin+"-"+rankNS(t26)[0].cLoss,rankNS(t26)[0].pFinish,rankNS(t26)[0].Ovr,yearConverter(rankNS(t26)[0].Year)]);
    customers.push([rankNS(t26)[1].Weight,rankNS(t26)[1].Name,t26.Name,rankNS(t26)[1].sWin+"-"+rankNS(t26)[1].sLoss,rankNS(t26)[1].cWin+"-"+rankNS(t26)[1].cLoss,rankNS(t26)[1].pFinish,rankNS(t26)[1].Ovr,yearConverter(rankNS(t26)[1].Year)]);
    customers.push([rankNS(t26)[2].Weight,rankNS(t26)[2].Name,t26.Name,rankNS(t26)[2].sWin+"-"+rankNS(t26)[2].sLoss,rankNS(t26)[2].cWin+"-"+rankNS(t26)[2].cLoss,rankNS(t26)[2].pFinish,rankNS(t26)[2].Ovr,yearConverter(rankNS(t26)[2].Year)]);
    customers.push([rankNS(t26)[3].Weight,rankNS(t26)[3].Name,t26.Name,rankNS(t26)[3].sWin+"-"+rankNS(t26)[3].sLoss,rankNS(t26)[3].cWin+"-"+rankNS(t26)[3].cLoss,rankNS(t26)[3].pFinish,rankNS(t26)[3].Ovr,yearConverter(rankNS(t26)[3].Year)]);
    customers.push([rankNS(t26)[4].Weight,rankNS(t26)[4].Name,t26.Name,rankNS(t26)[4].sWin+"-"+rankNS(t26)[4].sLoss,rankNS(t26)[4].cWin+"-"+rankNS(t26)[4].cLoss,rankNS(t26)[4].pFinish,rankNS(t26)[4].Ovr,yearConverter(rankNS(t26)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet26 = document.getElementById("dvTablet26");
    dvTablet26.innerHTML = "";
    dvTablet26.appendChild(table);
};

function tableTeam27() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t27.W125.Weight, t27.W125.Name, t27.Name,t27.W125.sWin+"-"+t27.W125.sLoss,t27.W125.cWin+"-"+t27.W125.cLoss,t27.W125.pFinish,t27.W125.Ovr,yearConverter(t27.W125.Year)]);
    customers.push([t27.W133.Weight, t27.W133.Name, t27.Name,t27.W133.sWin+"-"+t27.W133.sLoss,t27.W133.cWin+"-"+t27.W133.cLoss,t27.W133.pFinish,t27.W133.Ovr,yearConverter(t27.W133.Year)]);
    customers.push([t27.W141.Weight, t27.W141.Name, t27.Name,t27.W141.sWin+"-"+t27.W141.sLoss,t27.W141.cWin+"-"+t27.W141.cLoss,t27.W141.pFinish,t27.W141.Ovr,yearConverter(t27.W141.Year)]);
    customers.push([t27.W149.Weight, t27.W149.Name, t27.Name,t27.W149.sWin+"-"+t27.W149.sLoss,t27.W149.cWin+"-"+t27.W149.cLoss,t27.W149.pFinish,t27.W149.Ovr,yearConverter(t27.W149.Year)]);
    customers.push([t27.W157.Weight, t27.W157.Name, t27.Name,t27.W157.sWin+"-"+t27.W157.sLoss,t27.W157.cWin+"-"+t27.W157.cLoss,t27.W157.pFinish,t27.W157.Ovr,yearConverter(t27.W157.Year)]);
    customers.push([t27.W165.Weight, t27.W165.Name, t27.Name,t27.W165.sWin+"-"+t27.W165.sLoss,t27.W165.cWin+"-"+t27.W165.cLoss,t27.W165.pFinish,t27.W165.Ovr,yearConverter(t27.W165.Year)]);
    customers.push([t27.W174.Weight, t27.W174.Name, t27.Name,t27.W174.sWin+"-"+t27.W174.sLoss,t27.W174.cWin+"-"+t27.W174.cLoss,t27.W174.pFinish,t27.W174.Ovr,yearConverter(t27.W174.Year)]);
    customers.push([t27.W184.Weight, t27.W184.Name, t27.Name,t27.W184.sWin+"-"+t27.W184.sLoss,t27.W184.cWin+"-"+t27.W184.cLoss,t27.W184.pFinish,t27.W184.Ovr,yearConverter(t27.W184.Year)]);
    customers.push([t27.W197.Weight, t27.W197.Name, t27.Name,t27.W197.sWin+"-"+t27.W197.sLoss,t27.W197.cWin+"-"+t27.W197.cLoss,t27.W197.pFinish,t27.W197.Ovr,yearConverter(t27.W197.Year)]);
    customers.push([t27.W285.Weight, t27.W285.Name, t27.Name,t27.W285.sWin+"-"+t27.W285.sLoss,t27.W285.cWin+"-"+t27.W285.cLoss,t27.W285.pFinish,t27.W285.Ovr,yearConverter(t27.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t27)[0].Weight,rankNS(t27)[0].Name,t27.Name,rankNS(t27)[0].sWin+"-"+rankNS(t27)[0].sLoss,rankNS(t27)[0].cWin+"-"+rankNS(t27)[0].cLoss,rankNS(t27)[0].pFinish,rankNS(t27)[0].Ovr,yearConverter(rankNS(t27)[0].Year)]);
    customers.push([rankNS(t27)[1].Weight,rankNS(t27)[1].Name,t27.Name,rankNS(t27)[1].sWin+"-"+rankNS(t27)[1].sLoss,rankNS(t27)[1].cWin+"-"+rankNS(t27)[1].cLoss,rankNS(t27)[1].pFinish,rankNS(t27)[1].Ovr,yearConverter(rankNS(t27)[1].Year)]);
    customers.push([rankNS(t27)[2].Weight,rankNS(t27)[2].Name,t27.Name,rankNS(t27)[2].sWin+"-"+rankNS(t27)[2].sLoss,rankNS(t27)[2].cWin+"-"+rankNS(t27)[2].cLoss,rankNS(t27)[2].pFinish,rankNS(t27)[2].Ovr,yearConverter(rankNS(t27)[2].Year)]);
    customers.push([rankNS(t27)[3].Weight,rankNS(t27)[3].Name,t27.Name,rankNS(t27)[3].sWin+"-"+rankNS(t27)[3].sLoss,rankNS(t27)[3].cWin+"-"+rankNS(t27)[3].cLoss,rankNS(t27)[3].pFinish,rankNS(t27)[3].Ovr,yearConverter(rankNS(t27)[3].Year)]);
    customers.push([rankNS(t27)[4].Weight,rankNS(t27)[4].Name,t27.Name,rankNS(t27)[4].sWin+"-"+rankNS(t27)[4].sLoss,rankNS(t27)[4].cWin+"-"+rankNS(t27)[4].cLoss,rankNS(t27)[4].pFinish,rankNS(t27)[4].Ovr,yearConverter(rankNS(t27)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet27 = document.getElementById("dvTablet27");
    dvTablet27.innerHTML = "";
    dvTablet27.appendChild(table);
};

function tableTeam28() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t28.W125.Weight, t28.W125.Name, t28.Name,t28.W125.sWin+"-"+t28.W125.sLoss,t28.W125.cWin+"-"+t28.W125.cLoss,t28.W125.pFinish,t28.W125.Ovr,yearConverter(t28.W125.Year)]);
    customers.push([t28.W133.Weight, t28.W133.Name, t28.Name,t28.W133.sWin+"-"+t28.W133.sLoss,t28.W133.cWin+"-"+t28.W133.cLoss,t28.W133.pFinish,t28.W133.Ovr,yearConverter(t28.W133.Year)]);
    customers.push([t28.W141.Weight, t28.W141.Name, t28.Name,t28.W141.sWin+"-"+t28.W141.sLoss,t28.W141.cWin+"-"+t28.W141.cLoss,t28.W141.pFinish,t28.W141.Ovr,yearConverter(t28.W141.Year)]);
    customers.push([t28.W149.Weight, t28.W149.Name, t28.Name,t28.W149.sWin+"-"+t28.W149.sLoss,t28.W149.cWin+"-"+t28.W149.cLoss,t28.W149.pFinish,t28.W149.Ovr,yearConverter(t28.W149.Year)]);
    customers.push([t28.W157.Weight, t28.W157.Name, t28.Name,t28.W157.sWin+"-"+t28.W157.sLoss,t28.W157.cWin+"-"+t28.W157.cLoss,t28.W157.pFinish,t28.W157.Ovr,yearConverter(t28.W157.Year)]);
    customers.push([t28.W165.Weight, t28.W165.Name, t28.Name,t28.W165.sWin+"-"+t28.W165.sLoss,t28.W165.cWin+"-"+t28.W165.cLoss,t28.W165.pFinish,t28.W165.Ovr,yearConverter(t28.W165.Year)]);
    customers.push([t28.W174.Weight, t28.W174.Name, t28.Name,t28.W174.sWin+"-"+t28.W174.sLoss,t28.W174.cWin+"-"+t28.W174.cLoss,t28.W174.pFinish,t28.W174.Ovr,yearConverter(t28.W174.Year)]);
    customers.push([t28.W184.Weight, t28.W184.Name, t28.Name,t28.W184.sWin+"-"+t28.W184.sLoss,t28.W184.cWin+"-"+t28.W184.cLoss,t28.W184.pFinish,t28.W184.Ovr,yearConverter(t28.W184.Year)]);
    customers.push([t28.W197.Weight, t28.W197.Name, t28.Name,t28.W197.sWin+"-"+t28.W197.sLoss,t28.W197.cWin+"-"+t28.W197.cLoss,t28.W197.pFinish,t28.W197.Ovr,yearConverter(t28.W197.Year)]);
    customers.push([t28.W285.Weight, t28.W285.Name, t28.Name,t28.W285.sWin+"-"+t28.W285.sLoss,t28.W285.cWin+"-"+t28.W285.cLoss,t28.W285.pFinish,t28.W285.Ovr,yearConverter(t28.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t28)[0].Weight,rankNS(t28)[0].Name,t28.Name,rankNS(t28)[0].sWin+"-"+rankNS(t28)[0].sLoss,rankNS(t28)[0].cWin+"-"+rankNS(t28)[0].cLoss,rankNS(t28)[0].pFinish,rankNS(t28)[0].Ovr,yearConverter(rankNS(t28)[0].Year)]);
    customers.push([rankNS(t28)[1].Weight,rankNS(t28)[1].Name,t28.Name,rankNS(t28)[1].sWin+"-"+rankNS(t28)[1].sLoss,rankNS(t28)[1].cWin+"-"+rankNS(t28)[1].cLoss,rankNS(t28)[1].pFinish,rankNS(t28)[1].Ovr,yearConverter(rankNS(t28)[1].Year)]);
    customers.push([rankNS(t28)[2].Weight,rankNS(t28)[2].Name,t28.Name,rankNS(t28)[2].sWin+"-"+rankNS(t28)[2].sLoss,rankNS(t28)[2].cWin+"-"+rankNS(t28)[2].cLoss,rankNS(t28)[2].pFinish,rankNS(t28)[2].Ovr,yearConverter(rankNS(t28)[2].Year)]);
    customers.push([rankNS(t28)[3].Weight,rankNS(t28)[3].Name,t28.Name,rankNS(t28)[3].sWin+"-"+rankNS(t28)[3].sLoss,rankNS(t28)[3].cWin+"-"+rankNS(t28)[3].cLoss,rankNS(t28)[3].pFinish,rankNS(t28)[3].Ovr,yearConverter(rankNS(t28)[3].Year)]);
    customers.push([rankNS(t28)[4].Weight,rankNS(t28)[4].Name,t28.Name,rankNS(t28)[4].sWin+"-"+rankNS(t28)[4].sLoss,rankNS(t28)[4].cWin+"-"+rankNS(t28)[4].cLoss,rankNS(t28)[4].pFinish,rankNS(t28)[4].Ovr,yearConverter(rankNS(t28)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet28 = document.getElementById("dvTablet28");
    dvTablet28.innerHTML = "";
    dvTablet28.appendChild(table);
};

function tableTeam29() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t29.W125.Weight, t29.W125.Name, t29.Name,t29.W125.sWin+"-"+t29.W125.sLoss,t29.W125.cWin+"-"+t29.W125.cLoss,t29.W125.pFinish,t29.W125.Ovr,yearConverter(t29.W125.Year)]);
    customers.push([t29.W133.Weight, t29.W133.Name, t29.Name,t29.W133.sWin+"-"+t29.W133.sLoss,t29.W133.cWin+"-"+t29.W133.cLoss,t29.W133.pFinish,t29.W133.Ovr,yearConverter(t29.W133.Year)]);
    customers.push([t29.W141.Weight, t29.W141.Name, t29.Name,t29.W141.sWin+"-"+t29.W141.sLoss,t29.W141.cWin+"-"+t29.W141.cLoss,t29.W141.pFinish,t29.W141.Ovr,yearConverter(t29.W141.Year)]);
    customers.push([t29.W149.Weight, t29.W149.Name, t29.Name,t29.W149.sWin+"-"+t29.W149.sLoss,t29.W149.cWin+"-"+t29.W149.cLoss,t29.W149.pFinish,t29.W149.Ovr,yearConverter(t29.W149.Year)]);
    customers.push([t29.W157.Weight, t29.W157.Name, t29.Name,t29.W157.sWin+"-"+t29.W157.sLoss,t29.W157.cWin+"-"+t29.W157.cLoss,t29.W157.pFinish,t29.W157.Ovr,yearConverter(t29.W157.Year)]);
    customers.push([t29.W165.Weight, t29.W165.Name, t29.Name,t29.W165.sWin+"-"+t29.W165.sLoss,t29.W165.cWin+"-"+t29.W165.cLoss,t29.W165.pFinish,t29.W165.Ovr,yearConverter(t29.W165.Year)]);
    customers.push([t29.W174.Weight, t29.W174.Name, t29.Name,t29.W174.sWin+"-"+t29.W174.sLoss,t29.W174.cWin+"-"+t29.W174.cLoss,t29.W174.pFinish,t29.W174.Ovr,yearConverter(t29.W174.Year)]);
    customers.push([t29.W184.Weight, t29.W184.Name, t29.Name,t29.W184.sWin+"-"+t29.W184.sLoss,t29.W184.cWin+"-"+t29.W184.cLoss,t29.W184.pFinish,t29.W184.Ovr,yearConverter(t29.W184.Year)]);
    customers.push([t29.W197.Weight, t29.W197.Name, t29.Name,t29.W197.sWin+"-"+t29.W197.sLoss,t29.W197.cWin+"-"+t29.W197.cLoss,t29.W197.pFinish,t29.W197.Ovr,yearConverter(t29.W197.Year)]);
    customers.push([t29.W285.Weight, t29.W285.Name, t29.Name,t29.W285.sWin+"-"+t29.W285.sLoss,t29.W285.cWin+"-"+t29.W285.cLoss,t29.W285.pFinish,t29.W285.Ovr,yearConverter(t29.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t29)[0].Weight,rankNS(t29)[0].Name,t29.Name,rankNS(t29)[0].sWin+"-"+rankNS(t29)[0].sLoss,rankNS(t29)[0].cWin+"-"+rankNS(t29)[0].cLoss,rankNS(t29)[0].pFinish,rankNS(t29)[0].Ovr,yearConverter(rankNS(t29)[0].Year)]);
    customers.push([rankNS(t29)[1].Weight,rankNS(t29)[1].Name,t29.Name,rankNS(t29)[1].sWin+"-"+rankNS(t29)[1].sLoss,rankNS(t29)[1].cWin+"-"+rankNS(t29)[1].cLoss,rankNS(t29)[1].pFinish,rankNS(t29)[1].Ovr,yearConverter(rankNS(t29)[1].Year)]);
    customers.push([rankNS(t29)[2].Weight,rankNS(t29)[2].Name,t29.Name,rankNS(t29)[2].sWin+"-"+rankNS(t29)[2].sLoss,rankNS(t29)[2].cWin+"-"+rankNS(t29)[2].cLoss,rankNS(t29)[2].pFinish,rankNS(t29)[2].Ovr,yearConverter(rankNS(t29)[2].Year)]);
    customers.push([rankNS(t29)[3].Weight,rankNS(t29)[3].Name,t29.Name,rankNS(t29)[3].sWin+"-"+rankNS(t29)[3].sLoss,rankNS(t29)[3].cWin+"-"+rankNS(t29)[3].cLoss,rankNS(t29)[3].pFinish,rankNS(t29)[3].Ovr,yearConverter(rankNS(t29)[3].Year)]);
    customers.push([rankNS(t29)[4].Weight,rankNS(t29)[4].Name,t29.Name,rankNS(t29)[4].sWin+"-"+rankNS(t29)[4].sLoss,rankNS(t29)[4].cWin+"-"+rankNS(t29)[4].cLoss,rankNS(t29)[4].pFinish,rankNS(t29)[4].Ovr,yearConverter(rankNS(t29)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet29 = document.getElementById("dvTablet29");
    dvTablet29.innerHTML = "";
    dvTablet29.appendChild(table);
};

function tableTeam30() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t30.W125.Weight, t30.W125.Name, t30.Name,t30.W125.sWin+"-"+t30.W125.sLoss,t30.W125.cWin+"-"+t30.W125.cLoss,t30.W125.pFinish,t30.W125.Ovr,yearConverter(t30.W125.Year)]);
    customers.push([t30.W133.Weight, t30.W133.Name, t30.Name,t30.W133.sWin+"-"+t30.W133.sLoss,t30.W133.cWin+"-"+t30.W133.cLoss,t30.W133.pFinish,t30.W133.Ovr,yearConverter(t30.W133.Year)]);
    customers.push([t30.W141.Weight, t30.W141.Name, t30.Name,t30.W141.sWin+"-"+t30.W141.sLoss,t30.W141.cWin+"-"+t30.W141.cLoss,t30.W141.pFinish,t30.W141.Ovr,yearConverter(t30.W141.Year)]);
    customers.push([t30.W149.Weight, t30.W149.Name, t30.Name,t30.W149.sWin+"-"+t30.W149.sLoss,t30.W149.cWin+"-"+t30.W149.cLoss,t30.W149.pFinish,t30.W149.Ovr,yearConverter(t30.W149.Year)]);
    customers.push([t30.W157.Weight, t30.W157.Name, t30.Name,t30.W157.sWin+"-"+t30.W157.sLoss,t30.W157.cWin+"-"+t30.W157.cLoss,t30.W157.pFinish,t30.W157.Ovr,yearConverter(t30.W157.Year)]);
    customers.push([t30.W165.Weight, t30.W165.Name, t30.Name,t30.W165.sWin+"-"+t30.W165.sLoss,t30.W165.cWin+"-"+t30.W165.cLoss,t30.W165.pFinish,t30.W165.Ovr,yearConverter(t30.W165.Year)]);
    customers.push([t30.W174.Weight, t30.W174.Name, t30.Name,t30.W174.sWin+"-"+t30.W174.sLoss,t30.W174.cWin+"-"+t30.W174.cLoss,t30.W174.pFinish,t30.W174.Ovr,yearConverter(t30.W174.Year)]);
    customers.push([t30.W184.Weight, t30.W184.Name, t30.Name,t30.W184.sWin+"-"+t30.W184.sLoss,t30.W184.cWin+"-"+t30.W184.cLoss,t30.W184.pFinish,t30.W184.Ovr,yearConverter(t30.W184.Year)]);
    customers.push([t30.W197.Weight, t30.W197.Name, t30.Name,t30.W197.sWin+"-"+t30.W197.sLoss,t30.W197.cWin+"-"+t30.W197.cLoss,t30.W197.pFinish,t30.W197.Ovr,yearConverter(t30.W197.Year)]);
    customers.push([t30.W285.Weight, t30.W285.Name, t30.Name,t30.W285.sWin+"-"+t30.W285.sLoss,t30.W285.cWin+"-"+t30.W285.cLoss,t30.W285.pFinish,t30.W285.Ovr,yearConverter(t30.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t30)[0].Weight,rankNS(t30)[0].Name,t30.Name,rankNS(t30)[0].sWin+"-"+rankNS(t30)[0].sLoss,rankNS(t30)[0].cWin+"-"+rankNS(t30)[0].cLoss,rankNS(t30)[0].pFinish,rankNS(t30)[0].Ovr,yearConverter(rankNS(t30)[0].Year)]);
    customers.push([rankNS(t30)[1].Weight,rankNS(t30)[1].Name,t30.Name,rankNS(t30)[1].sWin+"-"+rankNS(t30)[1].sLoss,rankNS(t30)[1].cWin+"-"+rankNS(t30)[1].cLoss,rankNS(t30)[1].pFinish,rankNS(t30)[1].Ovr,yearConverter(rankNS(t30)[1].Year)]);
    customers.push([rankNS(t30)[2].Weight,rankNS(t30)[2].Name,t30.Name,rankNS(t30)[2].sWin+"-"+rankNS(t30)[2].sLoss,rankNS(t30)[2].cWin+"-"+rankNS(t30)[2].cLoss,rankNS(t30)[2].pFinish,rankNS(t30)[2].Ovr,yearConverter(rankNS(t30)[2].Year)]);
    customers.push([rankNS(t30)[3].Weight,rankNS(t30)[3].Name,t30.Name,rankNS(t30)[3].sWin+"-"+rankNS(t30)[3].sLoss,rankNS(t30)[3].cWin+"-"+rankNS(t30)[3].cLoss,rankNS(t30)[3].pFinish,rankNS(t30)[3].Ovr,yearConverter(rankNS(t30)[3].Year)]);
    customers.push([rankNS(t30)[4].Weight,rankNS(t30)[4].Name,t30.Name,rankNS(t30)[4].sWin+"-"+rankNS(t30)[4].sLoss,rankNS(t30)[4].cWin+"-"+rankNS(t30)[4].cLoss,rankNS(t30)[4].pFinish,rankNS(t30)[4].Ovr,yearConverter(rankNS(t30)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet30 = document.getElementById("dvTablet30");
    dvTablet30.innerHTML = "";
    dvTablet30.appendChild(table);
};

function tableTeam31() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t31.W125.Weight, t31.W125.Name, t31.Name,t31.W125.sWin+"-"+t31.W125.sLoss,t31.W125.cWin+"-"+t31.W125.cLoss,t31.W125.pFinish,t31.W125.Ovr,yearConverter(t31.W125.Year)]);
    customers.push([t31.W133.Weight, t31.W133.Name, t31.Name,t31.W133.sWin+"-"+t31.W133.sLoss,t31.W133.cWin+"-"+t31.W133.cLoss,t31.W133.pFinish,t31.W133.Ovr,yearConverter(t31.W133.Year)]);
    customers.push([t31.W141.Weight, t31.W141.Name, t31.Name,t31.W141.sWin+"-"+t31.W141.sLoss,t31.W141.cWin+"-"+t31.W141.cLoss,t31.W141.pFinish,t31.W141.Ovr,yearConverter(t31.W141.Year)]);
    customers.push([t31.W149.Weight, t31.W149.Name, t31.Name,t31.W149.sWin+"-"+t31.W149.sLoss,t31.W149.cWin+"-"+t31.W149.cLoss,t31.W149.pFinish,t31.W149.Ovr,yearConverter(t31.W149.Year)]);
    customers.push([t31.W157.Weight, t31.W157.Name, t31.Name,t31.W157.sWin+"-"+t31.W157.sLoss,t31.W157.cWin+"-"+t31.W157.cLoss,t31.W157.pFinish,t31.W157.Ovr,yearConverter(t31.W157.Year)]);
    customers.push([t31.W165.Weight, t31.W165.Name, t31.Name,t31.W165.sWin+"-"+t31.W165.sLoss,t31.W165.cWin+"-"+t31.W165.cLoss,t31.W165.pFinish,t31.W165.Ovr,yearConverter(t31.W165.Year)]);
    customers.push([t31.W174.Weight, t31.W174.Name, t31.Name,t31.W174.sWin+"-"+t31.W174.sLoss,t31.W174.cWin+"-"+t31.W174.cLoss,t31.W174.pFinish,t31.W174.Ovr,yearConverter(t31.W174.Year)]);
    customers.push([t31.W184.Weight, t31.W184.Name, t31.Name,t31.W184.sWin+"-"+t31.W184.sLoss,t31.W184.cWin+"-"+t31.W184.cLoss,t31.W184.pFinish,t31.W184.Ovr,yearConverter(t31.W184.Year)]);
    customers.push([t31.W197.Weight, t31.W197.Name, t31.Name,t31.W197.sWin+"-"+t31.W197.sLoss,t31.W197.cWin+"-"+t31.W197.cLoss,t31.W197.pFinish,t31.W197.Ovr,yearConverter(t31.W197.Year)]);
    customers.push([t31.W285.Weight, t31.W285.Name, t31.Name,t31.W285.sWin+"-"+t31.W285.sLoss,t31.W285.cWin+"-"+t31.W285.cLoss,t31.W285.pFinish,t31.W285.Ovr,yearConverter(t31.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t31)[0].Weight,rankNS(t31)[0].Name,t31.Name,rankNS(t31)[0].sWin+"-"+rankNS(t31)[0].sLoss,rankNS(t31)[0].cWin+"-"+rankNS(t31)[0].cLoss,rankNS(t31)[0].pFinish,rankNS(t31)[0].Ovr,yearConverter(rankNS(t31)[0].Year)]);
    customers.push([rankNS(t31)[1].Weight,rankNS(t31)[1].Name,t31.Name,rankNS(t31)[1].sWin+"-"+rankNS(t31)[1].sLoss,rankNS(t31)[1].cWin+"-"+rankNS(t31)[1].cLoss,rankNS(t31)[1].pFinish,rankNS(t31)[1].Ovr,yearConverter(rankNS(t31)[1].Year)]);
    customers.push([rankNS(t31)[2].Weight,rankNS(t31)[2].Name,t31.Name,rankNS(t31)[2].sWin+"-"+rankNS(t31)[2].sLoss,rankNS(t31)[2].cWin+"-"+rankNS(t31)[2].cLoss,rankNS(t31)[2].pFinish,rankNS(t31)[2].Ovr,yearConverter(rankNS(t31)[2].Year)]);
    customers.push([rankNS(t31)[3].Weight,rankNS(t31)[3].Name,t31.Name,rankNS(t31)[3].sWin+"-"+rankNS(t31)[3].sLoss,rankNS(t31)[3].cWin+"-"+rankNS(t31)[3].cLoss,rankNS(t31)[3].pFinish,rankNS(t31)[3].Ovr,yearConverter(rankNS(t31)[3].Year)]);
    customers.push([rankNS(t31)[4].Weight,rankNS(t31)[4].Name,t31.Name,rankNS(t31)[4].sWin+"-"+rankNS(t31)[4].sLoss,rankNS(t31)[4].cWin+"-"+rankNS(t31)[4].cLoss,rankNS(t31)[4].pFinish,rankNS(t31)[4].Ovr,yearConverter(rankNS(t31)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet31 = document.getElementById("dvTablet31");
    dvTablet31.innerHTML = "";
    dvTablet31.appendChild(table);
};

function tableTeam32() {

    //Build an array containing Customer records.
    var customers = new Array();
    customers.push(["Weight", "Name", "Team","Season-Record","Career-Record","National Finishes","Overall","Year"]);
    customers.push([t32.W125.Weight, t32.W125.Name, t32.Name,t32.W125.sWin+"-"+t32.W125.sLoss,t32.W125.cWin+"-"+t32.W125.cLoss,t32.W125.pFinish,t32.W125.Ovr,yearConverter(t32.W125.Year)]);
    customers.push([t32.W133.Weight, t32.W133.Name, t32.Name,t32.W133.sWin+"-"+t32.W133.sLoss,t32.W133.cWin+"-"+t32.W133.cLoss,t32.W133.pFinish,t32.W133.Ovr,yearConverter(t32.W133.Year)]);
    customers.push([t32.W141.Weight, t32.W141.Name, t32.Name,t32.W141.sWin+"-"+t32.W141.sLoss,t32.W141.cWin+"-"+t32.W141.cLoss,t32.W141.pFinish,t32.W141.Ovr,yearConverter(t32.W141.Year)]);
    customers.push([t32.W149.Weight, t32.W149.Name, t32.Name,t32.W149.sWin+"-"+t32.W149.sLoss,t32.W149.cWin+"-"+t32.W149.cLoss,t32.W149.pFinish,t32.W149.Ovr,yearConverter(t32.W149.Year)]);
    customers.push([t32.W157.Weight, t32.W157.Name, t32.Name,t32.W157.sWin+"-"+t32.W157.sLoss,t32.W157.cWin+"-"+t32.W157.cLoss,t32.W157.pFinish,t32.W157.Ovr,yearConverter(t32.W157.Year)]);
    customers.push([t32.W165.Weight, t32.W165.Name, t32.Name,t32.W165.sWin+"-"+t32.W165.sLoss,t32.W165.cWin+"-"+t32.W165.cLoss,t32.W165.pFinish,t32.W165.Ovr,yearConverter(t32.W165.Year)]);
    customers.push([t32.W174.Weight, t32.W174.Name, t32.Name,t32.W174.sWin+"-"+t32.W174.sLoss,t32.W174.cWin+"-"+t32.W174.cLoss,t32.W174.pFinish,t32.W174.Ovr,yearConverter(t32.W174.Year)]);
    customers.push([t32.W184.Weight, t32.W184.Name, t32.Name,t32.W184.sWin+"-"+t32.W184.sLoss,t32.W184.cWin+"-"+t32.W184.cLoss,t32.W184.pFinish,t32.W184.Ovr,yearConverter(t32.W184.Year)]);
    customers.push([t32.W197.Weight, t32.W197.Name, t32.Name,t32.W197.sWin+"-"+t32.W197.sLoss,t32.W197.cWin+"-"+t32.W197.cLoss,t32.W197.pFinish,t32.W197.Ovr,yearConverter(t32.W197.Year)]);
    customers.push([t32.W285.Weight, t32.W285.Name, t32.Name,t32.W285.sWin+"-"+t32.W285.sLoss,t32.W285.cWin+"-"+t32.W285.cLoss,t32.W285.pFinish,t32.W285.Ovr,yearConverter(t32.W285.Year)]);
    customers.push(["Non-Starters","","","","","","",""]);
    customers.push([rankNS(t32)[0].Weight,rankNS(t32)[0].Name,t32.Name,rankNS(t32)[0].sWin+"-"+rankNS(t32)[0].sLoss,rankNS(t32)[0].cWin+"-"+rankNS(t32)[0].cLoss,rankNS(t32)[0].pFinish,rankNS(t32)[0].Ovr,yearConverter(rankNS(t32)[0].Year)]);
    customers.push([rankNS(t32)[1].Weight,rankNS(t32)[1].Name,t32.Name,rankNS(t32)[1].sWin+"-"+rankNS(t32)[1].sLoss,rankNS(t32)[1].cWin+"-"+rankNS(t32)[1].cLoss,rankNS(t32)[1].pFinish,rankNS(t32)[1].Ovr,yearConverter(rankNS(t32)[1].Year)]);
    customers.push([rankNS(t32)[2].Weight,rankNS(t32)[2].Name,t32.Name,rankNS(t32)[2].sWin+"-"+rankNS(t32)[2].sLoss,rankNS(t32)[2].cWin+"-"+rankNS(t32)[2].cLoss,rankNS(t32)[2].pFinish,rankNS(t32)[2].Ovr,yearConverter(rankNS(t32)[2].Year)]);
    customers.push([rankNS(t32)[3].Weight,rankNS(t32)[3].Name,t32.Name,rankNS(t32)[3].sWin+"-"+rankNS(t32)[3].sLoss,rankNS(t32)[3].cWin+"-"+rankNS(t32)[3].cLoss,rankNS(t32)[3].pFinish,rankNS(t32)[3].Ovr,yearConverter(rankNS(t32)[3].Year)]);
    customers.push([rankNS(t32)[4].Weight,rankNS(t32)[4].Name,t32.Name,rankNS(t32)[4].sWin+"-"+rankNS(t32)[4].sLoss,rankNS(t32)[4].cWin+"-"+rankNS(t32)[4].cLoss,rankNS(t32)[4].pFinish,rankNS(t32)[4].Ovr,yearConverter(rankNS(t32)[4].Year)]);





    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < customers.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }

    var dvTablet32 = document.getElementById("dvTablet32");
    dvTablet32.innerHTML = "";
    dvTablet32.appendChild(table);
};


//End

















//Rank non starters for t1
function rankNS(b) {

extrasT1()
  function extrasT1() {

  nsT1 = [];

  for (var i = 0; i < b.extrap.length; i++) {
    nonStartersT1(b.extrap[i])};


  function nonStartersT1(a) {
  if (a.Starter == "N") {
     nsT1.push(a)
  }
    }
  };

return nsT1.sort((a, b) => ((b.Ovr) > (a.Ovr)) ? 1 : -1)

};
//end


//Functions to toggle div hidden
function myFunction1() {
  var x = document.getElementById("dvTableT1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("psuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("psuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t1);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("dvTablet2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("lehActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("lehHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t2);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction3() {
  var x = document.getElementById("dvTablet3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("lhaActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("lhaHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t3);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}


function myFunction4() {
  var x = document.getElementById("dvTablet4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("tosuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("tosuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t4);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}


function myFunction5() {
  var x = document.getElementById("dvTablet5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("iowaActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("iowaHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t5);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction6() {
  var x = document.getElementById("dvTablet6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("isuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("isuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t6);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction7() {
  var x = document.getElementById("dvTablet7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("ohioActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("ohioHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t7);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction8() {
  var x = document.getElementById("dvTablet8");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("pittActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("pittHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t8);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction9() {
  var x = document.getElementById("dvTablet9");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("cornellActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("cornellHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t9);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction10() {
  var x = document.getElementById("dvTablet10");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("uncActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("uncHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t10);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction11() {
  var x = document.getElementById("dvTablet11");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("ncstActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("ncstHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t11);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction12() {
  var x = document.getElementById("dvTablet12");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("asuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("asuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t12);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction13() {
  var x = document.getElementById("dvTablet13");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("stanActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("stanHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t13);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction14() {
  var x = document.getElementById("dvTablet14");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("illiActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("illiHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t14);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction15() {
  var x = document.getElementById("dvTablet15");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("chattActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("chattHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t15);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction16() {
  var x = document.getElementById("dvTablet16");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("armyActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("armyHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t16);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction17() {
  var x = document.getElementById("dvTablet17");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("buffActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("buffHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t17);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction18() {
  var x = document.getElementById("dvTablet18");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("navyActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("navyHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t18);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction19() {
  var x = document.getElementById("dvTablet19");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("airfActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("airfHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t19);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction20() {
  var x = document.getElementById("dvTablet20");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("drexActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("drexHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t20);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction21() {
  var x = document.getElementById("dvTablet21");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("ouActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("ouHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t21);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction22() {
  var x = document.getElementById("dvTablet22");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("osuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("osuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t22);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction23() {
  var x = document.getElementById("dvTablet23");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("michActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("michHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t23);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction24() {
  var x = document.getElementById("dvTablet24");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("uniActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("uniHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t24);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction25() {
  var x = document.getElementById("dvTablet25");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("buckActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("buckHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t25);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction26() {
  var x = document.getElementById("dvTablet26");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("uvaActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("uvaHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t26);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction27() {
  var x = document.getElementById("dvTablet27");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("msuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("msuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t27);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction28() {
  var x = document.getElementById("dvTablet28");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("vtechActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("vtechHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t28);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction29() {
  var x = document.getElementById("dvTablet29");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("wvuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("wvuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t29);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction30() {
  var x = document.getElementById("dvTablet30");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("iuActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("iuHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t30);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction31() {
  var x = document.getElementById("dvTablet31");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("nebActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("nebHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t31);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}

function myFunction32() {
  var x = document.getElementById("dvTablet32");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("mizzActive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  var z = document.getElementById("mizzHiddenB");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }

  playerMatchHistory(t32);

  var h = document.getElementById("matchHist");
  if (h.style.display === "none") {
    h.style.display = "block";
  } else {
    h.style.display = "none";
  }
}


function myFunctionTeamView() {
  var x = document.getElementById("teamsDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunctionBracketsView() {
  var x = document.getElementById("bracketsDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunctionHistoryView() {
  var x = document.getElementById("historyDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Functions to toggle div hidden end
