const sessionLabels = [
  "",          // index 0 unused
  "First",     // 1
  "Second",    // 2
  "Third",     // 3
  "Fourth",    // 4
  "Fifth",     // 5
  "Sixth",     // 6
  "Seventh",   // 7
  "Eighth",    // 8
  "Ninth",     // 9
  "Tenth"      // 10
];

export default function getSessionLabel(n) {
  return  sessionLabels[n] ? `${sessionLabels[n]} Session` : `Session: ${n}`;
}