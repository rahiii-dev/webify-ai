# Webify

**Webify** is a full-stack web application that provides a modern and modular environment to build, preview, and manage web projects. It features a **Vite + React** frontend and a **Node.js + Express** backend.


## Prerequisites

Before running this project locally, make sure you have the following installed:

* **Node.js** — [https://nodejs.org/](https://nodejs.org/)
* A code editor like **VS Code** — [https://code.visualstudio.com/](https://code.visualstudio.com/)


## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/rahiii-dev/webify-ai
cd webify-ai
```


### 2. Set up the **backend**

```bash
cd backend
npm install
cp .env-example .env        # Add your environment variables
npm run dev                 # Starts backend on default port 5000
```

---

### 3. Set up the **frontend**

Open a new terminal:

```bash
cd webify-frontend
npm install
cp .env-example .env        # Add your environment variables
npm run dev                 # Starts frontend on default port 5173
```


## Accessing the App Locally

Once both servers are running, you can access them in your browser:

* **Frontend (React):** [http://localhost:5173](http://localhost:5173)
* **Backend (API):** [http://localhost:8080](http://localhost:8080)

Make sure the frontend `.env` file has the correct backend URL (e.g. `VITE_API_BASE_URL=http://localhost:8080/api`).


