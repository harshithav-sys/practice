import streamlit as st
import pandas as pd
import joblib

# Load model
model = joblib.load("fraud_detection_pipeline.pkl")

# Title
st.title("Fraud Detection Prediction App")

st.markdown("Please enter the transaction details and click the Predict button")

st.divider()

# Inputs
transaction_type = st.selectbox(
    "Transaction Type",
    ["PAYMENT", "TRANSFER", "CASH_OUT", "DEPOSIT"],
    key="type"
)

amount = st.number_input(
    "Amount",
    min_value=0.0,
    value=1000.0,
    key="amount"
)

oldbalanceOrg = st.number_input(
    "Old Balance (Sender)",
    min_value=0.0,
    value=10000.0,
    key="old_sender"
)

newbalanceOrig = st.number_input(
    "New Balance (Sender)",
    min_value=0.0,
    value=9000.0,
    key="new_sender"
)

oldbalanceDest = st.number_input(
    "Old Balance (Receiver)",
    min_value=0.0,
    value=0.0,
    key="old_receiver"
)

newbalanceDest = st.number_input(
    "New Balance (Receiver)",   # ✅ FIXED (important)
    min_value=0.0,
    value=0.0,
    key="new_receiver"
)

# Prediction button
if st.button("Predict", key="predict_btn"):
    input_data = pd.DataFrame([{
        "type": transaction_type,
        "amount": amount,
        "oldbalanceOrg": oldbalanceOrg,
        "newbalanceOrig": newbalanceOrig,
        "oldbalanceDest": oldbalanceDest,
        "newbalanceDest": newbalanceDest
    }])

    prediction = model.predict(input_data)[0]

    st.subheader(f"Prediction: {int(prediction)}")

    if prediction == 1:
        st.error("🚨 This transaction may be FRAUD!")
    else:
        st.success("✅ This transaction looks SAFE")