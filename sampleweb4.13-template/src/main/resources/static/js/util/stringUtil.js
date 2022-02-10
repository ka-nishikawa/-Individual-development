/**
 * 文字列のバイト数を判定する
 * @param s 文字列
 * @returns 文字列のバイト数 
 */
function bytes(s){
	s = (s === null || typeof s === 'undefined') ? '' : s;
	return encodeURI(s).replace(/%../g, "*").length;
}

/**
 * 文字列が空文字かどうかをチェックする
 * @param s 判定する文字列
 * @returns true:空文字 false:空文字ではない
 */
function isEmpty(s) {
	return s === null || s === '' || typeof s === 'undefined';
}