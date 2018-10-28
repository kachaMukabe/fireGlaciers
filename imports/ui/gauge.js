export default (gauge = tmp => {
  $(function() {
    var status = "Normal";
    var $ppc = $(".progress-pie-chart"),
      percent = tmp, //this : parseInt($ppc.data("percent")) has been replaced
      deg = (360 * percent) / 100;

    console.log("number : " + $ppc.data("percent"));
    if (percent > 19) {
      $ppc.addClass("gt-50");
      status = "Medium";
    }
    if (percent > 28) {
      $ppc.addClass("fun");
      status = "High";
    }
    $(".ppc-progress-fill").css("transform", "rotate(" + deg + "deg)");
    $(".ppc-percents span").html(status);
  });
});
