
// デバッグ用メッセージ表示
class DebugMsgBoxCls {

	constructor( ctx , x1 , y1 , x2 = 100 , y2 = 15 ) {
		this.ctx = ctx;
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.FColor = "rgba(  0,  0,  0,1.0)";
		this.BColor = "rgba(255,255,180,1.0)";
		this.Count = 0;
		this.Write( "" );
	}

	Write( WrtStr ) {
		
		this.Count++;

		this.ctx.strokeStyle = this.FColor; // 線の色
		this.ctx.fillStyle   = this.BColor; // 中の色
		this.ctx.strokeRect(this.x1 , this.y1 - 13 , this.x2, this.y2 );
		this.ctx.fillRect  (this.x1 , this.y1 - 13 , this.x2, this.y2 );
		
		this.ctx.fillStyle = this.FColor; // 中の色
		this.ctx.font = (this.y2 - 3) + "px serif";
		this.ctx.fillText( this.Count + " " + WrtStr , this.x1, this.y1);
    }
	
}


