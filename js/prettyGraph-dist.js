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
        algebraInputPosition: "bottom"
    };
    document.app = new GGBApplet("5.0", t), document.app.inject("appContainer"), $("#export").on("click", function() {
        var t = $("#filename").val(), a = parseFloat($("#scale").val()), e = $("#trans").prop("checked"), p = parseFloat($("#DPI").val());
        ggbApplet.writePNGtoFile(t + ".png", a, e, p);
    }), $("#appWidth").val(800), $("#appHeight").val(500), $("#appWidth, #appHeight").on("change", function() {
        var t = parseFloat($("#appWidth").val()), a = parseFloat($("#appHeight").val());
        $("#appWidth").val(t), $("#appHeight").val(a), ggbApplet.setSize(t, a);
    }), $(".viewButton").on("click", function() {
        var t = $(this).attr("id").substr(4);
        ggbApplet.setPerspective(t);
    });
});