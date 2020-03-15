import React from 'react';
import Categories from '@/components/Categories';
import NewsList from '@/components/NewsList';
import { NewsPageProps } from '@/common/type';

function NewsPage({ match }: NewsPageProps) {
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
}

export default NewsPage;
