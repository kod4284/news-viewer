export interface Test {
  test: String,
}

export interface NewsArticle {
  article: {
    title: string,
    description: string,
    url: string,
    urlToImage?: string
  }
}
