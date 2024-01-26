document.addEventListener(
  "DOMContentLoaded",
  function () {
    /* Heart function */
    var love = setInterval(function () {
      var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 150) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
      var r_time = Math.floor(Math.random() * 50) + 5; // Điều chỉnh giá trị tại đây để giảm tốc độ rơi

      var imageUrl = "abc.png"; // Đặt đường dẫn hình ảnh của bạn ở đây

      $(".bg_heart").append(
        "<div class='heart' style='width:" +
          r_size +
          "px;height:" +
          r_size +
          "px;left:" +
          r_left +
          "%;background-image:url(" +
          imageUrl +
          ");-webkit-animation:love " +
          r_time +
          "s ease;-moz-animation:love " +
          r_time +
          "s ease;-ms-animation:love " +
          r_time +
          "s ease;animation:love " +
          r_time +
          "s ease; background-size: 100% 100%; background-position: center'></div>"
      );

      $(".bg_heart").append(
        "<div class='heart' style='width:" +
          (r_size - 10) +
          "px;height:" +
          (r_size - 10) +
          "px;left:" +
          (r_left + r_num) +
          "%;background-image:url(" +
          imageUrl +
          ");-webkit-animation:love " +
          (r_time + 5) +
          "s ease;-moz-animation:love " +
          (r_time + 5) +
          "s ease;-ms-animation:love " +
          (r_time + 5) +
          "s ease;animation:love " +
          (r_time + 5) +
          "s ease; background-size: 100% 100%; background-position: center'></div>"
      );

      $(".heart").each(function () {
        var top = $(this)
          .css("top")
          .replace(/[^-\d\.]/g, "");
        var width = $(this)
          .css("width")
          .replace(/[^-\d\.]/g, "");
        if (top <= -100 || width >= 150) {
          $(this).detach();
        }
      });
    }, 500);
    /* End heart function */
  },
  false
);