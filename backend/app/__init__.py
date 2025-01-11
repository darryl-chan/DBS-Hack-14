from flask import Flask
from flask_jwt_extended import JWTManager
from app.routes import register_routes
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
    # authenticate_jwt(app)
    # app.config["JWT_SECRET_KEY"] = "your_super_secret_key" 
    jwt = JWTManager(app)

    from . import routes
    app.register_blueprint(routes.bp)
    
    return app
