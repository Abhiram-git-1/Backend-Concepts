const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");
}

main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));



const OrderSchema = new mongoose.Schema({
    item : String,
    price: Number,

});

const CustomerSchema = new mongoose.Schema({
    name: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }]
})

// CustomerSchema.pre("findOneAndDelete", async ()=>{
//    console.log("PRE middleware");
// })
CustomerSchema.post("findOneAndDelete", async (delcust)=>{
   if(delcust.orders.length){
       let res=await Order.deleteMany({_id: {$in: delcust.orders}});
       console.log(res);
   }
  
})

const Customer = mongoose.model("Customer", CustomerSchema);

const Order = mongoose.model("Order", OrderSchema);

// const addCustomer = async () => {
//     let cust1 = await Customer({
//         name: "John Doe",   
//     });

//     let order1 = await Order.findOne({item: "Shoes"});
//     let order2 = await Order.findOne({item: "Shirt"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let cust = await cust1.save();
//     console.log(cust);
// };

//  const getcustomer = async () =>{
//      let allcust = await Customer.find({}).populate("orders");
//     console.log(allcust[0]);
//  }
//getcustomer();

// const addOrders = async () => {
//     const res = await Order.insertMany([
//       {
//         item: "Shoes",
//         price: 1000,
//       },
//       {
//         item: "Shirt",
//         price: 500,
//       },
//       {
//         item: "Pants",
//         price: 800,
//       },  
//     ]);
//     console.log(res);
//   };
  


//addOrders();
//addCustomer();


// const addcust = async () =>{
//   let newcust = new Customer({
//     name : "Bams",
//   });
//   let newOrder =new Order ({
//     item:"shorts",
//     price:1500,
//   });
//   newcust.orders.push(newOrder);
//   await newcust.save();
//   await newOrder.save();
//   console.log("Added new customer");
// }
// addcust();

const delcust = async () => {
  let deldata = await Customer.findByIdAndDelete('69c25a572909f70c13619d05');
  console.log(deldata);
}
delcust();