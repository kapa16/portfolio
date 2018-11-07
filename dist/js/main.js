$(document).ready(function() {

    $(window).on("scroll", function(){
        var win = $(window).height();
        if ($(window).scrollTop()>win)
            $(".sticky").addClass("sticky_fixed");
        else
            $(".sticky").removeClass("sticky_fixed");
    });

    let arrPercents = [92, 80, 24, 16];

    for(let i=0; i<arrPercents.length; i++) {
        let canvas = document.getElementById("value"+(i+1)),
            context = canvas.getContext("2d");
        context.arc(70, 70, 65, -Math.PI / 2, (Math.PI * 2) / 100 * arrPercents[i] - Math.PI / 2, false)
        context.strokeStyle = "#ff5252";
        context.lineWidth = 10;
        context.stroke();

        context.fillStyle = "#666";
        context.font = "bold 20pt Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(arrPercents[i]+"%", 70, 70);
    }
});