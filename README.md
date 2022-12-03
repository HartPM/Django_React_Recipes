# Getting Started
```

python3 -m pip install -r requirements.txt
python3 manage.py runserver

cd client
npm i
npm start
```

# Project Build Notes

## Backend
```
Install django api framework
- pip3 install djangorestframework

Disable django's default behavior that blocks incoming requests from external domains
- pip3 install django-cors-headers

Create the django project
- django-admin startproject PHBeyondMD

Open the project in VSC
- cd PHBeyondMD
- code .

Add rest framework
- ./PHBeyondMD/settings.py
- INSTALLED APPS = [..., 'rest_framework',]

Open the project in a browser window
- python3 manage.py runserver
- localhost:8000

Create api directory in the root directory
- setup 
-- __init__.py
-- views.py
-- urls.py
- add to INSTALLED APPS in settings.py

Create recipe app
- manage.py startapp recipe 



==========

Create a new app
- python3 manage.py startapp AppName

Register the app in settings.py
- INSTALLED_APPS = [..., 'rest_framework', 'corsheaders', AppName.apps.AppNameConfig']

Add corsheaders to settings.py middleware
- MIDDLEWARE = ['corsheaders.middleware.CorsMiddleware', ...]

After INSTALLED_APPS in settings.py, make the API accessible from all domains for development. Change to whitelisted domains for production.
- CORS_ORIGIN_ALLOW_ALL = True 
```


## Frontend
```
Create the React app in the parent project folder
- npx create-react-app client --template typescript

Open client on port 3000
- cd client
- npm start

If another process is running on port 3000
- lsof -t -i:9292
==> returns a WID #
- kill -9 #
- npm start

Add .pdf type to react-app-env.d.ts
- declare module '*.pdf'

Install MUI
- npm install @mui/material @emotion/react @emotion/styled
- npm install @mui/icons-material 

```