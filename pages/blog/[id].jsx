import { clientBlog } from "../../libs/client";

export default function HogeId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await clientBlog.get({ endpoint: "beer-blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await clientBlog.get({ endpoint: "beer-blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
