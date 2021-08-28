import categoryColors from './colors'

export const getCurrentValues = (transactions) => {
  return transactions.map((transaction) => transaction.amount)
 }
 
 export const getCurrentCategories = (transactions)=>{
     return transactions.map((transaction) => transaction.categoryId.name)
}

export const getCurrentColors = (transactions) =>{
   let currentColors =[]
   transactions.forEach((transaction) => {
   const categoryId = transaction.categoryId._id
     categoryColors.map((color) => {
     if(color.id === categoryId){
       currentColors.push(color.color)
     }} )
   })
 
   return currentColors
}
 
