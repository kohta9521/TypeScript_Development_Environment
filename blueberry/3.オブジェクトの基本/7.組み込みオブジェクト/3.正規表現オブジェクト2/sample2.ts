// 名前付きキャプチャインググループ
const sample = "Hello, abbbbbbc world! abc".match(/a?(<worldName>b+)c/);
if (sample !== null) {
  console.log(sample.groups);
}