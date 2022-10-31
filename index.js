import axios from "axios";
import dataset from "./app.js";

dataset(1)
    .then(data => console.log(data))
    .catch(e => console.log(e))