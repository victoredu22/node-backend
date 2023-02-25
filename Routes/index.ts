import { Router, Request, Response } from "express";

// import UserController from "../Controllers/User.controller";
// import validateUser from "../validators/User.validator";
// import validateBank from "../validators/Bank.validator";
import { body, param, query, validationResult } from "express-validator";
// import { validate } from "../middleware/rejectInvalid";

// import BankController from "../Controllers/Bank.controller";
// import TranferController from "../Controllers/Tranfer.controller";
// import PayeeController from "../Controllers/Payee.controller";

const router = Router();


router.get('/', (req: Request, res: Response) => {
  res.send('Code with Rico. Ready to run on Heroku2222222.');
});

// router.post(
//   "/user",
//   validate(validateUser.validateCreate),
//   UserController.CreateUser
// );
// router.get("/user", UserController.Index);


// router.post(
//   "/payees",
//   validate(validateUser.validateCreate),
//   PayeeController.Create
// );
// router.get("/payees", PayeeController.Index);
// router.get("/payees/:email", PayeeController.Get);



// router.post(
//   "/bank",
//   validate(validateBank.validateCreate),
//   BankController.Create
// );
// router.get("/bank", BankController.Index);


// router.post("/tranfer", TranferController.createTranfer);
// router.get("/tranfer", TranferController.Index);
export default router;
