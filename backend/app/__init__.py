from flask import Flask
# from app.jwt import init_jwt
# from app.routes import register_routes
from app.db.manager import DatabaseManager

db_manager = DatabaseManager()


def create_app(config_class="config.Config"):
    """
    App factory to create and configure the Flask app.
    """
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize JWT
    # init_jwt(app)

    # Initialise DB Manager
    db_manager.init_app(app)

    # Register routes
    register_routes(app)

    return app
