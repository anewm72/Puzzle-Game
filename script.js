function clickAction(event) {
  start.style.display = 'none';
  intro.style.display = 'none';
  jumpscare1.style.display = 'block';
}
start.onclick = clickAction;

scary.onclick = function(clickAction) {
  jumpscare1.style.display = 'none';
  one.style.display = 'block';
}

hair.onchange = function(inputAction) {
  if (document.getElementById("hair").value.includes("red")) {
    next.style.display = 'inline-block';
  }
  else if (document.getElementById("hair").value.includes("Red")) {
    next.style.display = 'inline-block';
  }
  else if (document.getElementById("hair").value.includes("burgundy")) {
    next.style.display = 'inline-block';
  }
  else if (document.getElementById("hair").value.includes("dark red")) {
    next.style.display = 'inline-block';
  }
  else if (document.getElementById("hair").value.includes("Burgundy")) {
    next.style.display = 'inline-block';
  }
  else if (document.getElementById("hair").value.includes("Dark red")) {
    next.style.display = 'inline-block';
  }
  else {
    next.style.display = 'none';
  }
}

next.onclick = function(clickAction) {
  after.style.display = 'block';
  complete1.style.display = 'block';
}

complete1.onclick = function(clickAction) {
  one.style.display = 'none';
  jumpscare2.style.display = 'block';
}

clue.onclick = function(clickAction) {
  clue_shown.style.display = 'block';
}

anagram.onchange = function(inputAction) {
  if (document.getElementById("anagram").value.includes("you cannot escape")) {
    anagram_done.style.display = 'inline-block';
  }
  else if (document.getElementById("anagram").value.includes("You cannot escape")) {
    anagram_done.style.display = 'inline-block';
  }
  else {
    anagram_done.style.display = 'none';
  }
}

anagram_done.onclick = function(clickAction) {
  jumpscare2.style.display = 'none';
  two.style.display = 'block';
}

fire.onclick = function(clickAction) {
  riddle_complete.style.display = 'block';
  complete2.style.display = 'block';
}

complete2.onclick = function(clickAction) {
  two.style.display = 'none';
  jumpscare3.style.display = 'block';
}

a1.onclick = function(clickAction) {
  norm_b.style.display = 'none';
  b1.style.display = 'inline-block';
}

b1.onclick = function(clickAction) {
  norm_s.style.display = 'none';
  s1.style.display = 'inline-block';
}

s1.onclick = function(clickAction) {
  norm_e.style.display = 'none';
  e1.style.display = 'inline-block';
}

e1.onclick = function(clickAction) {
  norm_n.style.display = 'none';
  n1.style.display = 'inline-block';
}

n1.onclick = function(clickAction) {
  norm_t.style.display = 'none';
  t1.style.display = 'inline-block';
}

t1.onclick = function(clickAction) {
  norm_b2.style.display = 'none';
  b2.style.display = 'inline-block';
}

b2.onclick = function(clickAction) {
  norm_u.style.display = 'none';
  u1.style.display = 'inline-block';
}

u1.onclick = function(clickAction) {
  norm_t2.style.display = 'none';
  t2.style.display = 'inline-block';
}

t2.onclick = function(clickAction) {
  norm_h.style.display = 'none';
  h1.style.display = 'inline-block';
}

h1.onclick = function(clickAction) {
  norm_e2.style.display = 'none';
  e2.style.display = 'inline-block';
}

e2.onclick = function(clickAction) {
  norm_r.style.display = 'none';
  r1.style.display = 'inline-block';
}

r1.onclick = function(clickAction) {
  norm_e3.style.display = 'none';
  e3.style.display = 'inline-block';
}

e3.onclick = function(clickAction) {
  complete_j3.style.display = 'block';
}

complete_j3.onclick = function(clickAction) {
  jumpscare3.style.display = 'none';
  three.style.display = 'block';
}

doorone.onclick = function(clickAction) {
  three.style.display = 'none';
  good_end.style.display = 'block';
}

doortwo.onclick = function(clickAction) {
  three.style.display = 'none';
  bad_end.style.display = 'block';
}

doorthree.onclick = function(clickAction) {
  three.style.display = 'none';
  bad_end2.style.display = 'block';
}

