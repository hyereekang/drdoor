$(document).ready(function(){
  
        // todo.
        $('[data-category=ENTRANCE]').click(textChange);
    });
    
    
    function textChange(){
        // $('#panel2').css('font-size','30pt').css('color','green');
        $('mark').css({
            'font-size':'25px',
            'color':'green',
            'font-weight':'bold'
        });
    }