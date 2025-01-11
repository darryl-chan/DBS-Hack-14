from flask import Blueprint, jsonify
from app import db_manager
from app.models.db_models import CompanyAccount

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
