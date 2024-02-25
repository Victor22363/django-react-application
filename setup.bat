@echo off

rem make folder for django and get in
mkdir django
cd django

rem Install Django
pip install django

rem Install Django
pip install djangorestframework

rem Install Django
pip install django-cors-headers

rem Create a Django project
django-admin startproject main
cd main

python manage.py startapp one

python manage.py startapp api



rem return to root
cd ..
mkdir react
cd react



rem Install Node.js and npm (if not already installed)
echo Downloading and installing Node.js

rem Define the Node.js version
set "nodeVersion=14.17.6"  rem You can check for the latest version on the Node.js website

rem Define the download URL
set "downloadUrl=https://nodejs.org/dist/v%nodeVersion%/node-v%nodeVersion%-x64.msi"

rem Define the installation directory
set "installDir=C:\Program Files\nodejs"

rem Download Node.js installer
bitsadmin.exe /transfer "NodeInstaller" %downloadUrl% "%CD%\node-installer.msi"

rem Install Node.js
msiexec.exe /i "%CD%\node-installer.msi" /quiet /qn /norestart

rem Add Node.js and npm to the system PATH
setx PATH "%PATH%;%installDir%" /M

rem Verify Node.js and npm installation
node -v
npm -v

rem Clean up the installer
del "node-installer.msi"




rem Install Create React App globally
npm install -g create-react-app

rem Create a React app
npx create-react-app project

rem Change directory to the React app folder
cd project

rem Install React dependencies
npm install
npm install bootstrap
npm install hls.js
npm install react-dom
npm install react-router-dom

rem Deactivate the virtual environment
deactivate

echo ---Setup completed---