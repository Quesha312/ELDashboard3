// tracker.js — ELL Student Data Tracker v3
// Expanded passages + DOK 1-4 from Grade 3 Reading Rubric PDF
// Sight Words: mastery % | Fluency: WPM+Accuracy+Errors | Comprehension: DOK 1-4 + auto-flag
(function () {
  "use strict";

  var STORIES = [
    {id:1,title:"The Lost Kitten",
     passage:"Max had just finished watering the garden when he heard a soft, shaky sound coming from the bushes. Curious, he bent down and spotted a tiny, wet kitten curled up under a big green bush. Its fur was muddy, and it shivered each time the wind blew. Max gently scooped the kitten into his arms and carried it inside. He dried it with a soft yellow towel and warmed some milk. As the kitten drank, its tail twitched happily, and soon it began to purr loudly, feeling safe at last.",
     dok:[{lvl:1,q:"Who helped the kitten? Where was it hiding?",a:"Max / Under a big green bush"},{lvl:2,q:"Why was it shivering? What did Max do after bringing it inside?",a:"Wet and cold / Dried it, gave it milk"},{lvl:3,q:"What does Max's behavior show about his personality? Why describe the tail twitching?",a:"He is kind and caring / Tail twitching shows the kitten felt safe"},{lvl:4,q:"Was Max's response the best way to help? Compare to real-world animal care.",a:"Open response — connects Max's actions to responsible animal care"}]},
    {id:2,title:"The Red Kite",
     passage:"The wind blew hard on Saturday afternoon, rattling the tall oak trees in the park. Lily held her new red kite tightly as she ran across the open grass. The kite lifted into the sky, soaring higher and higher until it touched the white clouds. Lily laughed as she felt the string pull against her hands. She had practiced flying smaller kites before, but this one was special. It was a gift from her grandmother, who told her that kites remind us to dream big and reach high.",
     dok:[{lvl:1,q:"What color was the kite? When did Lily fly it?",a:"Red / Saturday afternoon"},{lvl:2,q:"Why did the kite soar high? What did Lily feel holding the string?",a:"Strong wind / She felt the string pulling against her hands"},{lvl:3,q:"What does the gift show about her grandmother's values?",a:"She values dreams, ambition, and encouraging growth"},{lvl:4,q:"How does 'dream big' connect to Lily's experience?",a:"Open response — connects the metaphor to real aspiration and effort"}]},
    {id:3,title:"Fresh Apples",
     passage:"Sam climbed up the old wooden ladder to reach the top branches of the apple tree. The sun warmed his back as he carefully picked five juicy red apples and placed them in his basket. He imagined the sweet smell of pie baking in the oven. His mom had promised to teach him how to mix sugar, cinnamon, and flour to make the crust. Sam loved helping in the kitchen, especially when the recipe included apples from their own tree. He smiled, knowing the pie would taste even better because he had picked the fruit himself.",
     dok:[{lvl:1,q:"How many apples did Sam pick? What did he want to make?",a:"Five / A pie"},{lvl:2,q:"Why did the pie feel special? What steps did Sam take?",a:"He picked the apples himself from their own tree / Climbed, picked, imagined baking"},{lvl:3,q:"What does Sam's excitement show about his relationship with his mom?",a:"They bond over cooking; he values shared experiences with her"},{lvl:4,q:"Compare picking fruit at home vs. buying at a store.",a:"Open response — homegrown effort, appreciation, freshness vs. convenience"}]},
    {id:4,title:"The Little Frog",
     passage:"A green frog sat on a wet log near the pond, watching the ripples spread across the water. It saw a tiny black fly buzzing in the air. With lightning speed, the frog shot out its long sticky tongue and caught the bug for lunch. The frog's eyes blinked slowly as it swallowed, then it hopped closer to the water's edge. The pond was full of life—dragonflies zipped past, and fish splashed near the surface. The frog felt safe in its home, surrounded by food and friends.",
     dok:[{lvl:1,q:"Where was the frog sitting? What did it eat?",a:"On a wet log near the pond / A tiny black fly"},{lvl:2,q:"Why did the frog move closer to the water? What other animals were nearby?",a:"For safety and food / Dragonflies and fish"},{lvl:3,q:"What does the frog's quick tongue show about its survival skills?",a:"It has precise, fast adaptations that make it effective at catching prey"},{lvl:4,q:"Compare the frog's pond habitat to another animal's home.",a:"Open response — how habitats suit an animal's needs and survival strategies"}]},
    {id:5,title:"Baking Sweet Cookies",
     passage:"Ben mixed sweet sugar, creamy butter, and white flour in a large blue bowl. He dropped round scoops of dough onto a flat baking sheet. As the oven warmed, Ben imagined the smell of chocolate filling the kitchen. Soon, the cookies baked into golden circles, and the air smelled delicious. His little sister peeked into the kitchen, asking if she could taste one. Ben smiled and told her they had to cool first. Baking was his favorite hobby because it made the whole family happy.",
     dok:[{lvl:1,q:"Who is baking? What did the kitchen smell like?",a:"Ben / Warm chocolate / delicious"},{lvl:2,q:"Why did Ben's sister have to wait? What steps did Ben take before baking?",a:"Cookies had to cool first / Mixed, scooped, baked"},{lvl:3,q:"What does Ben's smile show about his feelings toward baking?",a:"He finds joy in sharing — baking connects him to family happiness"},{lvl:4,q:"How does baking cookies for family compare to cooking alone?",a:"Open response — shared purpose, joy, and connection vs. individual satisfaction"}]},
    {id:6,title:"The Busy Ants",
     passage:"A line of tiny brown ants marched across the hot sidewalk, each carrying heavy crumbs of bread back to their small dirt hill. The ants worked together all afternoon, never stopping to rest. Their teamwork made the food pile grow very big, enough to feed the whole colony. Some ants dug tunnels while others guarded the entrance. Watching them, it seemed like the ants had a plan, even though they never spoke. Their busy movements showed how important cooperation is in nature.",
     dok:[{lvl:1,q:"What color were the ants? Where were they carrying the bread crumbs?",a:"Brown / Back to their small dirt hill"},{lvl:2,q:"Why did the food pile grow large? What jobs did different ants do?",a:"Teamwork all afternoon / Some dug tunnels, others guarded"},{lvl:3,q:"What does the ants' teamwork show about survival?",a:"Division of labor and cooperation are essential strategies in nature"},{lvl:4,q:"Compare the ants' cooperation to how people work together in groups.",a:"Open response — teams, sports, workplaces, shared goals"}]},
    {id:7,title:"The Lost Key",
     passage:"Anna searched everywhere for her shiny silver key. She looked under the soft rug, inside her deep coat pockets, and even behind the couch cushions. Finally, she spotted it sitting on top of the dark kitchen table. Relief washed over her as she picked it up. The key opened the small wooden box where she kept her favorite treasures. Inside were letters from friends, a seashell from the beach, and a photo of her family. Anna smiled, glad she had found the key to her memories.",
     dok:[{lvl:1,q:"What was Anna looking for? Where did she find it?",a:"Her shiny silver key / On top of the kitchen table"},{lvl:2,q:"Why was the key important? What did Anna keep inside the box?",a:"It opened her treasure box / Letters, seashell, family photo"},{lvl:3,q:"What does Anna's reaction show about her feelings toward her treasures?",a:"They hold deep sentimental value — the items represent relationships and memories"},{lvl:4,q:"Compare Anna's box of memories to something you treasure.",a:"Open response — personal connection to keepsakes and why they matter"}]},
    {id:8,title:"Swimming Pool Fun",
     passage:"The summer sun was hot, so Leo jumped into the cool blue pool water. He splashed his little sister and tossed a bright beach ball high into the air. They laughed as the ball bounced across the water. After a while, Leo noticed his fingers looked like wrinkled raisins from staying in the pool too long. He climbed out, grabbed a towel, and sat in the shade. His sister joined him, and together they enjoyed popsicles, cooling off after their fun swim.",
     dok:[{lvl:1,q:"Why did Leo jump into the pool? What toy did he play with?",a:"The summer sun was hot / A bright beach ball"},{lvl:2,q:"Why did his fingers look wrinkled? What did Leo do after swimming?",a:"Stayed in too long / Climbed out, towel, shade, popsicles"},{lvl:3,q:"What does the siblings' laughter show about their relationship?",a:"They enjoy each other's company and share playful positive experiences"},{lvl:4,q:"Compare swimming in summer to another way people stay cool.",a:"Open response — why swimming is popular, other strategies, preferences"}]},
    {id:9,title:"Planting Seeds",
     passage:"Maya dug a small hole in the rich dark dirt with her shiny metal shovel. She dropped a tiny sunflower seed inside and covered it gently. Every morning, she poured clean water over the spot. Soon, a green sprout pushed through the soil, reaching toward the sun. Maya watched it grow taller each day, proud of the plant she had cared for. She imagined the bright yellow petals opening wide, filling the garden with color. Planting seeds taught her patience and responsibility.",
     dok:[{lvl:1,q:"What kind of seed did Maya plant? How often did she water it?",a:"A sunflower seed / Every morning"},{lvl:2,q:"Why did the sprout grow taller each day? What tools did Maya use?",a:"Consistent watering and sunlight / A shovel and water"},{lvl:3,q:"What does Maya's pride show about her learning?",a:"She connects her consistent effort directly to the plant's growth"},{lvl:4,q:"Compare caring for a plant to caring for a pet.",a:"Open response — daily responsibility, patience, rewards of nurturing life"}]},
    {id:10,title:"The Train Ride",
     passage:"The big black train blew its loud horn as it pulled into the busy station. Mark stepped inside and found a seat next to a clear window. As the train started moving, he watched the green trees rush past. The rhythm of the wheels made a steady sound, and Mark felt excited to travel. He imagined all the places the train might take him—mountains, cities, or even the ocean. The ride was more than just a trip; it was an adventure waiting to happen.",
     dok:[{lvl:1,q:"What noise did the train make? Where did Mark sit?",a:"Loud horn / Next to a clear window"},{lvl:2,q:"Why did Mark feel excited? What did he see outside the window?",a:"Travel felt like adventure / Green trees rushing past"},{lvl:3,q:"What does Mark's imagination show about his personality?",a:"He is curious and adventurous — he sees possibility in every experience"},{lvl:4,q:"Compare traveling by train to another type of transportation.",a:"Open response — speed, scenery, cost, environmental impact, experience"}]},
    {id:11,title:"The Missing Homework",
     passage:"Jake opened his heavy backpack, but his math paper was gone. He remembered leaving it completed on his desk at home. His friendly teacher gave him an extra page so he could finish it during lunch. Jake felt nervous at first, but then he realized mistakes happen. He worked carefully, determined to solve each problem again. By the end of lunch, Jake had finished the assignment, proud that he didn't give up.",
     dok:[{lvl:1,q:"What assignment did Jake lose? Where did he leave it?",a:"His math paper / On his desk at home"},{lvl:2,q:"Why did Jake feel nervous? What did his teacher do to help?",a:"He thought he'd be in trouble / Gave him an extra page to finish at lunch"},{lvl:3,q:"What does Jake's determination show about his character?",a:"He is resilient — he doesn't let mistakes stop him; he works through challenges"},{lvl:4,q:"Compare Jake's response to losing homework with how you might react.",a:"Open response — personal connection to perseverance and handling mistakes"}]},
    {id:12,title:"Camping at Night",
     passage:"The dark woods were quiet as the family sat around the glowing campfire. Dad roasted sweet marshmallows on a long stick, and the children laughed as the sticky treats melted. Above them, millions of bright stars shone in the sky. The family told stories, sang songs, and enjoyed the peaceful night together. Camping made them feel close, surrounded by nature and each other's company.",
     dok:[{lvl:1,q:"Where was the family camping? What food did Dad roast?",a:"In the dark woods / Sweet marshmallows"},{lvl:2,q:"Why did the family feel peaceful? What activities did they do?",a:"Away from distractions, in nature / Stories, songs, roasting marshmallows"},{lvl:3,q:"What does camping show about the family's bond?",a:"They value shared experiences and togetherness over screens and routine"},{lvl:4,q:"Compare camping in the woods to spending a night at home.",a:"Open response — connection to nature, unplugging, comfort vs. adventure"}]},
    {id:13,title:"The New Library Book",
     passage:"Elena walked into the school library and picked a thick book about massive dinosaurs. She checked it out at the front desk and read it during recess. The pictures of the T-Rex were scary but exciting. Elena loved learning new facts and sharing them with her friends. Reading made her feel like she was traveling back in time to when dinosaurs ruled the earth.",
     dok:[{lvl:1,q:"What topic was Elena's book about? When did she read it?",a:"Dinosaurs / During recess"},{lvl:2,q:"Why did the pictures seem scary? What did Elena enjoy about reading?",a:"T-Rex pictures were intense / Learning facts and sharing with friends"},{lvl:3,q:"What does Elena's excitement show about her curiosity?",a:"Reading is a portal to other worlds for her — she is intellectually adventurous"},{lvl:4,q:"Compare reading about dinosaurs to visiting a museum exhibit.",a:"Open response — depth of learning, imagination, interactivity, physical vs. text experience"}]},
    {id:14,title:"A Puppy in the Rain",
     passage:"Heavy raindrops began to fall from the gray clouds. A small brown puppy ran fast to hide under the wooden porch. It shook its wet fur and waited safely until the storm passed. When the sun came out, the puppy barked happily and chased a butterfly across the yard. The storm had frightened it, but the sunshine brought joy again.",
     dok:[{lvl:1,q:"What color was the puppy? Where did it hide?",a:"Brown / Under the wooden porch"},{lvl:2,q:"Why did the puppy shake its fur? What did it do after the storm?",a:"To dry off / Barked happily and chased a butterfly"},{lvl:3,q:"What does the puppy's behavior show about its feelings?",a:"Animals experience fear and joy just like people — instinct drives its responses"},{lvl:4,q:"Compare how animals react to storms with how people react.",a:"Open response — instinct vs. planning, shelter-seeking, emotional responses"}]},
    {id:15,title:"The Winter Snowman",
     passage:"Cold white snow fell from the sky all morning long. Tom rolled three large snowballs and stacked them high. He used a sharp orange carrot for a nose and two black buttons for eyes. When he finished, the snowman looked cheerful, standing tall in the yard. Tom felt proud of his creation and invited his friends to see it.",
     dok:[{lvl:1,q:"What did Tom use for the nose? How many snowballs did he stack?",a:"A sharp orange carrot / Three"},{lvl:2,q:"Why did Tom feel proud? What materials did he use?",a:"He built something from nothing / Snowballs, carrot, buttons"},{lvl:3,q:"What does building a snowman show about creativity?",a:"Tom transformed simple materials into something expressive and imaginative"},{lvl:4,q:"Compare building a snowman to another winter activity.",a:"Open response — creative vs. active, solo vs. group, temporary vs. lasting"}]},
    {id:16,title:"The Art Project",
     passage:"Kim cut bright red paper shapes with her small silver scissors. She glued them onto a large piece of blue cardboard to make a spaceship. Then she painted yellow stars all around the background. Her project looked colorful and exciting. Kim loved art because it let her imagination fly as high as the stars she painted.",
     dok:[{lvl:1,q:"What object was Kim making? What did she paint in the background?",a:"A spaceship / Yellow stars"},{lvl:2,q:"Why did the project look exciting? What tools did Kim use?",a:"Colorful shapes and stars / Scissors, glue, paint"},{lvl:3,q:"What does Kim's love of art show about her creativity?",a:"Art gives her freedom to imagine and build worlds — the last line is a metaphor"},{lvl:4,q:"Compare Kim's art project to another way of expressing imagination.",a:"Open response — art vs. writing, music, building, storytelling"}]},
    {id:17,title:"Feeding the Ducks",
     passage:"Grandpa and Mia walked down to the calm lake. They threw small pieces of stale bread into the water. Four white ducks swam over quickly and ate the food with loud quacking sounds. Mia laughed as the ducks splashed around. Feeding the ducks made her feel connected to nature and happy to share the moment with her grandpa.",
     dok:[{lvl:1,q:"Who went to the lake with Mia? How many ducks swam over?",a:"Her Grandpa / Four white ducks"},{lvl:2,q:"Why did the ducks swim quickly? What did Mia do?",a:"They wanted the food / Mia laughed watching them splash"},{lvl:3,q:"What does Mia's laughter show about her feelings?",a:"She finds joy in simple moments and feels connected to nature and her grandpa"},{lvl:4,q:"Compare feeding ducks to another outdoor activity with a family member.",a:"Open response — shared experience, nature connection, intergenerational bonding"}]},
    {id:18,title:"The Lost Hat",
     passage:"A strong gust of wind blew Lucas's favorite blue hat right off his head. It landed high up in the thick branches of a bush. Lucas had to use a long stick to get it back. He felt relieved when he finally held the hat again. The hat reminded him of his birthday, when his parents gave it to him as a special gift.",
     dok:[{lvl:1,q:"What happened to Lucas's hat? What tool did he use to get it down?",a:"Wind blew it off / A long stick"},{lvl:2,q:"Why was the hat special? How did Lucas feel after finding it?",a:"It was a birthday gift from his parents / Relieved"},{lvl:3,q:"What does Lucas's effort show about determination?",a:"He didn't give up on something meaningful — the hat's sentimental value drove persistence"},{lvl:4,q:"Compare losing an item outdoors to losing something at home.",a:"Open response — accessibility to retrieve, emotional response, problem-solving"}]},
    {id:19,title:"The Birthday Surprise",
     passage:"Nina walked into the dark living room and flipped on the light switch. Suddenly, her friends jumped out from behind the sofa and shouted 'Surprise!' She saw a giant chocolate cake sitting on the counter. Nina laughed and hugged her friends, grateful for the party. The surprise made her birthday unforgettable.",
     dok:[{lvl:1,q:"Where were Nina's friends hiding? What kind of cake did she see?",a:"Behind the sofa / A giant chocolate cake"},{lvl:2,q:"Why did Nina laugh? What did her friends do?",a:"She was happy and surprised / Jumped out, shouted surprise, planned the party"},{lvl:3,q:"What does Nina's reaction show about friendship?",a:"Friends who plan surprises show deep care; her gratitude shows she values the bonds"},{lvl:4,q:"Compare a surprise party to a planned celebration.",a:"Open response — anticipation vs. spontaneity, effort, emotional impact"}]},
    {id:20,title:"The Beach Shells",
     passage:"Ocean waves crashed against the warm sand. Leo walked slowly along the water and looked down. He picked up three shiny pink shells and put them safely inside his deep bucket. The shells reminded him of summer adventures and made him excited to share them with his family. Collecting shells was his favorite part of visiting the beach.",
     dok:[{lvl:1,q:"Where was Leo walking? What did he collect?",a:"Along the beach / Three shiny pink shells"},{lvl:2,q:"Why did the shells remind him of summer? What did Leo do with them?",a:"They connected to happy memories / Put them safely in his bucket to share"},{lvl:3,q:"What does Leo's excitement show about his love for nature?",a:"Objects from nature carry emotional meaning; sharing extends the joy"},{lvl:4,q:"Compare collecting shells to another beach activity.",a:"Open response — observational vs. active, memory-making, solitary vs. social"}]},
    {id:21,title:"Bird House Builders",
     passage:"Inside the garage, Ella and her dad built a small wooden birdhouse. They painted it bright blue and hung it up on a tree branch. Soon, a tiny bird flew inside to build a nest. Ella felt proud that she had helped create a safe home for the bird. Working with her dad made the project even more special.",
     dok:[{lvl:1,q:"What did Ella and her dad build? Where did they hang it?",a:"A small wooden birdhouse / On a tree branch"},{lvl:2,q:"Why did Ella feel proud? What happened after they finished?",a:"She helped create something useful / A bird flew inside to build a nest"},{lvl:3,q:"What does the bird's arrival show about the success of the project?",a:"Their creation immediately served its purpose — real-world impact validates the effort"},{lvl:4,q:"Compare building a birdhouse to another family project.",a:"Open response — skills learned, bonding, lasting real-world impact"}]},
    {id:22,title:"The Evening Bike Ride",
     passage:"The bright sun started to set behind the hills. Ryan put on his black helmet and rode his red bicycle down the street. The cool night air felt nice on his face as he sped up. He enjoyed the quiet evening, noticing the stars beginning to appear. Riding his bike at sunset made him feel free and peaceful.",
     dok:[{lvl:1,q:"What safety gear did Ryan wear? When did he ride his bike?",a:"A black helmet / In the evening at sunset"},{lvl:2,q:"Why did Ryan enjoy the ride? What did he notice in the sky?",a:"Cool air, quiet, felt free / Stars beginning to appear"},{lvl:3,q:"What does Ryan's feeling of freedom show about his love for biking?",a:"Biking gives him a sense of independence and peace — it is an emotional outlet"},{lvl:4,q:"Compare riding a bike in the evening to riding during the day.",a:"Open response — sensory differences, safety, mood, visibility, experience"}]}
    {id:3,title:"Fresh Apples",wc:36},{id:4,title:"The Little Frog",wc:35},
    
  ];

  var STATION_META = {
    "Sight Words":   {icon:"\uD83D\uDD35", cls:"sw", label:"Sight Words",   scoreType:"mastery", goal:80,  goalLabel:"80% Mastery"},
    "Fluency":       {icon:"\uD83D\uDFE0", cls:"fl", label:"Fluency",        scoreType:"wpm",     goal:90,  goalLabel:"90 WPM"},
    "Comprehension": {icon:"\uD83D\uDFE2", cls:"cp", label:"Comprehension",  scoreType:"dok",     goal:80,  goalLabel:"80% DOK"}
  };

  // DOK flags per rubric scoring directions
  function dokFlag(d1,d2,d3,d4) {
    var low12=!d1||!d2, low34=!d3||!d4;
    if (low12&&!low34) return {label:"Recall Weakness",    cls:"flag-recall",    tip:"Misses DOK 1-2, passes DOK 3-4"};
    if (!low12&&low34)  return {label:"Reasoning Weakness", cls:"flag-reasoning", tip:"Passes DOK 1-2, misses DOK 3-4"};
    if (!low12&&!low34) return {label:"Balanced",           cls:"flag-balanced",  tip:"Strength across all DOK levels"};
    return {label:"Needs Support", cls:"flag-support", tip:"Struggles at multiple DOK levels"};
  }

  var KEY = "ell_tracker_v3";
  var _sid = null;

  function load() { try { return JSON.parse(localStorage.getItem(KEY))||{students:[]}; } catch(e) { return {students:[]}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch(e) {} }

  function assignStation(wr, ws) {
    wr = parseFloat(wr); ws = parseFloat(ws);
    if (isNaN(wr)) return "Sight Words";
    if (wr <= 2.5) return "Sight Words";
    if (wr >= 4.6) return "Comprehension";
    return (ws < 2.5) ? "Fluency" : "Comprehension";
  }

  function getScore(e, station) {
    var m = STATION_META[station];
    if (m.scoreType==="wpm")     return e.wpm||0;
    if (m.scoreType==="mastery") return e.total ? Math.round(e.correct/e.total*100) : 0;
    if (m.scoreType==="dok")     return Math.round(((e.dok1?1:0)+(e.dok2?1:0)+(e.dok3?1:0)+(e.dok4?1:0))/4*100);
    return 0;
  }
  function peerAvg(students, station, excludeId) {
    var peers=students.filter(function(s){ return s.station===station&&s.id!==excludeId&&s.entries.length; });
    if (!peers.length) return null;
    var sum=0, cnt=0;
    peers.forEach(function(s){ sum+=getScore(s.entries[s.entries.length-1],station); cnt++; });
    return Math.round(sum/cnt);
  }
  function trendArrow(entries, station) {
    if (entries.length<2) return "\u25CB";
    var d=getScore(entries[entries.length-1],station)-getScore(entries[entries.length-2],station);
    return d>=5?"\u2191":d<=-5?"\u2193":"\u2192";
  }

  function uid() { return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }

  function renderInto(el) {
    var data = load();
    var students = data.students;
    var groups = {"Sight Words":[],"Fluency":[],"Comprehension":[]};
    students.forEach(function(s){ if(groups[s.station]) groups[s.station].push(s); });
    var sel = students.find(function(s){ return s.id===_sid; });
    if (!sel && students.length) { _sid = students[0].id; sel = students[0]; }

    var h = "<div class='trk-wrap'>";

    // LEFT: roster
    h += "<div class='trk-roster'>";
    h += "<div class='trk-roster-hd'><span>Students (" + students.length + ")</span>";
    h += "<button id='trk-add-btn' class='trk-btn-sm'>+ Add</button></div>";
    h += "<div id='trk-form' style='display:none' class='trk-add-form'>";
    h += "<input id='trk-name' class='trk-inp' placeholder='Student name'>";
    h += "<div class='trk-frow'><label>WIDA Reading<input id='trk-wr' type='number' step='0.1' min='1' max='6' placeholder='e.g. 2.4' class='trk-inp-sm'></label>";
    h += "<label>WIDA Speaking<input id='trk-ws' type='number' step='0.1' min='1' max='6' placeholder='e.g. 3.1' class='trk-inp-sm'></label></div>";
    h += "<div class='trk-frow'><button id='trk-save-s' class='trk-btn-pri'>Save</button>";
    h += "<button id='trk-cancel' class='trk-btn-sm'>Cancel</button></div></div>";

    ["Sight Words","Fluency","Comprehension"].forEach(function(station) {
      var m = STATION_META[station]; var grp = groups[station];
      h += "<div class='trk-grp'><div class='trk-grp-lbl trk-" + m.cls + "'>" + m.icon + " " + station + " <span style='opacity:.6;font-weight:400'>("+grp.length+")</span></div>";
      if (!grp.length) { h += "<div class='trk-empty-s'>No students</div>"; }
      grp.forEach(function(s){
        var t = trend(s.entries);
        var last = s.entries.length ? s.entries[s.entries.length-1].wpm + " WPM" : "\u2014";
        h += "<div class='trk-scard" + (s.id===_sid?" active":"") + "' data-sid='" + s.id + "'>";
        h += "<div class='trk-sname'>" + s.name + "</div>";
        h += "<div class='trk-smeta'>" + last + " " + (t==="up"?"\u2191":t==="down"?"\u2193":t==="flat"?"\u2192":"\u25CB") + "</div></div>";
      });
      h += "</div>";
    });
    h += "</div>"; // end roster

    // RIGHT: detail
    h += "<div class='trk-detail'>";
    if (!sel) {
      h += "<div class='trk-empty-state'>Add a student above to begin tracking.<br><small>WIDA Reading + Speaking scores auto-assign a station using the placement rules from your dashboard_specs_and_stories.md.</small></div>";
    } else {
      var m2 = STATION_META[sel.station];
      h += "<div class='trk-dhead'><div>";
      h += "<h2 class='trk-dname'>" + sel.name + "</h2>";
      h += "<span class='trk-sbadge trk-" + m2.cls + "'>" + m2.icon + " " + sel.station + "</span> ";
      h += "<span class='trk-chip'>WIDA R: " + sel.wr + "</span> <span class='trk-chip'>WIDA S: " + sel.ws + "</span></div>";
      h += "<button class='trk-btn-del' data-del='" + sel.id + "'>Remove Student</button></div>";

      // Per-station score form
      h += "<div class='trk-log-form'><div class='trk-frow'>";
      h += "<label>Date<input id='trk-date' type='date' class='trk-inp-sm' value='" + new Date().toISOString().slice(0,10) + "'></label>";
      if (m2.scoreType==="wpm") {
        h += "<label>WPM<input id='trk-wpm' type='number' min='1' max='400' placeholder='e.g. 78' class='trk-inp-sm'></label>";
        h += "<label>Errors<input id='trk-errors' type='number' min='0' max='200' placeholder='e.g. 3' class='trk-inp-sm'></label>";
        h += "<label>Total Words<input id='trk-totalw' type='number' min='1' max='400' placeholder='e.g. 81' class='trk-inp-sm'></label>";
        h += "<label>Passage<select id='trk-story' class='trk-sel'>";
        STORIES.forEach(function(s){ h += "<option value='" + s.id + "'>Story " + s.id + ": " + s.title + "</option>"; });
        h += "</select></label>";
      } else if (m2.scoreType==="mastery") {
        h += "<label>Words Correct<input id='trk-correct' type='number' min='0' max='300' placeholder='e.g. 18' class='trk-inp-sm'></label>";
        h += "<label>Total Tested<input id='trk-total' type='number' min='1' max='300' placeholder='e.g. 20' class='trk-inp-sm'></label>";
      } else if (m2.scoreType==="dok") {
        h += "<label>Passage<select id='trk-story' class='trk-sel'>";
        STORIES.forEach(function(s){ h += "<option value='" + s.id + "'>Story " + s.id + ": " + s.title + "</option>"; });
        h += "</select></label>";
      }
      h += "</div>";
      if (m2.scoreType==="dok") {
        h += "<div id='trk-dok-box' class='trk-dok-box'>";
        STORIES[0].dok.forEach(function(dq,i){
          h += "<label class='trk-dok-q'><input type='checkbox' id='trk-dok" + (i+1) + "'>";
          h += "<span class='trk-dok-badge trk-dok-l" + dq.lvl + "'>DOK " + dq.lvl + "</span>";
          h += "<span>" + dq.q + "</span></label>";
        });
        h += "</div>";
      }
      var avg2 = peerAvg(students, sel.station, sel.id);
      h += "<div class='trk-frow'><label>Notes<input id='trk-notes' class='trk-inp-sm' placeholder='Optional teacher notes'></label>";
      h += "<button id='trk-log' class='trk-btn-pri' data-sid='" + sel.id + "'>Log Score</button></div></div>";

      // Chart
      var scoreLabel = m2.scoreType==="wpm"?"WPM":m2.scoreType==="mastery"?"Mastery %":"DOK %";
      h += "<div class='trk-chart-box'><canvas id='trk-canvas' width='540' height='200'></canvas>";
      h += "<div class='trk-legend'><span class='trk-leg-line'></span> " + scoreLabel + " ";
      h += "<span class='trk-leg-goal'></span> Goal (" + m2.goalLabel + ")";
      if (avg2!==null) h += " <span class='trk-leg-avg'></span> Peer Avg (" + avg2 + (m2.scoreType==="wpm"?" WPM":"%") + ")";
      h += "</div></div>";

      // History table
      h += "<div class='trk-hist-box'><div class='trk-hist-title'>Score History</div>";
      if (!sel.entries.length) {
        h += "<p class='trk-empty-s'>No scores yet.</p>";
      } else {
        var sorted=sel.entries.slice().sort(function(a,b){return new Date(b.date)-new Date(a.date);});
        h += "<table class='trk-tbl'><thead><tr><th>Date</th><th>Detail</th><th>Score</th>";
        if (m2.scoreType==="dok") h += "<th>Flag</th>";
        h += "<th>Notes</th><th></th></tr></thead><tbody>";
        sorted.forEach(function(e) {
          var story=STORIES.find(function(s){return s.id===e.storyId;})||null;
          var disp="", detail=story?story.title:"\u2014";
          if (m2.scoreType==="wpm") {
            var acc=e.totalWords?Math.round(((e.totalWords-e.errors)/e.totalWords)*100):null;
            disp="<strong>"+e.wpm+"</strong> WPM"+(acc!==null?" / "+acc+"% acc":"");
          } else if (m2.scoreType==="mastery") {
            var pct=e.total?Math.round(e.correct/e.total*100):0;
            disp="<strong>"+pct+"%</strong> ("+e.correct+"/"+e.total+")"; detail="Sight words";
          } else if (m2.scoreType==="dok") {
            var dp=Math.round(((e.dok1?1:0)+(e.dok2?1:0)+(e.dok3?1:0)+(e.dok4?1:0))/4*100);
            disp="<strong>"+dp+"%</strong> "+(e.dok1?"1\u2713":"1\u2717")+" "+(e.dok2?"2\u2713":"2\u2717")+" "+(e.dok3?"3\u2713":"3\u2717")+" "+(e.dok4?"4\u2713":"4\u2717");
          }
          h += "<tr><td>"+e.date+"</td><td>"+detail+"</td><td>"+disp+"</td>";
          if (m2.scoreType==="dok") {
            var f=dokFlag(e.dok1,e.dok2,e.dok3,e.dok4);
            h += "<td><span class='trk-flag "+f.cls+"' title='"+f.tip+"'>"+f.label+"</span></td>";
          }
          h += "<td style='font-size:.8rem;color:var(--text-muted)'>"+(e.notes||"")+ "</td>";
          h += "<td><button class='trk-del-e' data-sid='"+sel.id+"' data-eid='"+e.id+"'>&times;</button></td></tr>";
        });
        h += "</tbody></table>";
      }
      h += "</div>";
    }
    h += "</div></div>";
    h += "<div style='padding:.6rem 1rem'><button id='trk-passages-btn' class='trk-btn-sm'> View / Print Passages</button></div>";
    el.innerHTML = h;

    if (sel&&sel.entries.length) { drawChart(sel, STATION_META[sel.station], avg2); }
    wireEvents(el, sel, load().students);
  }

  function drawChart(student, meta, avgScore) {
    var canvas=document.getElementById("trk-canvas");
    if (!canvas) return;
    var ctx=canvas.getContext("2d"), W=canvas.width, H=canvas.height, pad={t:24,r:16,b:36,l:48};
    var entries=student.entries.slice().sort(function(a,b){return new Date(a.date)-new Date(b.date);});
    if (!entries.length) return;
    ctx.clearRect(0,0,W,H); ctx.fillStyle="#f8faff"; ctx.fillRect(0,0,W,H);
    var scores=entries.map(function(e){return getScore(e,student.station);});
    var goal=meta.goal;
    var maxV=Math.max(goal*1.2,Math.max.apply(null,scores)*1.1,meta.scoreType==="wpm"?40:20);
    var minV=Math.max(0,Math.min.apply(null,scores)-10);
    function xp(i){return pad.l+(i/Math.max(entries.length-1,1))*(W-pad.l-pad.r);}
    function yp(v){return pad.t+(1-(v-minV)/(maxV-minV))*(H-pad.t-pad.b);}
    ctx.strokeStyle="#e2e8f0"; ctx.lineWidth=1;
    for (var g=0;g<=4;g++){
      var gv=minV+(g/4)*(maxV-minV), gy=yp(gv);
      ctx.beginPath();ctx.moveTo(pad.l,gy);ctx.lineTo(W-pad.r,gy);ctx.stroke();
      ctx.fillStyle="#94a3b8";ctx.font="10px sans-serif";ctx.textAlign="right";
      ctx.fillText(Math.round(gv)+(meta.scoreType!=="wpm"?"%":""),pad.l-4,gy+4);
    }
    ctx.fillStyle="#64748b";ctx.font="9px sans-serif";ctx.textAlign="center";
    entries.forEach(function(e,i){
      if(entries.length<=10||i%Math.ceil(entries.length/10)===0) ctx.fillText(e.date.slice(5),xp(i),H-pad.b+14);
    });
    ctx.strokeStyle="#f59f00";ctx.lineWidth=1.5;ctx.setLineDash([5,4]);
    ctx.beginPath();ctx.moveTo(pad.l,yp(goal));ctx.lineTo(W-pad.r,yp(goal));ctx.stroke();
    if (avgScore!==null&&!isNaN(avgScore)&&avgScore>=minV&&avgScore<=maxV) {
      ctx.strokeStyle="#a78bfa";ctx.setLineDash([3,3]);
      ctx.beginPath();ctx.moveTo(pad.l,yp(avgScore));ctx.lineTo(W-pad.r,yp(avgScore));ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.strokeStyle="#3b5bdb";ctx.lineWidth=2.5;ctx.lineJoin="round";
    ctx.beginPath();
    entries.forEach(function(e,i){var s=getScore(e,student.station); i===0?ctx.moveTo(xp(i),yp(s)):ctx.lineTo(xp(i),yp(s));});
    ctx.stroke();
    entries.forEach(function(e,i){
      var s=getScore(e,student.station), prev=entries[i-1], ps=prev?getScore(prev,student.station):s;
      var c=!prev?"#3b5bdb":s-ps>=5?"#16a34a":s-ps<=-5?"#dc2626":"#d97706";
      ctx.fillStyle=c;ctx.beginPath();ctx.arc(xp(i),yp(s),5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle="#1e293b";ctx.font="bold 10px sans-serif";ctx.textAlign="center";
      ctx.fillText(Math.round(s)+(meta.scoreType!=="wpm"?"%":""),xp(i),yp(s)-9);
    });
  }

  function wireEvents(container, sel, students) {
    var addBtn=document.getElementById("trk-add-btn"), form=document.getElementById("trk-form");
    if(addBtn&&form) addBtn.addEventListener("click",function(){ form.style.display=form.style.display==="none"?"block":"none"; });
    var cancel=document.getElementById("trk-cancel");
    if(cancel) cancel.addEventListener("click",function(){ form.style.display="none"; });
    var saveS=document.getElementById("trk-save-s");
    if(saveS) saveS.addEventListener("click",function(){
      var name=(document.getElementById("trk-name").value||"").trim();
      var wr=parseFloat(document.getElementById("trk-wr").value);
      var ws=parseFloat(document.getElementById("trk-ws").value);
      if(!name){alert("Enter a student name.");return;}
      if(isNaN(wr)||wr<1||wr>6){alert("WIDA Reading must be 1\u20136.");return;}
      if(isNaN(ws)||ws<1||ws>6){alert("WIDA Speaking must be 1\u20136.");return;}
      var d=load(); var s={id:uid(),name:name,wr:wr,ws:ws,station:assignStation(wr,ws),entries:[]};
      d.students.push(s); save(d); _sid=s.id; renderInto(container);
    });
    container.querySelectorAll(".trk-scard").forEach(function(card){
      card.addEventListener("click",function(){ _sid=card.dataset.sid; renderInto(container); });
    });
    var storySelect=document.getElementById("trk-story"), dokBox=document.getElementById("trk-dok-box");
    if(storySelect&&dokBox) storySelect.addEventListener("change",function(){
      var story=STORIES.find(function(s){return s.id===parseInt(storySelect.value,10);});
      if(!story) return;
      var qh="";
      story.dok.forEach(function(dq,i){
        qh+="<label class='trk-dok-q'><input type='checkbox' id='trk-dok"+(i+1)+"'>";
        qh+="<span class='trk-dok-badge trk-dok-l"+dq.lvl+"'>DOK "+dq.lvl+"</span><span>"+dq.q+"</span></label>";
      });
      dokBox.innerHTML=qh;
    });
    var logBtn=document.getElementById("trk-log");
    if(logBtn&&sel) logBtn.addEventListener("click",function(){
      var date=document.getElementById("trk-date").value;
      if(!date){alert("Select a date.");return;}
      var d=load(), student=d.students.find(function(s){return s.id===sel.id;});
      if(!student) return;
      var m=STATION_META[student.station], entry={id:uid(),date:date};
      var notesEl=document.getElementById("trk-notes");
      entry.notes=(notesEl&&notesEl.value.trim())||"";
      if(m.scoreType==="wpm"){
        var wpm=parseInt(document.getElementById("trk-wpm").value);
        if(isNaN(wpm)||wpm<1||wpm>400){alert("WPM must be 1\u2013400.");return;}
        entry.wpm=wpm;
        entry.errors=parseInt(document.getElementById("trk-errors").value)||0;
        entry.totalWords=parseInt(document.getElementById("trk-totalw").value)||0;
        entry.storyId=parseInt(document.getElementById("trk-story").value);
      } else if(m.scoreType==="mastery"){
        var cor=parseInt(document.getElementById("trk-correct").value);
        var tot=parseInt(document.getElementById("trk-total").value);
        if(isNaN(cor)||cor<0){alert("Enter words correct.");return;}
        if(isNaN(tot)||tot<1){alert("Enter total tested.");return;}
        if(cor>tot){alert("Correct cannot exceed total.");return;}
        entry.correct=cor; entry.total=tot;
      } else if(m.scoreType==="dok"){
        var cb1=document.getElementById("trk-dok1"),cb2=document.getElementById("trk-dok2");
        var cb3=document.getElementById("trk-dok3"),cb4=document.getElementById("trk-dok4");
        entry.dok1=!!(cb1&&cb1.checked); entry.dok2=!!(cb2&&cb2.checked);
        entry.dok3=!!(cb3&&cb3.checked); entry.dok4=!!(cb4&&cb4.checked);
        entry.storyId=parseInt(document.getElementById("trk-story").value);
      }
      student.entries.push(entry); save(d); renderInto(container);
    });
    container.querySelectorAll("[data-del]").forEach(function(btn){
      btn.addEventListener("click",function(){
        if(!confirm("Remove this student and all their data?")) return;
        var d=load(); d.students=d.students.filter(function(s){return s.id!==btn.dataset.del;});
        save(d); _sid=null; renderInto(container);
      });
    });
    container.querySelectorAll(".trk-del-e").forEach(function(btn){
      btn.addEventListener("click",function(){
        var d=load(), student=d.students.find(function(s){return s.id===btn.dataset.sid;});
        if(student) student.entries=student.entries.filter(function(e){return e.id!==btn.dataset.eid;});
        save(d); renderInto(container);
      });
    });
    var passBtn=document.getElementById("trk-passages-btn");
    if(passBtn) passBtn.addEventListener("click",function(){ renderPassages(container); });
  }

  function printStudentCopy(id) {
    var s = null;
    for (var i = 0; i < STORIES.length; i++) { if (STORIES[i].id === id) { s = STORIES[i]; break; } }
    if (!s) return;
    var html = "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>" + s.title + "</title>"
      + "<style>body{font-family:Georgia,serif;max-width:620px;margin:2.5rem auto;padding:0 1.5rem;font-size:13pt;line-height:1.75;color:#111;}"
      + "h1{font-size:1.15rem;font-weight:700;margin-bottom:.2rem;}h2{font-size:.9rem;font-weight:400;color:#555;margin:0 0 1.25rem;}"
      + ".passage{margin-bottom:1.75rem;border-bottom:1px solid #ccc;padding-bottom:1.5rem;}"
      + ".q-blk{margin-bottom:1rem;}.q-lbl{font-weight:700;font-size:.95rem;margin-bottom:.3rem;display:flex;gap:.5rem;}"
      + ".q-dok{font-size:.78rem;background:#ede9fe;color:#6d28d9;border-radius:10px;padding:.1rem .45rem;font-weight:700;flex-shrink:0;align-self:flex-start;margin-top:.1rem;}"
      + ".ans-line{border-bottom:1px solid #bbb;min-height:1.4rem;margin:.2rem 0 .35rem;}"
      + ".print-btn{background:#1e3a8a;color:#fff;border:none;border-radius:6px;padding:.42rem 1rem;font-size:.88rem;cursor:pointer;margin-top:.75rem;}"
      + "@media print{.print-btn{display:none!important;}.name-row{border-bottom:1px solid #999;}}</style></head>"
      + "<body><h1>Story " + s.id + ": " + s.title + "</h1>"
      + "<h2>" + s.wc + " words &nbsp;&bull;&nbsp; <span class='name-row'>Name: _________________________________&nbsp;&nbsp;&nbsp; Date: ___________</span></h2>"
      + "<div class='passage'>" + s.passage + "</div>"
      + "<div class='questions'>";
    s.dok.forEach(function(dq, i) {
      html += "<div class='q-blk'><div class='q-lbl'><span class='q-dok'>DOK " + dq.lvl + "</span><span>" + (i+1) + ". " + dq.q + "</span></div><div class='ans-line'></div><div class='ans-line'></div></div>";
    });
    html += "</div><button class='print-btn' onclick='window.print()'>&#128438; Print Student Copy</button></body></html>";
    var w = window.open("","_blank","width=720,height=900");
    if (w) { w.document.write(html); w.document.close(); }
  }

  function renderPassages(container) {
    var h="<div class='trk-passages'>";
    h+="<div class='trk-pass-hd'><strong>22 Expanded Passages + DOK 1\u20134 Questions</strong> ";
    h+="<button id='trk-print-pass' class='trk-btn-sm'>Print</button> <button id='trk-back-btn' class='trk-btn-sm'>\u2190 Back</button></div>";
    h+="<div style='font-size:.78rem;color:#64748b;padding:.2rem 0 .6rem'>Flags: passes DOK 1+2, misses 3+4 = Reasoning Weakness | misses 1+2, passes 3+4 = Recall Weakness | passes all = Balanced</div>";
    STORIES.forEach(function(s){
      h+="<div class='trk-pass-card'>";
      h+="<div class='trk-pass-title' style='display:flex;justify-content:space-between;align-items:center;gap:.4rem'><span>Story "+s.id+": "+s.title+"</span><button class='trk-stucopy-btn trk-btn-sm' data-sid='"+s.id+"' style='font-size:.72rem;flex-shrink:0'>&#128438; Student Copy</button></div>";
      h+="<p class='trk-pass-text'>"+s.passage+"</p>";
      h+="<div class='trk-pass-qs'>";
      s.dok.forEach(function(dq){
        h+="<div class='trk-pass-q'><span class='trk-dok-badge trk-dok-l"+dq.lvl+"'>DOK "+dq.lvl+"</span> "+dq.q+" <span style='color:#64748b;font-style:italic'>\u2192 "+dq.a+"</span></div>";
      });
      h+="</div></div>";
    });
    h+="</div>";
    container.innerHTML=h;
    var p=document.getElementById("trk-print-pass");
    if(p) p.addEventListener("click",function(){ window.print(); });
    var b=document.getElementById("trk-back-btn");
    if(b) b.addEventListener("click",function(){ renderInto(container); });
    container.querySelectorAll(".trk-stucopy-btn").forEach(function(btn){
      btn.addEventListener("click",function(){ printStudentCopy(parseInt(this.dataset.sid,10)); });
    });
  }

  window.ELL_TRACKER = { render: renderInto };
}());
