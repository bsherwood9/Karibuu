function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  };

var rand= ['rando1','rando2', 'rando3', 'rando4'];
var nodesArray = [].slice.call(document.getElementsByClassName('rando'))
nodesArray.forEach(element => {
    classIndex = Math.floor(Math.random() * rand.length);
    //This will push the new class to the element
    element.classList.add(rand[classIndex]);
})
