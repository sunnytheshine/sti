$(document).ready(function(){

        $("#toggle").click(function (){
                if(this.checked) {      
                  $('#A').hide();
                  $('.contentA').hide();
                  $('#B').show();
                  $('.contentB').show();
                } else {
                  $('#B').hide();
                  $('#A').show();
                  $('.contentA').show();
                  $('.contentB').hide();
                }
        });
});

