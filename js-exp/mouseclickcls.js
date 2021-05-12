
// デバッグ用メッセージ表示
class MouseClickCls {
	
	constructor( EmtDrw ) {
		
		this.EmtDrw = EmtDrw;
		this.CtxDrw = EmtDrw.getContext("2d");
		this.lineWidth = 1;
		this.Color = "rgb(0, 0, 0)";
		this.LastPosX = -1;
		this.LastPosY = -1;

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

		//document.write("aa");
	}
	
	MouseDownEve( event , EventName ){
		// イベント処理開始
		this.EmtDrw.addEventListener( EventName , this.OnMouseMove );
		this.Painting( event );
	}
	MouseUpEve(EventName){
		// イベント処理終了
		this.EmtDrw.removeEventListener( EventName , this.OnMouseMove );
	}

	OnMouseMove = (event) => {
		
		if(event.buttons !== undefined){
				
			if( (event.buttons & 1) != 1 ){
				MouseUpEve("mousemove");
				MouseUpEve("pointermove");
				return;
			}
				
		}
		
		this.Painting( event );

	}

	Painting( event ){
		
		this.NowPosX = event.clientX - this.EmtDrw.getBoundingClientRect().left;
		this.NowPosY = event.clientY - this.EmtDrw.getBoundingClientRect().top;

		this.NowPosX = Math.floor( this.NowPosX );
		this.NowPosY = Math.floor( this.NowPosY );

		this.EmtDrw.dispatchEvent( new CustomEvent('MouseClickAj', { detail: event }) );

		this.LastPosX = this.NowPosX;
		this.LastPosY = this.NowPosY;
		
		//document.write( event.clientX + " " + event.clientY + " aa");
	}

}


