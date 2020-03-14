import React from 'react';
import styled from 'styled-components';
import { NewsArticle } from '@/common/type';

const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 10rem;
      height: 10rem;
      object-fit: cover;
    }
    .contents {
      h2 {
        margin: 0;
        a {
          color: black;
        }
      }
      p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
      }
    }
    & + & {
      margin-top: 3rem;
    }
  }
`;
function NewsItem({ article }: NewsArticle) {
  const {
    title, description, url, urlToImage,
  } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
    </NewsItemBlock>
  );
}

export default NewsItem;
