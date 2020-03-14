import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=f4b94e625e1c4aac8fa23eeab1ad85d2');
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="about">
      <div>
        <button onClick={onClick} type="button">Load</button>
      </div>
      {data && (
        <textarea
          rows={8}
          value={JSON.stringify(data, null, 2)}
          readOnly
        />
      )}
    </div>
  );
}

export default Home;
