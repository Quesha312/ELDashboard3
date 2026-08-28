// connect_u1.js — Vista Connect 3: Unit 1 Back to School
// Defines window.CT (4-variant timing template), window._cs (session builder), window.CONNECT_UNITS
(function(){
  if(!window.CT){
    window.CT={
      30:["","BIG IDEA(5)·EXPLORE IMAGE(10)·CONNECT TO THEME(15)","PRIOR KNOWLEDGE(5)·BUILD BG(5)·READING STRATEGY(20)","VOC IN CONTEXT(15)·DEVELOP VOC(15)","PHONICS(30)","TEXT GENRE(5)·PREVIEW(5)·READING(20)","REREAD & REVIEW(30)","APPLY READING STRATEGY(15)·DISCUSS(15)","","GRAMMAR(30)","GRAMMAR(30)","LA TEXT(30)","WRITING TOOLS(30)","SCIENCE(30)","SOC STUDIES(30)","MATH(30)","MUSIC(30)","ART(30)","STRATEGY/MODEL(15)·PLAN/DRAFT(15)","REVISE/EDIT(15)·PUBLISH(10)·BIG IDEA(5)","MEDIA(30)","UNIT TEST"],
      45:["","BIG IDEA(5)·EXPLORE IMAGE(20)·CONNECT TO THEME(20)","PRIOR KNOWLEDGE(10)·BUILD BG(10)·READING STRATEGY(25)","VOC IN CONTEXT(20)·DEVELOP VOC(25)","PHONICS(45)","TEXT GENRE(5)·PREVIEW(10)·READING(30)","REREAD & REVIEW(45)","APPLY READING STRATEGY(20)·DISCUSS(25)","","GRAMMAR(45)","GRAMMAR(45)","LA TEXT(45)","WRITING TOOLS(45)","SCIENCE(45)","SOC STUDIES(45)","MATH(45)","MUSIC(45)","ART(45)","STRATEGY/MODEL(15)·PLAN/DRAFT(30)","REVISE/EDIT(25)·PUBLISH(10)·BIG IDEA(10)","MEDIA(45)","UNIT TEST"],
      60:["","BIG IDEA(10)·EXPLORE IMAGE(20)·CONNECT TO THEME(30)","PRIOR KNOWLEDGE(10)·BUILD BG(10)·READING STRATEGY(40)","VOC IN CONTEXT(30)·DEVELOP VOC(30)","PHONICS(60)","TEXT GENRE(5)·PREVIEW(15)·READING(40)","REREAD & REVIEW(60)","APPLY READING STRATEGY(30)·DISCUSS(30)","","GRAMMAR(60)","GRAMMAR(60)","LA TEXT(60)","WRITING TOOLS(60)","SCIENCE(60)","SOC STUDIES(60)","MATH(60)","MUSIC(60)","ART(60)","STRATEGY/MODEL(20)·PLAN/DRAFT(40)","REVISE/EDIT(40)·PUBLISH(10)·BIG IDEA(10)","MEDIA(60)","UNIT TEST"],
      90:["","BIG IDEA(20)·EXPLORE IMAGE(30)·CONNECT TO THEME(40)","PRIOR KNOWLEDGE(15)·BUILD BG(15)·READING STRATEGY(60)","VOC IN CONTEXT(45)·DEVELOP VOC(45)","PHONICS(90)","TEXT GENRE(10)·PREVIEW(20)·READING(60)","REREAD & REVIEW(90)","APPLY READING STRATEGY(45)·DISCUSS(45)","","GRAMMAR(90)","GRAMMAR(90)","LA TEXT(90)","WRITING TOOLS(90)","SCIENCE(90)","SOC STUDIES(90)","MATH(90)","MUSIC(90)","ART(90)","STRATEGY/MODEL(30)·PLAN/DRAFT(60)","REVISE/EDIT(60)·PUBLISH(15)·BIG IDEA(15)","MEDIA(90)","UNIT TEST"]
    };
    window.CONNECT_UNITS=[];
    window._cs=function(n,type,area,act,mat,pb,q30,q45,q60,q90){
      var C=window.CT;
      return{n:n,type:type,area:area,act:act,mat:mat,pb:pb,
        t30:n===8?q30:C[30][n],t45:n===8?q45:C[45][n],
        t60:n===8?q60:C[60][n],t90:n===8?q90:C[90][n]};
    };
  }
  var cs=window._cs;
  window.CONNECT_UNITS.push({
    id:1,title:"Unit 1: Back to School",
    bigIdea:"School is a place where you can learn and grow.",
    reading:"Antonio's First Day of School",author:"April Pulley",genre:"Realistic Fiction",
    strategy:"Summarize",gram1:"Prepositions of Location",gram2:"Pronoun Agreement",
    writing:"Write a Real-Life Story",
    sessions:[
      cs(1,"L&L","Unit Opener","Big Idea · Explore the Image · Connect to the Theme","SB · Video",""),
      cs(2,"L&L","Before You Read","Prior Knowledge · Build Background · Reading Strategy: Summarize","SB",""),
      cs(3,"L&L","Vocabulary","Vocabulary in Context · Develop Vocabulary","SB · Tutorial","pp. 1–2"),
      cs(4,"L&L","Phonics","Phonics Tutorial","TE · Tutorial","pp. 3–5"),
      cs(5,"L&L","Reading","First Read — Text Genre · Preview · Read: Antonio's First Day of School","SB · Audio",""),
      cs(6,"L&L","Reading","Reread & Review — Apply to language patterns and text details","SB · Audio","pp. 6–9"),
      cs(7,"L&L","After You Read","Apply Reading Strategy (Summarize) · Discuss the Reading","SB",""),
      cs(8,"L&L","Oral Language","Conversation · Summarize","SB · Audio","p. 10",
        "CONVERSATION(10)·SUMMARIZE(20)","CONVERSATION(15)·SUMMARIZE(30)",
        "CONVERSATION(20)·SUMMARIZE(40)","CONVERSATION(30)·SUMMARIZE(60)"),
      cs(9,"L&L","Grammar 1","Prepositions of Location","SB · Tutorial","p. 11"),
      cs(10,"L&L","Grammar 2","Pronoun Agreement","SB · Tutorial","p. 12"),
      cs(11,"C&W","Language Arts","Realistic Fiction — The First Violin Class","SB · Audio","pp. 13–14"),
      cs(12,"C&W","Writing Tools","Tools for Writing: Punctuation for Dialogue · Homophones","SB","p. 15"),
      cs(13,"C&W","Science","Motion and Force","SB · Audio","p. 16"),
      cs(14,"C&W","Social Studies","Our Community","SB · Audio","p. 17"),
      cs(15,"C&W","Mathematics","Solving Problems with Addition and Subtraction","SB · Audio","p. 18"),
      cs(16,"C&W","Music","Listen and Sing — School Time Rock","SB · Audio","p. 19"),
      cs(17,"C&W","Art","Colors","SB · Audio","p. 20"),
      cs(18,"C&W","Writing — Draft","Writing Strategy/Model · Plan/Draft — Write a Real-Life Story","SB",""),
      cs(19,"C&W","Writing — Publish","Revise/Edit · Publish · Big Idea Review","SB","p. 21"),
      cs(20,"C&W","Media","Video: Bunny New Girl","SB · Video","p. 22"),
      cs(21,"C&W","Assessment","Unit 1 Test","Assessment Program","")
    ]
  });
}());
