orderPizza()
.then((pizza) => {
  console.log('Minha pizza está pronta');
  return esperarComer();
})
.then(() => {
  console.log('acabaram. vamos.');
  return vamos();
})
.then(() => {
  console.log('chegamos');
  return ligarAmigo();
})
.then(() => {
  console.log('acabou');
});