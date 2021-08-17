
// デバッグ用メッセージ表示
class PaintCls {
	
	constructor( EmtDrw ) {
		
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
		
		var MousePos = this.GetMousePos();
		
		this.LastPosX = MousePos.x;
		this.LastPosY = MousePos.y;

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
		
		// デバッグメッセージ表示
		//DebugMsgBoxOnkey.Write( event.clientX + " " +  event.clientY );
		
		// 四角
		//this.CtxDrw.fillStyle = "rgb(0, 0, 255)";
		//this.CtxDrw.fillRect  (event.clientX,event.clientY,10,10);
		//this.CtxDrw.strokeRect(event.clientX,event.clientY,10,10);

		var MousePos = this.GetMousePos();

		// 線
		this.CtxDrw.moveTo( this.LastPosX , this.LastPosY ); // 始点
		this.CtxDrw.lineTo( MousePos.x , MousePos.y ); // 終点
		this.CtxDrw.strokeStyle = this.Color; // 色
		this.CtxDrw.lineWidth = this.lineWidth; // 太さ
		this.CtxDrw.stroke();	// 線を描画

		this.LastPosX = MousePos.x ;
		this.LastPosY = MousePos.y ;

	}

}


