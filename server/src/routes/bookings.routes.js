const express = require('express');

const router = express.Router();

const BookingController = require('../controllers/BookingController');
const ApprovalController = require('../controllers/ApprovalController');
const RejectionController = require('../controllers/RejectionController');

router.post('/spots/:spot_id/bookings', BookingController.store);

router.post('/bookings/:booking_id/approvals', ApprovalController.store);
router.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = router;
