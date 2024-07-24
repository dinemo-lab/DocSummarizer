from transformers import pipeline

summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

def summarize_text(text):
    try:
        max_length = min(200, max(100, len(text.split()) // 2))
        min_length = max(50, len(text.split()) // 3)
        
        summary = summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
        return summary[0]['summary_text']
    except Exception as e:
        print(f"Error in summarization: {e}")
        return "An error occurred during summarization."
