function openNav() {
     document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
     document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function () {
     $(".js--services-section").waypoint(function (a) {
          "down" == a ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
     }),
          $("nav ul li a").click(function () {
               $("nav ul li a").removeClass("active"), $("this").addclass("active");
          }),
          $("nav a img.logo").click(function () {
               $("nav ul li a").removeClass("active"), $("nav ul li a:first-child a").addclass("active");
          });
     mixitup(".container");
     $("a").on("click", function (a) {
          var t;
          "" !== this.hash &&
               (a.preventDefault(),
                    (t = this.hash),
                    $("html,body").animate({ scrollTop: $(t).offset().top }, 800, function () {
                         window.location.hash = t;
                    }));
     });
});

$("svg.radial-progress").each(function (e, t) {
     $(this).find($("circle.complete")).removeAttr("style");
}),
     $(window)
          .scroll(function () {
               $("svg.radial-progress").each(function (e, t) {
                    $(window).scrollTop() > $(this).offset().top - 0.75 * $(window).height() &&
                         $(window).scrollTop() < $(this).offset().top + $(this).height() - 0.25 * $(window).height() &&
                         ((percent = $(t).data("percentage")),
                              (radius = $(this).find($("circle.complete")).attr("r")),
                              (circumference = 2 * Math.PI * radius),
                              (strokeDashOffset = circumference - (percent * circumference) / 100),
                              $(this).find($("circle.complete")).animate({ "stroke-dashoffset": strokeDashOffset }, 1250));
               });
          })
          .trigger("scroll");

