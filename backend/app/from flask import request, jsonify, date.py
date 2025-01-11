from flask import request, jsonify, datetime
from app.models.db_models import OutstandingRequest, Alert
# def register_routes(app):
@app.route('/outstandingRequests', methods=['GET'])
def getOutstandingRequests():
    companyId = request.args.get('id')
    isRequestor = request.args.get('isRequestor')
    if isRequestor == 'true':
        return OutstandingRequest.query.filter_by(requestCompanyId = companyId).all() # get from db where company is requestor
    else:
        return OutstandingRequest.query.filter_by(companyId = companyId).all() # get from db where company is requestee

@app.route('/outstandingRequests', methods=['POST'])
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
    OutstandingRequest.insert(requestorCompanyId, companyId, carbonUnitPrice, carbonQuantity, requestReason, requestStatus, requestType, requestCreatedDatetime, requestUpdatedDatetime)
    Alert.insert(requestorCompanyId, companyId, requestType, requestCreatedDatetime, requestUpdatedDatetime)
    

@app.route('/outstandingRequests/approval/<id>', methods=['PUT'])
def approveOutstandingRequests(id, status):
    transaction = OutstandingRequest.query.filter_by(id = id).first()
    companyAccount = OutstandingRequest.query.filter_by(companyId=transaction.companyId).first()
    requestorCompanyAccount = OutstandingRequest.query.filter_by(companyId=transaction.requestorCompanyId).first()

    if status == 'ACCEPTED':
        if transaction.type == 'SELL':
            transaction.update() ### update the db
            companyAccount.carbonBalance = companyAccount.carbonBalance + transaction.carbonQuantity
            requestorCompanyAccount.carbonBalance = requestorCompanyAccount.carbonBalance - transaction.carbonQuantity
            companyAccount.cashBalance = companyAccount.carbonBalance - transaction.carbonQuantity*transaction.carbonUnitPrice
            requestorCompanyAccount.cashBalance = requestorCompanyAccount.carbonBalance + transaction.carbonQuantity*transaction.carbonUnitPrice
            companyAccount.update()
            requestorCompanyAccount.update()
        elif transaction.type == 'BUY':
            transaction.update() ### update the db
            companyAccount.carbonBalance = companyAccount.carbonBalance - transaction.carbonQuantity
            requestorCompanyAccount.carbonBalance = requestorCompanyAccount.carbonBalance + transaction.carbonQuantity
            companyAccount.cashBalance = companyAccount.carbonBalance + transaction.carbonQuantity*transaction.carbonUnitPrice
            requestorCompanyAccount.cashBalance = requestorCompanyAccount.carbonBalance - transaction.carbonQuantity*transaction.carbonUnitPrice
            companyAccount.update()
            requestorCompanyAccount.update()
    if status == 'REJECTED':
             ### update the db
    return ""

@app.route('/outstandingRequests/edit/<id>', methods=['PUT'])
def updateOutstandingRequests(id):
    transaction = OutstandingRequest.query.filter_by(id = id).first()
    transaction.update() ### update the db
    return ""

@app.route('/outstandingRequests/<id>', methods=['DELETE'])
def deleteOutstandingRequests(id):
    OutstandingRequest.delete(id)
    return ""

@app.route('/receivedRequests/<id>', methods=['GET'])
def getReceivedRequests(id):
    return Alert.query.filter_by(id = id).first()


