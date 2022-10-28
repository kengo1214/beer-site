import { createClient } from "microcms-js-sdk";

// メニュー（Menu）
export const client = createClient({
  serviceDomain: "beer-menu",
  apiKey: process.env.API_KEY_MENU,
});

//ブログ（Blog）
export const client00 = createClient({
  serviceDomain: "beer-blog",
  apiKey: process.env.API_KEY_BLOG,
});

//メニュー（Menu）
// export const client = createClient({
//   serviceDomain: "beer-site",
//   apiKey: process.env.API_KEY,
// });

// ニュース（News）
// export const client00 = createClient({
//   serviceDomain: "beer-news",
//   apiKey: process.env.API_KEY00,
// });

// 別プロジェクトのブログ（Blog）
// export const client01 = createClient({
//   serviceDomain: "35l0ok3otk",
//   apiKey: process.env.API_KEY01,
// });
