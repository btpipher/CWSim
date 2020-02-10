function teamPlace2() {
  teamFinish()[0].tFinish.unshift(year+" - "+"1st");teamFinish()[1].tFinish.unshift(year+" - "+"2nd");teamFinish()[2].tFinish.unshift(year+" - "+"3rd");teamFinish()[3].tFinish.unshift(year+" - "+"4th");teamFinish()[4].tFinish.unshift(year+" - "+"5th");teamFinish()[5].tFinish.unshift(year+" - "+"6th");teamFinish()[6].tFinish.unshift(year+" - "+"7th");teamFinish()[7].tFinish.unshift(year+" - "+"8th");teamFinish()[8].tFinish.unshift(year+" - "+"9th");teamFinish()[9].tFinish.unshift(year+" - "+"10th");teamFinish()[10].tFinish.unshift(year+" - "+"11th");teamFinish()[11].tFinish.unshift(year+" - "+"12th");teamFinish()[12].tFinish.unshift(year+" - "+"13th");teamFinish()[13].tFinish.unshift(year+" - "+"14th");teamFinish()[14].tFinish.unshift(year+" - "+"15th");teamFinish()[15].tFinish.unshift(year+" - "+"16th");teamFinish()[16].tFinish.unshift(year+" - "+"17th");teamFinish()[17].tFinish.unshift(year+" - "+"18th");teamFinish()[18].tFinish.unshift(year+" - "+"19th");teamFinish()[19].tFinish.unshift(year+" - "+"20th");teamFinish()[20].tFinish.unshift(year+" - "+"21st");teamFinish()[21].tFinish.unshift(year+" - "+"22nd");teamFinish()[22].tFinish.unshift(year+" - "+"23rd");teamFinish()[23].tFinish.unshift(year+" - "+"24th");teamFinish()[24].tFinish.unshift(year+" - "+"25th");teamFinish()[25].tFinish.unshift(year+" - "+"26th");teamFinish()[26].tFinish.unshift(year+" - "+"27th");teamFinish()[27].tFinish.unshift(year+" - "+"28th");teamFinish()[28].tFinish.unshift(year+" - "+"29th");teamFinish()[29].tFinish.unshift(year+" - "+"30th");teamFinish()[30].tFinish.unshift(year+" - "+"31st");teamFinish()[31].tFinish.unshift(year+" - "+"32nd");
}


//Change year to text for HTML purposes
function yearConverter(a) {
  if (a == 1) {
    return "Fr"}
    if (a == 2) {
      return "So"}
      if (a == 3) {
        return "Jr"}
        if (a == 4) {
          return "Sr"}
  }
//end


//Reset stats that are by season
function statReset() {
  for (var i = 0; i < allt.length; i++) {
    teamStatSeasonReset(allt[i])};
    for (var i = 0; i < allp.length; i++) {
      playerStatSeasonReset(allp[i])};
      for (var i = 0; i < allp.length; i++) {
        playerYear(allp[i])};
        for (var i = 0; i < allp.length; i++) {
          progression(allp[i])};
          for (var i = 0; i < allp.length; i++) {
            removeSr(allp[i])};
            for (var i = 0; i < allt.length; i++) {
              resetStarters(allt[i])};
              for (var i = 0; i < allt.length; i++) {
                starters(allt[i])};
}

function teamStatSeasonReset(a) {
  a.sWin = 0;
  a.sLoss = 0;
}


function playerStatSeasonReset(a) {
  a.sWin = 0;
  a.sLoss = 0;
  a.Starter = "N";
}


function playerYear(a) {
  a.Year += 1;
}

//end


//replace seniors with Recruits
function removeSr(a) {
  if (a.Year > 4) {
    a.Name = getRandomName();
    a.Year = 1;
    a.Roll = 0;
    a.cWin = 0;
    a.cLoss = 0;
    a.NF = "";
    a.Starter = "N";
    a.pFinish = [];
    a.mHistory = [];
    a.championships = [];
    if (teamid(a).RecruitPlace <= 6) {
      a.Strength = recruitTop6Team();
      a.Neutral = recruitTop6Team();
      a.Top = recruitTop6Team();
      a.Bot = recruitTop6Team();
      a.Cardio = getRandomInt(3,7);
      }
      if ((teamid(a).RecruitPlace > 6) && (teamid(a).RecruitPlace < 11)) {
        a.Strength = recruitTop10Team();
        a.Neutral = recruitTop10Team();
        a.Top = recruitTop10Team();
        a.Bot = recruitTop10Team();
        a.Cardio = getRandomInt(3,7);
        }
        if ((teamid(a).RecruitPlace > 10) && (teamid(a).RecruitPlace < 16)) {
          a.Strength = recruitTop15Team();
          a.Neutral = recruitTop15Team();
          a.Top = recruitTop15Team();
          a.Bot = recruitTop15Team();
          a.Cardio = getRandomInt(3,7);
          }
          if (teamid(a).RecruitPlace > 15) {
            a.Strength = recruitTop32Team();
            a.Neutral = recruitTop32Team();
            a.Top = recruitTop32Team();
            a.Bot = recruitTop32Team();
            a.Cardio = getRandomInt(3,7);
            }
            a.Ovr = totalovr(a);
  }
}


function recruitTop6Team(a) {
  return getRandomInt(5,8)
}
function recruitTop10Team(a) {
  return getRandomInt(5,7)
}
function recruitTop15Team(a) {
  return getRandomInt(4,6)
}
function recruitTop32Team(a) {
  return getRandomInt(3,5)
}
//end remove Sr


//create Top Overall recruit
function addTopRecruit(b) {
  yy = getRandomWeight()
  xxxx = new Player(getRandomName(),yy,9,9,getRandomInt(5,7),getRandomInt(5,7),getRandomInt(6,7),0,0,0,getRandomInt(30,80),getRandomInt(30,80),(b.tid),("W"+yy),0)
allp.push(xxxx)
b.extrap.push(xxxx)
}
//end ctor

function progression(a) {
  if ((a.pFinish[0]) == ("(National Champion)")) {
    a.Strength += getRandomInt(1,3);
    a.Neutral += getRandomInt(1,3);
    a.Cardio += getRandomInt(1,3);
  } if ((a.pFinish[0]) == ("(Runner Up)")) {
    a.Strength += getRandomInt(1,2);
    a.Neutral += getRandomInt(1,3);
    a.Cardio += getRandomInt(1,2);
  } if ((a.pFinish[0]) == ("(3rd Place)")) {
    a.Strength += getRandomInt(1,2);
    a.Neutral += getRandomInt(1,3);
    a.Cardio += getRandomInt(1,2);
  } if ((a.pFinish[0]) == ("(4th Place)")) {
    a.Strength += getRandomInt(1,2);
    a.Neutral += getRandomInt(1,2);
    a.Cardio += getRandomInt(1,1);
  } if ((a.pFinish[0]) == ("(5th Place)")) {
    a.Strength += getRandomInt(0,1);
    a.Neutral += getRandomInt(0,2);
    a.Cardio += getRandomInt(0,1);
  } if ((a.pFinish[0]) == ("(6th Place)")) {
    a.Strength += getRandomInt(0,1);
    a.Neutral += getRandomInt(0,2);
    a.Cardio += getRandomInt(0,1);
  } if ((a.pFinish[0]) == ("(Blood Round)")) {
    a.Neutral += getRandomInt(0,1);
    a.Cardio += getRandomInt(0,1);
  }
  a.Neutral += (teamid(a).coach.Neutral)
  a.Strength += (teamid(a).coach.Strength)
}
