import Razorpay from "razorpay";

const razorpayKey = process.env.RAZORPAY_TEST_API_KEY;
const razorpaySecret = process.env.RAZORPAY_TEST_API_SECRET;

const isRazorpayConfigured = Boolean(razorpayKey && razorpaySecret);

const razorpay = isRazorpayConfigured
  ? new Razorpay({
      key_id: razorpayKey,
      key_secret: razorpaySecret,
    })
  : null;

export const verifyRazorPayConnect = async () => {
  if (!razorpay) {
    throw new Error("Razorpay is not configured");
  }

  const orders = await razorpay.orders.all({ count: 1 });
  return orders;
};

export { isRazorpayConfigured };

export default razorpay;
