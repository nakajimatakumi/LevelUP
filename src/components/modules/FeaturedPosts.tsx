import styles from "@/styles/components/modules/FeaturedPosts.module.css";

type Post = {
  id: number;
  description: string;
};

type Props = {
  posts: Post[];
};

const posts: Post[] = [
  {
    id: 1,
    description:
      "オンラインのチュートリアルを見ながら、ポートフォリオサイトを作った。デザインはうまくいったけど、レスポンシブデザイン…",
  },
  {
    id: 2,
    description:
      "初めて家庭菜園でトマトを育ててみた。ガーデニングの本を参考にして、土壌の準備や水やりの方法を学んだ。",
  },
  {
    id: 3,
    description:
      "新しいチームメンバーを迎え入れ、チームビルディング活動を企画した。アイスブレイクやグループワークを通じて、メンバー…",
  },
  {
    id: 4,
    description:
      "友人と一緒に初めての山登りに挑戦してみた。事前にルートを調べ、必要な装備を揃えて挑んだ。登山中は景色を楽しみながら進んだが、急な坂道で体…",
  },
  {
    id: 5,
    description:
      "新しいソフトウェアツールの導入プロジェクトを担当した。ツールの選定から導入、トレーニングまでを一貫して…",
  },
];

export default function FeaturedPosts() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <p>注目の経験</p>
      </div>
      <ol className={styles.list}>
        {posts.map((post, index) => (
          <li key={post.id} className={styles.item}>
            <span className={styles.number}>{index + 1}</span>
            <p className={styles.description}>{post.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
