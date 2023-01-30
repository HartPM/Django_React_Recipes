FROM  python:3.11.0-bullseye

# ENV PYTHONUNBUFFERED=1

WORKDIR /server

# copy from the current directory of the Dockerfile to /api in the image
COPY . . 

RUN python3 -m pip install -r requirements.txt

EXPOSE 8000

# CMD ["python3", "manage.py runserver"]
