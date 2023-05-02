// インデックスシグネチャ
type PriceData = {
  [key: string]: number;
}
const data: PriceData = {
  apple: 220,
  coffee: 123,
  bento: 500
};
data.chicken = 250;