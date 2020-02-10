

//teams

allt = [
  t1 = new Team("Penn State", 1,125,133,141,149,157,165,174,184,197,285,"PSU",(new Coach(getRandomName(),2,2))),
  t2 = new Team("Lehigh", 2,125,133,141,149,157,165,174,184,197,285,"LeH",(new Coach(getRandomName(),1,1))),
  t3 = new Team("LockHaven", 3,125,133,141,149,157,165,174,184,197,285,"LHa",(new Coach(getRandomName(),0,1))),
  t4 = new Team("Ohio State", 4,125,133,141,149,157,165,174,184,197,285,"tOSU",(new Coach(getRandomName(),1,2))),
  t5 = new Team("Iowa", 5,125,133,141,149,157,165,174,184,197,285,"IOWA",(new Coach(getRandomName(),2,2))),
  t6 = new Team("Iowa State", 6,125,133,141,149,157,165,174,184,197,285,"ISU",(new Coach(getRandomName(),3,1))),
  t7 = new Team("Ohio", 7,125,133,141,149,157,165,174,184,197,285,"OH",(new Coach(getRandomName(),0,0))),
  t8 = new Team("Pittsburgh", 8,125,133,141,149,157,165,174,184,197,285,"Pitt",(new Coach(getRandomName(),2,2))),
  t9 = new Team("Cornell", 9,125,133,141,149,157,165,174,184,197,285,"CRN",(new Coach(getRandomName(),1,3))),
  t10 = new Team("North Carolina", 10,125,133,141,149,157,165,174,184,197,285,"UNC",(new Coach(getRandomName(),2,2))),
  t11 = new Team("NC State", 11,125,133,141,149,157,165,174,184,197,285,"NC S",(new Coach(getRandomName(),0,2))),
  t12 = new Team("Arizona State", 12,125,133,141,149,157,165,174,184,197,285,"ASU",(new Coach(getRandomName(),1,3))),
  t13 = new Team("Stanford", 13,125,133,141,149,157,165,174,184,197,285,"Stan",(new Coach(getRandomName(),1,0))),
  t14 = new Team("Illinois", 14,125,133,141,149,157,165,174,184,197,285,"Illi",(new Coach(getRandomName(),1,0))),
  t15 = new Team("Chattanooga", 15,125,133,141,149,157,165,174,184,197,285,"Chatt",(new Coach(getRandomName(),0,0))),
  t16 = new Team("Army", 16,125,133,141,149,157,165,174,184,197,285,"Army",(new Coach(getRandomName(),2,-1))),
  t17 = new Team("Buffalo", 17,125,133,141,149,157,165,174,184,197,285,"Buff",(new Coach(getRandomName(),0,0))),
  t18 = new Team("Navy", 18,125,133,141,149,157,165,174,184,197,285,"Navy",(new Coach(getRandomName(),1,0))),
  t19 = new Team("Air Force", 19,125,133,141,149,157,165,174,184,197,285,"AF",(new Coach(getRandomName(),0,1))),
  t20 = new Team("Drexel", 20,125,133,141,149,157,165,174,184,197,285,"Drx",(new Coach(getRandomName(),-1,-1))),
  t21 = new Team("Oklahoma", 21,125,133,141,149,157,165,174,184,197,285,"OU",(new Coach(getRandomName(),1,3))),
  t22 = new Team("Oklahoma State", 22,125,133,141,149,157,165,174,184,197,285,"OSU",(new Coach(getRandomName(),1,1))),
  t23 = new Team("Michigan", 23,125,133,141,149,157,165,174,184,197,285,"Mich",(new Coach(getRandomName(),1,1))),
  t24 = new Team("Northern Iowa", 24,125,133,141,149,157,165,174,184,197,285,"UNI",(new Coach(getRandomName(),1,1))),
  t25 = new Team("Bucknell", 25,125,133,141,149,157,165,174,184,197,285,"Buck",(new Coach(getRandomName(),0,0))),
  t26 = new Team("Virginia", 26,125,133,141,149,157,165,174,184,197,285,"UV",(new Coach(getRandomName(),1,0))),
  t27 = new Team("Michigan State", 27,125,133,141,149,157,165,174,184,197,285,"MSU",(new Coach(getRandomName(),0,1))),
  t28 = new Team("Virginia Tech", 28,125,133,141,149,157,165,174,184,197,285,"V-Tech",(new Coach(getRandomName(),2,2))),
  t29 = new Team("West Virginia", 29,125,133,141,149,157,165,174,184,197,285,"WVU",(new Coach(getRandomName(),0,0))),
  t30 = new Team("Indiana", 30,125,133,141,149,157,165,174,184,197,285,"IU",(new Coach(getRandomName(),0,0))),
  t31 = new Team("Nebraska", 31,125,133,141,149,157,165,174,184,197,285,"Neb",(new Coach(getRandomName(),3,0))),
  t32 = new Team("Missouri", 32,125,133,141,149,157,165,174,184,197,285,"Mizz",(new Coach(getRandomName(),1,3))),

];


confa = [t1,t2,t3,t4,t5,t6,t7,t8];
confb = [t9,t10,t11,t12,t13,t14,t15,t16];
confc = [t17,t18,t19,t20,t21,t22,t23,t24];
confd = [t25,t26,t27,t28,t29,t30,t31,t32];












function Team(Name, tid, W125, W133, W141, W149, W157, W165, W174, W184, W197, W285,abvr, coach) {
    this.Name = Name;
    this.sWin = 0;
    this.sLoss = 0;
    this.tid = tid;
    this.W125 = W125;
    this.W133 = W133;
    this.W141 = W141;
    this.W149 = W149;
    this.W157 = W157;
    this.W165 = W165;
    this.W174 = W174;
    this.W184 = W184;
    this.W197 = W197;
    this.W285 = W285;
    this.abr = abvr;
    this.extrap = [];
    this.atWin = 0;
    this.atLoss = 0;
    this.Tpoints = 0;
    this.NF = [];
    this.tFinish = [];
    this.RecruitPlace = 0;
    this.coach = coach;
    this.Ovr = undefined;
};

function Coach(Name, Strength, Neutral) {
    this.Name = Name;
    this.Strength = Strength;
    this.Neutral = Neutral;
};

function teamOvr() {

  for (var i = 0; i < allt.length; i++) {
    calculateTeamOvr(allt[i])};



//add player overalls for starters and divide to get team Ovr
function calculateTeamOvr(a) {
  //update player Overalls
  for (var i = 0; i < allp.length; i++) {
    updateOvr(allp[i])};
    //end
a.Ovr = ((a.W125.Ovr+a.W133.Ovr+a.W141.Ovr+a.W149.Ovr+a.W157.Ovr+a.W165.Ovr+a.W174.Ovr+a.W184.Ovr+a.W197.Ovr+a.W285.Ovr)/10)
}
    //end


}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
