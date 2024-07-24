# app/utils/file_processing.py

import os
from pdfminer.high_level import extract_text as extract_pdf_text
from docx import Document

print("Loading file_processing.py...")

def allowed_file(filename):
    print("allowed_file function called.")
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'txt', 'pdf', 'docx'}

def read_file_content(filepath):
    print("read_file_content function called.")
    if filepath.endswith('.txt'):
        with open(filepath, 'r') as file:
            return file.read()
    elif filepath.endswith('.pdf'):
        return extract_pdf_text(filepath)
    elif filepath.endswith('.docx'):
        return read_docx_content(filepath)
    else:
        return "Unsupported file type."

def read_docx_content(filepath):
    print("read_docx_content function called.")
    doc = Document(filepath)
    content = []
    for para in doc.paragraphs:
        content.append(para.text)
    return "\n".join(content)
