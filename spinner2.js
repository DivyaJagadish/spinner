const print = [ '\r|   ', '\r/ ','\r-  ', '\r\\ ','\r| ','\n'];
let i = 100;
for (const element of print){
  setTimeout(() => {
    process.stdout.write(element);
  }, i);
  i+=200;
}
