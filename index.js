var $ = require("jquery");
const iro = require('@jaames/iro');

$(document).ready(function() {
  var colorPicker = new iro.ColorPicker('#color-picker-container');
  colorPicker.on('color:change', function() {
    $("body").css('background-color',colorPicker.color.hexString);
    let luma = 0.2126 * colorPicker.color.rgb.r + 0.7152 * colorPicker.color.rgb.g + 0.0722 * colorPicker.color.rgb.b;
    if (luma < 160) {
      $("button").css('color','white');
    }
    else {
      $("button").css('color','#555');
    }
    $.ajax({
	url: `http://${process.env.SERVER_IP}:${process.env.PORT}/api/${colorPicker.color.rgb.r}/${colorPicker.color.rgb.g}/${colorPicker.color.rgb.b}`,
	type: "GET",
    });
  });
});

