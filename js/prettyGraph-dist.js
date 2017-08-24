"use strict";

$(function() {
    var e = {
        material_id: "YFmzqsde",
        width: 800,
        height: 500,
        showMenuBar: !0,
        showAlgebraInput: !0,
        enableShiftDragZoom: !0,
        algebraInputPosition: "bottom"
    };
    document.app = new GGBApplet("5.0", e), document.app.inject("appContainer"), $("#export").on("click", function() {
        var e = $("#filename").val(), t = parseFloat($("#scale").val()), a = $("#trans").prop("checked"), n = parseFloat($("#DPI").val());
        ggbApplet.writePNGtoFile(e + ".png", t, a, n);
    });
});