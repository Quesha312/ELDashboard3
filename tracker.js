// tracker.js — ELL Student Data Tracker v3
// Expanded passages + DOK 1-4 from Grade 3 Reading Rubric PDF
// Sight Words: mastery % | Fluency: WPM+Accuracy+Errors | Comprehension: DOK 1-4 + auto-flag
(function () {
  "use strict";

  var STORIES = [
    {id:1,title:"The Lost Kitten",
     passage:"Max had just finished watering the garden when he heard a soft, shaky sound coming from the bushes. Curious, he bent down and spotted a tiny, wet kitten curled up under a big green bush. Its fur was muddy, and it shivered each time the wind blew. Max gently scooped the kitten into his arms and carried it inside. He dried it with a soft yellow towel and warmed some milk. As the kitten drank, its tail twitched happily, and soon it began to purr loudly, feeling safe at last.",
     dok:[{lvl:1,pts:1,q1:"Who found the kitten?",a1:"Max",q2:"Where was the kitten hiding?",a2:"In the bushes"},{lvl:2,pts:2,q1:"Why was the kitten shivering?",a1:"It was wet and scared",q2:"What did Max do after bringing it inside?",a2:"Dried it and gave milk"},{lvl:3,pts:3,q1:"What does Max's behavior show about his personality?",a1:"He is patient and responsible",q2:"Why does the author describe the kitten's tail flicking?",a2:"To show it felt safe and relieved"},{lvl:4,pts:4,q1:"Was Max's response the best way to help?",a1:"Open - connects Max's actions to responsible animal care",q2:"Compare caring for a found animal to professional rescue.",a2:"Both require responsibility and care"}]},
    {id:2,title:"The Red Kite",
     passage:"The wind blew hard on Saturday afternoon, rattling the tall oak trees in the park. Lily held her new red kite tightly as she ran across the open grass. The kite lifted into the sky, soaring higher and higher until it touched the white clouds. Lily laughed as she felt the string pull against her hands. She had practiced flying smaller kites before, but this one was special. It was a gift from her grandmother, who told her that kites remind us to dream big and reach high.",
     dok:[{lvl:1,pts:1,q1:"Who is the main character?",a1:"Lily",q2:"When did she fly her kite?",a2:"Saturday afternoon"},{lvl:2,pts:2,q1:"What challenge did Lily face?",a1:"The string tangled and kite dipped",q2:"How did she solve it?",a2:"Untangled string and tried again"},{lvl:3,pts:3,q1:"What does Lily's persistence show?",a1:"Determination and resilience",q2:"Why is the grandmother's gift meaningful?",a2:"It symbolizes dreaming big"},{lvl:4,pts:4,q1:"How does kite flying connect to life goals?",a1:"Teaches persistence and reaching high",q2:"Compare kite flying to another activity requiring persistence.",a2:"Both need practice and effort"}]},
    {id:3,title:"Fresh Apples",
     passage:"Sam climbed up the old wooden ladder to reach the top branches of the apple tree. The sun warmed his back as he carefully picked five juicy red apples and placed them in his basket. He imagined the sweet smell of pie baking in the oven. His mom had promised to teach him how to mix sugar, cinnamon, and flour to make the crust. Sam loved helping in the kitchen, especially when the recipe included apples from their own tree. He smiled, knowing the pie would taste even better because he had picked the fruit himself.",
     dok:[{lvl:1,pts:1,q1:"Who gathered the apples?",a1:"Sam",q2:"How many apples did he pick?",a2:"Five"},{lvl:2,pts:2,q1:"What was the apples' purpose?",a1:"To make a pie",q2:"What happened to one apple?",a2:"It rolled away but Sam retrieved it"},{lvl:3,pts:3,q1:"What does Sam's effort show?",a1:"Pride and responsibility",q2:"Why is the family meal important?",a2:"It strengthens family bonds"},{lvl:4,pts:4,q1:"How does helping with chores build character?",a1:"It teaches responsibility and teamwork",q2:"Compare homegrown apples to store-bought ones.",a2:"Homegrown apples connect families to nature"}]},
    {id:4,title:"The Little Frog",
     passage:"A green frog sat on a wet log near the pond, watching the ripples spread across the water. It saw a tiny black fly buzzing in the air. With lightning speed, the frog shot out its long sticky tongue and caught the bug for lunch. The frog's eyes blinked slowly as it swallowed, then it hopped closer to the water's edge. The pond was full of life—dragonflies zipped past, and fish splashed near the surface. The frog felt safe in its home, surrounded by food and friends.",
     dok:[{lvl:1,pts:1,q1:"What animal is the story about?",a1:"A frog",q2:"Where was the frog sitting?",a2:"On a wet log near the pond"},{lvl:2,pts:2,q1:"What did the frog try to catch?",a1:"A fly",q2:"What happened on the first attempt?",a2:"The fly escaped"},{lvl:3,pts:3,q1:"What does the frog's persistence show?",a1:"Patience and determination",q2:"Why is timing important for the frog?",a2:"It helps catch food successfully"},{lvl:4,pts:4,q1:"How does the frog's behavior relate to human problem-solving?",a1:"Both require patience and persistence",q2:"Compare the frog's pond to another animal's habitat.",a2:"Each habitat provides food and safety"}]},
    {id:5,title:"Baking Sweet Cookies",
     passage:"Ben mixed sweet sugar, creamy butter, and white flour in a large blue bowl. He dropped round scoops of dough onto a flat baking sheet. As the oven warmed, Ben imagined the smell of chocolate filling the kitchen. Soon, the cookies baked into golden circles, and the air smelled delicious. His little sister peeked into the kitchen, asking if she could taste one. Ben smiled and told her they had to cool first. Baking was his favorite hobby because it made the whole family happy.",
     dok:[{lvl:1,pts:1,q1:"Who baked cookies with Ben?",a1:"His grandmother",q2:"What kind of cookies did they make?",a2:"Chocolate chip"},{lvl:2,pts:2,q1:"What mistake did Ben make?",a1:"He spilled sugar",q2:"How did his grandmother respond?",a2:"She said mistakes happen and helped clean up"},{lvl:3,pts:3,q1:"What does baking teach Ben?",a1:"Patience and teamwork",q2:"Why is sharing cookies important?",a2:"It brings family joy"},{lvl:4,pts:4,q1:"How does baking connect to learning life skills?",a1:"It teaches responsibility and cooperation",q2:"Compare baking with family to baking alone.",a2:"Baking with family builds connection and happiness"}]},
    {id:6,title:"The Busy Ants",
     passage:"A line of tiny brown ants marched across the hot sidewalk, each carrying heavy crumbs of bread back to their small dirt hill. The ants worked together all afternoon, never stopping to rest. Their teamwork made the food pile grow very big, enough to feed the whole colony. Some ants dug tunnels while others guarded the entrance. Watching them, it seemed like the ants had a plan, even though they never spoke. Their busy movements showed how important cooperation is in nature.",
     dok:[{lvl:1,pts:1,q1:"What insects are in the story?",a1:"Ants",q2:"Where did they work?",a2:"Near a dirt hill"},{lvl:2,pts:2,q1:"What did the ants carry?",a1:"Crumbs",q2:"Why did some ants dig tunnels?",a2:"To make the hill stronger"},{lvl:3,pts:3,q1:"What does the ants' teamwork show?",a1:"Cooperation and persistence",q2:"Why did some ants stand guard?",a2:"To protect the colony from danger"},{lvl:4,pts:4,q1:"How does teamwork help both ants and humans?",a1:"It allows groups to achieve more together",q2:"Compare ant teamwork to a human group project.",a2:"Both require cooperation and shared effort"}]},
    {id:7,title:"The Lost Key",
     passage:"Anna searched everywhere for her shiny silver key. She looked under the soft rug, inside her deep coat pockets, and even behind the couch cushions. Finally, she spotted it sitting on top of the dark kitchen table. Relief washed over her as she picked it up. The key opened the small wooden box where she kept her favorite treasures. Inside were letters from friends, a seashell from the beach, and a photo of her family. Anna smiled, glad she had found the key to her memories.",
     dok:[{lvl:1,pts:1,q1:"Who found the box?",a1:"Anna",q2:"Where was the key?",a2:"On the kitchen table"},{lvl:2,pts:2,q1:"What did the box contain?",a1:"Letters, seashells, and a photograph",q2:"Why was Anna excited?",a2:"She unlocked the box and found treasures"},{lvl:3,pts:3,q1:"What does the box symbolize?",a1:"Family memories and history",q2:"How did Anna feel after opening it?",a2:"Proud and connected to her grandmother"},{lvl:4,pts:4,q1:"Why are memories more valuable than gold?",a1:"They hold emotional meaning and connection",q2:"Compare Anna's treasure to something you value.",a2:"Both represent personal importance"}]},
    {id:8,title:"Swimming Pool Fun",
     passage:"The summer sun was hot, so Leo jumped into the cool blue pool water. He splashed his little sister and tossed a bright beach ball high into the air. They laughed as the ball bounced across the water. After a while, Leo noticed his fingers looked like wrinkled raisins from staying in the pool too long. He climbed out, grabbed a towel, and sat in the shade. His sister joined him, and together they enjoyed popsicles, cooling off after their fun swim.",
     dok:[{lvl:1,pts:1,q1:"Who went swimming?",a1:"Leo and his sister",q2:"What did they play with?",a2:"A beach ball"},{lvl:2,pts:2,q1:"Why were Leo's fingers wrinkled?",a1:"He had been swimming too long",q2:"What did they do after swimming?",a2:"Dried off and ate popsicles"},{lvl:3,pts:3,q1:"What does swimming teach Leo?",a1:"Bonding and fun with family",q2:"Why is playing together important?",a2:"It strengthens relationships"},{lvl:4,pts:4,q1:"How does swimming compare to other family activities?",a1:"Both build connection and joy",q2:"Why is balance important in fun activities?",a2:"Too much can cause problems; balance keeps it healthy"}]},
    {id:9,title:"Planting Seeds",
     passage:"Maya dug a small hole in the rich dark dirt with her shiny metal shovel. She dropped a tiny sunflower seed inside and covered it gently. Every morning, she poured clean water over the spot. Soon, a green sprout pushed through the soil, reaching toward the sun. Maya watched it grow taller each day, proud of the plant she had cared for. She imagined the bright yellow petals opening wide, filling the garden with color. Planting seeds taught her patience and responsibility.",
     dok:[{lvl:1,pts:1,q1:"Who planted the seed?",a1:"Maya",q2:"What kind of seed was it?",a2:"Sunflower"},{lvl:2,pts:2,q1:"What tool did Maya use?",a1:"A shovel",q2:"What did she do daily?",a2:"Watered the seed"},{lvl:3,pts:3,q1:"What does the sunflower symbolize?",a1:"Growth and patience",q2:"How did Maya feel when it bloomed?",a2:"Proud and accomplished"},{lvl:4,pts:4,q1:"How does caring for plants teach responsibility?",a1:"It requires daily effort and patience",q2:"Compare caring for a plant to caring for a pet.",a2:"Both need attention and consistency"}]},
    {id:10,title:"The Train Ride",
     passage:"The big black train blew its loud horn as it pulled into the busy station. Mark stepped inside and found a seat next to a clear window. As the train started moving, he watched the green trees rush past. The rhythm of the wheels made a steady sound, and Mark felt excited to travel. He imagined all the places the train might take him—mountains, cities, or even the ocean. The ride was more than just a trip; it was an adventure waiting to happen.",
     dok:[{lvl:1,pts:1,q1:"Who rode the train?",a1:"Mark",q2:"Where did he sit?",a2:"By the window"},{lvl:2,pts:2,q1:"What did Mark see outside?",a1:"Trees, rivers, and towns",q2:"How did the train sound make him feel?",a2:"Excited and curious"},{lvl:3,pts:3,q1:"What does Mark's imagination show?",a1:"Curiosity and creativity",q2:"Why is the journey important?",a2:"It teaches enjoyment beyond the destination"},{lvl:4,pts:4,q1:"How does train travel compare to other travel?",a1:"It allows observation and reflection",q2:"Why is enjoying the journey valuable in life?",a2:"It makes experiences meaningful, not just goals"}]},
    {id:11,title:"The Missing Homework",
     passage:"Jake opened his heavy backpack, but his math paper was gone. He remembered leaving it completed on his desk at home. His friendly teacher gave him an extra page so he could finish it during lunch. Jake felt nervous at first, but then he realized mistakes happen. He worked carefully, determined to solve each problem again. By the end of lunch, Jake had finished the assignment, proud that he didn't give up.",
     dok:[{lvl:1,pts:1,q1:"Who forgot his homework?",a1:"Jake",q2:"Where was the homework left?",a2:"On his desk at home"},{lvl:2,pts:2,q1:"How did Jake feel?",a1:"Nervous and worried",q2:"What did the teacher do?",a2:"Gave him an extra page to complete"},{lvl:3,pts:3,q1:"What does Jake's effort show?",a1:"Determination and responsibility",q2:"Why did the teacher praise him?",a2:"For fixing his mistake with effort"},{lvl:4,pts:4,q1:"How does honesty help in school?",a1:"It builds trust and responsibility",q2:"Compare Jake's response to how you would react.",a2:"Both involve facing mistakes honestly"}]},
    {id:12,title:"Camping at Night",
     passage:"The dark woods were quiet as the family sat around the glowing campfire. Dad roasted sweet marshmallows on a long stick, and the children laughed as the sticky treats melted. Above them, millions of bright stars shone in the sky. The family told stories, sang songs, and enjoyed the peaceful night together. Camping made them feel close, surrounded by nature and each other's company.",
     dok:[{lvl:1,pts:1,q1:"Where did the family camp?",a1:"Near a lake",q2:"What did they roast?",a2:"Marshmallows"},{lvl:2,pts:2,q1:"What sounds did they hear?",a1:"Crickets chirping",q2:"How did they feel at night?",a2:"Peaceful and safe"},{lvl:3,pts:3,q1:"What does camping show about family?",a1:"It builds closeness and joy",q2:"Why are simple moments important?",a2:"They create lasting memories"},{lvl:4,pts:4,q1:"How does camping compare to staying home?",a1:"Camping connects families to nature",q2:"Why is outdoor time valuable?",a2:"It refreshes and strengthens relationships"}]},
    {id:13,title:"The New Library Book",
     passage:"Elena walked into the school library and picked a thick book about massive dinosaurs. She checked it out at the front desk and read it during recess. The pictures of the T-Rex were scary but exciting. Elena loved learning new facts and sharing them with her friends. Reading made her feel like she was traveling back in time to when dinosaurs ruled the earth.",
     dok:[{lvl:1,pts:1,q1:"Who visited the library?",a1:"Elena",q2:"What kind of book did she choose?",a2:"A book about dinosaurs"},{lvl:2,pts:2,q1:"What did the book contain?",a1:"Illustrations and facts",q2:"How did Elena feel about the dinosaurs?",a2:"Fascinated, though some looked frightening"},{lvl:3,pts:3,q1:"What does Elena's interest show?",a1:"Curiosity and eagerness to learn",q2:"Why are books powerful?",a2:"They open doors to new worlds"},{lvl:4,pts:4,q1:"How does reading compare to visiting a museum?",a1:"Both teach and inspire learning",q2:"Why is curiosity important?",a2:"It drives discovery and growth"}]},
    {id:14,title:"A Puppy in the Rain",
     passage:"Heavy raindrops began to fall from the gray clouds. A small brown puppy ran fast to hide under the wooden porch. It shook its wet fur and waited safely until the storm passed. When the sun came out, the puppy barked happily and chased a butterfly across the yard. The storm had frightened it, but the sunshine brought joy again.",
     dok:[{lvl:1,pts:1,q1:"What animal came to the porch?",a1:"A puppy",q2:"What color was it?",a2:"Brown"},{lvl:2,pts:2,q1:"Why was the puppy shivering?",a1:"It was wet and cold",q2:"What did the puppy do after the rain?",a2:"Shook itself dry and chased a butterfly"},{lvl:3,pts:3,q1:"What does the puppy's change show?",a1:"Fear can turn into joy",q2:"Why did the family smile?",a2:"They saw the puppy's happiness"},{lvl:4,pts:4,q1:"How do animals and humans react to storms?",a1:"Both feel fear but find relief afterward",q2:"Why are challenges important?",a2:"They lead to growth and brighter moments"}]},
    {id:15,title:"The Winter Snowman",
     passage:"Cold white snow fell from the sky all morning long. Tom rolled three large snowballs and stacked them high. He used a sharp orange carrot for a nose and two black buttons for eyes. When he finished, the snowman looked cheerful, standing tall in the yard. Tom felt proud of his creation and invited his friends to see it.",
     dok:[{lvl:1,pts:1,q1:"Who built the snowman?",a1:"Tom",q2:"How many snowballs did he use?",a2:"Three"},{lvl:2,pts:2,q1:"What did Tom use for the nose?",a1:"A carrot",q2:"What did he use for the eyes?",a2:"Buttons"},{lvl:3,pts:3,q1:"What does the snowman show about Tom?",a1:"Creativity and pride",q2:"Why did his family admire it?",a2:"It showed effort and imagination"},{lvl:4,pts:4,q1:"How does building a snowman compare to other winter activities?",a1:"Both bring joy and creativity",q2:"Why is imagination important in play?",a2:"It makes experiences meaningful and fun"}]},
    {id:16,title:"The Art Project",
     passage:"Kim cut bright red paper shapes with her small silver scissors. She glued them onto a large piece of blue cardboard to make a spaceship. Then she painted yellow stars all around the background. Her project looked colorful and exciting. Kim loved art because it let her imagination fly as high as the stars she painted.",
     dok:[{lvl:1,pts:1,q1:"Who made the art project?",a1:"Kim",q2:"What did she build?",a2:"A spaceship"},{lvl:2,pts:2,q1:"What materials did Kim use?",a1:"Cardboard, scissors, glue, shiny paper",q2:"What did she paint on the sides?",a2:"Stars"},{lvl:3,pts:3,q1:"What does Kim's project show?",a1:"Creativity and imagination",q2:"Why did her classmates admire it?",a2:"It showed effort and originality"},{lvl:4,pts:4,q1:"How does art help express ideas?",a1:"It turns imagination into visible form",q2:"Compare art projects to another way of expressing creativity.",a2:"Both allow personal expression"}]},
    {id:17,title:"Feeding the Ducks",
     passage:"Grandpa and Mia walked down to the calm lake. They threw small pieces of stale bread into the water. Four white ducks swam over quickly and ate the food with loud quacking sounds. Mia laughed as the ducks splashed around. Feeding the ducks made her feel connected to nature and happy to share the moment with her grandpa.",
     dok:[{lvl:1,pts:1,q1:"Who fed the ducks?",a1:"Mia",q2:"How many ducks came?",a2:"Four"},{lvl:2,pts:2,q1:"What did Mia feed them?",a1:"Bread",q2:"How did the ducks respond?",a2:"Swam quickly and ate eagerly"},{lvl:3,pts:3,q1:"What does Mia's laughter show?",a1:"Joy and connection",q2:"Why is feeding animals meaningful?",a2:"It builds appreciation for nature"},{lvl:4,pts:4,q1:"How does feeding ducks compare to other outdoor activities?",a1:"Both bring peace and enjoyment",q2:"Why are small acts of kindness important?",a2:"They create happiness for all involved"}]},
    {id:18,title:"The Lost Hat",
     passage:"A strong gust of wind blew Lucas's favorite blue hat right off his head. It landed high up in the thick branches of a bush. Lucas had to use a long stick to get it back. He felt relieved when he finally held the hat again. The hat reminded him of his birthday, when his parents gave it to him as a special gift.",
     dok:[{lvl:1,pts:1,q1:"Who lost the hat?",a1:"Lucas",q2:"What caused the hat to blow away?",a2:"The wind"},{lvl:2,pts:2,q1:"How did Lucas get the hat back?",a1:"Used a stick to reach it",q2:"Why was the hat special?",a2:"It was a birthday gift"},{lvl:3,pts:3,q1:"What does Lucas's effort show?",a1:"Determination and care",q2:"How did he feel after recovering it?",a2:"Relieved"},{lvl:4,pts:4,q1:"How does losing something outdoors differ from indoors?",a1:"Outdoors requires more effort to recover",q2:"Why is determination important in challenges?",a2:"It helps achieve goals despite obstacles"}]},
    {id:19,title:"The Birthday Surprise",
     passage:"Nina walked into the dark living room and flipped on the light switch. Suddenly, her friends jumped out from behind the sofa and shouted 'Surprise!' She saw a giant chocolate cake sitting on the counter. Nina laughed and hugged her friends, grateful for the party. The surprise made her birthday unforgettable.",
     dok:[{lvl:1,pts:1,q1:"Who was surprised?",a1:"Nina",q2:"Where were her friends hiding?",a2:"Behind the sofa"},{lvl:2,pts:2,q1:"What kind of cake did they have?",a1:"Chocolate",q2:"What did the friends plan?",a2:"A surprise party"},{lvl:3,pts:3,q1:"What does the party show about friendship?",a1:"It brings joy and connection",q2:"Why did Nina laugh with joy?",a2:"She felt loved and appreciated"},{lvl:4,pts:4,q1:"How does a surprise party differ from a planned one?",a1:"Surprises create excitement and stronger emotions",q2:"Why is friendship valuable?",a2:"It provides support and happiness"}]},
    {id:20,title:"The Beach Shells",
     passage:"Ocean waves crashed against the warm sand. Leo walked slowly along the water and looked down. He picked up three shiny pink shells and put them safely inside his deep bucket. The shells reminded him of summer adventures and made him excited to share them with his family. Collecting shells was his favorite part of visiting the beach.",
     dok:[{lvl:1,pts:1,q1:"Who collected shells?",a1:"Leo",q2:"How many shells did he find?",a2:"Three"},{lvl:2,pts:2,q1:"Where did Leo put the shells?",a1:"In his bucket",q2:"What did the shells remind him of?",a2:"Summer days with sunshine and laughter"},{lvl:3,pts:3,q1:"What does Leo's collection show?",a1:"Love for nature and appreciation",q2:"Why did he feel connected to the ocean?",a2:"The shells symbolized its beauty"},{lvl:4,pts:4,q1:"How does collecting shells compare to other beach activities?",a1:"Both bring joy and connection to nature",q2:"Why are small treasures meaningful?",a2:"They remind us of special experiences"}]},
    {id:21,title:"Bird House Builders",
     passage:"Inside the garage, Ella and her dad built a small wooden birdhouse. They painted it bright blue and hung it up on a tree branch. Soon, a tiny bird flew inside to build a nest. Ella felt proud that she had helped create a safe home for the bird. Working with her dad made the project even more special.",
     dok:[{lvl:1,pts:1,q1:"Who built the birdhouse?",a1:"Ella and her father",q2:"Where did they hang it?",a2:"On a tree branch"},{lvl:2,pts:2,q1:"What materials did they use?",a1:"Wood, nails, and paint",q2:"What happened after it was finished?",a2:"A bird flew inside"},{lvl:3,pts:3,q1:"What does Ella's project show?",a1:"Success through teamwork",q2:"Why did she feel proud?",a2:"She completed the project with effort"},{lvl:4,pts:4,q1:"How does building a birdhouse compare to other projects?",a1:"Both require planning and teamwork",q2:"Why is teamwork valuable?",a2:"It makes tasks easier and more meaningful"}]},
    {id:22,title:"The Evening Bike Ride",
     passage:"The bright sun started to set behind the hills. Ryan put on his black helmet and rode his red bicycle down the street. The cool night air felt nice on his face as he sped up. He enjoyed the quiet evening, noticing the stars beginning to appear. Riding his bike at sunset made him feel free and peaceful.",
     dok:[{lvl:1,pts:1,q1:"Who rode the bike?",a1:"Ryan",q2:"What safety item did he wear?",a2:"A helmet"},{lvl:2,pts:2,q1:"What did Ryan see in the sky?",a1:"Sunset colors and stars",q2:"How did the breeze make him feel?",a2:"Free and peaceful"},{lvl:3,pts:3,q1:"What does Ryan's ride show?",a1:"Freedom and reflection",q2:"Why is evening special for him?",a2:"It allows peace and appreciation"},{lvl:4,pts:4,q1:"How does evening riding compare to daytime riding?",a1:"Evening is calmer and more reflective",q2:"Why is reflection important in life?",a2:"It helps people appreciate experiences"}]}
  ];

  var STATION_META = {
    "Sight Words":   {icon:"\uD83D\uDD35", cls:"sw", label:"Sight Words",   scoreType:"mastery", goal:80,  goalLabel:"80% Mastery"},
    "Fluency":       {icon:"\uD83D\uDFE0", cls:"fl", label:"Fluency",        scoreType:"wpm",     goal:90,  goalLabel:"90 WPM"},
    "Comprehension": {icon:"\uD83D\uDFE2", cls:"cp", label:"Comprehension",  scoreType:"dok",     goal:80,  goalLabel:"80% DOK"}
  };

  // DOK flags per rubric scoring directions
  function dokFlag(e) {
    var d1=(e.d1q1?1:0)+(e.d1q2?1:0), d2=(e.d2q1?2:0)+(e.d2q2?2:0);
    var d3=(e.d3q1?3:0)+(e.d3q2?3:0), d4=(e.d4q1?4:0)+(e.d4q2?4:0);
    var recall=d1+d2, reasoning=d3+d4;
    var recallPct=recall/6, reasonPct=reasoning/14;
    if (recallPct>=0.67&&reasonPct>=0.57) return {label:"Balanced",cls:"flag-balanced",tip:"Strong across all DOK levels"};
    if (recallPct<0.5&&reasonPct>=0.57) return {label:"Recall Weakness",cls:"flag-recall",tip:"Misses DOK 1-2, stronger on DOK 3-4"};
    if (recallPct>=0.67&&reasonPct<0.43) return {label:"Reasoning Weakness",cls:"flag-reasoning",tip:"Strong on DOK 1-2, weaker on DOK 3-4"};
    return {label:"Needs Support",cls:"flag-support",tip:"Struggles across multiple DOK levels"};
  }

  var DOLCH_WORDS = {
    "pre":["a","and","away","big","blue","can","come","down","find","for","funny","go","help","here","I","in","is","it","jump","little","look","make","me","my","not","one","play","red","run","said","see","the","three","to","two","up","we","where","yellow","you"],
    "primer":["all","am","are","at","ate","be","black","brown","but","came","did","do","eat","four","get","good","have","he","into","like","must","new","no","now","on","our","out","please","pretty","ran","ride","saw","say","she","so","soon","that","there","they","this","too","under","want","was","well","went","what","white","who","will","with","yes"],
    "g1":["after","again","an","any","ask","by","could","every","fly","from","give","giving","had","has","her","him","his","how","just","know","let","live","may","of","old","once","open","over","put","round","some","stop","take","thank","them","then","think","walk","were","when"],
    "g2":["always","around","because","been","before","best","both","buy","call","cold","does","don't","fast","first","five","found","gave","goes","green","its","made","many","off","or","pull","read","right","sing","sit","sleep","tell","their","these","those","upon","us","use","very","wash","which","why","wish","work","would","write","your"],
    "g3":["about","better","bring","carry","clean","cut","done","draw","drink","eight","fall","far","full","got","grow","hold","hot","hurt","if","keep","kind","laugh","light","long","much","myself","never","nine","only","own","pick","seven","shall","show","six","small","start","ten","today","together","try","warm"]
  };
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
    if (station==="Sight Words")   return e.score||0;
    if (station==="Fluency")       return e.wpm||0;
    if (station==="Comprehension") return e.score||Math.round(((e.d1q1?1:0)+(e.d1q2?1:0)+(e.d2q1?2:0)+(e.d2q2?2:0)+(e.d3q1?3:0)+(e.d3q2?3:0)+(e.d4q1?4:0)+(e.d4q2?4:0))/20*100);
    return e.score||e.wpm||0;
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
        var lastE = s.entries.length ? s.entries[s.entries.length-1] : null;
        var last = !lastE ? "\u2014" : s.station==="Sight Words" ? (lastE.score||0)+"% mastery" : s.station==="Fluency" ? (lastE.wpm||0)+" WPM" : (lastE.score||0)+"% DOK";
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
      if (sel.station==="Sight Words") {
        h += "<label>Dolch Level<select id='trk-sw-lvl' class='trk-sel'>";
        h += "<option value='pre'>Pre-Primer (40)</option><option value='primer'>Primer (52)</option>";
        h += "<option value='g1'>1st Grade (41)</option><option value='g2'>2nd Grade (46)</option>";
        h += "<option value='g3'>3rd Grade (41)</option></select></label></div>";
        h += "<div id='trk-sw-grid' style='padding:.35rem 0;min-height:28px'></div>";
        h += "<div id='trk-sw-score' style='font-size:.78rem;color:#1d4ed8;padding:.2rem 0;font-weight:600'>Select a level to load words</div>";
      } else if (sel.station==="Fluency") {
        h += "<label>Passage<select id='trk-story' class='trk-sel'><option value=''>\u2014 Select \u2014</option>";
        STORIES.forEach(function(s){ h += "<option value='" + s.id + "'>Story " + s.id + ": " + s.title + "</option>"; });
        h += "</select></label><label>Time (mins)<input id='trk-time' type='number' step='0.5' min='0.5' max='10' class='trk-inp-sm' placeholder='1.5'></label></div>";
        h += "<div id='trk-fl-words' style='display:none;margin:.4rem 0'></div>";
      } else {
        h += "<label>Passage<select id='trk-story' class='trk-sel'><option value=''>\u2014 Select \u2014</option>";
        STORIES.forEach(function(s){ h += "<option value='" + s.id + "'>Story " + s.id + ": " + s.title + "</option>"; });
        h += "</select></label><label>Read time (min)<input id='trk-time' type='number' step='0.5' min='0.5' max='20' class='trk-inp-sm' placeholder='3.5'></label></div>";
        h += "<div id='trk-cp-area' style='display:none;margin:.4rem 0'></div>";
      }
      var avg2 = peerAvg(students, sel.station, sel.id);
      h += "<div class='trk-frow'><label>Notes<input id='trk-notes' class='trk-inp-sm' placeholder='Optional teacher notes'></label>";
      h += "<button id='trk-log' class='trk-btn-pri' data-sid='" + sel.id + "'>Log Session</button></div></div>";

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
        if (sel.station==="Comprehension") h += "<th>Flag</th>";
        h += "<th>Notes</th><th></th></tr></thead><tbody>";
        sorted.forEach(function(e) {
          var story=STORIES.find(function(s){return s.id===e.storyId;})||null;
          var disp="", detail="\u2014";
          if (sel.station==="Sight Words") {
            detail="Dolch "+(e.swLevel||"")+": "+(e.swCorrect||[]).length+"/"+(e.swTested||[]).length+" words";
            disp="<strong>"+(e.score||0)+"%</strong>";
          } else if (sel.station==="Fluency") {
            detail=(e.storyTitle||"\u2014")+" \u00b7 "+(e.stoppedIdx!==undefined?e.stoppedIdx+1:0)+" words \u00b7 "+(e.redWords||[]).length+" errors";
            disp="<strong>"+(e.wpm||0)+"</strong> WPM";
          } else {
            var dpts=(e.d1q1?1:0)+(e.d1q2?1:0)+(e.d2q1?2:0)+(e.d2q2?2:0)+(e.d3q1?3:0)+(e.d3q2?3:0)+(e.d4q1?4:0)+(e.d4q2?4:0);
            detail=e.storyTitle||"\u2014";
            disp="<strong>"+dpts+"/20 pts</strong> ("+(e.score||Math.round(dpts/20*100))+"%)";
          }
          h += "<tr><td>"+e.date+"</td><td>"+detail+"</td><td>"+disp+"</td>";
          if (sel.station==="Comprehension") {
            var f=dokFlag(e);
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
    var _r=container.querySelector(".trk-roster");
    if(_r) _r.addEventListener("click",function(e){
      var card=e.target.closest?e.target.closest(".trk-scard"):(e.target.classList.contains("trk-scard")?e.target:e.target.parentElement&&e.target.parentElement.classList.contains("trk-scard")?e.target.parentElement:null);
      if(card&&card.dataset.sid){_sid=card.dataset.sid;renderInto(container);}
    });
    // Sight Words: Dolch level selector populates word grid
    var swLvl=document.getElementById("trk-sw-lvl");
    if(swLvl){
      var fillGrid=function(){
        var words=DOLCH_WORDS[swLvl.value]||[], grid=document.getElementById("trk-sw-grid");
        if(!grid) return;
        var gh="";
        words.forEach(function(w){
          gh+="<button class='trk-wb' data-w='"+w+"' data-s='0' style='background:#e2e8f0;color:#334155;border:1px solid #cbd5e1;border-radius:4px;padding:.2rem .45rem;font-size:.78rem;cursor:pointer;margin:.1rem'>"+w+"</button>";
        });
        grid.innerHTML=gh;
        grid.querySelectorAll(".trk-wb").forEach(function(b){
          b.addEventListener("click",function(){
            var st=(parseInt(b.dataset.s,10)+1)%3;
            b.dataset.s=st;
            if(st===0){b.style.background="#e2e8f0";b.style.color="#334155";}
            else if(st===1){b.style.background="#dcfce7";b.style.color="#14532d";}
            else{b.style.background="#fee2e2";b.style.color="#991b1b";}
            var gr=document.getElementById("trk-sw-grid");
            var te=Array.from(gr.querySelectorAll(".trk-wb")).filter(function(x){return x.dataset.s!=="0";});
            var co=te.filter(function(x){return x.dataset.s==="1";});
            var sc=document.getElementById("trk-sw-score");
            if(sc) sc.textContent=co.length+"/"+te.length+" words correct ("+(te.length?Math.round(co.length/te.length*100):0)+"%)";
          });
        });
      };
      swLvl.addEventListener("change",fillGrid);
      fillGrid();
    }
    // Fluency: story selector shows interactive passage; time input recalculates WPM
    var flSt=document.getElementById("trk-story"), flTm=document.getElementById("trk-time");
    if(flSt&&sel&&sel.station==="Fluency"){
      var updWpm=function(){
        var wg=document.getElementById("trk-fl-wgrid"),dp=document.getElementById("trk-fl-wpm");
        if(!wg||!dp) return;
        var ws=wg.querySelectorAll(".trk-w"),gi=-1,rc=0;
        ws.forEach(function(w,i){if(w.dataset.s==="1")gi=i;if(w.dataset.s==="2"&&i<=gi)rc++;});
        var tm=parseFloat(flTm&&flTm.value)||0;
        if(gi<0){dp.textContent="Tap the word where the student stopped (turns green)";return;}
        dp.textContent=(gi+1)+" words \u00b7 "+rc+" errors \u00b7 "+(tm>0?Math.round((gi+1-rc)/tm)+" WPM":"enter time for WPM");
      };
      flSt.addEventListener("change",function(){
        var story=STORIES.find(function(s){return s.id===parseInt(flSt.value,10);});
        var wa=document.getElementById("trk-fl-words");
        if(!story||!wa) return;
        wa.style.display="";
        var wrds=story.passage.split(" ");
        var wh="<div style='font-size:.77rem;color:#64748b;margin-bottom:.25rem'>Click: 1st=\uD83D\uDFE2 stop (1 only) \u00b7 2nd=\uD83D\uDD34 wrong \u00b7 3rd=clear</div>";
        wh+="<div id='trk-fl-wgrid' style='line-height:2.1;cursor:pointer'>";
        wrds.forEach(function(w,i){wh+="<span class='trk-w' data-idx='"+i+"' data-s='0' style='padding:.1rem .25rem;border-radius:3px;margin:.05rem;display:inline-block'>"+w+"</span> ";});
        wh+="</div><div id='trk-fl-wpm' style='font-size:.78rem;color:#1d4ed8;padding:.3rem 0;font-weight:600'>Tap the word where the student stopped</div>";
        wa.innerHTML=wh;
        var wg=document.getElementById("trk-fl-wgrid");
        if(wg) wg.addEventListener("click",function(e){
          var sp=e.target.classList.contains("trk-w")?e.target:null;
          if(!sp) return;
          var st=parseInt(sp.dataset.s,10);
          if(st===0){var pv=wg.querySelector(".trk-w[data-s='1']");if(pv){pv.dataset.s="0";pv.style.background="transparent";pv.style.color="";pv.style.textDecoration="";}sp.dataset.s="1";sp.style.background="#dcfce7";sp.style.color="#14532d";sp.style.textDecoration="";}
          else if(st===1){sp.dataset.s="2";sp.style.background="#fee2e2";sp.style.color="#991b1b";sp.style.textDecoration="line-through";}
          else{sp.dataset.s="0";sp.style.background="transparent";sp.style.color="";sp.style.textDecoration="";}
          updWpm();
        });
      });
      if(flTm) flTm.addEventListener("input",updWpm);
    }
    // Comprehension: story selector shows passage text + DOK checkboxes
    var cpSt=document.getElementById("trk-story");
    if(cpSt&&sel&&sel.station==="Comprehension"){
      cpSt.addEventListener("change",function(){
        var story=STORIES.find(function(s){return s.id===parseInt(cpSt.value,10);});
        var ca=document.getElementById("trk-cp-area");
        if(!story||!ca) return;
        ca.style.display="";
        var ch="<p style='font-size:.8rem;color:#334155;line-height:1.6;background:#f8faff;padding:.5rem .65rem;border-radius:6px;margin-bottom:.4rem'>"+story.passage+"</p>";
        ch+="<div class='trk-dok-box'>";
        story.dok.forEach(function(dq){
          ch+="<div class='trk-dok-lvl'>";
          ch+="<div style='font-size:.77rem;font-weight:600;color:#475569;margin:.3rem 0'><span class='trk-dok-badge trk-dok-l"+dq.lvl+"'>DOK "+dq.lvl+"</span> ("+dq.pts+" pt each)</div>";
          ch+="<label class='trk-dok-q'><input type='checkbox' id='trk-d"+dq.lvl+"q1'> "+dq.q1+"</label>";
          ch+="<label class='trk-dok-q'><input type='checkbox' id='trk-d"+dq.lvl+"q2'> "+dq.q2+"</label></div>";
        });
        ch+="</div>";
        ca.innerHTML=ch;
      });
    }
    var logBtn=document.getElementById("trk-log");
    if(logBtn&&sel) logBtn.addEventListener("click",function(){
      var date=document.getElementById("trk-date").value;
      if(!date){alert("Select a date.");return;}
      var d=load(), student=d.students.find(function(s){return s.id===sel.id;});
      if(!student) return;
      var entry={id:uid(),date:date};
      var notesEl=document.getElementById("trk-notes");
      entry.notes=(notesEl&&notesEl.value.trim())||"";
      if(student.station==="Sight Words"){
        var grid=document.getElementById("trk-sw-grid"),lvlEl=document.getElementById("trk-sw-lvl");
        if(!grid||!lvlEl){alert("Select a Dolch level first.");return;}
        var tested=[],correct=[],incorrect=[];
        grid.querySelectorAll(".trk-wb").forEach(function(b){
          if(b.dataset.s!=="0"){tested.push(b.dataset.w);if(b.dataset.s==="1")correct.push(b.dataset.w);else incorrect.push(b.dataset.w);}
        });
        if(!tested.length){alert("Tap at least one word first.");return;}
        entry.swLevel=lvlEl.value;entry.swTested=tested;entry.swCorrect=correct;entry.swIncorrect=incorrect;
        entry.score=Math.round(correct.length/tested.length*100);
      } else if(student.station==="Fluency"){
        var stEl=document.getElementById("trk-story");
        if(!stEl||!stEl.value){alert("Select a passage first.");return;}
        var wg=document.getElementById("trk-fl-wgrid");
        if(!wg){alert("Select a passage to see the word display.");return;}
        var ws=wg.querySelectorAll(".trk-w"),gi=-1,rw=[];
        ws.forEach(function(w,i){if(w.dataset.s==="1")gi=i;if(w.dataset.s==="2")rw.push(w.textContent.trim());});
        if(gi<0){alert("Tap the word where the student stopped.");return;}
        var tmEl=document.getElementById("trk-time"),tm=parseFloat(tmEl&&tmEl.value)||0;
        if(tm<=0){alert("Enter the reading time in minutes.");return;}
        var flStory=STORIES.find(function(s){return s.id===parseInt(stEl.value,10);});
        entry.storyId=parseInt(stEl.value,10);entry.storyTitle=flStory?flStory.title:"";
        entry.stoppedIdx=gi;entry.redWords=rw;entry.timeMins=tm;
        entry.wpm=Math.round((gi+1-rw.length)/Math.max(tm,0.1));entry.score=entry.wpm;
      } else {
        var stElC=document.getElementById("trk-story");
        if(!stElC||!stElC.value){alert("Select a passage first.");return;}
        var d1q1=!!(document.getElementById("trk-d1q1")&&document.getElementById("trk-d1q1").checked);
        var d1q2=!!(document.getElementById("trk-d1q2")&&document.getElementById("trk-d1q2").checked);
        var d2q1=!!(document.getElementById("trk-d2q1")&&document.getElementById("trk-d2q1").checked);
        var d2q2=!!(document.getElementById("trk-d2q2")&&document.getElementById("trk-d2q2").checked);
        var d3q1=!!(document.getElementById("trk-d3q1")&&document.getElementById("trk-d3q1").checked);
        var d3q2=!!(document.getElementById("trk-d3q2")&&document.getElementById("trk-d3q2").checked);
        var d4q1=!!(document.getElementById("trk-d4q1")&&document.getElementById("trk-d4q1").checked);
        var d4q2=!!(document.getElementById("trk-d4q2")&&document.getElementById("trk-d4q2").checked);
        if(!document.getElementById("trk-d1q1")){alert("Select a passage first - questions will appear.");return;}
        var tmC=parseFloat((document.getElementById("trk-time")||{}).value)||0;
        var rawPts=(d1q1?1:0)+(d1q2?1:0)+(d2q1?2:0)+(d2q2?2:0)+(d3q1?3:0)+(d3q2?3:0)+(d4q1?4:0)+(d4q2?4:0);
        var cpStory=STORIES.find(function(s){return s.id===parseInt(stElC.value,10);});
        entry.storyId=parseInt(stElC.value,10);entry.storyTitle=cpStory?cpStory.title:"";
        entry.timeMins=tmC;entry.d1q1=d1q1;entry.d1q2=d1q2;entry.d2q1=d2q1;entry.d2q2=d2q2;
        entry.d3q1=d3q1;entry.d3q2=d3q2;entry.d4q1=d4q1;entry.d4q2=d4q2;
        entry.rawPts=rawPts;entry.score=Math.round(rawPts/20*100);
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
    s.dok.forEach(function(dq) {
      html += "<div class='q-blk'><div class='q-lbl'><span class='q-dok'>DOK " + dq.lvl + " (" + dq.pts + " pt each)</span></div>";
      html += "<div class='q-item'><p>1. " + dq.q1 + "</p><div class='ans-line'></div><div class='ans-line'></div></div>";
      html += "<div class='q-item'><p>2. " + dq.q2 + "</p><div class='ans-line'></div><div class='ans-line'></div></div></div>";
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
        h+="<div class='trk-pass-q'><span class='trk-dok-badge trk-dok-l"+dq.lvl+"'>DOK "+dq.lvl+" ("+dq.pts+"pt)</span><br>";
        h+="<strong>1.</strong> "+dq.q1+" <span style='color:#64748b;font-style:italic'>\u2192 "+dq.a1+"</span><br>";
        h+="<strong>2.</strong> "+dq.q2+" <span style='color:#64748b;font-style:italic'>\u2192 "+dq.a2+"</span></div>";
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
