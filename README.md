# SaaS Starter Kit

A simple SaaS starter kit using Docker Compose with an Express backend, Next.js frontend, and PostgreSQL database managed by Prisma ORM.

## Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) and npm (for local development)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Fresh-Digital-Solutions/saas-starterkit.git
cd saas-starter-kit
rm -rf .git
git init
```


### 2. Set up Enviroment Variables
- 1. Navigate to the `backend` folder:
```bash
cd backend
```
- 2. create a `.env` file with the following content: 
```bash
DATABASE_URL=postgresql://postgres:postgres@db:5432/postgres?schema=public
```
### 3. Build and Start the Containers
 Navigate back to the root directory and run Docker Compose to build and start the containers:
```bash
docker-compose up --build
```
### 4. Initialize Prisma 
Open a new terminal and run the following commands to set up Prisma:
```bash
docker-compose exec backend npx prisma init
docker-compose exec backend npx prisma migrate dev
```
### 5. Access the Application
- Backend (Express): The backend server will be running on http://localhost:4000.
- Database (PostgreSQL): The PostgreSQL database will be accessible on localhost:5432.

### 6. Other commands
- Stop Containers
```bash
docker-compose down
```
- View logs for backend
```bash
docker-compose logs backend
```
- Rebuild service
```bash
docker-compose up --build backend
```
