// AirQR unit tests — run with: node test.js

var passed = 0, failed = 0;

function assert(condition, name, detail) {
  if (condition) {
    passed++;
    console.log('\x1b[32mPASS\x1b[0m ' + name);
  } else {
    failed++;
    console.log('\x1b[31mFAIL\x1b[0m ' + name + (detail ? ' — ' + detail : ''));
  }
}

function assertEq(actual, expected, name) {
  var ok = actual === expected;
  assert(ok, name, ok ? '' : 'expected ' + JSON.stringify(expected) + ', got ' + JSON.stringify(actual));
}

// === splitText3 (extracted from index.html) ===

function splitText3(text) {
  var len = text.length;
  if (len < 3) return [text];
  var base = Math.max(1, Math.floor(len * 0.15));
  var extra = len - base * 3;
  var r1 = Math.floor(Math.random() * (extra + 1));
  var r2 = Math.floor(Math.random() * (extra - r1 + 1));
  var s = [base + r1, base + r2, base + (extra - r1 - r2)];
  return [text.slice(0, s[0]), text.slice(s[0], s[0] + s[1]), text.slice(s[0] + s[1])];
}

function makeStr(len) {
  var s = '';
  for (var i = 0; i < len; i++) s += String.fromCharCode(97 + (i % 26));
  return s;
}

// --- Basic ---
console.log('\n--- splitText3: Basic ---');

var parts = splitText3('abcdefghij');
assertEq(parts.length, 3, 'returns 3 parts');
assertEq(parts.join(''), 'abcdefghij', 'concatenation matches original');

// --- Short text fallback ---
console.log('\n--- splitText3: Short Text Fallback ---');

assertEq(splitText3('').length, 1, 'len=0 returns 1 part');
assertEq(splitText3('')[0], '', 'len=0 content is empty string');
assertEq(splitText3('a').length, 1, 'len=1 returns 1 part');
assertEq(splitText3('a')[0], 'a', 'len=1 content correct');
assertEq(splitText3('ab').length, 1, 'len=2 returns 1 part');
assertEq(splitText3('ab')[0], 'ab', 'len=2 content correct');

// --- Minimum splittable (len=3) ---
console.log('\n--- splitText3: Minimum Splittable (len=3) ---');

var ok3 = true;
for (var i = 0; i < 100; i++) {
  var p = splitText3('abc');
  if (p.length !== 3 || p.join('') !== 'abc' || p.some(function(x) { return x.length < 1; })) {
    ok3 = false; break;
  }
}
assert(ok3, 'len=3: 100 trials, always 3 parts each >= 1 char');

// --- Min 1 char per part across lengths ---
console.log('\n--- splitText3: Min 1 Char Per Part ---');

[3, 4, 5, 6, 7, 10, 20, 50, 100].forEach(function(len) {
  var text = makeStr(len);
  var ok = true;
  for (var t = 0; t < 100; t++) {
    var p = splitText3(text);
    if (p.length !== 3 || p.join('') !== text || p.some(function(x) { return x.length < 1; })) {
      ok = false; break;
    }
  }
  assert(ok, 'len=' + len + ': 100 trials, all parts >= 1 char');
});

// --- Min 15% per part ---
console.log('\n--- splitText3: Min 15% Per Part ---');

[7, 10, 20, 50, 100, 200, 500].forEach(function(len) {
  var text = makeStr(len);
  var base = Math.max(1, Math.floor(len * 0.15));
  var ok = true;
  for (var t = 0; t < 200; t++) {
    var p = splitText3(text);
    if (p.join('') !== text) { ok = false; break; }
    for (var j = 0; j < 3; j++) {
      if (p[j].length < base) { ok = false; break; }
    }
    if (!ok) break;
  }
  assert(ok, 'len=' + len + ': 200 trials, all parts >= ' + base + ' chars (15% floor)');
});

// --- Randomness ---
console.log('\n--- splitText3: Randomness ---');

var text36 = 'abcdefghijklmnopqrstuvwxyz0123456789';
var seen = {};
for (var i = 0; i < 50; i++) {
  var p = splitText3(text36);
  seen[p[0].length + ',' + p[1].length] = true;
}
var unique = Object.keys(seen).length;
assert(unique > 1, 'produces varying splits (' + unique + ' unique in 50 trials)');

// --- Unicode ---
console.log('\n--- splitText3: Unicode ---');

var cjk = '你好世界测试文本这是一个测试';
var cp = splitText3(cjk);
assertEq(cp.join(''), cjk, 'CJK: concatenation matches');
assertEq(cp.length, 3, 'CJK: returns 3 parts');
assert(cp.every(function(x) { return x.length >= 1; }), 'CJK: each part >= 1 char');

var nl = 'abc\ndef\nghi\njkl';
assertEq(splitText3(nl).join(''), nl, 'newlines: concatenation matches');

// --- Stress ---
console.log('\n--- splitText3: Stress (10K trials) ---');

var big = makeStr(200);
var failures = 0;
for (var t = 0; t < 10000; t++) {
  var p = splitText3(big);
  if (p.length !== 3 || p.join('') !== big || p.some(function(x) { return x.length < 1; })) failures++;
}
assertEq(failures, 0, '10,000 trials on 200-char text: 0 failures');

// === Summary ===
console.log('\n' + '='.repeat(40));
console.log(passed + ' passed, ' + failed + ' failed');
process.exit(failed > 0 ? 1 : 0);
