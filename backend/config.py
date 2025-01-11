class Config:
    SECRET_KEY = "your_secure_secret_key"
    JWT_SECRET_KEY = "your_jwt_secret_key"
    JWT_ACCESS_TOKEN_EXPIRES = 3600  # 1 hour
    JWT_REFRESH_TOKEN_EXPIRES = 86400  # 1 day
