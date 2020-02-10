allAmerican = [];
ncaaChamp = [];
//tourney seeded


function newT3(a) {
  let z = a[0];let b = a[1];let c = a[2];let d = a[3];let e = a[4];let f = a[5];let g = a[6];let h = a[7];let j = a[8];let k = a[9];let l = a[10];let m = a[11];let n = a[12];let o = a[13];let p = a[14];let q = a[15];

  var advancea = [];
 var advanceb = [];
 var advancee = [];
 var advancef = [];
 var advancej = [];
 var advancek = [];
 var advancen = [];
 var advanceo = [];
 var q1wb = [];
 var q1 = [];
 var q2wb = [];
 var q2 = [];
 var q3wb = [];
 var q3 = [];
 var q4wb = [];
 var q4 = [];
 var ad1;
 var ad2;
 var ad3;
 var ad4;
 var adx1;
 var adx2;
 var semi1;
 var semi2;
 var third1;
 var third2;
 var third;
 var fith;
 var finals;
//quarter 1

 if (scorePoint(z,q) == z) {
    advancea = [z,q];
    ;} else {
      advancea = [q,z];
   };
   if (scorePoint(h,j) == h) {
      advanceb = [h,j];
    } else {
        advanceb = [j,h];
     };

     if (scorePoint(advancea[1],advanceb[1]) == advancea[1]) {
       q1wb = [advancea[1],advanceb[1]];
     } else {
         q1wb = [advanceb[1],advancea[1]];
       };
       if (scorePoint(advancea[0],advanceb[0]) == advancea[0]) {
         q1 = [advancea[0],advanceb[0]];
       } else {
           q1 = [advanceb[0],advancea[0]];
         };
         //quarter 2

          if (scorePoint(e,m) == e) {
            advancee = [e,m];
          } else {
              advancee = [m,e];
           };
           if (scorePoint(d,n) == d) {
              advancef = [d,n];
            } else {
                advancef = [n,d];
             };
             if (scorePoint(advancee[1],advancef[1]) == advancee[1]) {
               q2wb = [advancee[1],advancef[1]];
             } else {
                 q2wb = [advancef[1],advancee[1]];
               };
               if (scorePoint(advancee[0],advancef[0]) == advancee[0]) {
                 q2 = [advancee[0],advancef[0]];
               } else {
                   q2 = [advancef[0],advancee[0]];
                 };
                 //quarter 3

                        if (scorePoint(c,o) == c) {
                           advancej = [c,o];
                         } else {
                             advancej = [o,c];
                          };
                          if (scorePoint(f,l) == f) {
                             advancek = [f,l];
                           } else {
                               advancek = [l,f];
                            };

                            if (scorePoint(advancej[1],advancek[1]) == advancej[1]) {
                              q3wb = [advancej[1],advancek[1]];
                            } else {
                                q3wb = [advancek[1],advancej[1]];
                              };
                              if (scorePoint(advancej[0],advancek[0]) == advancej[0]) {
                                q3 = [advancej[0],advancek[0]];
                              } else {
                                  q3 = [advancek[0],advancej[0]];
                                };
                                //quarter 4

                                 if (scorePoint(g,k) == g) {
                                    advancen = [g,k];
                                  } else {
                                      advancen = [k,g];
                                   };
                                   if (scorePoint(b,p) == b) {
                                      advanceo = [b,p];
                                    } else {
                                        advanceo = [p,b];
                                     };

                                     if (scorePoint(advancen[1],advanceo[1]) == advancen[1]) {
                                       q4wb = [advancen[1],advanceo[1]];
                                     } else {
                                         q4wb = [advanceo[1],advancen[1]];
                                       };
                                       if (scorePoint(advancen[0],advanceo[0]) == advancen[0]) {
                                         q4 = [advancen[0],advanceo[0]];
                                       } else {
                                           q4 = [advanceo[0],advancen[0]];
                                         };
                                         //Wrestle Backs Round 2

                                         if (scorePoint(q1wb[0],q4[1]) == q1wb[0]) {
                                            ad1 = [q1wb[0],q4[1]];
                                          } else {
                                              ad1 = [q4[1],q1wb[0]];
                                           };
                                           if (scorePoint(q2wb[0],q3[1]) == q2wb[0]) {
                                              ad2 = [q2wb[0],q3[1]];
                                            } else {
                                                ad2 = [q3[1],q2wb[0]];
                                             };
                                             if (scorePoint(q3wb[0],q2[1]) == q3wb[0]) {
                                                ad3 = [q3wb[0],q2[1]];
                                              } else {
                                                  ad3 = [q2[1],q3wb[0]];
                                               };
                                               if (scorePoint(q4wb[0],q1[1]) == q4wb[0]) {
                                                  ad4 = [q4wb[0],q1[1]];
                                                } else {
                                                    ad4 = [q1[1],q4wb[0]];
                                                 };
                                                 //Blood Round

                                                 if (scorePoint(ad4[0],ad3[0]) == ad4[0]) {
                                                    adx1 = [ad4[0],ad3[0]];
                                                  } else {
                                                      adx1 = [ad3[0],ad4[0]];
                                                   };
                                                   if (scorePoint(ad1[0],ad2[0]) == ad1[0]) {
                                                      adx2 = [ad1[0],ad2[0]];
                                                    } else {
                                                        adx2 = [ad2[0],ad1[0]];
                                                     };
                                                     //Semi finals

                                                     if (scorePoint(q1[0],q2[0]) == q1[0]) {
                                                        semi1 = [q1[0],q2[0]];
                                                      } else {
                                                          semi1 = [q2[0],q1[0]];
                                                       };
                                                       if (scorePoint(q4[0],q3[0]) == q4[0]) {
                                                          semi2 = [q4[0],q3[0]];
                                                        } else {
                                                            semi2 = [q3[0],q4[0]];
                                                         };
                                                         //Semi Consolation

                                                         if (scorePoint(adx1[0],semi2[1]) == adx1[0]) {
                                                            third1 = [adx1[0],semi2[1]];
                                                          } else {
                                                              third1 = [semi2[1],adx1[0]];
                                                           };
                                                           if (scorePoint(adx2[0],semi1[1]) == adx2[0]) {
                                                              third2 = [adx2[0],semi1[1]];
                                                            } else {
                                                                third2 = [semi1[1],adx2[0]];
                                                             };
                                                             //5th and 6th

                                                             if (scorePoint(third1[1],third2[1]) == third1[1]) {
                                                                fith = [third1[1],third2[1]];
                                                              } else {
                                                                  fith = [third2[1],third1[1]];
                                                               };
                                                             //Third and 4th

                                                             if (scorePoint(third1[0],third2[0]) == third1[0]) {
                                                                third = [third1[0],third2[0]];
                                                              } else {
                                                                  third = [third2[0],third1[0]];
                                                               };
                                                               //finals

                                                               if (scorePoint(semi1[0],semi2[0]) == semi1[0]) {
                                                                  finals = [semi1[0],semi2[0]];
                                                                } else {
                                                                    finals = [semi2[0],semi1[0]];
                                                                 };

                                                                 teamid(finals[0]).Tpoints += 16
                                                                 teamid(finals[1]).Tpoints += 12
                                                                 teamid(third[0]).Tpoints += 9
                                                                 teamid(third[1]).Tpoints += 7
                                                                 teamid(fith[0]).Tpoints += 5
                                                                 teamid(fith[1]).Tpoints += 3



                                                                 return finals[0]




};

