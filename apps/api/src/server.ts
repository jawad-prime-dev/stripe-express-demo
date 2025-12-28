// server.ts
import "reflect-metadata";
import express from "express";
import paymentRoutes from "./presentation/payment.routes";
import { globalErrorHandler } from "./presentation/middlewares/global-error-handler";
import { env } from "./env";

const app = express();

app.use(express.json());
app.use('/payment', paymentRoutes);

app.use(globalErrorHandler);

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
