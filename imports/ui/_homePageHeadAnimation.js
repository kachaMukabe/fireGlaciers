// hide menu and cross
export function Menu(){
    $('.menu').hide();
    $('#cross').css('display', 'none');

    let clicks = 2;
    let odd = false;
    let even = false;

    $('button').on('click', (e) => {
        clicks += 1;
        evenOdd(clicks);
        if (odd) {
            $('.menu').slideDown();
            $('#cross').css('display', 'block');
            $('#bars').css('display', 'none');
        } else if (even) {
            $('.menu').slideUp();
            $('#cross').css('display', 'none');
            $('#bars').css('display', 'block');
        }
    });

    $('li').on('click', (e) => {
        $('.h1').text(e.target.textContent);

    });

   
}
export function evenOdd(number) {
     let reminder = number % 2;
     if (reminder == 0) {
         even = true;
         odd = false;
     } else if (reminder == Math.round(reminder)) {
         odd = true;
         even = false;
     }
 }