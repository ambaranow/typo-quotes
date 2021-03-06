let performReplace = require('./../perform/Replace')

export default function processSpecials (text) {
  const table = new Map([
    // ©
    [/(\([cс]\))|(\{copy\})/gi, '\u{00a9}'],
    // ®
    [/(\(r\))|(\{reg\})/gi, '\u{00ae}'],
    [/(\((тм|tm)\))|(\{(tm|trade)\})/gi, '\u{2122}'],
    // §
    [/\{(ss|sect)}/g, '\u{00a7}'],
    // Degree °
    [/\{deg}/g, '\u{00b0}'],
    // ₽
    [/\{rub}|\(rub\)/g, '\u{20bd}'],
    [/\{euro}|\(euro\)/g, '\u{20ac}'],
    [/\{cent}|\(cent\)/g, '\u{00a2}'],
    [/\{pound}|\(pound\)/g, '\u{00a3}'],
    [/\{(yen|yuan)}|\(yen|yuan\)/g, '\u{00a5}'],
    [/\{alpha\}/gi, '\u{03b1}'],
    [/\{beta\}/gi, '\u{03b2}'],
    [/\{gamma\}/gi, '\u{03b3}'],
    [/\{delta\}/gi, '\u{03b4}'],
    [/\{epsilon\}/gi, '\u{03b5}'],
    [/\{theta\}/gi, '\u{03b8}'],
    [/\{lambda\}/gi, '\u{03bb}'],
    [/\{mu\}/gi, '\u{03bc}'],
    [/\{nu\}/gi, '\u{03bd}'],
    [/\{pi\}/gi, '\u{03c0}'],
    [/\{rho\}/gi, '\u{03c1}'],
    [/\{sigma\}/gi, '\u{03c3}'],
    [/\{tau\}/gi, '\u{03c4}'],
    [/\{phi\}/gi, '\u{03c6}'],
    [/\{psi\}/gi, '\u{03a8}'],
    [/\{omega\}/gi, '\u{03c9}']
  ])
  return performReplace(text, table)
}
