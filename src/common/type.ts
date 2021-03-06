export interface Test {
  test: String,
}

export interface NewsArticle {
  title: string,
  description: string,
  url: string,
  urlToImage: string
}

export interface NewsArticleProps {
  article: NewsArticle
}

export interface CategoryProps extends Category {
  onSelect: Function,
}

export interface Category {
  category: string,
}

export interface NewsPageProps {
  match: Match<{ category: string }>,
}

export interface Match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

export interface Article {
  source: {
    id: boolean,
    name: string,
  },
  author: null,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface ArticleProps {
  articles: Array<Article>
}
