
// デバッグ用メッセージ表示
class js_rpg_05_mouse_Cls {
	
	constructor( document_body , EmtDrw ) {
		
		this.document_body = document_body;
		this.EmtDrw = EmtDrw;
		this.CtxDrw = EmtDrw.getContext("2d");
		this.lineWidth = 1;
		this.Color = "rgb(0, 0, 0)";

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

	}
	
	MouseDownEve( event , EventName ){
		
		this.LastPosX = event.clientX;
		this.LastPosY = event.clientY;

		// イベント処理開始
		this.EmtDrw.addEventListener( EventName , this.OnMouseMove(event) );
		this.Painting();
	}
	MouseUpEve( event , EventName){
		// イベント処理終了
		this.EmtDrw.removeEventListener( EventName , this.OnMouseMove(event) );
	}

	OnMouseMove = (event) => {
		
		if(event.buttons !== undefined){
				
			if( (event.buttons & 1) != 1 ){
				MouseUpEve( event , "mousemove"   );
				MouseUpEve( event , "pointermove" );
				return;
			}
				
		}
		
		this.Painting( event );

	}

	Painting( event ){

		var NowMove = this.NowMove( event );

		// カスタムイベント
		this.document_body.dispatchEvent(new CustomEvent('OnKeyScanMove', { detail : NowMove }));
		
		// デバッグメッセージ表示
		//DebugMsgBoxOnkey.Write( event.clientX + " " +  event.clientY );


		// 四角
		//this.CtxDrw.fillStyle = "rgb(0, 0, 255)";
		//this.CtxDrw.fillRect  (event.clientX,event.clientY,10,10);
		//this.CtxDrw.strokeRect(event.clientX,event.clientY,10,10);

		//// 線
		//this.CtxDrw.moveTo( this.LastPosX , this.LastPosY ); // 始点
		//this.CtxDrw.lineTo( event.clientX , event.clientY ); // 終点
		//this.CtxDrw.strokeStyle = this.Color; // 色
		//this.CtxDrw.lineWidth = this.lineWidth; // 太さ
		//this.CtxDrw.stroke();	// 線を描画

		this.LastPosX = event.clientX;
		this.LastPosY = event.clientY;

	}

	
	NowMove( event ){

		var PosX = 348 - event.clientX;
		var PosY = 255 - event.clientY;

		var PosA = PosX - PosY;
		var PosB = PosX * -1 - PosY;

		//DebugMsgBoxOnkey.Write( PosX + " " +  PosY );
		//DebugMsgBoxOnkey.Write( PosA + " " +  PosB );

		var NowMove = -1;
		if( PosA < 0 && PosB < 0 ){
			NowMove = 1;
		}
		if( PosA < 0 && PosB > 0 ){
			NowMove = 2;
		}
		if( PosA > 0 && PosB > 0 ){
			NowMove = 3;
		}
		if( PosA > 0 && PosB < 0 ){
			NowMove = 0;
		}
		return NowMove;
	}
}


