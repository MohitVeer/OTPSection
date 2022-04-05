$("#btnOTP").on('click', function(){
  var mobile_no = $("#mobile_no").val();
  var raw_data={"mobile":mobile_no};
  $("#otp").text('');
  $.ajax('http://deerika.djtretailers.com/authentication/guest-user-login',{
    data: JSON.stringify(raw_data),
    type:'POST',    
    processData:false,
    contentType:'applicaton/json',
    success: function(data) {
   
      
      console.log(data);
      $("#otp").append(data.data.otp);
     
      }
  });
});