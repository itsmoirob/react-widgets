import './Search.css';

import React, { useState, useEffect } from 'react';
import axios from 'redaxios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
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
    }

    const timeoutId = setTimeout(() => {
      search();
    }, 500);


    return () => {
      clearTimeout(timeoutId);
    }
  }, [term]);

  const renderedResults = result.map(({ pageid, title, snippet }) => {
    return (
      <div className="item" key={pageid}>
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${pageid}`} className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {title}
          </div>

          <span dangerouslySetInnerHTML={{ __html: snippet }} ></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" type="text" value={term} onChange={e => setTerm(e.target.value)} />
        </div>

        <div>
        </div>

        <div className="ui celled list">
          {renderedResults}
        </div>
      </div>
    </div>
  )
}

export default Search;