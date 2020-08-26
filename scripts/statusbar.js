var data = [
  {
    type: "indicator",
    mode: "gauge",
    value: 2030,
    domain: { x: [0, 1], y: [0.1, 0.45] },
    gauge: {
      shape: "bullet",
      axis: { range: [2020, 2040], visible: true },
      bgcolor: "lightgray",
      bar: { color: "gray" }
    }
  },
  {
    type: "indicator",
    mode: "gauge",
    value: 160,
    domain: { x: [0, 1], y: [0.55, 0.9] },
    gauge: {
      shape: "bullet",
      axis: { range: [150, 1150], visible: false },
      bgcolor: "cyan",
      steps: [
        { range: [350, 750], color: "yellow" }, { range: [750, 1150], color: "red"}],
      bar: { color: "darkblue" }
    }
  }
];
  
var layout = { 
  width: 1070, height: 160,
  margin: { t: 5, r: 15, b: 10, l: 15}
};
var config = { displayModeBar: false, responsive: false };

Plotly.newPlot('statusbarid', data, layout, config);
  