
// <script language="JavaScript" src="PaintScopeCls.js"></script>

//		// 最初の実行
//		document.addEventListener('DOMContentLoaded', function(){ DOMContentLoaded_Exec(); } , false )
//		function DOMContentLoaded_Exec() {
//			
//			// ペイント領域
//			MainPaint = new PaintScopeCls( cvs , cvsB );
//			MainPaint.CtxDrw.strokeStyle = "rgba(  0,  0,  0,1.0)"; // 線の色
//			MainPaint.CtxDrw.fillStyle   = "rgba( 64,180,  0,1.0)"; // 中の色
//			MainPaint.CtxDrw.fillRect  (0 ,0, cvs.getBoundingClientRect().width
//			                                , cvs.getBoundingClientRect().height);
//			MainPaint.CtxDrw.strokeRect(0, 0, cvs.getBoundingClientRect().width
//			                                , cvs.getBoundingClientRect().height);
//			
//		}

// 
class PaintScopeCls {
	
	constructor( EmtDrw , EmtSrc ) {
		
		this.EmtDrw = EmtDrw;
		this.CtxDrw = EmtDrw.getContext("2d");

		this.EmtSrc = EmtSrc;

		EmtDrw.addEventListener( 'mousedown' , event => { // マウスが押された
			this.MouseDownEve(event,"mousemove");
		});
		EmtDrw.addEventListener( 'pointerdown' , event => { // スマホが押された
			this.MouseDownEve(event,"pointermove");
		});
		EmtDrw.addEventListener( 'mouseup' , event => { // マウスが離された
			this.MouseUpEve(event,"mousemove");
		});
		EmtDrw.addEventListener( 'pointerup' , event => { // スマホが離された
			this.MouseUpEve(event,"pointermove");
		});


		//EmtDrw.addEventListener( 'mouseover' , event => { 
		//	this.MouseDownEve(event,"mousemove");
		//});
		//EmtDrw.addEventListener( 'mouseout' , event => { 
		//	this.MouseUpEve(event,"mousemove");
		//});

		EmtDrw.addEventListener( 'mousemove' , event => { // スマホが離された
			this.Painting();
		});

	}

	MouseDownEve( event , EventName ){
		
		//var MousePos = this.GetMousePos();
		
		//this.LastPosX = MousePos.x;
		//this.LastPosY = MousePos.y;

		// イベント処理開始
		this.EmtDrw.addEventListener( EventName , this.OnMouseMove );
		this.Painting();
	}
	MouseUpEve(EventName){
		// イベント処理終了
		this.EmtDrw.removeEventListener( EventName , this.OnMouseMove );
	}

	GetMousePos() {
		var WrkRect = this.EmtDrw.getBoundingClientRect();
        return {
			   x: event.clientX - WrkRect.left
			,  y: event.clientY - WrkRect.top
        };
    }

	OnMouseMove = (event) => {
		
		if(event.buttons !== undefined){
				
			if( (event.buttons & 1) != 1 ){
				MouseUpEve("mousemove");
				MouseUpEve("pointermove");
				return;
			}
				
		}
		
		this.Painting();

	}

	Painting(){
		
		this.CtxDrw.beginPath();
		//this.CtxDrw.drawImage(this.EmtSrc, 0, 0 );
		//this.EmtSrc.getContext("2d").moveTo( 0 , 0 ); // 始点
		//this.EmtSrc.getContext("2d").lineTo( 100 , 100 ); // 終点
		//this.EmtSrc.getContext("2d").strokeStyle = "rgba(255, 255,  0,1.0)"; // 色
		//this.EmtSrc.getContext("2d").lineWidth = 5; // 太さ
		//this.EmtSrc.getContext("2d").stroke();	// 線を描画
		//this.CtxDrw.drawImage(cvsB, 0, 0 );
		//this.CtxDrw.clearRect(0, 0, 300, 300);
		this.CtxDrw.drawImage(this.EmtSrc, 0, 0);

		// デバッグメッセージ表示
		//DebugMsgBoxOnkey.Write( event.clientX + " " +  event.clientY );
		
		// 四角
		//this.CtxDrw.fillStyle = "rgb(0, 0, 255)";
		//this.CtxDrw.fillRect  (event.clientX,event.clientY,10,10);
		//this.CtxDrw.strokeRect(event.clientX,event.clientY,10,10);

		//var rect = this.EmtDrw.getBoundingClientRect();
		var MousePos = this.GetMousePos();
        // rect.left,
        // rect.top

		// 線
		//this.CtxDrw.moveTo( this.LastPosX , this.LastPosY ); // 始点
		//this.CtxDrw.lineTo( MousePos.x , MousePos.y ); // 終点

		this.CtxDrw.moveTo( MousePos.x , 0 ); // 始点
		this.CtxDrw.lineTo( MousePos.x , this.EmtDrw.height ); // 終点

		//this.CtxDrw.strokeStyle = "rgb(0, 0, 0)"; // 色
		this.CtxDrw.strokeStyle = "rgba(  0,  0,  0,1.0)"; // 色
		this.CtxDrw.lineWidth = 1; // 太さ
		//this.CtxDrw.stroke();	// 線を描画

		this.CtxDrw.moveTo( 0 , MousePos.y ); // 始点
		this.CtxDrw.lineTo( this.EmtDrw.width , MousePos.y ); // 終点
		//this.CtxDrw.stroke();	// 線を描画

		// キャンバス全体のピクセル情報を取得
		var imageData = this.CtxDrw.getImageData(0, 0 , this.EmtSrc.width , this.EmtSrc.height );
		var Pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル

		//for (var PosY = 99; PosY < 100; PosY++ ) {
			var PosY = MousePos.y;
			for (var PosX = 0; PosX < this.EmtSrc.width; PosX++ ) {

				var Pos = this.EmtSrc.width * PosY + PosX;
				Pixels[Pos * 4 + 0] = 0; // R
				Pixels[Pos * 4 + 1] = 0; // G
				Pixels[Pos * 4 + 2] = 0; // B
				Pixels[Pos * 4 + 3] = 255; // Alpha

			}
			var PosX = MousePos.x;
			for (var PosY = 0; PosY < this.EmtSrc.height; PosY++ ) {

				var Pos = this.EmtSrc.width * PosY + PosX;
				Pixels[Pos * 4 + 0] = 0; // R
				Pixels[Pos * 4 + 1] = 0; // G
				Pixels[Pos * 4 + 2] = 0; // B
				Pixels[Pos * 4 + 3] = 255; // Alpha

			}
		//}

		// 変更した内容をキャンバスに書き戻す
		this.CtxDrw.putImageData(imageData, 0, 0);

		document.getElementById("SizeX").innerHTML = this.EmtSrc.width;
		document.getElementById("SizeY").innerHTML = this.EmtSrc.height;
		document.getElementById("PosX").innerHTML = MousePos.x;
		document.getElementById("PosY").innerHTML = MousePos.y;
		
		//document.getElementById("codestep").innerHTML += ',' + MousePos.y + '/' + this.EmtSrc.width ;


		//this.LastPosX = MousePos.x ;
		//this.LastPosY = MousePos.y ;

	}

}


