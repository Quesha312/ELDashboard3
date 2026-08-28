// app.js — ELL Teacher Dashboard
(function () {
  "use strict";

  // — crash-guard ——————————————————————————————————————————————
  var CONNECT = (window.CONNECT_UNITS && window.CONNECT_UNITS.length > 0) ? window.CONNECT_UNITS : [];
  if (!window.SAVVAS_UNITS || window.SAVVAS_UNITS.length < 5) {
    document.getElementById("app").innerHTML =
      "<div class=\"error-banner\">" +
      "<h2>&#9888; Dashboard Error</h2>" +
      "<p>savvas_u1.js through savvas_u5.js failed to load. Confirm all script files are in the same folder as index.html and appear before app.js.</p>" +
      "</div>";
    return;
  }
  var SAVVAS_OK = !!(window.SAVVAS_UNITS && window.SAVVAS_UNITS.length >= 5);
  var SAVVAS = SAVVAS_OK ? window.SAVVAS_UNITS : [];

  var UNITS = window.ELL_UNITS;
  var CONNECT = (window.CONNECT_UNITS && window.CONNECT_UNITS.length > 0) ? window.CONNECT_UNITS : [];
  var TABS  = ["Overview", "I Do", "We Do", "You Do", "Vocabulary", "Differentiation", "5-Day Plan"];

  var CONN_PO = ["",
    "[S1 \u2014 Unit Opener] Play theme video + image walk. Pre-teach 2\u20133 unit theme words. Frame: \u2018The Big Idea is ___.\u2019 Connect to students\u2019 own experiences with the theme.",
    "[S2 \u2014 Before You Read] Build background with photos/realia before text. Model reading strategy with a short mentor text first. Add strategy name to anchor chart.",
    "[S3 \u2014 Vocabulary] Visual vocab cards: word + image + student-friendly definition. Word sort. Sentence frame: \u2018A ___ is ___.\u2019 Allow home-language labels on back of cards.",
    "[S4 \u2014 Phonics] Use letter tiles or word sort cards alongside TE tutorial. Model each phonics pattern twice before students practice. Connect to words already in students\u2019 vocabulary.",
    "[S5 \u2014 First Read] Play audio while students finger-track. Pause every 2 pages for yes/no comprehension check. Pre-teach idioms and figurative language. Use visual story map.",
    "[S6 \u2014 Reread] Focus on one language feature: target grammar pattern, academic phrase, or key sentence structure. Cloze activity using text sentences. Choral reading with expression.",
    "[S7 \u2014 After You Read] Graphic organizer scaffold before discussion. Sentence frames: \u2018I think ___ because ___.\u2019 Partner EL student with stronger reader. Comprehension questions before written response.",
    "[S8 \u2014 Oral Language] I say / We say / You say gradual release. Printed sentence frames for oral target. Record students\u2019 oral responses for self-assessment if possible.",
    "[S9 \u2014 Grammar 1] Visual anchor chart with color-coded examples from the reading. Sort sentences (correct/incorrect). Sentence transformation practice. Extra rounds beyond what class does.",
    "[S10 \u2014 Grammar 2] Same protocol as S9. Connect to S8 oral language. Use sentences from students\u2019 S7 responses as grammar examples.",
    "[S11 \u2014 Language Arts Text] Pre-read with students if possible. Text structure walk. Text-to-text connection to anchor text. Language focus alongside content reading.",
    "[S12 \u2014 Writing Tools] Analyze mentor text together. Partially completed graphic organizer. Isolate one writing tool to practice before applying to draft.",
    "[S13 \u2014 Science] Pre-teach science vocabulary with visuals and diagrams. Connect to Big Idea. Science vocabulary journal: word + drawing + sentence.",
    "[S14 \u2014 Social Studies] Maps/photos for background building. Pre-teach domain vocabulary. Connect to students\u2019 own communities and cultural backgrounds.",
    "[S15 \u2014 Mathematics] Preview math vocabulary visually. Use manipulatives alongside numbers. Connect math language to everyday contexts. Home language support as needed.",
    "[S16 \u2014 Music] Play without text first. Display lyrics and sing slowly together. TPR (gestures) for key vocabulary in the song. Track text while singing.",
    "[S17 \u2014 Art] Describe art images together using target vocabulary before reading. Student art response: create + label/describe using learned vocabulary.",
    "[S18 \u2014 Writing Draft] Scaffolded template with sentence starters for writing type. Confer with 2\u20133 targeted questions per student. Home language drafting allowed \u2014 translate key ideas after.",
    "[S19 \u2014 Writing Publish] Peer review on ONE specific element. Simple editing checklist. Every student reads one sentence from published piece for class celebration.",
    "[S20 \u2014 Media] Focus questions displayed before viewing. Re-watch with pause points. Connect to Big Idea with sentence frame after viewing.",
    "[S21 \u2014 Assessment] Review vocabulary wall together. Pre-teach test-taking language. Extended time + read-aloud support. Post-test error analysis for vocabulary growth."
  ];

  var state = { section:"connect", unit:0, week:0, tab:0, mode:"push-in", sUnit:0, sWeek:0, level:"below", cUnit:0, cSession:-1, cDur:30 };

  // — localStorage ————————————————————————————————————————————
  function saveState() {
    try {
      localStorage.setItem("ell_nav", JSON.stringify({
        sec:state.section, u:state.unit, w:state.week, t:state.tab, m:state.mode,
        su:state.sUnit, sw:state.sWeek, lvl:state.level
      }));
    } catch (e) {}
  }

  function loadState() {
    try {
      var s = JSON.parse(localStorage.getItem("ell_nav") || "{}");
      if (s.sec === "picture" || s.sec === "savvas") state.section = s.sec;
      if (typeof s.u === "number" && s.u < UNITS.length) state.unit = s.u;
      if (typeof s.w === "number" && UNITS[state.unit] && s.w < UNITS[state.unit].weeks.length) state.week = s.w;
      if (typeof s.t === "number" && s.t < TABS.length) state.tab  = s.t;
      if (s.m === "pull-out" || s.m === "push-in") state.mode = s.m;
      if (SAVVAS_OK) {
        if (typeof s.su === "number" && s.su < SAVVAS.length) state.sUnit = s.su;
        if (typeof s.sw === "number" && SAVVAS[state.sUnit] && s.sw < SAVVAS[state.sUnit].weeks.length) state.sWeek = s.sw;
        if (s.lvl === "below" || s.lvl === "on") state.level = s.lvl;
      } else if (state.section === "savvas") {
        state.section = "picture";
      }
    } catch (e) {}
  }

  // — sidebar —————————————————————————————————————————————————
  function renderSidebar() {
    var html = "<div class=\"section-switch\">" +
      "<button class=\"section-btn" + (state.section==="connect"?" active":"") + "\" data-section=\"connect\">Vista Connect 3</button>" +
      "<button class=\"section-btn" + (state.section==="savvas"?" active":"") + "\" data-section=\"savvas\">Savvas myView</button>" +
      "<button class=\"section-btn" + (state.section==="tracker"?" active":"") + "\" data-section=\"tracker\"> Tracker</button>" +
      "</div>";

    if (state.section === "connect") {
      for (var u = 0; u < CONNECT.length; u++) {
        var active = (u === state.cUnit);
        html += "<div class=\"unit-group" + (active ? " active" : "") + "\" data-cunit=\"" + u + "\" style='cursor:pointer'>";
        html += "<div class='unit-title'><span class='u-num'>U" + (u+1) + "</span> " + CONNECT[u].title.replace(/^Unit \d+: /,"") + "</div></div>";
      }
      document.getElementById("sidebar").innerHTML = html; return;
    }
    if (false) { // placeholder — old picture-book block start
      for (var u = 0; u < UNITS.length; u++) {
        var active = (u === state.unit);
        html += "<div class=\"unit-group" + (active ? " active" : "") + "\" data-unit=\"" + u + "\">";
        html += "<div class=\"unit-title\">" + UNITS[u].title + "</div>";
        if (active) {
          html += "<ul class=\"week-list\">";
          for (var w = 0; w < UNITS[u].weeks.length; w++) {
            html += "<li class=\"week-item" + (w === state.week ? " active" : "") +
                    "\" data-unit=\"" + u + "\" data-week=\"" + w + "\">" +
                    "Week " + UNITS[u].weeks[w].w + ": " + UNITS[u].weeks[w].t + "</li>";
          }
          html += "</ul>";
        }
        html += "</div>";
      }
    } else if (SAVVAS_OK) {
      for (var su = 0; su < SAVVAS.length; su++) {
        var sActive = (su === state.sUnit);
        html += "<div class=\"unit-group" + (sActive ? " active" : "") + "\" data-svunit=\"" + su + "\">";
        html += "<div class=\"unit-title\">" + SAVVAS[su].title + "</div>";
        if (sActive) {
          html += "<ul class=\"week-list\">";
          for (var sw = 0; sw < SAVVAS[su].weeks.length; sw++) {
            html += "<li class=\"week-item" + (sw === state.sWeek ? " active" : "") +
                    "\" data-svunit=\"" + su + "\" data-svweek=\"" + sw + "\">" +
                    "Week " + SAVVAS[su].weeks[sw].week + ": " + SAVVAS[su].weeks[sw].anchorText + "</li>";
          }
          html += "</ul>";
        }
        html += "</div>";
      }
    } else {
      html += "<p class=\"empty\" style=\"padding:1rem;\">Savvas unit files not loaded. Confirm savvas_u1.js–savvas_u5.js are included before app.js.</p>";
    }
    document.getElementById("sidebar").innerHTML = html;
  }

  // — tabs ————————————————————————————————————————————————————
  function renderTabs() {
    var tabsEl = document.getElementById("tabs");
    if (state.section === "savvas" || state.section === "tracker") { tabsEl.innerHTML = ""; tabsEl.style.display = "none"; return; }
    tabsEl.style.display = "";
    var html = "";
    for (var i = 0; i < TABS.length; i++) {
      html += "<button class=\"tab-btn" + (i === state.tab ? " active" : "") +
              "\" data-tab=\"" + i + "\">" + TABS[i] + "</button>";
    }
    tabsEl.innerHTML = html;
  }

  // — mode button ————————————————————————————————————————————
  function ensureHeaderButtons() {
    var controls = document.querySelector(".header-controls");
    if (!controls) return;
    if (!document.getElementById("section-toggle")) {
      var sBtn = document.createElement("button");
      sBtn.id = "section-toggle";
      controls.insertBefore(sBtn, controls.firstChild);
    }
    if (!document.getElementById("level-toggle")) {
      var lBtn = document.createElement("button");
      lBtn.id = "level-toggle";
      var modeBtn0 = document.getElementById("mode-toggle");
      if (modeBtn0) controls.insertBefore(lBtn, modeBtn0); else controls.appendChild(lBtn);
    }
  }

  function renderModeBtn() {
    ensureHeaderButtons();

    var sBtn = document.getElementById("section-toggle");
    if (sBtn) {
      if (state.section === "connect") sBtn.textContent = "Switch \u2192 Savvas myView";
      else if (state.section === "savvas") sBtn.textContent = "Switch \u2192 Vista Connect 3";
      else sBtn.textContent = "View: Lessons";
    }
    var lBtn2 = document.getElementById("level-toggle");
    if (lBtn2) lBtn2.style.display = (state.section === "savvas") ? "" : "none";

    var btn = document.getElementById("mode-toggle");
    if (btn) {
      if (state.mode === "push-in") {
        btn.textContent = "Switch to Pull-Out";
        btn.classList.remove("pull-out");
      } else {
        btn.textContent = "Switch to Push-In";
        btn.classList.add("pull-out");
      }
    }

    var lBtn = document.getElementById("level-toggle");
    if (lBtn) {
      lBtn.style.display = (state.section === "savvas") ? "" : "none";
      lBtn.textContent = (state.level === "below") ? "Level: Below Level" : "Level: On Level";
    }
  }

  // — content helpers ————————————————————————————————————————
  function stepList(arr) {
    if (!arr || !arr.length) return "<p class=\"empty\">No content available.</p>";
    var h = "<ol class=\"step-list\">";
    for (var i = 0; i < arr.length; i++) { h += "<li>" + arr[i] + "</li>"; }
    return h + "</ol>";
  }

  function vocabGrid(arr) {
    if (!arr || !arr.length) return "<p class=\"empty\">No vocabulary listed.</p>";
    var h = "<div class=\"vocab-grid\">";
    for (var i = 0; i < arr.length; i++) {
      h += "<div class=\"vocab-card\">" +
           "<span class=\"vocab-word\">" + arr[i].word + "</span>" +
           "<span class=\"vocab-def\">" + arr[i].def + "</span>" +
           "</div>";
    }
    return h + "</div>";
  }

  function diffBlock(df) {
    if (!df) return "<p class=\"empty\">No differentiation notes.</p>";
    var h = "";
    if (df.scaffolds && df.scaffolds.length) {
      h += "<div class=\"diff-group\"><h4>Scaffolds &mdash; ELL Support</h4><ul>";
      for (var i = 0; i < df.scaffolds.length; i++) { h += "<li>" + df.scaffolds[i] + "</li>"; }
      h += "</ul></div>";
    }
    if (df.extensions && df.extensions.length) {
      h += "<div class=\"diff-group\"><h4>Extensions &mdash; On-Level &amp; Above</h4><ul>";
      for (var j = 0; j < df.extensions.length; j++) { h += "<li>" + df.extensions[j] + "</li>"; }
      h += "</ul></div>";
    }
    return h || "<p class=\"empty\">No differentiation notes.</p>";
  }

  function planTable(plan) {
    if (!plan || !plan.length) return "<p class=\"empty\">No 5-day plan available.</p>";
    var h = "<table class=\"plan-table\"><thead><tr><th>Day</th><th>Min</th><th>Activity</th></tr></thead><tbody>";
    for (var i = 0; i < plan.length; i++) {
      h += "<tr><td>" + plan[i].day + "</td><td>" + plan[i].min + "</td><td>" + plan[i].activity + "</td></tr>";
    }
    return h + "</tbody></table>";
  }

  // — lesson panel ——————————————————————————————————————————
  function renderLesson() {
    var L = UNITS[state.unit].weeks[state.week];
    var isPi = (state.mode === "push-in");
    var h = "";

    // header
    h += "<div class=\"lesson-header\">";
    h += "<h2>" + L.t + "</h2>";
    h += "<div class=\"badges\">";
    h += "<span class=\"badge " + (isPi ? "mode-badge-pi" : "mode-badge-po") + "\">" +
         (isPi ? "&#x1F7E2; Push-In" : "&#x1F7E0; Pull-Out") + "</span>";
    if (L.c)  h += "<span class=\"badge cip-badge\">"   + L.c  + "</span>";
    if (L.vi) h += "<span class=\"badge vista-badge\">Vista: " + L.vi + "</span>";
    h += "</div></div>";

    if (L.s && L.s.length) {
      h += "<div class=\"lesson-sol\"><strong>SOL:</strong> ";
      for (var i = 0; i < L.s.length; i++) {
        h += "<span class=\"sol-tag\">" + L.s[i] + "</span>";
      }
      h += "</div>";
    }

    h += "<div class=\"tab-panel\">";

    if (state.tab === 0) {
      h += "<h3>Overview</h3><p class=\"ov-text\">" + (L.ov || "") + "</p>";

    } else if (state.tab === 1) {
      var idArr  = isPi ? L.id_pi : L.id_po;
      var idHead = isPi
        ? "I Do &mdash; <span class=\"mode-callout pi\">Push-In: Co-Teaching Support</span>"
        : "I Do &mdash; <span class=\"mode-callout po\">Pull-Out: Small Group Instruction</span>";
      h += "<h3>" + idHead + "</h3>" + stepList(idArr);

    } else if (state.tab === 2) {
      h += "<h3>We Do &mdash; Guided Practice</h3>" + stepList(L.wd);

    } else if (state.tab === 3) {
      h += "<h3>You Do &mdash; Independent Task</h3>" + stepList(L.yd);

    } else if (state.tab === 4) {
      h += "<h3>Vocabulary</h3>" + vocabGrid(L.voc);

    } else if (state.tab === 5) {
      h += "<h3>Differentiation</h3>" + diffBlock(L.df);

    } else if (state.tab === 6) {
      var planArr  = isPi ? L.plan_pi : L.plan_po;
      var planHead = isPi
        ? "5-Day Plan (30 min/day) &mdash; <span class=\"mode-callout pi\">Push-In Schedule</span>"
        : "5-Day Plan (30 min/day) &mdash; <span class=\"mode-callout po\">Pull-Out Schedule</span>";
      h += "<h3>" + planHead + "</h3>" + planTable(planArr);
    }

    h += "</div>";
    document.getElementById("lesson-content").innerHTML = h;
  }

  // — Savvas lesson panel ——————————————————————————————————
  function savvasPlanTable(planArr, duration) {
    if (!planArr || !planArr.length) return "<p class=\"empty\">No plan available.</p>";
    var h = "<table class=\"plan-table\"><thead><tr><th>Day</th><th>Min</th><th>Activity</th></tr></thead><tbody>";
    for (var i = 0; i < planArr.length; i++) {
      var noSession = /No pull-out/i.test(planArr[i].activity);
      h += "<tr><td>" + planArr[i].day + "</td><td>" + (noSession ? "&mdash;" : duration) + "</td><td>" + planArr[i].activity + "</td></tr>";
    }
    return h + "</tbody></table>";
  }

  function renderSavvasLesson() {
    var el = document.getElementById("lesson-content");
    if (!SAVVAS_OK) {
      el.innerHTML = "<p class=\"empty\">Savvas unit files not found. Confirm savvas_u1.js through savvas_u5.js are loaded before app.js.</p>";
      return;
    }
    var U = SAVVAS[state.sUnit];
    var W = U.weeks[state.sWeek];
    var LV = (state.level === "below") ? W.below : W.on;
    var isPi = (state.mode === "push-in");
    var block = isPi ? LV.pushIn : LV.pullOut;
    var h = "";

    h += "<div class=\"lesson-header\">";
    h += "<h2>" + W.anchorText + "</h2>";
    h += "<div class=\"badges\">";
    h += "<span class=\"badge " + (isPi ? "mode-badge-pi" : "mode-badge-po") + "\">" +
         (isPi ? "&#x1F7E2; Push-In (60 min)" : "&#x1F7E0; Pull-Out (30 min)") + "</span>";
    h += "<span class=\"badge cip-badge\">" + (state.level === "below" ? "Below Level" : "On Level") + "</span>";
    h += "<span class=\"badge vista-badge\">WIDA " + LV.wida + "</span>";
    h += "</div></div>";

    h += "<div class=\"lesson-sol\"><strong>" + U.title + "</strong> &mdash; <em>" + U.essentialQuestion + "</em><br/>" +
         "<strong>Week " + W.week + " (" + W.genre + "):</strong> " + W.skill + " &middot; Word Study: " + W.wordStudy + "<br/>" +
         "<strong>F&amp;P:</strong> " + LV.fp + " &nbsp; <strong>Lexile:</strong> " + LV.lexile + "</div>";

    h += "<div class=\"tab-panel\">";
    h += "<h3>Materials</h3><p class=\"ov-text\">" + LV.materials + "</p>";
    h += "<h3>" + (isPi ? "Push-In Plan (60 min/day)" : "Pull-Out Plan (30 min/day &mdash; Day 1 always whole-group)") + "</h3>" +
         savvasPlanTable(block.plan, block.duration);
    h += "<h3>Scaffolds / EL Supports</h3><ul>";
    for (var i = 0; i < (block.scaffolds || []).length; i++) { h += "<li>" + block.scaffolds[i] + "</li>"; }
    h += "</ul>";
    h += "<h3>Progress Monitoring</h3><p class=\"ov-text\">" + (block.monitoring || "") + "</p>";
    h += "</div>";

    el.innerHTML = h;
  }

  // — tracker render —————————————————————————————————————————
  function renderTracker() {
    var tabsEl = document.getElementById("tabs");
    if (tabsEl) { tabsEl.innerHTML = ""; tabsEl.style.display = "none"; }
    var el = document.getElementById("lesson-content");
    el.style.padding = "0";
    el.style.background = "transparent";
    el.style.overflow = "hidden";
    el.style.display = "flex";
    el.style.height = "100%";
    if (window.ELL_TRACKER) {
      window.ELL_TRACKER.render(el);
    } else {
      el.innerHTML = "<div style='padding:2rem;color:#b91c1c;background:#fef2f2;border-radius:8px;margin:1rem;'>tracker.js not loaded — add &lt;script src=\"tracker.js\"&gt;&lt;/script&gt; to index.html before app.js.</div>";
    }
  }

  // — full render ————————————————————————————————————————————
  // — Vista Connect 3 renderer ————————————————————————————————————
  function renderConnectSection() {
    if (!CONNECT.length) {
      document.getElementById("lesson-content").innerHTML = "<div class='error-banner'><h2>&#9888; Vista Connect 3 not loaded</h2><p>Add connect_u1.js through connect_u8.js before app.js in index.html.</p></div>";
      return;
    }
    var U = CONNECT[state.cUnit] || CONNECT[0];
    var h = "<div class='lesson-box'><div class='lesson-header'>";
    h += "<div style='display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:.5rem'>";
    h += "<div><h2 style='margin:0'>" + U.title + "</h2>";
    h += "<div style='font-size:.83rem;color:#64748b;margin-top:.25rem'><em>" + U.reading + "</em> \u00b7 " + U.genre + " \u00b7 Strategy: " + U.strategy + "</div>";
    h += "<div style='font-size:.81rem;color:#64748b'>Grammar: " + U.gram1 + " / " + U.gram2 + "</div></div>";
    h += "<div style='display:flex;gap:.4rem;align-items:center'>";
    h += "<button id='dur-toggle' class='tab-btn' style='font-size:.76rem'>&#9201; " + state.cDur + " min</button>";
    if (state.cSession >= 0) h += "<button id='conn-back' class='tab-btn' style='font-size:.76rem'>&#8592; Sessions</button>";
    h += "</div></div></div>";
    if (state.cSession < 0) {
      h += "<div style='padding:1rem'>";
      [true, false].forEach(function(isLL) {
        h += "<div style='font-size:.84rem;font-weight:700;color:" + (isLL?"#1e3a8a":"#7c3aed") + ";margin:.75rem 0 .4rem'>" + (isLL?"Language & Literacy (Sessions 1\u201310)":"Content & Writing (Sessions 11\u201321)") + "</div>";
        h += "<div style='display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:.4rem'>";
        U.sessions.filter(function(s){ return isLL ? s.n<=10 : s.n>=11; }).forEach(function(s){
          h += "<div data-csession='" + (s.n-1) + "' style='background:" + (isLL?"#eff6ff":"#f5f3ff") + ";border:1.5px solid " + (isLL?"#bfdbfe":"#ddd6fe") + ";border-radius:8px;padding:.5rem .6rem;cursor:pointer'>";
          h += "<div style='font-size:.7rem;font-weight:700;color:" + (isLL?"#1e40af":"#7c3aed") + "'>S" + s.n + " \u00b7 " + s.type + "</div>";
          h += "<div style='font-size:.76rem;font-weight:600;color:#0f172a;margin-top:.1rem'>" + s.area + "</div>";
          h += "<div style='font-size:.71rem;color:#64748b;line-height:1.3;margin-top:.1rem'>" + s.act.slice(0,52) + (s.act.length>52?"\u2026":"") + "</div></div>";
        });
        h += "</div>";
      });
      h += "</div>";
    } else {
      var S = U.sessions[state.cSession];
      if (!S) { h += "<div style='padding:1rem;color:#dc2626'>Session not found.</div>"; }
      else {
        var isLL2 = S.type==="L&L";
        h += "<div style='padding:.75rem 1rem'>";
        h += "<div style='display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.6rem'>";
        h += "<span style='background:" + (isLL2?"#dbeafe":"#ede9fe") + ";color:" + (isLL2?"#1e40af":"#6d28d9") + ";padding:.18rem .55rem;border-radius:12px;font-size:.74rem;font-weight:700'>S" + S.n + " \u00b7 " + S.type + "</span>";
        h += "<span style='background:#f1f5f9;color:#475569;padding:.18rem .55rem;border-radius:12px;font-size:.74rem;font-weight:600'>" + S.area + "</span>";
        if (S.pb) h += "<span style='background:#fef9c3;color:#713f12;padding:.18rem .55rem;border-radius:12px;font-size:.74rem'>PB " + S.pb + "</span>";
        h += "</div>";
        h += "<p style='font-size:.9rem;font-weight:600;color:#0f172a;line-height:1.5;margin:0 0 .5rem'>" + S.act + "</p>";
        h += "<p style='font-size:.82rem;color:#64748b;margin:0 0 .8rem'><strong>Materials:</strong> " + (S.mat||"Student Book") + "</p>";
        h += "<div style='font-size:.84rem;font-weight:700;margin-bottom:.35rem'>&#9201; Pacing <span style='font-weight:400;font-size:.78rem;color:#64748b'>(tap timer above to switch)</span></div>";
        h += "<table style='width:100%;border-collapse:collapse;font-size:.81rem;margin-bottom:.8rem'>";
        [30,45,60,90].forEach(function(d){
          var sel = d===state.cDur;
          h += "<tr style='background:" + (sel?"#eff6ff":"") + ";border:1px solid #e2e8f0'>";
          h += "<td style='padding:.35rem .6rem;font-weight:700;color:" + (sel?"#1e40af":"#64748b") + ";white-space:nowrap;width:52px'>" + d + " min</td>";
          h += "<td style='padding:.35rem .6rem;color:#334155'>" + (S["t"+d]||"") + "</td></tr>";
        });
        h += "</table>";
        var po = (typeof CONN_PO!=="undefined" && CONN_PO[S.n]) ? CONN_PO[S.n] : "";
        if (po) h += "<div style='background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:.7rem .9rem'><div style='font-size:.81rem;font-weight:700;color:#14532d;margin-bottom:.3rem'>&#129001; Pull-Out Notes</div><div style='font-size:.81rem;color:#166534;line-height:1.65'>" + po + "</div></div>";
        h += "</div>";
      }
    }
    h += "</div>";
    document.getElementById("lesson-content").innerHTML = h;
  }

  function render() {
    renderSidebar();
    renderTabs();
    renderModeBtn();
    if (state.section === "savvas") { renderSavvasLesson(); } else if (state.section === "tracker") { renderTracker(); } else if (state.section === "connect") { renderConnectSection(); } else { renderLesson(); }
    saveState();
  }

  // — event delegation ——————————————————————————————————————
  document.addEventListener("click", function (e) {
    var t = e.target;

    if (t.id === "section-toggle") {
      state.section = (state.section === "connect") ? "savvas" : "connect"; state.cSession = -1;
      render();
      return;
    }

    if (t.dataset && t.dataset.section) {
      state.section = t.dataset.section;
      state.unit = 0; state.week = 0; state.tab = 0;
      var lc = document.getElementById("lesson-content");
      if (lc) { lc.style.padding = ""; lc.style.background = ""; lc.style.overflow = ""; lc.style.display = ""; lc.style.height = ""; }
      render();
      return;
    }

    if (t.id === "level-toggle") {
      state.level = (state.level === "below") ? "on" : "below";
      render();
      return;
    }

    if (t.classList && t.classList.contains("unit-title")) {
      var ug = t.parentElement;
      if (ug && ug.dataset.unit !== undefined) {
        state.unit = parseInt(ug.dataset.unit, 10);
        state.week = 0;
        state.tab  = 0;
        render();
      } else if (ug && ug.dataset.svunit !== undefined) {
        state.sUnit = parseInt(ug.dataset.svunit, 10);
        state.sWeek = 0;
        render();
      }
      return;
    }

    if (t.classList && t.classList.contains("week-item")) {
      if (t.dataset.unit !== undefined) {
        state.unit = parseInt(t.dataset.unit, 10);
        state.week = parseInt(t.dataset.week, 10);
        state.tab  = 0;
      } else if (t.dataset.svunit !== undefined) {
        state.sUnit = parseInt(t.dataset.svunit, 10);
        state.sWeek = parseInt(t.dataset.svweek, 10);
      }
      render();
      return;
    }

    if (t.classList && t.classList.contains("tab-btn")) {
      state.tab = parseInt(t.dataset.tab, 10);
      render();
      return;
    }

    if (t.id === "mode-toggle") {
      state.mode = (state.mode === "push-in") ? "pull-out" : "push-in";
      render();
      return;
    }

    var cuEl = t.closest ? t.closest("[data-cunit]") : (t.dataset && t.dataset.cunit !== undefined ? t : (t.parentElement && t.parentElement.dataset && t.parentElement.dataset.cunit !== undefined ? t.parentElement : null));
    if (cuEl && cuEl.dataset.cunit !== undefined) {
      state.cUnit = parseInt(cuEl.dataset.cunit, 10); state.cSession = -1; state.section = "connect"; render(); return;
    }
    var csEl = t.closest ? t.closest("[data-csession]") : (t.dataset && t.dataset.csession !== undefined ? t : (t.parentElement && t.parentElement.dataset && t.parentElement.dataset.csession !== undefined ? t.parentElement : null));
    if (csEl && csEl.dataset.csession !== undefined) {
      state.cSession = parseInt(csEl.dataset.csession, 10); render(); return;
    }
    if (t.id === "conn-back") { state.cSession = -1; render(); return; }
    if (t.id === "dur-toggle") {
      var durs = [30,45,60,90], di = durs.indexOf(state.cDur);
      state.cDur = durs[(di+1)%4]; render(); return;
    }
    if (t.id === "print-btn") { window.print(); }
  });

  // — init ——————————————————————————————————————————————————
  loadState();
  render();

}());
