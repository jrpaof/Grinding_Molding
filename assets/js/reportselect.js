$(document).ready(function() {
   
    $(".timeselectgroup").hide();
    $("input[name$='reporttype']").click(function() {
        var input = $(this).val();
        var targetBox = $("." + input);

        $(".timeselectgroup").not(targetBox).hide();
        $(targetBox).show();
    });
});
