function generate ( ) {
  const name = document.getElementById ( 'input' ).value.trim ( );

  if ( name === '' ) {
    document.getElementById ( 'print' ).innerHTML = 'Please enter names to begin.';
    return;
  }

  let arr = name
  .split ( /[\n,]+/)
  .map ( name => name.trim ( ) )
  .filter ( name => name !== '' );

  const len = arr.length;

  if ( len === 0 ) {
    document.getElementById ( 'print' ).innerHTML = 'No valid names found.';
    return;
  }

  const randomIndex = Math.floor ( Math.random ( ) * len );
  const pickedName = arr [ randomIndex ];

  document.getElementById ( 'print' ).innerHTML = `Total names: ${len}<br>Picked position: ${randomIndex + 1}<br>Picked: ${pickedName}`;
}

function clearfunc ( ) {
  document.getElementById('input').value = '';
  document.getElementById('print').innerHTML = 'cleared...'
}