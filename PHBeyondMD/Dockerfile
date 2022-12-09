FROM  python:3.11.0-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /phbeyondmd

RUN pip3 install django django-cors-headers

# copy from the current directory of the Dockerfile to /api in the image
COPY . . 

EXPOSE 8000

# CMD ["python3", "../manage.py runserver"]
