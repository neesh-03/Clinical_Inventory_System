from flask import Blueprint, request, jsonify
from .. import db
from ..models import Order

orders_bp = Blueprint("orders", __name__)

@orders_bp.route("/", methods=["GET"])
def get_orders():
    orders = Order.query.all()
    return jsonify([{
        "id": order.id,
        "item_id": order.item_id,
        "quantity": order.quantity,
        "order_date": order.order_date.strftime("%Y-%m-%d %H:%M:%S"),
        "status": order.status
    } for order in orders])

@orders_bp.route("/", methods=["POST"])
def create_order():
    data = request.json
    new_order = Order(
        item_id=data["item_id"],
        quantity=data["quantity"]
    )
    db.session.add(new_order)
    db.session.commit()
    return jsonify({"message": "Order placed successfully"}), 201
