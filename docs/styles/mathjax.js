window.MathJax = {
  tex: {
  inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams', // Enables automatic numbering for AMS math environments
    macros: {
      dv: ["\\frac{d #1}{d #2}", 2],
      pdv: ["\\frac{\\partial #1}{\\partial #2}", 2],
      abs: ["\\left|#1\\right|", 1],
      norm: ["\\left\\lVert#1\\right\\rVert", 1],
      qty: ["\\left #1\ \right", 1],
      dd: ["\\mathrm{d}", 0],
      vb: ["\\mathbf{#1}", 1],
      expval: ["\\left\\langle#1\\right\\rangle", 1],
    }
  
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// Ensures MathJax re-renders and resets equation counters properly when navigating between pages
document$.subscribe(() => { 
  MathJax.typesetClear()
  MathJax.texReset()
  // MathJax.typesetPromise()
})
