// export const twoFer = (name = "you") => {
//     return `One for ${name}, one for me.`
//   }


export const twoFer = (name) => {
  name = (typeof name !== 'undefined') ?  name : "you";
  return `One for ${name}, one for me.`
}
