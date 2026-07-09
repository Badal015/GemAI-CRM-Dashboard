import { Router } from "express";
import {
    getLeads,
    getLead,
    createLead,
    updateLead,
    deleteLead,
    reorderLeads,
} from "../controllers/lead.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = Router();

// Apply authentication to all routes below
router.use(protect);

// Update drag-and-drop order
router.patch("/reorder", reorderLeads);

// Get all leads / Create lead
router.route("/")
    .get(getLeads)
    .post(createLead);

// Get one / Update / Delete lead
router.route("/:id")
    .get(getLead)
    .put(updateLead)
    .delete(deleteLead);

export default router;