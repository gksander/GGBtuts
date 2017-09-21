$(function(){
  let w = 800,
      h = 500;

  let parameters = {
    material_id: 'YFmzqsde',
    width: w,
    height: h,
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

  // Handle Export
  $("#export").on('click', function(){
    let fn = $("#filename").val(),
        scale = parseFloat($("#scale").val()),
        transparent = $("#trans").prop("checked"),
        DPI = parseFloat($("#DPI").val());

    ggbApplet.writePNGtoFile(`${fn}.png`, scale, transparent, DPI);
  });

  // Handle resizing
  $("#appWidth").val(w);
  $("#appHeight").val(h);
  $("#appWidth, #appHeight").on('change', function(){
    let w = parseFloat($("#appWidth").val()),
        h = parseFloat($("#appHeight").val());

    $("#appWidth").val(w);
    $("#appHeight").val(h);

    ggbApplet.setSize(w, h);
    if (h > 500){
      $("#appContainer").height(h);
    }
    
    // $("#appContainer, .appScaler").height(h).width(w);

  });

  // Handle changing of views
  $(".viewButton").on('click', function(){
    let view = $(this).attr('id').substr(4);

    ggbApplet.setPerspective(view);
    ggbApplet.setGridVisible(true);

    ggbApplet.showToolBar(view != "G");
    ggbApplet.showAlgebraInput(view != "G");
  });

  $("#showInputBar").on('click', function(){
    ggbApplet.showAlgebraInput(true);
    ggbApplet.recalculateEnvironments();
  });


})