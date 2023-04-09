from flask import Flask, request, jsonify,session
from flask_session import Session
from flask_bcrypt import Bcrypt
from config import ApplicationConfig
from flask_cors import CORS
from models import db, User

app = Flask(__name__)

app.config.from_object(ApplicationConfig)
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

# Get Authorized User

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email,
        "username":user.username
    })


# Register User

@app.route("/register", methods=['POST'])
def register_user():
    username = request.json["username"]
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email, username=username).first() is not None
    
    if user_exists:
        return jsonify({"error": "User already exists"})

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(email=email, username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] =new_user.id

    return jsonify({
        "id": new_user.id,
        "username": new_user.username,
        "email": new_user.email
    })
    

# Login User

@app.route("/login", methods=['POST'])
def login_user():
    username = request.json["username"]
    # email = request.json["email"]
    password = request.json["password"] 

    user = User.query.filter_by(username=username).first()
    # hashed_password = bcrypt.generate_password_hash(password)
    
    if user is None:
        return jsonify({"error": "username wrong"})
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "password wrong"})
    
    
    session["user_id"] = user.id
    # session["user_username"] = user.username
    
    return jsonify({
        "id": user.id,
        "username": user.username,
    })

if __name__ =="__main__":
    app.run(debug=True)
