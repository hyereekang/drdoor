
$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		speed: 500,
		pause: 4000,
		mode:'fade',
		autoControls: true,
		pager:true,
	});
});

$(document).ready(function(){
    $("#shoppingcart").click(textChange);
    $(".btn_close").click(test);
});

function textChange(){
    $("#searchPanel").css({
        "right" : "0%",
        "background-color" : "green",
        "font-weight" : "bold"
    });
}
function test(){
    $("#searchPanel").css({
        "right" : "-50%"
    });
}