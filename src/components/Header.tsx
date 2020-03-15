import React, { useState, useCallback } from 'react';
import Categories from '@/components/Categories';

function Header() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(c => setCategory(c), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
    </div>
  );
}

export default Header;
