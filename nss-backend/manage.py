"""
Entry point for the backend app

Usage:
python manage.py run : Runs the app
python manage.py debug : Runs the app in debug mode
python manage.py db : Creates all tables freshly
TODO: MIGRATIONS
"""
from sys import argv
import logging.config
from logging import getLogger
from dotenv import load_dotenv
load_dotenv(verbose=True)

from app import app
from app.models import create_db

logging.config.fileConfig('logging.conf')
LOG = getLogger(__name__)

if __name__ == "__main__":
    if len(argv) < 2:
        print("""
Usage:
python manage.py run : Runs the app
python manage.py debug : Runs the app in debug mode
python manage.py db : Creates all tables freshly
"""
        )
    elif argv[1] == "run":
        LOG.info("App starting")
        app.run(debug=False)
    elif argv[1] == "debug":
        LOG.info("App starting in DEBUG mode")
        app.run(debug=True)
    elif argv[1] == "db":
        create_db()
    else:
        print("Not valid option")
        print("""
Usage:
python manage.py run : Runs the app
python manage.py debug : Runs the app in debug mode
python manage.py db : Creates all tables freshly
"""
        )
    