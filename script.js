const string = "後ろで大きな爆発音がした。俺は驚いて振り返った。";

// charAt で
// 抽出したい数字 を記載して 〜番目 の文字を取得
console.log(string.charAt(2));

// slice で大き
// 読み込みを始める数値 と 読み込みを終わらせる数値 を記述して 〜番目から〜番目 の 文字列・数字 を取得
console.log(string.slice(2,5));

// substring で大き
// 読み込みを始める数値 と 読み込みを終わらせる数値 を記述して 〜番目から〜番目 の 文字列・数字 を取得
console.log(string.substring(2,5));

// substr 大き
// 文字列の＋1からcnt の文字を抽出
console.log(string.substr(3,2));

// split ["後ろで大", "な爆発音がした。俺は驚いて振り返った。"]
// 分割し その結果を配列として取得
console.log(string.split('き'));
// 分割最大数
//  ["後ろで大きな爆発音がし", "。俺は驚いて振り返っ"]
console.log(string.split('た',2));