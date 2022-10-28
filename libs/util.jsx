import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// export const formatDate = (date) => {
//   const formattedDate = dayjs
//     .utc(date)
//     .tz("Asia/Tokyo")
//     .format("YYYY_MM_DD_MM_ss");
//   // console.log(formattedDate);
//   return formattedDate;
// };

// export const groupBy = function (contents) {
//   return contents.reduce(function (group, x) {
//     const yearMonthString = formatDate(new Date(x["publishedAt"]));
//     (group[yearMonthString] = group[yearMonthString] || []).push(x);
//     return group;
//   }, {});
// };

//🔥初期状態に戻したい場合🔥

// UTC -> "2022_04" のフォーマットに変換
// 記事が公開された月を表現できるようになる;
export const formatDate = (date) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
  // console.log(formattedDate);
  return formattedDate;
};

// 記事をグルーピングする処理（グループ化）
// 上記で作成したformatDateも登場する
export const groupBy = function (contents) {
  return contents.reduce(function (group, x) {
    const yearMonthString = formatDate(new Date(x["publishedAt"]));
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};
