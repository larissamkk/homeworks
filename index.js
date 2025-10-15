// // arajin
// function fetchUser(users, id) {
//     const user = users.find(u => u.id == id)
//     if(user){
//         return Promise.resolve(user)
//     } else return Promise.reject('Not found')
// }
// const users = [
//     {id:1, name:"Ann", role:"admin"},
//     {id:2, name:"John", role:"user"}

// ]
// fetchUser(users,2)
// .then((data) =>
//      console.log(data))
// .catch((err) => 
//     console.log(err)); 



// // erkrord
// function fetchProduct(products, id){
//     const product = products.find(p => p.id == id)
//     if(product){
//         return Promise.resolve(product)
//     }else return Promise.reject('Not in stock')
// }
// const products = [
// {id:10, name:"Laptop", price:1000},
// {id:11, name:"Phone", price:600}
// ]
// fetchProduct(products, 10)
// .then ((data) => 
//     console.log(data))
// .catch((err) =>
// console.log(err));



// // errord
// function fetchBook(books, id){
//     const book = books.find(b => b.id == id)
//     if(book){
//         return Promise.resolve(book)
//     } else Promise.reject('Not found')
// }
// const books = [
// {id:101, title:"Harry Potter", author:"Rowling"},
// {id:102, title:"1984", author:"Orwell"}
// ]
// fetchBook(books,102)
// .then((data) =>
// console.log(data))
// .catch((err)=>
// console.log(err));



// // chorord
// function createOrder(orders, userId, items){
//     if(items.length == 0)
//         return Promise.reject('Not in stock');
//     let order = {userId, items:[...items]};
//     orders.push(order);
//         return Promise.resolve(order);
    
// }
// const ordersList = []
// createOrder(ordersList, 2, [{name:"Laptop", price:1000}]);
// .then((data) =>
// console.log(data))
// .catch((err)=>
// console.log(err));



// // hingerord
// function updateUserRole(users, userId, role){
// const validRoles = ["admin", "user", "moderator"];
// const user = users.find(u => u.id == userId)
//     if (!user) {
//  return Promise.reject("User not found");
// }
//     if (!validRoles.includes(role)) {
//  return Promise.reject("Invalid role");
// }
// user.role = role;
// return Promise.resolve(user);
// }
// const usersList = [
// {id:1,name:"Anna",role:"admin"},
// {id:2,name:"John",role:"user"}
// ]
// updateUserRole(usersList, 2, "admin")
// .then((result) => 
//     console.log("updated:", (result)))
// .catch((err) => 
// console.log("error:", (err)));



// // vecerord
// function blockUser(users, userId){
//     let user = users.find(u => u.id == userId);
//     if(!user)
//         return Promise.reject('user not found');
//     if else(user.blocked === true)
//         return Promise.reject('user is already blocked');
//     user.blocked = true
//     return Promise.resolve(user);
// }
// const usersList = [
// {id:1, name:"Anna", role:"admin"},
// {id:2, name:"Bob", role:"user"}
// ]
// blockUser(usersList, 2)
// .then((data)=>
// console.log(data));
// .catch((err)=>
// console.log(err));