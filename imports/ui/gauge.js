export default (gauge = tmp => {
  $(function() {
    var status = "Normal";
    var $ppc = $(".progress-pie-chart"),
      percent = tmp, 
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
    if (percent < 19){
      $ppc;
      status = "Normal"
    }
    $(".ppc-progress-fill").css("transform", "rotate(" + deg + "deg)");
    $(".ppc-percents span").html(status);
  });
});
