var data = [
  {
    type: "indicator",
    mode: "gauge",
    value: 30,
    title: "Media",
    domain: { x: [0.1, 0.9], y: [0.05, 0.3] },
    gauge: {
      axis: { range: [0, 100], visible: false },
      bgcolor: "blue",
      bar: { color: "red" }
    }
  },
  {
    type: "indicator",
    mode: "gauge",
    value: 60,
    title: "Industry",
    domain: { x: [0.1, 0.9], y: [0.35, 0.6] },
    gauge: {
      axis: { range: [0, 100], visible: false },
      bgcolor: "blue",
      bar: { color: "red" }
    }
  },
  {
    type: "indicator",
    mode: "gauge",
    value: 40,
    title: "Government",
    domain: { x: [0.1, 0.9], y: [0.65, 0.9] },
    gauge: {
      axis: { range: [0, 100], visible: false },
      bgcolor: "blue",
      bar: { color: "red" }
    }
  },
];
  
var layout = { 
  width: 260, height: 600,
  margin: { t: 5, r: 10, b: 5, l: 10},
  paper_bgcolor: "cyan"
};
var config = { displayModeBar: false, responsive: false };

Plotly.newPlot('dashboardid', data, layout, config);
  