//National Tournament

function newT4(a) {
  let z = a[0];let b = a[1];let c = a[2];let d = a[3];let e = a[4];let f = a[5];let g = a[6];let h = a[7];let j = a[8];let k = a[9];let l = a[10];let m = a[11];let n = a[12];let o = a[13];let p = a[14];let q = a[15];
  a[0].Seed = "1";a[1].Seed = "2";a[2].Seed = "3";a[3].Seed = "4";a[4].Seed = "5";a[5].Seed = "6";a[6].Seed = "7";a[7].Seed = "8";a[8].Seed = "9";a[9].Seed = "10";a[10].Seed = "11";a[11].Seed = "12";a[12].Seed = "13";a[13].Seed = "14";a[14].Seed = "15";a[15].Seed = "16";
  var advancea = [];
 var advanceb = [];
 var advancee = [];
 var advancef = [];
 var advancej = [];
 var advancek = [];
 var advancen = [];
 var advanceo = [];
 var q1wb = [];
 var q1 = [];
 var q2wb = [];
 var q2 = [];
 var q3wb = [];
 var q3 = [];
 var q4wb = [];
 var q4 = [];
 var ad1;
 var ad2;
 var ad3;
 var ad4;
 var adx1;
 var adx2;
 var semi1;
 var semi2;
 var third1;
 var third2;
 var third;
 var fith;
 var finals;
//quarter 1
 if (scorePoint(z,q) == z) {
    advancea = [z,q];
document.getElementById("p1").innerHTML = "|"+z.Seed+"|"+z.Name+"|"+teamid(z).abr+"|"+zy;
document.getElementById("p2").innerHTML = "|"+q.Seed+"|"+q.Name+"|"+teamid(q).abr+"|"+zz;

    ;} else {
      advancea = [q,z];
      document.getElementById("p1").innerHTML = "|"+z.Seed+"|"+z.Name+"|"+teamid(z).abr+"|"+zy;
      document.getElementById("p2").innerHTML = "|"+q.Seed+"|"+q.Name+"|"+teamid(q).abr+"|"+zz;

   };
   if (scorePoint(h,j) == h) {
      advanceb = [h,j];
      document.getElementById("p3").innerHTML = "|"+h.Seed+"|"+h.Name+"|"+teamid(h).abr+"|"+zy;
      document.getElementById("p4").innerHTML = "|"+j.Seed+"|"+j.Name+"|"+teamid(j).abr+"|"+zz;

    } else {
        advanceb = [j,h];
        document.getElementById("p3").innerHTML = "|"+h.Seed+"|"+h.Name+"|"+teamid(h).abr+"|"+zy;
        document.getElementById("p4").innerHTML = "|"+j.Seed+"|"+j.Name+"|"+teamid(j).abr+"|"+zz;

     };

     if (scorePoint(advancea[1],advanceb[1]) == advancea[1]) {
       q1wb = [advancea[1],advanceb[1]];
       document.getElementById("p17").innerHTML = "|"+advancea[1].Seed+"|"+advancea[1].Name+"|"+teamid(advancea[1]).abr+"|"+zy;
       document.getElementById("p18").innerHTML = "|"+advanceb[1].Seed+"|"+advanceb[1].Name+"|"+teamid(advanceb[1]).abr+"|"+zz;

     } else {
         q1wb = [advanceb[1],advancea[1]];
         document.getElementById("p17").innerHTML = "|"+advancea[1].Seed+"|"+advancea[1].Name+"|"+teamid(advancea[1]).abr+"|"+zy;
         document.getElementById("p18").innerHTML = "|"+advanceb[1].Seed+"|"+advanceb[1].Name+"|"+teamid(advanceb[1]).abr+"|"+zz;

       };
       if (scorePoint(advancea[0],advanceb[0]) == advancea[0]) {
         q1 = [advancea[0],advanceb[0]];
         document.getElementById("p25").innerHTML = "|"+advancea[0].Seed+"|"+advancea[0].Name+"|"+teamid(advancea[0]).abr+"|"+zy;
         document.getElementById("p26").innerHTML = "|"+advanceb[0].Seed+"|"+advanceb[0].Name+"|"+teamid(advanceb[0]).abr+"|"+zz;

       } else {
           q1 = [advanceb[0],advancea[0]];
           document.getElementById("p25").innerHTML = "|"+advancea[0].Seed+"|"+advancea[0].Name+"|"+teamid(advancea[0]).abr+"|"+zy;
           document.getElementById("p26").innerHTML = "|"+advanceb[0].Seed+"|"+advanceb[0].Name+"|"+teamid(advanceb[0]).abr+"|"+zz;

         };
         //quarter 2
          if (scorePoint(e,m) == e) {
            advancee = [e,m];
            document.getElementById("p5").innerHTML = "|"+m.Seed+"|"+m.Name+"|"+teamid(m).abr+"|"+zz;
            document.getElementById("p6").innerHTML = "|"+e.Seed+"|"+e.Name+"|"+teamid(e).abr+"|"+zy;

          } else {
              advancee = [m,e];
              document.getElementById("p5").innerHTML = "|"+m.Seed+"|"+m.Name+"|"+teamid(m).abr+"|"+zz;
              document.getElementById("p6").innerHTML = "|"+e.Seed+"|"+e.Name+"|"+teamid(e).abr+"|"+zy;

           };
           if (scorePoint(d,n) == d) {
              advancef = [d,n];
              document.getElementById("p7").innerHTML = "|"+n.Seed+"|"+n.Name+"|"+teamid(n).abr+"|"+zz;
              document.getElementById("p8").innerHTML = "|"+d.Seed+"|"+d.Name+"|"+teamid(d).abr+"|"+zy;

            } else {
                advancef = [n,d];
                document.getElementById("p7").innerHTML = "|"+n.Seed+"|"+n.Name+"|"+teamid(n).abr+"|"+zz;
                document.getElementById("p8").innerHTML = "|"+d.Seed+"|"+d.Name+"|"+teamid(d).abr+"|"+zy;

             };

             if (scorePoint(advancee[1],advancef[1]) == advancee[1]) {
               q2wb = [advancee[1],advancef[1]];
               document.getElementById("p19").innerHTML = "|"+advancee[1].Seed+"|"+advancee[1].Name+"|"+teamid(advancee[1]).abr+"|"+zy;
               document.getElementById("p20").innerHTML = "|"+advancef[1].Seed+"|"+advancef[1].Name+"|"+teamid(advancef[1]).abr+"|"+zz;

             } else {
                 q2wb = [advancef[1],advancee[1]];
                 document.getElementById("p19").innerHTML = "|"+advancee[1].Seed+"|"+advancee[1].Name+"|"+teamid(advancee[1]).abr+"|"+zy;
                 document.getElementById("p20").innerHTML = "|"+advancef[1].Seed+"|"+advancef[1].Name+"|"+teamid(advancef[1]).abr+"|"+zz;

               };
               if (scorePoint(advancee[0],advancef[0]) == advancee[0]) {
                 q2 = [advancee[0],advancef[0]];
                 document.getElementById("p27").innerHTML = "|"+advancee[0].Seed+"|"+advancee[0].Name+"|"+teamid(advancee[0]).abr+"|"+zy;
                 document.getElementById("p28").innerHTML = "|"+advancef[0].Seed+"|"+advancef[0].Name+"|"+teamid(advancef[0]).abr+"|"+zz;

               } else {
                   q2 = [advancef[0],advancee[0]];
                   document.getElementById("p27").innerHTML = "|"+advancee[0].Seed+"|"+advancee[0].Name+"|"+teamid(advancee[0]).abr+"|"+zy;
                   document.getElementById("p28").innerHTML = "|"+advancef[0].Seed+"|"+advancef[0].Name+"|"+teamid(advancef[0]).abr+"|"+zz;

                 };
                 //quarter 3
                        if (scorePoint(c,o) == c) {
                           advancej = [c,o];
                           document.getElementById("p9").innerHTML = "|"+c.Seed+"|"+c.Name+"|"+teamid(c).abr+"|"+zy;
                           document.getElementById("p99").innerHTML = "|"+o.Seed+"|"+o.Name+"|"+teamid(o).abr+"|"+zz;

                         } else {
                             advancej = [o,c];
                             document.getElementById("p9").innerHTML = "|"+c.Seed+"|"+c.Name+"|"+teamid(c).abr+"|"+zy;
                             document.getElementById("p99").innerHTML = "|"+o.Seed+"|"+o.Name+"|"+teamid(o).abr+"|"+zz;

                          };
                          if (scorePoint(f,l) == f) {
                             advancek = [f,l];
                             document.getElementById("p11").innerHTML = "|"+f.Seed+"|"+f.Name+"|"+teamid(f).abr+"|"+zy;
                             document.getElementById("p12").innerHTML = "|"+l.Seed+"|"+l.Name+"|"+teamid(l).abr+"|"+zz;

                           } else {
                               advancek = [l,f];
                               document.getElementById("p11").innerHTML = "|"+f.Seed+"|"+f.Name+"|"+teamid(f).abr+"|"+zy;
                               document.getElementById("p12").innerHTML = "|"+l.Seed+"|"+l.Name+"|"+teamid(l).abr+"|"+zz;

                            };

                            if (scorePoint(advancej[1],advancek[1]) == advancej[1]) {
                              q3wb = [advancej[1],advancek[1]];
                              document.getElementById("p21").innerHTML = "|"+advancej[1].Seed+"|"+advancej[1].Name+"|"+teamid(advancej[1]).abr+"|"+zy;
                              document.getElementById("p22").innerHTML = "|"+advancek[1].Seed+"|"+advancek[1].Name+"|"+teamid(advancek[1]).abr+"|"+zz;

                            } else {
                                q3wb = [advancek[1],advancej[1]];
                                document.getElementById("p21").innerHTML = "|"+advancej[1].Seed+"|"+advancej[1].Name+"|"+teamid(advancej[1]).abr+"|"+zy;
                                document.getElementById("p22").innerHTML = "|"+advancek[1].Seed+"|"+advancek[1].Name+"|"+teamid(advancek[1]).abr+"|"+zz;

                              };
                              if (scorePoint(advancej[0],advancek[0]) == advancej[0]) {
                                q3 = [advancej[0],advancek[0]];
                                document.getElementById("p29").innerHTML = "|"+advancej[0].Seed+"|"+advancej[0].Name+"|"+teamid(advancej[0]).abr+"|"+zy;
                                document.getElementById("p30").innerHTML = "|"+advancek[0].Seed+"|"+advancek[0].Name+"|"+teamid(advancek[0]).abr+"|"+zz;

                              } else {
                                  q3 = [advancek[0],advancej[0]];
                                  document.getElementById("p29").innerHTML = "|"+advancej[0].Seed+"|"+advancej[0].Name+"|"+teamid(advancej[0]).abr+"|"+zy;
                                  document.getElementById("p30").innerHTML = "|"+advancek[0].Seed+"|"+advancek[0].Name+"|"+teamid(advancek[0]).abr+"|"+zz;

                                };
                                //quarter 4
                                 if (scorePoint(g,k) == g) {
                                    advancen = [g,k];
                                    document.getElementById("p13").innerHTML = "|7|"+g.Name+"|"+teamid(g).abr+"|"+zy;
                                    document.getElementById("p14").innerHTML = "|10|"+k.Name+"|"+teamid(k).abr+"|"+zz;

                                  } else {
                                      advancen = [k,g];
                                      document.getElementById("p13").innerHTML = "|7|"+g.Name+"|"+teamid(g).abr+"|"+zy;
                                      document.getElementById("p14").innerHTML = "|10|"+k.Name+"|"+teamid(k).abr+"|"+zz;

                                   };
                                   if (scorePoint(b,p) == b) {
                                      advanceo = [b,p];
                                      document.getElementById("p15").innerHTML = "|15|"+p.Name+"|"+teamid(p).abr+"|"+zz;
                                      document.getElementById("p16").innerHTML = "|2|"+b.Name+"|"+teamid(b).abr+"|"+zy;

                                    } else {
                                        advanceo = [p,b];
                                        document.getElementById("p15").innerHTML = "|15|"+p.Name+"|"+teamid(p).abr+"|"+zz;
                                        document.getElementById("p16").innerHTML = "|2|"+b.Name+"|"+teamid(b).abr+"|"+zy;

                                     };

                                     if (scorePoint(advancen[1],advanceo[1]) == advancen[1]) {
                                       q4wb = [advancen[1],advanceo[1]];
                                       document.getElementById("p23").innerHTML = "|"+advancen[1].Seed+"|"+advancen[1].Name+"|"+teamid(advancen[1]).abr+"|"+zy;
                                       document.getElementById("p24").innerHTML = "|"+advanceo[1].Seed+"|"+advanceo[1].Name+"|"+teamid(advanceo[1]).abr+"|"+zz;

                                     } else {
                                         q4wb = [advanceo[1],advancen[1]];
                                         document.getElementById("p23").innerHTML = "|"+advancen[1].Seed+"|"+advancen[1].Name+"|"+teamid(advancen[1]).abr+"|"+zy;
                                         document.getElementById("p24").innerHTML = "|"+advanceo[1].Seed+"|"+advanceo[1].Name+"|"+teamid(advanceo[1]).abr+"|"+zz;

                                       };
                                       if (scorePoint(advancen[0],advanceo[0]) == advancen[0]) {
                                         q4 = [advancen[0],advanceo[0]];
                                         document.getElementById("p31").innerHTML = "|"+advancen[0].Seed+"|"+advancen[0].Name+"|"+teamid(advancen[0]).abr+"|"+zy;
                                         document.getElementById("p32").innerHTML = "|"+advanceo[0].Seed+"|"+advanceo[0].Name+"|"+teamid(advanceo[0]).abr+"|"+zz;

                                       } else {
                                           q4 = [advanceo[0],advancen[0]];
                                           document.getElementById("p31").innerHTML = "|"+advancen[0].Seed+"|"+advancen[0].Name+"|"+teamid(advancen[0]).abr+"|"+zy;
                                           document.getElementById("p32").innerHTML = "|"+advanceo[0].Seed+"|"+advanceo[0].Name+"|"+teamid(advanceo[0]).abr+"|"+zz;

                                         };
                                         //Wrestle Backs Round 2
                                         if (scorePoint(q1wb[0],q4[1]) == q1wb[0]) {
                                            ad1 = [q1wb[0],q4[1]];
                                            document.getElementById("p33").innerHTML = "|"+q1wb[0].Seed+"|"+q1wb[0].Name+"|"+teamid(q1wb[0]).abr+"|"+zy;
                                            document.getElementById("p34").innerHTML = "|"+q4[1].Seed+"|"+q4[1].Name+"|"+teamid(q4[1]).abr+"|"+zz;

                                          } else {
                                              ad1 = [q4[1],q1wb[0]];
                                              document.getElementById("p33").innerHTML = "|"+q1wb[0].Seed+"|"+q1wb[0].Name+"|"+teamid(q1wb[0]).abr+"|"+zy;
                                              document.getElementById("p34").innerHTML = "|"+q4[1].Seed+"|"+q4[1].Name+"|"+teamid(q4[1]).abr+"|"+zz;

                                           };
                                           if (scorePoint(q2wb[0],q3[1]) == q2wb[0]) {
                                              ad2 = [q2wb[0],q3[1]];
                                              document.getElementById("p41").innerHTML = "|"+q2wb[0].Seed+"|"+q2wb[0].Name+"|"+teamid(q2wb[0]).abr+"|"+zy;
                                              document.getElementById("p42").innerHTML = "|"+q3[1].Seed+"|"+q3[1].Name+"|"+teamid(q3[1]).abr+"|"+zz;

                                            } else {
                                                ad2 = [q3[1],q2wb[0]];
                                                document.getElementById("p41").innerHTML = "|"+q2wb[0].Seed+"|"+q2wb[0].Name+"|"+teamid(q2wb[0]).abr+"|"+zy;
                                                document.getElementById("p42").innerHTML = "|"+q3[1].Seed+"|"+q3[1].Name+"|"+teamid(q3[1]).abr+"|"+zz;

                                             };
                                             if (scorePoint(q3wb[0],q2[1]) == q3wb[0]) {
                                                ad3 = [q3wb[0],q2[1]];
                                                document.getElementById("p43").innerHTML = "|"+q3wb[0].Seed+"|"+q3wb[0].Name+"|"+teamid(q3wb[0]).abr+"|"+zy;
                                                document.getElementById("p44").innerHTML = "|"+q2[1].Seed+"|"+q2[1].Name+"|"+teamid(q2[1]).abr+"|"+zz;

                                              } else {
                                                  ad3 = [q2[1],q3wb[0]];
                                                  document.getElementById("p43").innerHTML = "|"+q3wb[0].Seed+"|"+q3wb[0].Name+"|"+teamid(q3wb[0]).abr+"|"+zy;
                                                  document.getElementById("p44").innerHTML = "|"+q2[1].Seed+"|"+q2[1].Name+"|"+teamid(q2[1]).abr+"|"+zz;

                                               };
                                               if (scorePoint(q4wb[0],q1[1]) == q4wb[0]) {
                                                  ad4 = [q4wb[0],q1[1]];
                                                  document.getElementById("p45").innerHTML = "|"+q4wb[0].Seed+"|"+q4wb[0].Name+"|"+teamid(q4wb[0]).abr+"|"+zy;
                                                  document.getElementById("p46").innerHTML = "|"+q1[1].Seed+"|"+q1[1].Name+"|"+teamid(q1[1]).abr+"|"+zz;

                                                } else {
                                                    ad4 = [q1[1],q4wb[0]];
                                                    document.getElementById("p45").innerHTML = "|"+q4wb[0].Seed+"|"+q4wb[0].Name+"|"+teamid(q4wb[0]).abr+"|"+zy;
                                                    document.getElementById("p46").innerHTML = "|"+q1[1].Seed+"|"+q1[1].Name+"|"+teamid(q1[1]).abr+"|"+zz;

                                                 };
                                                 //Blood Round
                                                 if (scorePoint(ad4[0],ad3[0]) == ad4[0]) {
                                                    adx1 = [ad4[0],ad3[0]];
                                                    document.getElementById("p47").innerHTML = "|"+ad4[0].Seed+"|"+ad4[0].Name+"|"+teamid(ad4[0]).abr+"|"+zy;
                                                    document.getElementById("p48").innerHTML = "|"+ad3[0].Seed+"|"+ad3[0].Name+"|"+teamid(ad3[0]).abr+"|"+zz;

                                                  } else {
                                                      adx1 = [ad3[0],ad4[0]];
                                                      document.getElementById("p47").innerHTML = "|"+ad4[0].Seed+"|"+ad4[0].Name+"|"+teamid(ad4[0]).abr+"|"+zy;
                                                      document.getElementById("p48").innerHTML = "|"+ad3[0].Seed+"|"+ad3[0].Name+"|"+teamid(ad3[0]).abr+"|"+zz;

                                                   };
                                                   if (scorePoint(ad1[0],ad2[0]) == ad1[0]) {
                                                      adx2 = [ad1[0],ad2[0]];
                                                      document.getElementById("p49").innerHTML = "|"+ad1[0].Seed+"|"+ad1[0].Name+"|"+teamid(ad1[0]).abr+"|"+zy;
                                                      document.getElementById("p50").innerHTML = "|"+ad2[0].Seed+"|"+ad2[0].Name+"|"+teamid(ad2[0]).abr+"|"+zz;

                                                    } else {
                                                        adx2 = [ad2[0],ad1[0]];
                                                        document.getElementById("p49").innerHTML = "|"+ad1[0].Seed+"|"+ad1[0].Name+"|"+teamid(ad1[0]).abr+"|"+zy;
                                                        document.getElementById("p50").innerHTML = "|"+ad2[0].Seed+"|"+ad2[0].Name+"|"+teamid(ad2[0]).abr+"|"+zz;

                                                     };
                                                     //Semi finals
                                                     if (scorePoint(q1[0],q2[0]) == q1[0]) {
                                                        semi1 = [q1[0],q2[0]];
                                                        document.getElementById("p35").innerHTML = "|"+q1[0].Seed+"|"+q1[0].Name+"|"+teamid(q1[0]).abr+"|"+zy;
                                                        document.getElementById("p36").innerHTML = "|"+q2[0].Seed+"|"+q2[0].Name+"|"+teamid(q2[0]).abr+"|"+zz;

                                                      } else {
                                                          semi1 = [q2[0],q1[0]];
                                                          document.getElementById("p35").innerHTML = "|"+q1[0].Seed+"|"+q1[0].Name+"|"+teamid(q1[0]).abr+"|"+zy;
                                                          document.getElementById("p36").innerHTML = "|"+q2[0].Seed+"|"+q2[0].Name+"|"+teamid(q2[0]).abr+"|"+zz;

                                                       };
                                                       if (scorePoint(q4[0],q3[0]) == q4[0]) {
                                                          semi2 = [q4[0],q3[0]];
                                                          document.getElementById("p37").innerHTML = "|"+q4[0].Seed+"|"+q4[0].Name+"|"+teamid(q4[0]).abr+"|"+zy;
                                                          document.getElementById("p38").innerHTML = "|"+q3[0].Seed+"|"+q3[0].Name+"|"+teamid(q3[0]).abr+"|"+zz;

                                                        } else {
                                                            semi2 = [q3[0],q4[0]];
                                                            document.getElementById("p37").innerHTML = "|"+q4[0].Seed+"|"+q4[0].Name+"|"+teamid(q4[0]).abr+"|"+zy;
                                                            document.getElementById("p38").innerHTML = "|"+q3[0].Seed+"|"+q3[0].Name+"|"+teamid(q3[0]).abr+"|"+zz;

                                                         };
                                                         //Semi Consolation
                                                         if (scorePoint(adx1[0],semi2[1]) == adx1[0]) {
                                                            third1 = [adx1[0],semi2[1]];
                                                            document.getElementById("p51").innerHTML = "|"+adx1[0].Seed+"|"+adx1[0].Name+"|"+teamid(adx1[0]).abr+"|"+zy;
                                                            document.getElementById("p52").innerHTML = "|"+semi2[1].Seed+"|"+semi2[1].Name+"|"+teamid(semi2[1]).abr+"|"+zz;

                                                          } else {
                                                              third1 = [semi2[1],adx1[0]];
                                                              document.getElementById("p51").innerHTML = "|"+adx1[0].Seed+"|"+adx1[0].Name+"|"+teamid(adx1[0]).abr+"|"+zy;
                                                              document.getElementById("p52").innerHTML = "|"+semi2[1].Seed+"|"+semi2[1].Name+"|"+teamid(semi2[1]).abr+"|"+zz;

                                                           };
                                                           if (scorePoint(adx2[0],semi1[1]) == adx2[0]) {
                                                              third2 = [adx2[0],semi1[1]];
                                                              document.getElementById("p53").innerHTML = "|"+adx2[0].Seed+"|"+adx2[0].Name+"|"+teamid(adx2[0]).abr+"|"+zy;
                                                              document.getElementById("p54").innerHTML = "|"+semi1[1].Seed+"|"+semi1[1].Name+"|"+teamid(semi1[1]).abr+"|"+zz;

                                                            } else {
                                                                third2 = [semi1[1],adx2[0]];
                                                                document.getElementById("p53").innerHTML = "|"+adx2[0].Seed+"|"+adx2[0].Name+"|"+teamid(adx2[0]).abr+"|"+zy;
                                                                document.getElementById("p54").innerHTML = "|"+semi1[1].Seed+"|"+semi1[1].Name+"|"+teamid(semi1[1]).abr+"|"+zz;

                                                             };
                                                             //5th and 6th
                                                             if (scorePoint(third1[1],third2[1]) == third1[1]) {
                                                                fith = [third1[1],third2[1]];
                                                                document.getElementById("p57").innerHTML = "|"+third1[1].Seed+"|"+third1[1].Name+"|"+teamid(third1[1]).abr+"|"+zy;
                                                                document.getElementById("p58").innerHTML = "|"+third2[1].Seed+"|"+third2[1].Name+"|"+teamid(third2[1]).abr+"|"+zz;
                                                                document.getElementById("p57").style.color = 'red';
                                                              } else {
                                                                  fith = [third2[1],third1[1]];
                                                                  document.getElementById("p57").innerHTML = "|"+third1[1].Seed+"|"+third1[1].Name+"|"+teamid(third1[1]).abr+"|"+zy;
                                                                  document.getElementById("p58").innerHTML = "|"+third2[1].Seed+"|"+third2[1].Name+"|"+teamid(third2[1]).abr+"|"+zz;
                                                                  document.getElementById("p58").style.color = 'red';
                                                               };
                                                             //Third and 4th
                                                             if (scorePoint(third1[0],third2[0]) == third1[0]) {
                                                                third = [third1[0],third2[0]];
                                                                document.getElementById("p55").innerHTML = "|"+third1[0].Seed+"|"+third1[0].Name+"|"+teamid(third1[0]).abr+"|"+zy;
                                                                document.getElementById("p56").innerHTML = "|"+third2[0].Seed+"|"+third2[0].Name+"|"+teamid(third2[0]).abr+"|"+zz;
                                                                document.getElementById("p55").style.color = 'red';
                                                              } else {
                                                                  third = [third2[0],third1[0]];
                                                                  document.getElementById("p55").innerHTML = "|"+third1[0].Seed+"|"+third1[0].Name+"|"+teamid(third1[0]).abr+"|"+zy;
                                                                  document.getElementById("p56").innerHTML = "|"+third2[0].Seed+"|"+third2[0].Name+"|"+teamid(third2[0]).abr+"|"+zz;
                                                                  document.getElementById("p56").style.color = 'red';
                                                               };
                                                               //finals
                                                               if (scorePoint(semi1[0],semi2[0]) == semi1[0]) {
                                                                  finals = [semi1[0],semi2[0]];
                                                                  document.getElementById("p39").innerHTML = "|"+semi1[0].Seed+"|"+semi1[0].Name+"|"+teamid(semi1[0]).abr+"|"+zy;
                                                                  document.getElementById("p40").innerHTML = "|"+semi2[0].Seed+"|"+semi2[0].Name+"|"+teamid(semi2[0]).abr+"|"+zz;
                                                                  document.getElementById("p39").style.color = 'red';
                                                                } else {
                                                                    finals = [semi2[0],semi1[0]];
                                                                    document.getElementById("p39").innerHTML = "|"+semi1[0].Seed+"|"+semi1[0].Name+"|"+teamid(semi1[0]).abr+"|"+zy;
                                                                    document.getElementById("p40").innerHTML = "|"+semi2[0].Seed+"|"+semi2[0].Name+"|"+teamid(semi2[0]).abr+"|"+zz;
                                                                    document.getElementById("p40").style.color = 'red';
                                                                 };

                                                                 teamid(finals[0]).Tpoints += 16
                                                                 teamid(finals[1]).Tpoints += 12
                                                                 teamid(third[0]).Tpoints += 9
                                                                 teamid(third[1]).Tpoints += 7
                                                                 teamid(fith[0]).Tpoints += 5
                                                                 teamid(fith[1]).Tpoints += 3
                                                                 finals[0].pFinish.unshift("("+year+"-"+"National Champion)")
                                                                 finals[1].pFinish.unshift("("+year+"-"+"Runner Up)")
                                                                 third[0].pFinish.unshift("("+year+"-"+"3rd Place)")
                                                                 third[1].pFinish.unshift("("+year+"-"+"4th Place)")
                                                                 fith[0].pFinish.unshift("("+year+"-"+"5th Place)")
                                                                 fith[1].pFinish.unshift("("+year+"-"+"6th Place)")
                                                                 adx1[1].pFinish.unshift("("+year+"-"+"Blood Round)")
                                                                 adx2[1].pFinish.unshift("("+year+"-"+"Blood Round)")
                                                                 ad1[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 ad2[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 ad3[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 ad4[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 q1wb[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 q2wb[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 q3wb[1].pFinish.unshift("("+year+"-"+"Qualified)")
                                                                 q4wb[1].pFinish.unshift("("+year+"-"+"Qualified)")

                                                                 finals[0].NF += ("("+year+"-"+"1st"+")")
                                                                 finals[1].NF += ("("+year+"-"+"2nd"+")")
                                                                 third[0].NF += ("("+year+"-"+"3rd"+")")
                                                                 third[1].NF += ("("+year+"-"+"4th"+")")
                                                                 fith[0].NF += ("("+year+"-"+"5th"+")")
                                                                 fith[1].NF += ("("+year+"-"+"6th"+")")
                                                                 adx1[1].NF += ("("+year+"-"+"BR"+")")
                                                                 adx2[1].NF += ("("+year+"-"+"BR"+")")
                                                                 ad1[1].NF += ("("+year+"-"+"Q"+")")
                                                                 ad2[1].NF += ("("+year+"-"+"Q"+")")
                                                                 ad3[1].NF += ("("+year+"-"+"Q"+")")
                                                                 ad4[1].NF += ("("+year+"-"+"Q"+")")
                                                                 q1wb[1].NF += ("("+year+"-"+"Q"+")")
                                                                 q2wb[1].NF += ("("+year+"-"+"Q"+")")
                                                                 q3wb[1].NF += ("("+year+"-"+"Q"+")")
                                                                 q4wb[1].NF += ("("+year+"-"+"Q"+")")


                                                                 allAmerican.unshift(fith[1])
                                                                 allAmerican.unshift(fith[0])
                                                                 allAmerican.unshift(third[1])
                                                                 allAmerican.unshift(third[0])
                                                                 allAmerican.unshift(finals[1])
                                                                 allAmerican.unshift(finals[0])

                                                                 finals[0].championships.push(finals[0])

                                                                 return finals[0]




};
