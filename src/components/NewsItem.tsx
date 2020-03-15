import React from 'react';
import styled from 'styled-components';
import { NewsArticleProps } from '@/common/type';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 10rem;
      height: 6.25rem;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
      p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
function NewsItem({ article }: NewsArticleProps) {
  const {
    title, description, url, urlToImage,
  } = article;

  return (
    <NewsItemBlock>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} alt="thumbnail" />
        </a>
      </div>
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
          <p>{description}</p>
        </h2>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
