# Cars Dealership Capstone Project

**Repository:** https://github.com/AbhishekKrampus/xrwvm-fullstack_developer_capstone

## Project Overview

This is the IBM Full Stack Software Developer Capstone project – a full‑stack web application for a national car dealership. The backend is built with **Django** (Python) providing REST‑style API endpoints for authentication, dealer information, reviews, and car makes/models. The frontend is a **React** single‑page application that consumes these APIs.

## Architecture

- **Backend (Django)** – `server/djangoapp` contains the Django project, models, and API views. It runs on port **8000**.
- **Microservice (Node/Express)** – `server/database` hosts a small Express service that stores dealer, review and car data in MongoDB (used by the Django layer).
- **Frontend (React)** – `server/frontend` built with `create‑react‑app`, served by Django static files.
- **Docker** – optional Dockerfiles are provided for containerised deployment.

## Technology Stack

- Python 3.11, Django 4.x, Django REST framework (if used)
- Node.js 20, Express, MongoDB
- React 18, Bootstrap 5
- Docker, GitHub Actions CI/CD

## Setup Instructions

1. **Clone the repository** (already done).
2. **Backend**
   ```bash
   cd server
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```
3. **Microservice**
   ```bash
   cd database
   npm install
   npm start   # runs on http://localhost:3030
   ```
4. **Frontend**
   ```bash
   cd frontend
   npm install
   npm start   # runs on http://localhost:3000 and proxies to Django
   ```
5. **Run Tests**
   ```bash
   python manage.py test
   ```

## Environment Variables

Create a `.env` file in `server/djangoapp` with:
```
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=*
``` (Do not commit this file.)

## CI/CD

GitHub Actions workflow defined in `.github/workflows/ci.yml` runs linting, tests and builds on each push.

---

*All code is original to the student; no proprietary IBM code is included.*