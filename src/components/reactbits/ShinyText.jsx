import React from 'react';

export default function ShinyText({ text, className = '' }) {
  return (
    <span className={`animate-shiny-text font-bold inline-block ${className}`}>
      {text}
    </span>
  );
}
