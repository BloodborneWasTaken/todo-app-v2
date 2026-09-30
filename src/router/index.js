import { Router } from "express";
import taskRouter from "./tasks/index.js"
import categoryRouter from "./category/index.js"

const router = Router()

router.use("/task", taskRouter)
router.use("/category", categoryRouter)


export default router