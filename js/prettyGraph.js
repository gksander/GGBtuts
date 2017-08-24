$(function(){
  let parameters = {
    material_id: 'YFmzqsde',
    width: 800,
    height: 500,
    showMenuBar: true,
    // customToolBar: "0 || 17",
    enableRightClick: true,
    showAlgebraInput: true,
    enableShiftDragZoom: true,
    algebraInputPosition: 'bottom'
    // allowUpscale: true
  };
  document.app = new GGBApplet('5.0', parameters);
  document.app.inject('appContainer')


  $("#export").on('click', function(){
    let fn = $("#filename").val(),
        scale = parseFloat($("#scale").val()),
        transparent = $("#trans").prop("checked"),
        DPI = parseFloat($("#DPI").val());

    ggbApplet.writePNGtoFile(`${fn}.png`, scale, transparent, DPI);
  })
})