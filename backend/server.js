const express =
require("express");

const cors =
require("cors");

const dotenv =
require("dotenv");

const connectDB =
require("./config/db");

const simulationRoutes =
require("./routes/simulationRoutes");

const userRoutes =
require("./routes/userRoutes");

const errorHandler =
require("./middleware/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(

  "/api/simulations",

  simulationRoutes
);

app.use(

  "/api/users",

  userRoutes
);

app.use(errorHandler);

const PORT =
process.env.PORT || 3100;

app.listen(PORT, () => {

  console.log(

    `Server Running On Port ${PORT}`

  );
});