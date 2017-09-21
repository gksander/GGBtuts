"use strict";

$(function() {
    var t = {
        material_id: "YFmzqsde",
        width: 800,
        height: 500,
        showMenuBar: !0,
        enableRightClick: !0,
        showAlgebraInput: !0,
        enableShiftDragZoom: !0,
        enableLabelDrags: !0,
        algebraInputPosition: "bottom"
    };
    document.app = new GGBApplet("5.0", t), document.app.inject("appContainer"), $("#export").on("click", function() {
        var t = $("#filename").val(), e = parseFloat($("#scale").val()), a = $("#trans").prop("checked"), p = parseFloat($("#DPI").val());
        ggbApplet.writePNGtoFile(t + ".png", e, a, p);
    }), $("#appWidth").val(800), $("#appHeight").val(500), $("#appWidth, #appHeight").on("change", function() {
        var t = parseFloat($("#appWidth").val()), e = parseFloat($("#appHeight").val());
        $("#appWidth").val(t), $("#appHeight").val(e), ggbApplet.setSize(t, e), e > 500 && $("#appContainer").height(e);
    }), $(".viewButton").on("click", function() {
        var t = $(this).attr("id").substr(4);
        ggbApplet.setPerspective(t), ggbApplet.setGridVisible(!0), ggbApplet.showToolBar("G" != t), 
        ggbApplet.showAlgebraInput("G" != t);
    }), $("#showInputBar").on("click", function() {
        ggbApplet.showAlgebraInput(!0), ggbApplet.recalculateEnvironments();
    });
});