import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('change')
   }, [language, text]);

  return (
    <div>Convert</div>
  )
}

export default Convert;