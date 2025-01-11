from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

# Initialize extensions
bcrypt = Bcrypt()
jwt = JWTManager()

"""App factory function to create and configure the Flask application."""
app = Flask(__name__)
app.config.from_object(config_class)

# Initialize extensions
bcrypt.init_app(app)
# db.init_app(app)
jwt.init_app(app)

# Register blueprints

if __name__ == "__main__":
    app.run(debug=True)
