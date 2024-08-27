import os
import bcrypt
from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, User

# Setup Flask application
app = Flask(__name__)

# Configure CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Configure database URI
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database and migrations
db.init_app(app)
migrate = Migrate(app, db)

# Setup Flask-RESTful API
api = Api(app)

# User registration resource
class RegistrationResource(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        verify_password = data.get('verify_password')

        # Check if passwords match
        if password != verify_password:
            return make_response(jsonify({"error": "Passwords do not match"}), 400)

        # Check if username already exists
        if User.query.filter_by(username=username).first():
            return make_response(jsonify({"error": "Username already exists"}), 400)

        # Hash the password using bcrypt
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        new_user = User(username=username, password=hashed_password.decode('utf-8'))
        db.session.add(new_user)
        db.session.commit()

        return make_response(jsonify({"message": "User registered successfully"}), 201)

    def get(self):
        # Retrieve a list of all users for debugging purposes
        users = User.query.all()
        return make_response(jsonify([user.to_dict() for user in users]), 200)

# User login resource
class LoginResource(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter_by(username=username).first()

        if not user or not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            return make_response(jsonify({"error": "Invalid username or password"}), 401)

        return make_response(jsonify({"message": "Login successful"}), 200)

    def get(self):
        # Provide sample login data format
        return make_response(jsonify({
            "endpoint": "/login",
            "method": "POST",
            "required_fields": {
                "username": "string",
                "password": "string"
            },
            "description": "Use POST to submit login credentials."
        }), 200)

# Add resources to API
api.add_resource(RegistrationResource, '/register')
api.add_resource(LoginResource, '/login')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
