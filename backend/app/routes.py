from flask import jsonify, request
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt, get_jwt_identity, jwt_required

from app.jwt import authenticate_jwt

def register_routes(app):

    @app.route("/login", methods=["POST","GET"])
    def login():
        print("entered login")
        username = request.json.get("username")
        password = request.json.get("password")

        if not username or not password:
            return {"msg": "Username and password are required."}, 400
        
        ## check user in DB

        additional_claims = {"companyId": "company"}
        access_token = create_access_token(identity=username, additional_claims=additional_claims)

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
    
    #test ### e,g of how to protect our routes ## to be deleted
    @app.route("/protected", methods=["GET", "POST"])
    @jwt_required()
    def protected():
        print("entered protected")
        claims = get_jwt()
        companyId = claims["companyId"]
        print("companyId: " + companyId )
        auth_response, status_code = authenticate_jwt()
        print(auth_response,status_code)
        return jsonify(foo="bar")

