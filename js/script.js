$(document).ready(function(){
    $("button#findMatch").submit(function(){
        event.preventDefault();

        $("input").attr("required", "true");
        $("select").attr("required", "true");
        let age = $(".ageGroup option:selected").val();
        var phoneNumber = $(this).find("input#phone").val();
        alert("Your request has been received. Processing your match");        
        
        
        
    });
});