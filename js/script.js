$(document).ready(function(){
    $("button#findMatch").click(function(){
        let age = $(".ageGroup option:selected").val();
        var phoneNumber = $(this).find("input#phone").val();
        alert("Your request has been received. Processing your match");
        
        
    });
});