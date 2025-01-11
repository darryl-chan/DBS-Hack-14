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

@bp.route("/companyAccounts/<id>", methods=["GET"])
def get_company_details(id):
    """Get Company details"""
    company = CompanyAccount.query.filter_by(companyId=id).first()
    if company:
        # Assuming CompanyAccount has a method to serialize itself to JSON
        return jsonify(company.to_dict()), 200
    else:
        return jsonify({"error": "Company not found"}), 404

@bp.route("/outstandingRequests/<id>", methods=["GET"])
def getOutstandingRequests(id):
    isRequestor = request.args.get('isRequestor', None)
    if isRequestor == 'true':
        return OutstandingRequest.query.filter_by(requestorCompanyId = id).all() # get from db where company is requestor
    else:
        return OutstandingRequest.query.filter_by(companyId = id).all()

@bp.route('/outstandingRequests', methods=['POST'])
def createOutstandingRequests():
    requestorCompanyId = request.args.get('requestorCompanyId')
    companyId = request.args.get('companyId')
    carbonUnitPrice = request.args.get('carbonUnitPrice')
    carbonQuantity = request.args.get('carbonQuantity')
    requestReason = request.args.get('requestReason')
    requestType = request.args.get('requestType')
    requestStatus = 'PENDING'
    requestCreatedDatetime = datetime.now()
    requestUpdatedDatetime = datetime.now()
    # OutstandingRequest.insert(requestorCompanyId, companyId, carbonUnitPrice, carbonQuantity, requestReason, requestStatus, requestType, requestCreatedDatetime, requestUpdatedDatetime)
    request = OutstandingRequest.from_dict(request.args)
    # Alert.insert(requestorCompanyId, companyId, requestType, requestCreatedDatetime, requestUpdatedDatetime)
    alert = Alert.from_dict(request.args)
    db.add(request)
    db.add(alert)
    db.commit()
    return {"Status": "Success"}, 200



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

    

