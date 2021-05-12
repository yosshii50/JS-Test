

// 最初の実行
document.addEventListener('DOMContentLoaded', function(){ head_DOMContentLoaded_Exec(); } , false )
function head_DOMContentLoaded_Exec() {
	//document.write("DOMContentLoaded_Exec");
	rect_ctx0.strokeRect(0, 0, 640, 100);
}

/*
class Color {
    setName(n) {
      this.name = n;
    }
    getName() {
      return this.name;
    }
}
*/


		var Cntkeydown = 0;

		document.body.addEventListener( 'keydown' , event => {
		

			//if (event.key === 'v' ) {
           
				rect_ctx0.strokeStyle = FillColor; // 線の色
				rect_ctx0.fillStyle   = BackColor; // 中の色
				rect_ctx0.strokeRect(10 , 50 - 13 , 100, 15);
				rect_ctx0.fillRect  (10 , 50 - 13 , 100, 15);

				rect_ctx0.fillStyle = FillColor; // 中の色
				rect_ctx0.font = "12px serif";
				rect_ctx0.fillText(event.key + Cntkeydown , 10, 50);

			//}

			Cntkeydown++;

		});

