const MAX_ZOOM_LEVEL = 24
export const heatmapLayer = {
    maxzoom: MAX_ZOOM_LEVEL,
    type: 'heatmap',
    paint: {
      // Increase the heatmap weight based on frequency and property magnitude
      'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 10, 1],
      // Increase the heatmap color weight weight by zoom level
      // heatmap-intensity is a multiplier on top of heatmap-weight
      'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 0.1],
      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
      // Begin color ramp at 0-stop with a 0-transparancy color
      // to create a blur-like effect.
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'rgba(33,102,172,0)',
        0.2,
        'rgb(103,169,207)',
        0.4,
        'rgb(209,229,240)',
        0.6,
        'rgb(253,189,76)',
        0.8,
        'rgb(246,138,49)',
        0.9,
        'rgb(250,25,25)'
      ],
      // Adjust the heatmap radius by zoom level
      'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 20],
      // Transition from heatmap to circle layer by zoom level
      'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 2]
    }
  };