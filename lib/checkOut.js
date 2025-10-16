{/* moving checkOut function in a seperate file for easy importing in other files */ }

import getStripe from "./getStripe";
import toast from "react-hot-toast";

export async function checkOut(cartItems) {
  try {
    {/* debugging the checkout error */}
    console.log("Sending items to stripe API:", cartItems);

    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });

    console.log("Stripe API response status:", response.status);

    if (response.status === 500) {
      console.error("Server returned 500 error");
      toast.error("Stripe server error. Please try again later.");
      return;
    }

    const data = await response.json();
    console.log("Stripe session data:", data);
    
    toast.loading("Redirecting...");

    await stripe.redirectToCheckout({ sessionId: data.id });
  } catch (error) {
    console.error("Checkout error:", error);
    toast.error("Something went wrong during checkout");
  }
}