again.onclick = function(clickAction) {
  good_end.style.display = 'none';
  start.style.display = 'block';
  intro.style.display = 'block';
  document.getElementById('hair').value = '';
  next.style.display = 'none';
  after.style.display = 'none';
  complete1.style.display = 'none';
  clue_shown.style.display = 'none';
  document.getElementById('anagram').value = '';
  anagram_done.style.display = 'none';
  riddle_complete.style.display = 'none';
  complete2.style.display = 'none';
  norm_b.style.display = 'inline-block';
  b1.style.display = 'none';
  norm_s.style.display = 'inline-block';
  s1.style.display = 'none';
  norm_e.style.display = 'inline-block';
  e1.style.display = 'none';
  norm_n.style.display = 'inline-block';
  n1.style.display = 'none';
  norm_t.style.display = 'inline-block';
  t1.style.display = 'none';
  norm_b2.style.display = 'inline-block';
  b2.style.display = 'none';
  norm_u.style.display = 'inline-block';
  u1.style.display = 'none';
  norm_t2.style.display = 'inline-block';
  t2.style.display = 'none';
  norm_h.style.display = 'inline-block';
  h1.style.display = 'none';
  norm_e2.style.display = 'inline-block';
  e2.style.display = 'none';
  norm_r.style.display = 'inline-block';
  r1.style.display = 'none';
  norm_e3.style.display = 'inline-block';
  e3.style.display = 'none';
  complete_j3.style.display = 'none';
}

again2.onclick = function(clickAction) {
  bad_end.style.display = 'none';
  start.style.display = 'block';
  intro.style.display = 'block';
  document.getElementById('hair').value = '';
  next.style.display = 'none';
  after.style.display = 'none';
  complete1.style.display = 'none';
  clue_shown.style.display = 'none';
  document.getElementById('anagram').value = '';
  anagram_done.style.display = 'none';
  riddle_complete.style.display = 'none';
  complete2.style.display = 'none';
  norm_b.style.display = 'inline-block';
  b1.style.display = 'none';
  norm_s.style.display = 'inline-block';
  s1.style.display = 'none';
  norm_e.style.display = 'inline-block';
  e1.style.display = 'none';
  norm_n.style.display = 'inline-block';
  n1.style.display = 'none';
  norm_t.style.display = 'inline-block';
  t1.style.display = 'none';
  norm_b2.style.display = 'inline-block';
  b2.style.display = 'none';
  norm_u.style.display = 'inline-block';
  u1.style.display = 'none';
  norm_t2.style.display = 'inline-block';
  t2.style.display = 'none';
  norm_h.style.display = 'inline-block';
  h1.style.display = 'none';
  norm_e2.style.display = 'inline-block';
  e2.style.display = 'none';
  norm_r.style.display = 'inline-block';
  r1.style.display = 'none';
  norm_e3.style.display = 'inline-block';
  e3.style.display = 'none';
  complete_j3.style.display = 'none';
}

again3.onclick = function(clickAction) {
  bad_end2.style.display = 'none';
  start.style.display = 'block';
  intro.style.display = 'block';
  document.getElementById('hair').value = '';
  next.style.display = 'none';
  after.style.display = 'none';
  complete1.style.display = 'none';
  clue_shown.style.display = 'none';
  document.getElementById('anagram').value = '';
  anagram_done.style.display = 'none';
  riddle_complete.style.display = 'none';
  complete2.style.display = 'none';
  norm_b.style.display = 'inline-block';
  b1.style.display = 'none';
  norm_s.style.display = 'inline-block';
  s1.style.display = 'none';
  norm_e.style.display = 'inline-block';
  e1.style.display = 'none';
  norm_n.style.display = 'inline-block';
  n1.style.display = 'none';
  norm_t.style.display = 'inline-block';
  t1.style.display = 'none';
  norm_b2.style.display = 'inline-block';
  b2.style.display = 'none';
  norm_u.style.display = 'inline-block';
  u1.style.display = 'none';
  norm_t2.style.display = 'inline-block';
  t2.style.display = 'none';
  norm_h.style.display = 'inline-block';
  h1.style.display = 'none';
  norm_e2.style.display = 'inline-block';
  e2.style.display = 'none';
  norm_r.style.display = 'inline-block';
  r1.style.display = 'none';
  norm_e3.style.display = 'inline-block';
  e3.style.display = 'none';
  complete_j3.style.display = 'none';
}
