from transformers import pipeline

def summarize_text(text):
    summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")
    
    max_length = min(200, max(100, len(text.split()) // 2))
    min_length = max(50, len(text.split()) // 3)
    
    summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
    return summary[0]['summary_text']
