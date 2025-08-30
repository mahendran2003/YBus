package com.ybus.dto;

public class PaymentRequest {
    private String provider; // e.g., "SIMULATED", "RAZORPAY" (future)
    private String paymentRef;

    public String getProvider(){ return provider; } public void setProvider(String provider){ this.provider = provider; }
    public String getPaymentRef(){ return paymentRef; } public void setPaymentRef(String paymentRef){ this.paymentRef = paymentRef; }
}
