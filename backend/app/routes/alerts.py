from flask import Blueprint, jsonify
from ..models import Item, Order
from datetime import datetime
import pandas as pd
from sklearn.linear_model import LinearRegression

alerts_bp = Blueprint("alerts", __name__)

@alerts_bp.route("/low-stock", methods=["GET"])
def low_stock_alert():
    items = Item.query.all()
    low_stock_items = [item.name for item in items if item.quantity <= item.reorder_level]
    return jsonify({"low_stock": low_stock_items})

@alerts_bp.route("/predict-restock", methods=["GET"])
def predict_restock():
    orders = Order.query.all()
    if not orders:
        return jsonify({"message": "No data for prediction"})

    df = pd.DataFrame([{
        "item_id": order.item_id,
        "quantity": order.quantity,
        "day": order.order_date.timetuple().tm_yday
    } for order in orders])

    predictions = {}
    for item_id in df["item_id"].unique():
        item_df = df[df["item_id"] == item_id]
        if len(item_df) < 2:
            continue
        X = item_df[["day"]]
        y = item_df["quantity"]
        model = LinearRegression()
        model.fit(X, y)
        future_day = datetime.now().timetuple().tm_yday + 7
        predicted_qty = model.predict([[future_day]])[0]
        predictions[item_id] = max(0, round(predicted_qty))

    return jsonify(predictions)
