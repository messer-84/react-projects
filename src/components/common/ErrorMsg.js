import React from 'react';

function ErrorMsg(props) {
  const {error} = props;

  return (
    <div>
      <h3 style={{color: 'red'}}>Error - {error.message}</h3>
    </div>
  )

}

export default ErrorMsg;