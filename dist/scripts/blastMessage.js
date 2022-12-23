var fileUpload = document.getElementById("phone_number");
  var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;

  if (regex.test(fileUpload.value.toLowerCase())) {
    if (typeof (FileReader) != "undefined") {
      var reader = new FileReader();
      reader.onload = function (e) {
        var rows = e.target.result.split("\n");
        for (var i = 1; i < rows.length; i++) {
          var cells = rows[i].split(",");
          if (cells.length > 1) {
              var panggilan = cells[0];
              var nama = cells[1];
              var phone = cells[2];

              console.log(panggilan);
              console.log(nama);
              console.log(phone);

              var input_message = document.getElementById("message");
              var message = input_message.value;

              message = message.replace("#panggilan#", panggilan);
              message = message.replace("#nama#",nama);

              console.log(message);
              var chat_id = phone.trim() + "@c.us";
              window.WAPI.sendMessage(chat_id,message);
          }
        }
      }
      reader.readAsText(fileUpload.files[0]);
    } else {
        alert("This browser does not support HTML5.");
    }
  } else {
    alert("Please upload a valid CSV file.");
  }