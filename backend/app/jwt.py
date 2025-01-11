from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

def authenticate_jwt():
    """
    Authenticates the JWT token and returns the user's identity.
    Must be used within a route protected by @jwt_required().
    """
    try:
        # Get the identity of the current user
        current_user = get_jwt_identity()
        print(current_user)

        #: Perform additional checks (e.g., check if the user exists in the database)
        if not current_user:
            return jsonify({"msg": "User not found"}), 404

        return jsonify({"msg": "User authenticated", "user": current_user}), 200

    except Exception as e:
        return jsonify({"msg": f"Authentication failed: {str(e)}"}), 400
