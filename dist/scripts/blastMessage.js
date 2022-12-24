function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var fileUpload = document.getElementById("phone_number");
  var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;

  var minDelay = parseInt(document.getElementsByName("minDelay")[0].value) * 1000;
  var maxDelay = parseInt(document.getElementsByName("maxDelay")[0].value) * 1000;

  console.log(minDelay);
  console.log(maxDelay);
  //return;

  

  if (regex.test(fileUpload.value.toLowerCase())) {
    if (typeof (FileReader) != "undefined") {
      var reader = new FileReader();
      reader.onload = async function (e) {
        var rows = e.target.result.split("\n");
        for (var i = 1; i < rows.length; i++) {
          var delay = getRndInteger(minDelay, maxDelay);
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

              console.log(`send Message to ${chat_id}`)
              window.WAPI.sendMessage(chat_id,message);
              console.log(`wait ${delay} ms`);
              
              await sleep(delay);
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