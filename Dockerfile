FROM  python:3.11.0-bullseye

ENV PYTHONUNBUFFERED=1

RUN mkdir /code

WORKDIR /code

# copy from the current directory of the Dockerfile to /api in the image
ADD requirements.txt /code/

RUN python3 -m pip install -r requirements.txt

ADD . /code/

# EXPOSE 8000

# CMD ["python3", "manage.py runserver"]
