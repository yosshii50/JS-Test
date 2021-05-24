
//
class CookieIDCls {

	constructor() {

		// 既存のID取得
		this.CookieIDStr = this.GetCookieData("ID");

		if( this.CookieIDStr == '' ){
			// 未設定の場合
			
			var that = this;
			var xhr = new XMLHttpRequest();
			xhr.open('POST','CookieID.php');
			xhr.send();
			xhr.onreadystatechange = function(e){
				if ((xhr.readyState == 4) && (xhr.status == 200)) {
					
					// 新規ID取得
					that.CookieIDStr = xhr.responseText;

					//
					that.CompEvent();

				}
			};

		}else{
			//
			this.CompEvent();
		}

	}

	// 
	CompEvent() {
		
		// CookieIDの有効期限更新
		this.SetCookieID_Renew();
		
		// CookieID取得完了イベント実行
		document.body.dispatchEvent(new CustomEvent('OnCookieID', { detail : this.CookieIDStr }));
		
	}

	// CookieIDの有効期限更新
	SetCookieID_Renew() {
		
		// 新しい有効期限取得
		var nd = new Date();
		nd.setFullYear(nd.getFullYear() + 10);

		// IDの有効期限更新
		document.cookie = "ID=" + encodeURIComponent( this.CookieIDStr ) + ";expires='" + nd.toGMTString() + "'";
		
	}

	// 特定のCookie情報取得
	GetCookieData( Name ) {
		for( var c of document.cookie.split(';') ){
				
			var ca = c.split('=');

			if( ca[0].trim() == Name ){
				return ca[1];
			}
		}
		return "";
	}

}
