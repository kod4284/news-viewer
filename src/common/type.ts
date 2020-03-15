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
