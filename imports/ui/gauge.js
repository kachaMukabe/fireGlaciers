export default gauge=()=>{
$(function () {
    var status = "Normal"
    var $ppc = $('.progress-pie-chart'),
        percent = parseInt($ppc.data('percent')),
        deg = 360 * percent / 100;
    if (percent > 19) {
        $ppc.addClass('gt-50');
        status = "Medium"
    }
    if (percent > 28) {
        $ppc.addClass('fun');
        status = "High"
    }
    $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
    $('.ppc-percents span').html(status);
});
}
