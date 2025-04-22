function alphabet ( ) {
  const num = parseInt ( document.getElementById('inputNumber').value );
  let result = '';
  let arr = [];

  if ( isNaN ( num ) ) {
    document.getElementById ( 'print' ).innerHTML = 'you didn\'t enter a number!';
    return;
  }

  if ( num < 1 || num > 26 ) {
    document.getElementById ( 'print' ).innerHTML = 'only enter numbers from 1 to 26...';
    return;
  }

  for ( let i = 0; i < num; i++ )
    arr [ i ] = String.fromCharCode('A'.charCodeAt( 0 ) + i );

  for ( let i = 0; i < num; i++ ) {
    if ( ( i + 1 ) % 6 === 0 )
      result += `<span style = "margin-right: 8px;">${ arr [ i ] }</span>` + '<br>';
    else
      result += `<span style = "margin-right: 8px;">${ arr [ i ] }</span>` + ' ';
  }

  // for (let i = 0; i < num; i++) {
  //   result += `<span style="margin-right: 8px;">${arr[i]}</span>`;
  //   result += ((i + 1) % 6 === 0) ? '<br>' : ' ';
  // }

  document.getElementById('print').innerHTML = 'Generated Array:<br>' + result;
}

function clearfunc() {
  document.getElementById('print').innerHTML = 'cleared...';
  document.getElementById('inputNumber').value = '';
}