import { connect } from "mongoose";

const dbConn = connect("mongodb+srv://mvcApp:SJfOevfXnoMZS6ld@cluster0.rirt7.mongodb.net/mvc-saraha")
  .then(() => {
    console.log("dataBase connected successfully...");
  })
  .catch(() => {
    console.error("error dataBase connection!");
  });

export default dbConn;
