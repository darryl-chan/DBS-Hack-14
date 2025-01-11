from flask import Blueprint, jsonify, request
from app.extensions import db_manager
from app.models.db_models import CompanyAccount, OutstandingRequest
from flask_jwt_extended import create_access_token, get_jwt, jwt_required
from app.jwt import authenticate_jwt

bp = Blueprint("company", __name__)

# Database Session
db = db_manager.session

@bp.before_app_request
def before_request():
    db()

@bp.teardown_app_request
def shutdown_session(response):
    db.remove()

@bp.route("/companyAccount/<id>", methods=["GET"])
def get_company_details(id):
    """Get Company details"""
    company = CompanyAccount.query.filter_by(companyId=id).first()
    if company:
        # Assuming CompanyAccount has a method to serialize itself to JSON
        return jsonify(company.to_dict()), 200
    else:
        return jsonify({"error": "Company not found"}), 404

@bp.route("/outstandingRequests", methods=["GET"])
def getOutstandingRequests():
    companyId = request.args.get('id')
    isRequestor = request.args.get('isRequestor')
    if isRequestor == 'true':
        return OutstandingRequest.query.filter_by(requestCompanyId = companyId).all() # get from db where company is requestor
    else:
        return OutstandingRequest.query.filter_by(companyId = companyId).all()

@bp.route("/login", methods=["POST","GET"])
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

#test ### e,g of how to protect our routes ## to be deleted
@bp.route("/protected", methods=["GET", "POST"])
@jwt_required()
def protected():
    print("entered protected")
    claims = get_jwt()
    companyId = claims["companyId"]
    print("companyId: " + companyId )
    auth_response, status_code = authenticate_jwt()
    print(auth_response,status_code)
    return jsonify(foo="bar")

    

