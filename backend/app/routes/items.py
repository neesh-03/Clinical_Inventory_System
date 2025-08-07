from flask import Blueprint, request, jsonify
from .. import db
from ..models import Item
from datetime import datetime

items_bp = Blueprint("items", __name__)

@items_bp.route("/", methods=["GET"])
def get_items():
    items = Item.query.all()
    return jsonify([{
        "id": item.id,
        "name": item.name,
        "quantity": item.quantity,
        "expiry_date": item.expiry_date.strftime("%Y-%m-%d") if item.expiry_date else None,
        "reorder_level": item.reorder_level
    } for item in items])

@items_bp.route("/", methods=["POST"])
def add_item():
    data = request.json
    expiry = datetime.strptime(data["expiry_date"], "%Y-%m-%d").date() if data.get("expiry_date") else None
    new_item = Item(
        name=data["name"],
        quantity=data["quantity"],
        expiry_date=expiry,
        reorder_level=data["reorder_level"]
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({"message": "Item added successfully"}), 201
