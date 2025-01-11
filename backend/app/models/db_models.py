# Third-party imports
from sqlalchemy import Column, Integer, String, SmallInteger, Float, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

# App imports
from app import db_manager


Base = db_manager.base


class CompanyAccount(Base):
    __tablename__ = "companyaccount"
    
    companyId = Column(Integer, primary_key=True, autoincrement=True)  # Primary key with auto-increment
    companyName = Column(String(256), unique=True, nullable=False)  # Unique and cannot be NULL
    activeAccount = Column(SmallInteger, nullable=False)  # Cannot be NULL
    carbonBalance = Column(Float, nullable=False)  # Defined as int in the DB
    cashBalance = Column(Float, nullable=False)  # Cannot be NULL
    createdDatetime = Column(DateTime, nullable=False, server_default=func.now())  # Default to current timestamp
    updatedDatetime = Column(DateTime, nullable=False, server_default=func.now(), onupdate=func.now())  # Updates on change

class OutstandingRequest(Base):
    __tablename__ = "outstandingrequest"
    
    id = Column(Integer, primary_key=True, autoincrement=True)  # Primary key with auto-increment
    companyId = Column(Integer, ForeignKey("companyaccount.companyId"), nullable=False)  # Foreign key reference
    requestorCompanyId = Column(Integer, ForeignKey("companyaccount.companyId"), nullable=False)  # Foreign key reference
    carbonUnitPrice = Column(Float, nullable=False, default=0)  # Default value of 0
    carbonQuantity = Column(Float, nullable=False, default=0)  # Default value of 0
    requestReason = Column(Text, nullable=True)  # Allows NULL
    requestStatus = Column(String(50), nullable=False)  # Cannot be NULL
    requestType = Column(String(50), nullable=False)  # Cannot be NULL
    createdDatetime = Column(DateTime, nullable=False, server_default=func.now())  # Default to current timestamp
    updatedDatetime = Column(DateTime, nullable=False, server_default=func.now(), onupdate=func.now())  # Updates on change


class Alert(Base):
    __tablename__ = "requestreceived"
    
    id = Column(Integer, primary_key=True, autoincrement=True)  # Primary key with auto-increment
    requestId = Column(Integer, ForeignKey("outstandingrequest.id"), nullable=False)  # Foreign key referencing `outstandingrequest`
    alertDatetime = Column(DateTime, nullable=False)  # Cannot be NULL
    alertText = Column(Text, nullable=False)  # Cannot be NULL
    alertStatus = Column(String(50), nullable=False)  # Cannot be NULL
    alertViewDate = Column(DateTime, nullable=True)  # Allows NULL
    createdDatetime = Column(DateTime, nullable=False, server_default=func.now())  # Default to current timestamp
    updatedDatetime = Column(DateTime, nullable=False, server_default=func.now(), onupdate=func.now())  # Updates on change