from flask import jsonify, request
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt, get_jwt_identity, jwt_required

def register_routes(app):

    @app.route("/login", methods=["POST"])
    def login():
        username = request.json.get("username")
        password = request.json.get("password")

        if not username or not password:
            return {"msg": "Username and password are required."}, 400
        
        ## add user to DB

        access_token = create_access_token(identity=username)
        # refresh_token = create_refresh_token(identity=username)

        return jsonify(access_token = access_token) 
    

    BLACKLIST = set() ##used to store invalid JWTs
    @app.route("/logout", methods=["POST"])
    @jwt_required()
    def logout():
        """
        Logs out the user by adding the JWT to a blacklist.
        """
        jti = get_jwt()["jti"]  # JWT ID
        BLACKLIST.add(jti)
        return {"msg": "Successfully logged out"}, 200
