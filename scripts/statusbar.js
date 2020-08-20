var data = [
    {
      type: "indicator",
      mode: "gauge",
      gauge: { shape: "bullet" },
      delta: { reference: 100 },
      value: 65,
      domain: { x: [0, 1], y: [0, 1] }
    }
  ];
  
  var layout = { width: 1076, height: 200 };
  Plotly.newPlot('statusbarid', data, layout);