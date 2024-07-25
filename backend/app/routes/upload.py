from flask import Blueprint, request, jsonify, current_app
import os
from ..utils.file_processing import allowed_file, read_file_content

print("Loading upload.py...")

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if not allowed_file(file.filename):
        return jsonify({'error': 'File type not allowed'}), 400

    try:
        filename = file.filename
        file_path = os.path.join(current_app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        
        file_content = read_file_content(file_path)
        
        return jsonify({
            'message': 'File uploaded successfully',
            'file': {
                'filename': filename,
                'content': file_content
            }
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
