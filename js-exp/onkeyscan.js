
// デバッグ用メッセージ表示
class OnKeyScanCls {
	
	constructor( document_body ) {
		
		this.document_body = document_body;

		// キーボードの入力状態を記録する配列
		this.OnkeyStatus = new Array();

		// 移動優先 0:左 1:上 2:右 3:下
		this.MoveStatus = [ 0 , 0 , 0 , 0 ];

		// 最後の移動
		this.LastMove = -1;

		document_body.addEventListener( 'keydown' , event => {
			
			if( this.OnkeyStatus[event.keyCode] != true ){
				// まだ押下されたいない場合のみ

				this.OnkeyStatus[event.keyCode] = true;

				this.MoveStatusAdd( this.KeyCode2MoveIdx(event.keyCode) );

				// カスタムイベント
				document_body.dispatchEvent(new CustomEvent('OnKeyScanKeyDown', { detail : event }));
			
				// 現在の移動方向を変更
				this.DispatchMoveIdx();

			}

		});

		document_body.addEventListener( 'keyup' , event => {
			this.OnkeyStatus[event.keyCode] = false;

			this.MoveStatusSub( this.KeyCode2MoveIdx(event.keyCode) );

			// カスタムイベント
			document_body.dispatchEvent(new CustomEvent('OnKeyScanKeyUp', { detail : event }));
			
			// 現在の移動方向を変更
			this.DispatchMoveIdx();

		});

	}

	// 現在の移動方向を変更
	DispatchMoveIdx() {
		
		var NowMove = this.NowMove();

		if( this.LastMove != NowMove ){

			// カスタムイベント
			this.document_body.dispatchEvent(new CustomEvent('OnKeyScanMove', { detail : NowMove }));
			
			this.LastMove = NowMove;
		}

	}

	NowMove(){
		var NowMove = -1;
		if( this.MoveStatus[0] == 1 ){
			NowMove = 0;
		}
		if( this.MoveStatus[1] == 1 ){
			NowMove = 1;
		}
		if( this.MoveStatus[2] == 1 ){
			NowMove = 2;
		}
		if( this.MoveStatus[3] == 1 ){
			NowMove = 3;
		}
		return NowMove;
	}

	// キーコードからIdx取得 -1:移動キー以外 0:左 1:上 2:右 3:下
	KeyCode2MoveIdx( KeyCode ){
		switch( KeyCode ){
		case 37: // ←
			return 0;
		case 38: // ↑
			return 1;
		case 39: // →
			return 2;
		case 40: // ↓
			return 3;
		default:
			return -1;
		}
	}

	// 移動優先に追加
	MoveStatusAdd( MoveIdx ) {
		
		// 移動キー以外ならそのまま終了
		if( MoveIdx == -1 ){
			return;
		}
		
		// 追加で押されたキーの順番を保持する
		for( var Idx = 0 ; Idx < 4 ; Idx++ ){
			
			if( this.MoveStatus[Idx] > 0 ){
				this.MoveStatus[Idx]++;
			}
			if( this.MoveStatus[Idx] > 4 ){
				this.MoveStatus[Idx] = 4;
			}
		}
		
		// 最後に押されたキーを保持する
		this.MoveStatus[MoveIdx] = 1;

	}

	// 移動優先から除外
	MoveStatusSub( MoveIdx ) {
		
		// 移動キー以外ならそのまま終了
		if( MoveIdx == -1 ){
			return;
		}

		// 放されたキー以降の順番を詰める
		for( var Idx = 0; Idx < 4; Idx++) {
			if( this.MoveStatus[Idx] > this.MoveStatus[MoveIdx] ){
				this.MoveStatus[Idx]--;
			}
			if( this.MoveStatus[Idx] < 0 ){
				this.MoveStatus[Idx] = 0;
			}
		}
		
		// 放されたキーの順番を消す
		this.MoveStatus[MoveIdx] = 0;

	}



//	Write( WrtStr ) {
//		
//		this.Count++;
//
//    }
	
}


