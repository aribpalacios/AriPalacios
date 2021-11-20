const products =[
  {id: 1, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKLu3ajDUtX85RCUd5UFSjKt9bAwaKtWYBpkWZMAY3rw96naiczBkEkcw-uTaq2TPsu8&usqp=CAU'},
  {id: 2, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBnMwdlvJ3fJc7TTs5RDnEjQ2Odx_FkXReSyWwfU6F0Y3nOvwPbwc-R0eOqBgc8YXHvE&usqp=CAU'},
  {id: 3, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShp4MFU9TAK959_0YuASgi1R3NCCFdq_WoQeVjepnTOuV9s5S0r7gS9Y5TqbVhCOzppDY&usqp=CAU'},
];

export const getFetch = new Promise ((aceptada, rechazada)=>{
  setTimeout(()=>{
    aceptada (products)
  },3000);
})
