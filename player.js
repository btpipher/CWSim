var totalplayers = 1;



allp = [
  //Penn State
  p1 = new Player("Jesse Evans",125,5,5,4,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W125",2),
  p2 = new Player("Michael Evans",133,5,7,5,6,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W133",2),
  p3 = new Player("Frank Molachek",141,9,8,8,8,9,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W141",3),
  p4 = new Player("Beau Vance",149,5,5,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W149",3),
  p5 = new Player("Reid Molinaro",157,5,5,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W157",4),
  p6 = new Player("Carter Mitchel",165,7,7,6,8,8,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W165",2),
  p7 = new Player("Drewe Markley",174,7,9,9,9,9,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W174",4),
  p8 = new Player("Mitch Gates",184,6,8,5,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W184",3),
  p9 = new Player("Jonathan Escher",197,6,6,7,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W197",2),
  p10 = new Player("Bobby Weaver",285,5,5,4,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W285",2),
  p11 = new Player("JD Bailor",157,4,5,4,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W157",2),
  p12 = new Player("Dillon Rupe",174,7,5,5,7,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W174",1),
  p13 = new Player("Dalton Rupe",184,5,5,5,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W184",1),
  p14 = new Player("Rob Howard",149,5,5,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W149",2),
  p15 = new Player("Drake Bellamine",141,5,6,5,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),1,"W141",1),
  //Lehigh
  p16 = new Player("Evan Welt",125,5,5,4,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W125",3),
  p17 = new Player("Eric Milner",133,4,6,5,4,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W133",2),
  p18 = new Player("Brad Ofner",141,5,5,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W141",1),
  p19 = new Player("Nick Brewer",149,6,6,3,7,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W149",4),
  p20 = new Player("Trey Brooks",157,7,7,7,6,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W157",4),
  p21 = new Player("Chase Rule",165,6,6,4,6,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W165",2),
  p22 = new Player("Casey Shelton",174,6,6,5,6,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W174",2),
  p23 = new Player("Trenton Brasfield",184,5,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W184",3),
  p24 = new Player("Ennis Gaston",197,5,5,5,5,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W197",3),
  p25 = new Player("Seth Brunson",285,8,5,4,5,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W285",3),
  p26 = new Player("Davie Dillons",125,3,4,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W125",1),
  p27 = new Player("Laike Nesterz",125,4,3,4,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W125",2),
  p28 = new Player("Leonard Altman",149,5,5,3,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W149",1),
  p29 = new Player("Jessie Reid",157,5,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W157",2),
  p30 = new Player("Jensen Piper",285,6,5,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),2,"W285",1),
  //LockHaven
  p31 = new Player("Markis DeLuca",125,6,10,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W125",1),
  p32 = new Player("Brad Palmer",133,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W133",3),
  p33 = new Player("Robby Palmer",141,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W141",3),
  p34 = new Player("Brandon Schunke",149,5,3,3,6,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W149",2),
  p35 = new Player("LA Newton",157,3,8,4,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W157",2),
  p36 = new Player("Cooper Hall",165,5,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W165",2),
  p37 = new Player("Bryce Simpson",174,5,4,7,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W174",3),
  p38 = new Player("Calvin Martin",184,4,7,4,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W184",1),
  p39 = new Player("Tyler Dennison",197,6,3,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W197",3),
  p40 = new Player("Dillon Long",285,5,5,4,6,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W285",2),
  p41 = new Player("Brody Mitchel",133,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W133",1),
  p42 = new Player("Johnny Sebastian",141,3,3,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W141",2),
  p43 = new Player("Seth Collie",174,4,3,4,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W174",2),
  p44 = new Player("Elvin Martin",174,4,4,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W174",1),
  p45 = new Player("Mark Namath",197,5,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),3,"W197",1),
  //Ohio State
  p46 = new Player("Mason Driver",125,5,9,6,7,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W125",2),
  p47 = new Player("Will Michaelson",133,7,5,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W133",1),
  p48 = new Player("David Maxwell",141,8,6,5,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W141",3),
  p49 = new Player("Rex Coats",149,6,9,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W149",1),
  p50 = new Player("Easton Lee",157,4,5,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W157",3),
  p51 = new Player("Nathan Neilson",165,6,6,3,6,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W165",4),
  p52 = new Player("Pikal Haney",174,5,5,4,3,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W174",3),
  p53 = new Player("Ashton Downey",184,8,5,5,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W184",2),
  p54 = new Player("Mitchel Ericson",197,5,5,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W197",4),
  p55 = new Player("Rick Stout",285,5,6,4,4,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W285",3),
  p56 = new Player("AJ Pletcher",285,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W285",1),
  p57 = new Player("Sam Edsel",165,5,5,4,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W165",1),
  p58 = new Player("Carson Davis",197,4,6,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W197",2),
  p59 = new Player("Corey Dillon",141,5,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W141",1),
  p60 = new Player("Ian Escher",174,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),4,"W174",2),
  //Iowa
  p61 = new Player("Grant DeRasa",125,7,13,6,5,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W125",4),
  p62 = new Player("Gunnar Rubble",133,7,9,5,5,8,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W133",3),
  p63 = new Player("Elias Voit",141,5,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W141",1),
  p64 = new Player("Travis Mason",149,6,5,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W149",2),
  p65 = new Player("Braxton Smith",157,6,7,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W157",2),
  p66 = new Player("Asher Lee",165,11,9,5,7,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W165",2),
  p67 = new Player("Davis Lozano",174,6,8,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W174",3),
  p68 = new Player("John Jensen",184,6,5,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W184",4),
  p69 = new Player("Francis Hawking",197,6,6,4,6,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W197",2),
  p70 = new Player("Casius Martin",285,8,6,6,8,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W285",1),
  p71 = new Player("Alex Stevens",125,7,7,7,5,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W125",1),
  p72 = new Player("Andrew Panish",133,5,5,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W133",1),
  p73 = new Player("Keni Panish",149,3,4,5,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W149",1),
  p74 = new Player("Tanner Mercado",174,5,5,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W174",2),
  p75 = new Player("Charlie Davis",184,5,5,5,8,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),5,"W184",1),
  //Iowa State
  p76 = new Player("Mark Elis",125,5,5,5,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W125",4),
  p77 = new Player("Nate Jackson",133,5,5,5,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W133",1),
  p78 = new Player("Wyatt Yarnell",141,6,6,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W141",1),
  p79 = new Player("Jace Logan",149,5,4,8,8,8,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W149",1),
  p80 = new Player("Luke Wilson",157,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W157",2),
  p81 = new Player("Paul Brady",165,4,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W165",4),
  p82 = new Player("Steven Orndorff",174,3,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W174",2),
  p83 = new Player("Travis Gillenwater",184,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W184",2),
  p84 = new Player("Dillon Beard",197,5,5,5,5,8,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W197",3),
  p85 = new Player("Dayton Amos",285,4,4,2,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W285",1),
  p86 = new Player("Dawson Martinez",125,4,5,4,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W125",1),
  p87 = new Player("Tyler Reed",165,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W165",3),
  p88 = new Player("Shakir Stevens",165,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W165",2),
  p89 = new Player("Adam Lynch",184,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W184",1),
  p90 = new Player("Braxton Sucher",197,3,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),6,"W197",1),
  //Ohio
  p91 = new Player("Chadwick Rupple",125,3,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W125",1),
  p92 = new Player("Delon Geisler",133,4,6,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W133",1),
  p93 = new Player("Todd Sweeny",141,4,4,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W141",3),
  p94 = new Player("Martin Scarbourough",149,3,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W149",2),
  p95 = new Player("Zeb Carson",157,5,5,5,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W157",4),
  p96 = new Player("David Trainor",165,4,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W165",3),
  p97 = new Player("Maxx Perrin",174,5,5,4,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W174",4),
  p98 = new Player("Randal Portt",184,5,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W184",2),
  p99 = new Player("Otto Cierra",197,6,6,4,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W197",3),
  p100 = new Player("Jakobe Jonshoy",285,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W285",1),
  p101 = new Player("Levi Pletcher",141,3,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W141",2),
  p102 = new Player("Jarod Pletcher",157,4,5,4,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W157",1),
  p103 = new Player("Bifford Starotchi",165,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W165",1),
  p104 = new Player("Crawdy Fatzinger",174,4,6,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W174",2),
  p105 = new Player("Bradley Duncan",197,3,5,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),7,"W197",1),
  //Pittsburgh
  p106 = new Player("Duncan McCartney",125,3,3,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W125",3),
  p107 = new Player("Drew Sandoval",133,5,7,5,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W133",1),
  p108 = new Player("Cody Schuman",141,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W141",2),
  p109 = new Player("Matt Prater",149,5,5,5,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W149",4),
  p110 = new Player("Rahim Moore",157,5,8,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W157",4),
  p111 = new Player("Kellin Dinmore",165,4,4,2,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W165",3),
  p112 = new Player("Hunter Mattney",174,4,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W174",1),
  p113 = new Player("Dan Mitchell",184,3,4,3,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W184",2),
  p114 = new Player("Lukas Anderson",197,4,6,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W197",2),
  p115 = new Player("Shane Odum",285,6,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W285",4),
  p116 = new Player("Clay Switzer",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W125",2),
  p117 = new Player("Walter Church",149,4,6,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W149",1),
  p118 = new Player("Adler Hotchkiss",157,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W157",1),
  p119 = new Player("Mike Crawford",165,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W165",2),
  p120 = new Player("Tyler Coats",285,5,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),8,"W285",1),
  //Cornell
  p121 = new Player("Elijah Axler",125,7,6,6,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W125",4),
  p122 = new Player("Devin Smith",133,6,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W133",4),
  p123 = new Player("Trevor Drake",141,8,12,6,8,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W141",2),
  p124 = new Player("Nelson Gore",149,3,3,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W149",1),
  p125 = new Player("Tell Plymale",157,3,6,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W157",1),
  p126 = new Player("Darrel Hawk",165,3,3,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W165",2),
  p127 = new Player("Mike McCarthey",174,3,3,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W174",2),
  p128 = new Player("Samuel Rivera",184,9,6,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W184",3),
  p129 = new Player("River Wattson",197,6,6,8,8,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W197",4),
  p130 = new Player("Collin Amerson",285,3,3,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W285",3),
  p131 = new Player("Maxwell Tolley",125,3,3,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W125",1),
  p132 = new Player("Zevir Zanzari",133,3,5,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W133",3),
  p133 = new Player("Jesse Houdasel",184,4,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W184",1),
  p134 = new Player("Konnor Hoffschnider",197,4,6,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W197",1),
  p135 = new Player("Randy Nevills",285,3,3,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),9,"W285",2),
  //North Carolina
  p136 = new Player("Milton Lewis",125,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W125",2),
  p137 = new Player("Marvin Dean",133,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W133",2),
  p138 = new Player("Creighton Teske",141,4,4,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W141",3),
  p139 = new Player("Lucas Lee",149,4,3,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W149",4),
  p140 = new Player("Colby Reinks",157,4,6,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W157",3),
  p141 = new Player("Dagan Ness",165,5,5,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W165",3),
  p142 = new Player("Rockly Newton",174,7,3,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W174",1),
  p143 = new Player("Grey Burton",184,7,7,4,4,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W184",4),
  p144 = new Player("Isacc White",197,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W197",1),
  p145 = new Player("Steven Stevens",285,4,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W285",1),
  p146 = new Player("Jamie Lannister",125,4,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W125",2),
  p147 = new Player("Cory Starky",125,3,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W125",1),
  p148 = new Player("Gerald Rivenson",149,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W149",2),
  p149 = new Player("Reese Traxler",174,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W174",2),
  p150 = new Player("Joseph Blumer",285,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),10,"W285",2),
  //NC State
  p151 = new Player("Micha Wilson",125,3,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W125",2),
  p152 = new Player("Brandon Lewis",133,6,11,6,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W133",1),
  p153 = new Player("Brandon Reese",141,3,5,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W141",3),
  p154 = new Player("Andrew Scatlinger",149,3,5,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W149",2),
  p155 = new Player("Andy Day",157,4,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W157",2),
  p156 = new Player("Issaia Dillingham",165,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W165",1),
  p157 = new Player("Cameron Cappernick",174,5,4,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W174",4),
  p158 = new Player("Dayton Scott",184,3,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W184",3),
  p159 = new Player("Chriss Deagin",197,3,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W197",3),
  p160 = new Player("Topher Graice",285,5,5,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W285",1),
  p161 = new Player("Ashton Hyde",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W125",2),
  p162 = new Player("Sam Malone",133,5,5,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W133",3),
  p163 = new Player("Fredrick Darmstam",149,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W149",1),
  p164 = new Player("Peter Dinkmire",184,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W184",1),
  p165 = new Player("Michael Mukawitz",197,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),11,"W197",3),
  //Arizona State
  p166 = new Player("Michael Martinez",125,4,5,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W125",1),
  p167 = new Player("Taylor Neilson",133,3,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W133",2),
  p168 = new Player("Michael Martinez",141,3,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W141",2),
  p169 = new Player("Dominic Serao",149,7,5,5,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W149",4),
  p170 = new Player("Raymon Lewis",157,6,6,6,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W157",1),
  p171 = new Player("JD Altman",165,8,7,4,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W165",4),
  p172 = new Player("Antonio Gomez",174,7,8,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W174",4),
  p173 = new Player("Romano Gomez",184,10,12,4,5,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W184",4),
  p174 = new Player("Kyle Kurella",197,9,6,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W197",4),
  p175 = new Player("Stollin Novengrad",285,7,7,5,7,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W285",4),
  p176 = new Player("Dylan Woods",149,5,5,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W149",3),
  p177 = new Player("Patrick Ellison",174,4,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W174",1),
  p178 = new Player("Keith Danzer",184,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W184",2),
  p179 = new Player("Joey Silva",184,4,4,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W184",1),
  p180 = new Player("Warby Coltonson",285,6,8,5,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),12,"W285",1),
  //Stanford
  p181 = new Player("Devin Lee",125,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W125",4),
  p182 = new Player("Joel Baxter",133,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W133",2),
  p183 = new Player("Cyrus Malekmadani",141,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W141",2),
  p184 = new Player("Ellis Ford",149,4,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W149",1),
  p185 = new Player("Creed Atwater",157,3,4,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W157",3),
  p186 = new Player("Mike Goldstein",165,3,3,3,5,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W165",1),
  p187 = new Player("Reid Hubble",174,3,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W174",4),
  p188 = new Player("Jacob Smith",184,3,4,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W184",2),
  p189 = new Player("Travis Nordstrum",197,6,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W197",4),
  p190 = new Player("Will Bisono",285,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W285",3),
  p191 = new Player("Bobby Martinez",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W125",3),
  p192 = new Player("Alex Maslow",133,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W133",3),
  p193 = new Player("Drewe Sandoval",141,3,4,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W141",2),
  p194 = new Player("Ricardo Gallegos",157,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W157",1),
  p195 = new Player("Curtis Flores",174,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),13,"W174",1),
  //Illinois
  p196 = new Player("Gunther Atler",125,3,5,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W125",3),
  p197 = new Player("Bill Davis",133,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W133",4),
  p198 = new Player("Dillon Carter",141,5,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W141",2),
  p199 = new Player("Gunnar Latrobe",149,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W149",1),
  p200 = new Player("Seth Green",157,3,5,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W157",1),
  p201 = new Player("Marty Pichinini",165,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W165",3),
  p202 = new Player("Brody Curtis",174,3,3,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W174",1),
  p203 = new Player("Robby Smith",184,5,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W184",2),
  p204 = new Player("Darryl Philbin",197,4,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W197",3),
  p205 = new Player("Nate Wilson",285,4,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W285",2),
  p206 = new Player("Smither Gill",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W125",2),
  p207 = new Player("Jason Extine",133,2,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W133",3),
  p208 = new Player("Marco Carillo",141,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W141",3),
  p209 = new Player("Josh Finestein",165,3,2,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W165",3),
  p210 = new Player("Luke Finestein",197,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),14,"W197",1),
  //Chattanooga
  p211 = new Player("Cliff Chambers",125,3,6,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W125",3),
  p212 = new Player("Mike Watkins",133,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W133",1),
  p213 = new Player("Ritchie Carpenter",141,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W141",2),
  p214 = new Player("James Bearclauv",149,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W149",2),
  p215 = new Player("Jessie Reed",157,3,5,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W157",1),
  p216 = new Player("Joshua Davis",165,3,4,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W165",4),
  p217 = new Player("Sam Komives",174,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W174",3),
  p218 = new Player("Mark Blanch",184,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W184",1),
  p219 = new Player("Lucas Schwartz",197,4,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W197",3),
  p220 = new Player("Earl Douglas",285,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W285",3),
  p221 = new Player("Zeb Eller",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W125",1),
  p222 = new Player("Mitch Simmianer",133,3,2,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W133",1),
  p223 = new Player("Sam Malone",141,3,3,3,3,2,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W141",3),
  p224 = new Player("Cliff Chambers",165,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W165",1),
  p225 = new Player("Bob Hanks",197,3,3,3,3,2,0,0,0,getRandomInt(30,80),getRandomInt(30,80),15,"W197",3),
  //Army
  p226 = new Player("Devan Knee",125,6,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W125",1),
  p227 = new Player("Shannon Walters",133,6,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W133",3),
  p228 = new Player("Dillon Hill",141,5,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W141",4),
  p229 = new Player("Tristan Littlejohn",149,3,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W149",1),
  p230 = new Player("Drewe Lee",157,5,3,3,3,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W157",4),
  p231 = new Player("Mike Hinton",165,4,3,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W165",4),
  p232 = new Player("Caleb Shelby",174,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W174",2),
  p233 = new Player("Mason Reid",184,4,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W184",3),
  p234 = new Player("Benjamin Watson",197,6,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W197",2),
  p235 = new Player("Ashur Friedman",285,4,3,3,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W285",2),
  p236 = new Player("Davis Lionel",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W125",1),
  p237 = new Player("Lonnie Stroud",141,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W141",2),
  p238 = new Player("Ty Kendal",149,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W149",2),
  p239 = new Player("Max Keeble",174,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W174",1),
  p240 = new Player("Rich Travis",174,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),16,"W174",3),
  //Buffalo
  p241 = new Player("Scott Lee",125,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W125",4),
  p242 = new Player("Walter Lee",133,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W133",3),
  p243 = new Player("Clint Lillard",141,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W141",2),
  p244 = new Player("Marco Clay",149,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W149",1),
  p245 = new Player("Calvin Lee",157,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W157",2),
  p246 = new Player("Samuel Ericson",165,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W165",1),
  p247 = new Player("Drake Martinez",174,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W174",2),
  p248 = new Player("Ried Gates",184,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W184",4),
  p249 = new Player("Dante Williams",197,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W197",4),
  p250 = new Player("Jason Polson",285,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W285",3),
  p251 = new Player("Art Peloni",141,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W141",3),
  p252 = new Player("Carson Ringer",174,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W174",2),
  p253 = new Player("Randy Smith",184,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W184",4),
  p254 = new Player("Canan Trapper",285,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W285",2),
  p255 = new Player("Newt Jackson",285,2,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),17,"W285",3),
  //Navy
  p256 = new Player("JJ Miraz",125,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W125",1),
  p257 = new Player("Shakor Jordan",133,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W133",4),
  p258 = new Player("Gannus Serianio",141,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W141",4),
  p259 = new Player("Luke Reeds",149,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W149",4),
  p260 = new Player("Mark Smith",157,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W157",4),
  p261 = new Player("Rusty Grizmald",165,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W165",2),
  p262 = new Player("Kendul Walters",174,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W174",2),
  p263 = new Player("Travie McCoy",184,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W184",1),
  p264 = new Player("Jesse Coy",197,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W197",3),
  p265 = new Player("Trenton Harris",285,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W285",1),
  p266 = new Player("Frank Miraz",133,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W133",1),
  p267 = new Player("Colt Harris",165,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W165",2),
  p268 = new Player("Talon Martin",174,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W174",1),
  p269 = new Player("Hayden Pachelo",174,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W174",1),
  p270 = new Player("Lenny Marsdale",184,3,2,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),18,"W184",1),
  //Air Force
  p271 = new Player("Jason Markus",125,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W125",2),
  p272 = new Player("CJ Stroker",133,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W133",3),
  p273 = new Player("Doug Harris",141,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W141",3),
  p274 = new Player("Eddie Altman",149,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W149",1),
  p275 = new Player("Jim Jensen",157,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W157",1),
  p276 = new Player("Jake Kinser",165,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W165",4),
  p277 = new Player("Adam Stewart",174,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W174",4),
  p278 = new Player("Abe Lingenfelter",184,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W184",3),
  p279 = new Player("Cole Beazley",197,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W197",3),
  p280 = new Player("Gavin Holt",285,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W285",3),
  p281 = new Player("Luke Stensen",125,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W125",1),
  p282 = new Player("Marty McDavid",157,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W157",1),
  p283 = new Player("Spencer Taylor",184,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W184",2),
  p284 = new Player("Owen Taylor",197,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W197",2),
  p285 = new Player("Beau Nimes",285,2,3,2,2,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),19,"W285",2),
  //Drexel
  p286 = new Player("Alex Teasdale",125,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W125",4),
  p287 = new Player("Stanley Yelnats",133,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W133",1),
  p288 = new Player("Stewart Mason",141,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W141",1),
  p289 = new Player("Daniel Markson",149,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W149",4),
  p290 = new Player("Merle Travis",157,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W157",3),
  p291 = new Player("Kenny Yanrnel",165,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W165",2),
  p292 = new Player("Trent Olson",174,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W174",3),
  p293 = new Player("Jordan Williams",184,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W184",2),
  p294 = new Player("Kane Fredricks",197,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W197",4),
  p295 = new Player("Eddie Smith",285,5,4,3,6,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W285",1),
  p296 = new Player("Jamarcus Joiner",133,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W133",2),
  p297 = new Player("Peter Lewis",133,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W133",2),
  p298 = new Player("Marcus Amerson",165,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W165",2),
  p299 = new Player("Bruce Carson",174,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W174",2),
  p300 = new Player("Matt Baxter",184,2,2,2,2,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),20,"W184",2),
  //Oklahoma
  p301 = new Player("Jim Manning",125,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W125",3),
  p302 = new Player("Eric Wilson",133,5,6,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W133",2),
  p303 = new Player("Joe Dansa",141,9,7,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W141",1),
  p304 = new Player("Azure Eller",149,4,8,3,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W149",4),
  p305 = new Player("Kieth Beck",157,6,6,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W157",3),
  p306 = new Player("James Mack",165,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W165",1),
  p307 = new Player("Paul Puzlunzy",174,4,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W174",2),
  p308 = new Player("Frank Gallegos",184,5,5,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W184",3),
  p309 = new Player("Michael Dance",197,8,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W197",3),
  p310 = new Player("Gill Atwater",285,7,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W285",4),
  p311 = new Player("Lark Mason",125,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W125",1),
  p312 = new Player("Eric Duval",149,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W149",3),
  p313 = new Player("Sam Gallagher",165,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W165",2),
  p314 = new Player("Willy Theos",285,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W285",1),
  p315 = new Player("TJ Watson",285,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),21,"W285",1),
  //Oklahoma state
  p316 = new Player("Markus Chriss",125,8,7,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W125",3),
  p317 = new Player("Philip Phillips",133,7,7,7,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W133",2),
  p318 = new Player("Kevin Zieter",141,8,7,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W141",4),
  p319 = new Player("Dillon Williams",149,8,7,5,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W149",2),
  p320 = new Player("Seth Miller",157,8,7,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W157",3),
  p321 = new Player("Jaden Neal",165,8,7,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W165",4),
  p322 = new Player("Anthony Davis",174,8,8,5,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W174",2),
  p323 = new Player("Ron McGavin",184,9,7,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W184",3),
  p324 = new Player("Christopher Greer",197,8,7,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W197",2),
  p325 = new Player("Damon Wilson",285,8,6,4,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W285",1),
  p326 = new Player("Stephen Lee",125,6,5,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W125",1),
  p327 = new Player("Drake Lee",133,6,5,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W133",1),
  p328 = new Player("Max Charles",157,6,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W157",2),
  p329 = new Player("Luke Tenner",174,6,6,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W174",1),
  p330 = new Player("John Riley",197,8,5,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),22,"W197",1),
  //Michigan
  p331 = new Player("Lino Ortiz",125,5,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W125",2),
  p332 = new Player("Tito Oliver",133,6,8,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W133",4),
  p333 = new Player("Mark Johnson",141,6,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W141",1),
  p334 = new Player("Peter Lewis",149,6,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W149",3),
  p335 = new Player("Mike Deagun",157,6,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W157",2),
  p336 = new Player("Steven Vrabel",165,6,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W165",4),
  p337 = new Player("Greg Allen",174,9,10,6,9,9,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W174",3),
  p338 = new Player("Hunter Mattox",184,5,5,5,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W184",1),
  p339 = new Player("Mitchel Russo",197,6,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W197",2),
  p340 = new Player("Chris Lee",285,9,8,7,7,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W285",2),
  p341 = new Player("Lyle Drake",125,5,5,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W125",3),
  p342 = new Player("Martin Wright",133,5,5,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W133",3),
  p343 = new Player("Perin Mattin",141,5,5,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W141",2),
  p344 = new Player("Carter Ortiz",174,7,5,3,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W174",1),
  p345 = new Player("Frank Willson",184,5,5,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),23,"W184",3),
  //Northern Iowa
  p346 = new Player("Matt Barker",125,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W125",1),
  p347 = new Player("Woody Smith",133,5,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W133",1),
  p348 = new Player("Marty Bush",141,5,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W141",2),
  p349 = new Player("Norman Walace",149,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W149",4),
  p350 = new Player("Robert Jensen",157,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W157",3),
  p351 = new Player("Lukas Watt",165,5,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W165",3),
  p352 = new Player("Mike Crane",174,5,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W174",2),
  p353 = new Player("Niles Wilson",184,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W184",1),
  p354 = new Player("CLiff Davis",197,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W197",4),
  p355 = new Player("Marcus Maruca",285,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W285",3),
  p356 = new Player("Bill Waters",141,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W141",1),
  p357 = new Player("Brent Smith",149,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W149",1),
  p358 = new Player("William Drewe",157,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W157",1),
  p359 = new Player("MJ Asper",165,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W165",1),
  p360 = new Player("Brandon Milton",174,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),24,"W174",1),
  //Bucknell
  p361 = new Player("Skylar Marks",125,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W125",3),
  p362 = new Player("Jacob Swift",133,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W133",1),
  p363 = new Player("Nigel Mirotic",141,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W141",3),
  p364 = new Player("Cameron James",149,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W149",4),
  p365 = new Player("LeShawn James",157,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W157",4),
  p366 = new Player("Will Nash",165,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W165",2),
  p367 = new Player("Jessie James",174,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W174",3),
  p368 = new Player("Rob Zecher",184,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W184",1),
  p369 = new Player("Travis Willson",197,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W197",2),
  p370 = new Player("Reagan Voit",285,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W285",2),
  p371 = new Player("Keenan Howard",125,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W125",1),
  p372 = new Player("Sebastian Stern",133,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W133",2),
  p373 = new Player("Kai Bellmont",133,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W133",1),
  p374 = new Player("Sean Zecher",165,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W165",2),
  p375 = new Player("Carson Deller",184,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),25,"W184",1),
  //Virginia
  p376 = new Player("Frasher Stark",125,7,7,7,7,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W125",1),
  p377 = new Player("Daniel Mershaw",133,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W133",1),
  p378 = new Player("Ethan Lynch",141,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W141",2),
  p379 = new Player("Noah Perrni",149,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W149",4),
  p380 = new Player("Jayden Simpson",157,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W157",4),
  p381 = new Player("Jackson Reese",165,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W165",2),
  p382 = new Player("Gabriel Fergisun",174,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W174",2),
  p383 = new Player("Dylan Sandoval",184,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W184",4),
  p384 = new Player("Casey Christian",197,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W197",4),
  p385 = new Player("Dustin Taylor",285,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W285",4),
  p386 = new Player("Landon Ruth",125,3,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W125",1),
  p387 = new Player("Gavin Parsons",133,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W133",1),
  p388 = new Player("Ryan Saunders",149,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W149",2),
  p389 = new Player("Joseph Kelly",174,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W174",1),
  p390 = new Player("Ben Kelly",174,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),26,"W174",1),
  //Michigan State
  p391 = new Player("Kenny Smith",125,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W125",2),
  p392 = new Player("Shane Dawson",133,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W133",3),
  p393 = new Player("Kent Drimmer",141,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W141",3),
  p394 = new Player("Logan Schopp",149,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W149",4),
  p395 = new Player("Isaac Burnsmith",157,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W157",2),
  p396 = new Player("Andre Mallone",165,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W165",3),
  p397 = new Player("Liam Poulson",174,6,7,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W174",1),
  p398 = new Player("Matthew McCutcheon",184,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W184",1),
  p399 = new Player("Alexander Jameson",197,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W197",1),
  p400 = new Player("David Dake",285,5,4,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W285",4),
  p401 = new Player("Samuel Cranston",141,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W141",1),
  p402 = new Player("Mason Mclanahan",157,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W157",1),
  p403 = new Player("Elijah Etter",157,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W157",1),
  p404 = new Player("Tyler Etter",165,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W165",1),
  p405 = new Player("Chase Park",174,4,4,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),27,"W174",1),
  //Virginia Tech
  p406 = new Player("Aaron Carter",125,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W125",3),
  p407 = new Player("Owen Jackson",133,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W133",3),
  p408 = new Player("Nich Leary",141,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W141",4),
  p409 = new Player("Wyatt Yarnell",149,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W149",3),
  p410 = new Player("Jeramiah Cruz",157,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W157",4),
  p411 = new Player("Hunter Willis",165,6,7,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W165",2),
  p412 = new Player("Angel Smith",174,7,8,6,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W174",1),
  p413 = new Player("Brenden Zaddich",184,8,8,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W184",1),
  p414 = new Player("Blake Derringer",197,8,8,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W197",1),
  p415 = new Player("Connor Kuhn",285,6,6,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W285",2),
  p416 = new Player("Adrian Lopez",165,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W165",1),
  p417 = new Player("Justin Lopez",165,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W165",2),
  p418 = new Player("Jose Cardenas",174,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W174",2),
  p419 = new Player("Ian Marsteller",197,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W197",3),
  p420 = new Player("Colton Cecil",285,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),28,"W285",1),
  //West Virginia
  p421 = new Player("Karson Dillinger",125,6,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W125",2),
  p422 = new Player("Levi McCleoud",133,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W133",1),
  p423 = new Player("Custer Gladbach",141,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W141",3),
  p424 = new Player("Henry Piper",149,4,3,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W149",4),
  p425 = new Player("Eli Thrasher",157,4,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W157",1),
  p426 = new Player("Ayden Hunter",165,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W165",1),
  p427 = new Player("Dominic DeMaria",174,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W174",2),
  p428 = new Player("Kayden Milner",184,3,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W184",4),
  p429 = new Player("Jace Wyman",197,4,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W197",3),
  p430 = new Player("Bryan France",285,4,3,3,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W285",2),
  p431 = new Player("Ryder Martin",125,3,3,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W125",1),
  p432 = new Player("Riley Harrelson",141,3,3,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W141",1),
  p433 = new Player("Max Lefever",141,3,3,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W141",1),
  p434 = new Player("Nolan Thompson",184,3,3,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W184",1),
  p435 = new Player("Adam Tracy",197,3,3,3,3,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),29,"W197",1),
  //Indiana
  p436 = new Player("Kade Ward",125,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W125",4),
  p437 = new Player("Eli Moss",133,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W133",4),
  p438 = new Player("Alec Reed",141,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W141",1),
  p439 = new Player("Easton Meyers",149,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W149",3),
  p440 = new Player("Micha Pitt",157,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W157",3),
  p441 = new Player("Vincent Jordan",165,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W165",2),
  p442 = new Player("TJ Oliver",174,5,5,3,4,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W174",2),
  p443 = new Player("Trenton Palmer",184,6,7,4,5,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W184",4),
  p444 = new Player("Cooper Kupp",197,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W197",2),
  p445 = new Player("Jaxon Diggs",285,3,4,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W285",2),
  p446 = new Player("Kade Ward",125,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W125",1),
  p447 = new Player("Kelly Martin",141,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W141",1),
  p448 = new Player("Reese Humphries",157,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W157",1),
  p449 = new Player("Max Lincoln",174,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W174",1),
  p450 = new Player("Bradley Moore",197,3,3,3,3,3,0,0,0,getRandomInt(30,80),getRandomInt(30,80),30,"W197",1),
  //Nebraska
  p451 = new Player("Mikael Jerich",125,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W125",1),
  p452 = new Player("Pat Montoya",133,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W133",3),
  p453 = new Player("Paul Perkins",141,6,7,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W141",2),
  p454 = new Player("Derric Matrim",149,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W149",4),
  p455 = new Player("Phil Downey",157,6,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W157",1),
  p456 = new Player("Eric Seeley",165,8,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W165",2),
  p457 = new Player("Jarod Lewis",174,7,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W174",3),
  p458 = new Player("Kyle Pittrowski",184,8,7,4,6,6,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W184",4),
  p459 = new Player("Kerry Rudolph",197,8,8,8,8,8,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W197",3),
  p460 = new Player("Trey Mason",285,6,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W285",2),
  p461 = new Player("Chad Ellis",125,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W125",1),
  p462 = new Player("Braton Michaels",133,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W133",1),
  p463 = new Player("Tyler Fennish",149,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W149",1),
  p464 = new Player("Will DeBlazi",197,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W197",1),
  p465 = new Player("Joe Mitchel",197,4,4,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),31,"W197",1),
  //Missouri
  p466 = new Player("Ellis Newport",125,6,8,4,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W125",1),
  p467 = new Player("Brock Steadman",133,6,8,4,7,7,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W133",2),
  p468 = new Player("Portis Freeman",141,6,8,6,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W141",3),
  p469 = new Player("Zacharia Thomas",149,5,6,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W149",2),
  p470 = new Player("Dellis Kranson",157,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W157",4),
  p471 = new Player("Garret Hanson",165,5,5,4,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W165",2),
  p472 = new Player("Paul Hammond",174,6,6,5,6,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W174",2),
  p473 = new Player("Ray Kurtz",184,6,6,3,5,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W184",1),
  p474 = new Player("Will Bradley",197,5,6,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W197",1),
  p475 = new Player("Jasper Clausein",285,5,4,4,4,5,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W285",4),
  p476 = new Player("Mason Davies",125,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W125",1),
  p477 = new Player("Seth Latham",141,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W141",1),
  p478 = new Player("Grant Rider",165,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W165",1),
  p479 = new Player("Zeb Maroh",174,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W174",1),
  p480 = new Player("KJ Reider",285,4,4,4,4,4,0,0,0,getRandomInt(30,80),getRandomInt(30,80),32,"W285",1),
];


function Player(Name, Weight, Strength, Neutral, Top, Bot, Cardio, Win, Loss, Titles, Luck, Big, tid, Wid,Year, rostered, playerid) {
    this.Name = Name;
    this.Weight = Weight;
    this.sWin = Win;
    this.sLoss = Loss;
    this.Year = Year
    this.Strength = Strength;
    this.Neutral = Neutral;
    this.Top = Top;
    this.Bot = Bot;
    this.Cardio = Cardio;
    this.Titles = Titles;
    this.Luck = Luck;
    this.Big = Big;
    this.tid = tid;
    this.rostered = rostered;
    this.playerid = totalplayers;
    totalplayers += 1;
    this.Ovr = totalovr(this);
    this.Roll = 0
    this.Wid = Wid
    this.cWin = 0
    this.cLoss = 0
    this.NF = ""
    this.pFinish = [];
    this.Seed = ""
    this.Starter = "N"
    this.mHistory = []
    this.championships = []
    this.log3 = "n"
};


function totalovr(a) {
  return (a.Strength + a.Neutral + a.Top + a.Bot + a.Cardio)
};

function updateOvr(a) {
  a.Ovr = 0;
  a.Ovr = (a.Strength + a.Neutral + a.Top + a.Bot + a.Cardio)
}


function teamid(a,b) {
  if (a.tid == b.tid) {a.t = b}
};


function teamid(a) {
  if (a.tid == 1) {return t1}
  if (a.tid == 2) {return t2}
  if (a.tid == 3) {return t3}
  if (a.tid == 4) {return t4}
  if (a.tid == 5) {return t5}
  if (a.tid == 6) {return t6}
  if (a.tid == 7) {return t7}
  if (a.tid == 8) {return t8}
  if (a.tid == 9) {return t9}
  if (a.tid == 10) {return t10}
  if (a.tid == 11) {return t11}
  if (a.tid == 12) {return t12}
  if (a.tid == 13) {return t13}
  if (a.tid == 14) {return t14}
  if (a.tid == 15) {return t15}
  if (a.tid == 16) {return t16}
  if (a.tid == 17) {return t17}
  if (a.tid == 18) {return t18}
  if (a.tid == 19) {return t19}
  if (a.tid == 20) {return t20}
  if (a.tid == 21) {return t21}
  if (a.tid == 22) {return t22}
  if (a.tid == 23) {return t23}
  if (a.tid == 24) {return t24}
  if (a.tid == 25) {return t25}
  if (a.tid == 26) {return t26}
  if (a.tid == 27) {return t27}
  if (a.tid == 28) {return t28}
  if (a.tid == 29) {return t29}
  if (a.tid == 30) {return t30}
  if (a.tid == 31) {return t31}
  if (a.tid == 32) {return t32}
};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
