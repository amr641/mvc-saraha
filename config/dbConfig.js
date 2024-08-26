import { connect } from "mongoose";

const dbConn = connect("mongodb://localhost:27017/mvc-saraha")
  .then(() => {
    console.log("dataBase connected successfully...");
  })
  .catch(() => {
    console.error("error dataBase connection!");
  });

export default dbConn;
