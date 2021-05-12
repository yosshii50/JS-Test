
// デバッグ用メッセージ表示
class FullMapCls {
	
	constructor( ctx , FillColor , Width , Height ) {
		
		this.ctx = ctx;
		this.FColor = FillColor;
		this.Width = Width;
		this.Height = Height;

		this.Init();
	}

	Init() {
		
		//this.ctx.strokeStyle = "rgba(  0,  0,  0,1.0)"; // 線の色
		//this.ctx.fillStyle   = "rgba( 64,180, 64,1.0)"; // 中の色
		//this.ctx.fillRect  (0 ,0, 100, 100);
		//this.ctx.strokeRect(0, 0, 100, 100);
		this.ctx.fillStyle = this.FColor;
		this.ctx.fillRect(0 ,0, this.Width, this.Height);
		//this.ctx.strokeRect(0 ,0, this.Width, this.Height);
			//rect_ctx2.fillRect  (0 ,0, 100, 100);
			//rect_ctx2.strokeRect(0, 0, 100, 100);

    }
	
}


