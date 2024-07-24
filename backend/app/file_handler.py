import os
from pdfminer.high_level import extract_text as extract_pdf_text
from docx import Document
from flask import current_app as app

def read_file_content(filepath):
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
    doc = Document(filepath)
    content = []
    for para in doc.paragraphs:
        content.append(para.text)
    return "\n".join(content)
