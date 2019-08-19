"""
Services for content serving.
"""
import markdown
from flask import url_for

def genContent(fname):
    """
    Get HTML content from fname.md file.
    """
    name = "app" + url_for("static", filename=f"content/{ fname }.md")
    
    f = open(name, "r")
    html = markdown.markdown(f.read())
    f.close()
    return html
    