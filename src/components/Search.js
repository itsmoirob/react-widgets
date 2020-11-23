import React, { useState, useEffect } from 'react';
import axios from 'redaxios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    (async () => {
      if (!term || term === '') return;

      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      });

      setResult(data.query.search);
    })();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" type="text" value={term} onChange={e => setTerm(e.target.value)} />
        </div>

        <div>
          Results : {result.length}
        </div>
      </div>
    </div>
  )
}

export default Search;