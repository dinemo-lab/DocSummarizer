
from flask import Flask
from flask_cors import CORS

def create_app():
    print("Creating app...")
    app = Flask(__name__)
    CORS(app, origins='*')

    app.config.from_object('app.config.Config')
    
  
    from app.routes.upload import upload_bp
    from app.routes.summarize import summarize_bp
    
    app.register_blueprint(upload_bp)
    app.register_blueprint(summarize_bp)
    
    return app
