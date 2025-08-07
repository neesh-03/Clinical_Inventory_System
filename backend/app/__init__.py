from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    db.init_app(app)

    from .routes.items import items_bp
    from .routes.orders import orders_bp
    from .routes.alerts import alerts_bp

    app.register_blueprint(items_bp, url_prefix="/api/items")
    app.register_blueprint(orders_bp, url_prefix="/api/orders")
    app.register_blueprint(alerts_bp, url_prefix="/api/alerts")

    with app.app_context():
        db.create_all()

    return app
