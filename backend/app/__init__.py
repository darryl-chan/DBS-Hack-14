from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS, cross_origin
from app.extensions import db_manager

def create_app(config_class="config.Config"):
    """
    App factory to create and configure the Flask app.
    """
    app = Flask(__name__)
    cors = CORS(app)
    app.config.from_object(config_class)
    
    # Initialize JWT
    # authenticate_jwt(app)
    # app.config["JWT_SECRET_KEY"] = "your_super_secret_key" 
    jwt = JWTManager(app)
    db_manager.init_app(app)

    from . import routes
    app.register_blueprint(routes.bp)
    
    return app

