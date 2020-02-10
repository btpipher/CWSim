function scorePoint(a, b) {
  if (a == undefined) {
    return b
  }
  if (b == undefined) {
    return a
  }
  if ((a == undefined) && (b == undefined)) {
    return undefined
  }
  let zy = 0
  let zz = 0
    var apoints = 0
    var bpoints = 0
    a.TW = 0
    b.TW = 0
    var rand1 = Math.random()
    var rand2 = Math.random()
    var rand3 = Math.random()
    var rand4 = Math.random()

    rollPoint(a,b);

    strengthPoint(a,b);

    neutralPoint(a,b);

    topPoint(a,b)

    cardioPoint(a,b)

    ovrPoint(a,b)

    pinFunction(a,b)

    bigMove(a,b)

    overtime(a,b)

    logTeamPoints(a,b)

     if (logWin(a,b) == 1) {
       return a
     } else {return b};






//Points Based on Player Roll or matches won consecutively
    function rollPoint(a,b) {
      if (a.Roll > b.Roll) {
          apoints += getRandomInt(0,1)
      }
      if (a.Roll< b.Roll) {
          bpoints += getRandomInt(0,1)
      }
      if (a.Roll >= 6) {
          apoints += getRandomInt(0,1)
      }
      if (b.Roll >= 6) {
          bpoints += getRandomInt(0,1)
      }
      if (a.Roll >= 10) {
          apoints += getRandomInt(1,2)
      }
      if (b.Roll >= 10) {
          bpoints += getRandomInt(1,2)
      }
    };

    //Points Based on Strength Attribute
    function strengthPoint(a,b) {
      if ((a.Strength * rand1) > (b.Strength * rand2)) {
        apoints += getRandomInt(1,2)
    } else if ((a.Strength * rand1) < (b.Strength* rand2)) {
        bpoints += getRandomInt(1,2)
    }
    };

//Points Based on Neutral Attributes
    function neutralPoint(a,b) {
      if ((a.Neutral * rand1) > (b.Neutral * rand2)) {
        apoints += getRandomInt(0,1)
    } else if ((a.Neutral * rand1) < (b.Neutral * rand2)) {
        bpoints += getRandomInt(0,1)
    }
    if ((a.Neutral - b.Neutral) >= 5) {
      apoints += getRandomInt(1,2)
    }
    if ((b.Neutral - a.Neutral) >= 5) {
      bpoints += getRandomInt(1,2)
    }
  };

//Points Based on Top and Bottom Attributes
  function topPoint(a,b) {
    if ((a.Top * rand1) > (b.Top* rand2)) {
      apoints += getRandomInt(0,1)
  } else if ((a.Top *rand1) < (b.Top * rand2)) {
      bpoints += getRandomInt(0,1)
  }
  if ((a.Bot * rand1) > (b.Bot * rand2)) {
      apoints += getRandomInt(0,2)
  } else if ((a.Bot * rand1) < (b.Bot * rand2)) {
      bpoints += getRandomInt(0,2)
  }
  if ((a.Top - b.Bot) >= 5) {
      apoints += getRandomInt(1,4)
  }
  if ((b.Top - a.Bot) >= 5) {
      bpoints += getRandomInt(1,4)
  }
};

//Points Based on Cardio Attribute
function cardioPoint(a,b) {if (a.Cardio > b.Cardio) {
    apoints += getRandomInt(0,2)
} else if (a.Cardio < b.Cardio) {
    bpoints += getRandomInt(0,2)
}
};

//Points Based on Overall of Wrestlers
function ovrPoint(a,b) {if ((a.Ovr - b.Ovr) >= 6) {
  apoints += getRandomInt(1,2)
  bpoints ++
}
if ((b.Ovr - a.Ovr) >= 6) {
  bpoints += getRandomInt(1,2)
  apoints ++
}
if ((a.Ovr - b.Ovr) >= 12) {
  apoints += getRandomInt(4,6)
  bpoints += getRandomInt(1,3)
}
if ((b.Ovr - a.Ovr) >= 12) {
  bpoints += getRandomInt(4,6)
  apoints += getRandomInt(1,3)
}
};

//Function to determine if match ended in a pin
function pinFunction(a,b) {if ((a.Ovr - b.Ovr) >= 20) {
  apoints += ((999 * getRandomInt(0,1)) * getRandomInt(0,1))
}
if ((b.Ovr - a.Ovr) >= 20) {
  bpoints += ((999 * getRandomInt(0,1)) * getRandomInt(0,1))
}
};

//If a player has luck and big moves they have chance to catch and Pin
function bigMove(a,b) {
  if (((a.Luck + a.Big) > (b.Luck + b.Big)) && ((a.Luck + a.Big) >= 100)) {
  apoints += ((((1500 * getRandomInt(0,1)) * getRandomInt(0,1)) * getRandomInt(0,1)) * getRandomInt(0,1))
}
if (((b.Luck + b.Big) > (a.Luck + a.Big)) && ((b.Luck + b.Big) >= 100)) {
apoints += ((((1500 * getRandomInt(0,1)) * getRandomInt(0,1)) * getRandomInt(0,1)) * getRandomInt(0,1))
}
};

//If score is tied, this function determines winner
function overtime(a,b) {
  if (apoints == bpoints) {
    apoints += getRandomInt(0,1)
}
if (apoints == bpoints) {
    bpoints++
}
};

//Record Win that wasn't a pin
function logWin(a,b) {
  if ((apoints > bpoints) && (apoints < 50) && ((apoints - bpoints) < 18)) {
    a.Roll ++
    a.sWin ++
    a.cWin ++
    b.cLoss ++
    b.sLoss ++
    b.Roll = 0
    a.TW =+ 1
    return 1
}
if ((apoints < bpoints) && (bpoints < 50) && ((bpoints - apoints) < 18)) {
    b.Roll ++
    b.sWin ++
    b.cWin ++
    a.cLoss ++
    a.sLoss ++
    a.Roll = 0
    b.TW =+ 1
    return 2
}
if ((apoints >  bpoints) && (apoints < 50) && ((apoints - bpoints) >= 18)) {
  a.Roll ++
  a.sWin ++
  a.cWin ++
  b.cLoss ++
  b.sLoss ++
  b.Roll = 0
  a.TW =+ 1
  return 1
}
if ((apoints <  bpoints) && (bpoints < 50) && ((bpoints - apoints) >= 18)) {
  b.Roll ++
  b.sWin ++
  b.cWin ++
  a.cLoss ++
  a.sLoss ++
  a.Roll = 0
  b.TW =+ 1
  return 2
}

//Logs if the Win is a Pin

if (((apoints > 900) && (apoints < 1400)) && (apoints > bpoints)) {
  a.sWin ++
  a.cWin ++
  b.cLoss ++
  b.sLoss ++
  a.TW =+ 1
  return 1
}
if (((bpoints > 900) && (bpoints < 1400)) && (bpoints > apoints)) {
  b.sWin ++
  a.sLoss ++
  b.cWin ++
  a.cLoss ++
  b.TW =+ 1
  return 2
}
if ((apoints >= 1500) && (apoints > bpoints)) {
  a.sWin ++
  a.cWin ++
  b.cLoss ++
  b.sLoss ++
  a.TW =+ 1
  return 1
}
if ((bpoints >= 1500) && (bpoints > apoints)) {
  b.sWin ++
  b.cWin ++
  a.cLoss ++
  a.sLoss ++
  b.TW =+ 1

  return 2
}
};
//Logs the Team Points Scored in Every Match
function logTeamPoints(a,b) {
  if (((apoints - bpoints) >= 8) && ((apoints - bpoints) <= 14)) {
    a.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | major decisions | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
    b.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | major decisions | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  atpoints += 4
  teamid(a).Tpoints += 1
  window.zy = apoints
  window.zz = bpoints
}
if (((bpoints - apoints) >= 8) && ((bpoints - apoints) <= 14)) {
  a.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | major decisions | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  b.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | major decisions | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  btpoints += 4
  teamid(b).Tpoints += 1
  window.zy = apoints
  window.zz = bpoints
}
if (((apoints - bpoints) >= 15) &&(apoints <= 300)) {
  a.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | techfalls | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  b.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | techfalls | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  atpoints += 5
  teamid(a).Tpoints += 1.5
  window.zy = apoints
  window.zz = bpoints
}
if (((bpoints - apoints) >= 15  &&(bpoints <= 300))) {
  a.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | techfalls | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  b.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | techfalls | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  btpoints += 5
  teamid(b).Tpoints += 1.5
  window.zy = apoints
  window.zz = bpoints
}
if ((apoints > bpoints) && ((apoints - bpoints) <= 7)) {
  a.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | decisions | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  b.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | decisions | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  atpoints += 3
  teamid(a).Tpoints += 0.5
  window.zy = apoints
  window.zz = bpoints
}
if ((bpoints > apoints) && ((bpoints - apoints) <= 7)) {
  a.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | decisions | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  b.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | decisions | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  btpoints += 3
  teamid(b).Tpoints += 0.5
  window.zy = apoints
  window.zz = bpoints
}
if ((apoints > 900) && (apoints > bpoints)) {
  a.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | pins | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  b.mHistory.push("</br>"+"("+teamid(a).abr+") "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" | pins | "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" ("+teamid(b).abr+")")
  atpoints = 6
  teamid(a).Tpoints += 2
  window.zy = "Fall"
  window.zz = ""
}
if ((bpoints > 900) && (bpoints > apoints))  {
  a.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | pins | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  b.mHistory.push("</br>"+"("+teamid(b).abr+") "+b.Name+"("+b.sWin+"-"+b.sLoss+")"+" | pins | "+a.Name+"("+a.sWin+"-"+a.sLoss+")"+" ("+teamid(a).abr+")")
  btpoints = 6
  teamid(b).Tpoints += 2
  window.zy = ""
  window.zz = "Fall"
}
};


};



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
