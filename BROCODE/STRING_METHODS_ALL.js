// essential methods thay you'll be using to manipulate strings
// read through some escape notation in mozilla

let username = 'meekbronsen';

console.log(username[0])

username.includes('s')
username.length;
username.charAt(1);             //find the item through index
username.indexOf('k');          //find index of an item
username.trim();                //used only to trim spaces at the start and the end of a string
username.trimStart();           //used only to trim spaces at the start 
username.trimEnd();
username.toUpperCase();
username.toLowerCase();
username.replaceAll('e', '');   //replace e with nothing
username.startsWith('ee')       // ask if string starts with
username.endsWith('ee')         // asks if string ends with
username.substring(1)           // copy starting from the given index to the end
username.replace('m','k') 
username.split('')              // used to split characters with given parameter
