  // Disable right-click
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
  };
  document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 ||
            e.keyCode === 97 ||
            e.keyCode === 65 ||
             e.keyCode === 99 || 
             e.keyCode === 86 || 
             e.keyCode === 86 || 
             e.keyCode === 85 ||
             e.keyCode === 83 ||
             e.keyCode === 88 ||
             e.keyCode === 90 ||
             e.keyCode === 105 ||
             e.keyCode === 73 ||
             e.keyCode === 117)||e.keyCode === 123) {
            return false;
        } else {
            return true;
        }
  };
  