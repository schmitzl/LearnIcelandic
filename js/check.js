$(function(){
    
    $( ".check" ).click(function() {
      $(this).parents("form").children("sol").show();
        $(this).parents("form").children("sub").hide();
        
        solutions = $(this).parents("form").children("sol");
        
        solutions.each(function(){
            sol = $(this).text();
            classname = "." + $(this).attr("name");
            answerInput = $(this).siblings(classname);
            answer = answerInput.val();
            
            isCorrectAnswer = (sol.toLowerCase() === answer.toLowerCase());
            
            if(isCorrectAnswer) {
                answerInput.css("border-bottom"," 2px solid #0c5");
            } else {
                answerInput.css("border-bottom"," 2px solid #e02");
            }
            
        });
        
    });
});