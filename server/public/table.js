function showtable(){
    $.ajax({
        url:"/",
        type:"POST",
        contenType:'application/json',
        success: function(res) {
            console.log(res);
            console.log("Sucessfully done")
            $("#render").html(res);
        }
    });
}
showtable()