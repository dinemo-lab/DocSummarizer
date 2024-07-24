# app/__init__.py
from flask import Flask
from flask_cors import CORS

def create_app():
    print("Creating app...")
    app = Flask(__name__)
    CORS(app, origins='*')
    
    # Load configuration
    app.config.from_object('app.config.Config')
    
    # Register blueprints
    from .routes.upload import upload_bp
    from .routes.summarize import summarize_bp
    
    app.register_blueprint(upload_bp)
    app.register_blueprint(summarize_bp)
    
    return app
