var data = [
    {
      type: "indicator",
      mode: "gauge",
      value: 160,
      domain: { x: [0, 1], y: [0, 1] },
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
  
  var layout = { width: 1070, height: 200 };
  var config = { displayModeBar: false, responsive: false };
  
  Plotly.newPlot('statusbarid', data, layout, config);
  