let a = 0
for (i = 0; i < 16; i++ ){
$('#grid').append
('<div id="box"><div class="dark"></div></div>')}


$('#grid').on('click', '.dark', function(){

    $(this).toggleClass('light');


});
