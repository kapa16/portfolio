$(document).ready(function () {

    $(window).on("scroll", function () {
        var win = $(window).height();
        if ($(window).scrollTop() > win)
            $(".sticky").addClass("sticky_fixed");
        else
            $(".sticky").removeClass("sticky_fixed");
    });


});

document.onscroll = function () {

    if ((($(document).scrollTop() + $(window).height()) > $("#value1").offset().top)
        && (($(document).scrollTop() - $("#value1").offset().top)) < $("#value1").height()){
    let arrPercents = [92, 80, 24, 16];

    for (let i = 0; i < arrPercents.length; i++) {
        let canvas = document.getElementById("value" + (i + 1)),
            context = canvas.getContext("2d");

        let run = function (j) {
            let time = (new Date().getTime() - startTime) / 1000;
            let startAngle = (-Math.PI / 2);
            let endAngle = ((Math.PI * 2) / 100 * arrPercents[i]) - (Math.PI / 2);

            if (time < 1) {
                requestAnimationFrame(run);
                endAngle = startAngle + (endAngle - startAngle) * time;
            }

            context.clearRect(0, 0, 140, 140);
            context.beginPath();
            context.arc(70, 70, 65, startAngle, endAngle, false);
            //context.closePath();
            context.strokeStyle = "#ff5252";
            context.lineWidth = 10;
            context.stroke();

            context.fillStyle = "#666";
            context.font = "bold 20pt Arial";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(arrPercents[i] + "%", 70, 70);
        }

        let startTime = (new Date().getTime());
        run();

    }
}

}
;