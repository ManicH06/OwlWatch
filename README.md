# OwlWatch — API Monitoring Platform

<p align="center">
  <img src="./Frontend/public/owl.svg" alt="OwlWatch Logo" width="160"/>
</p>

<p align="center">
  <strong>Plateforme de monitoring d’API fiable, scalable et pensée pour la production.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-en%20développement-yellow" />
  <img src="https://img.shields.io/badge/backend-NestJS-red" />
  <img src="https://img.shields.io/badge/frontend-React.js-blue" />
  <img src="https://img.shields.io/badge/database-PostgreSQL-blue" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" />
</p>

---

## Présentation

**OwlWatch** est une plateforme de monitoring permettant de surveiller la disponibilité et les performances d’APIs en temps réel.

Le projet a été conçu comme un **produit SaaS réaliste**, avec une attention particulière portée à :

- la robustesse backend
- la sécurité des accès
- la gestion de données à grande échelle
- la maintenabilité du code

---

## Fonctionnalités

- Monitoring d’endpoints HTTP/HTTPS
- Planification automatique des vérifications (cron jobs)
- Historique des performances (latence, uptime, downtime)
- Authentification sécurisée (JWT + Bcrypt)
- Dashboard centralisé
- Intégration de webhooks (Discord, Slack, etc.)

---

## Architecture

- Backend modulaire avec NestJS
- Séparation des responsabilités (SOLID)
- Validation des données avec Zod
- Authentification via Passport (JWT)
- Hash des mots de passe avec Bcrypt

---

## Stack Technique

### Backend

- Node.js
- NestJS
- TypeScript
- TypeORM

### Frontend

- React.js
- Tailwind CSS
- Shadcn/UI

### Infrastructure

- PostgreSQL
- Docker
- GitHub Actions

---

## API

L’API est organisée autour de trois domaines principaux :  
**authentification**, **gestion des endpoints** et **visualisation des performances**.

Toutes les routes sensibles sont protégées via **authentification JWT**.

---

### Authentification

Gestion des comptes utilisateurs et génération de token sécurisé.

```http
POST   /auth/signup     # Création de compte utilisateur
POST   /auth/login      # Authentification et génération d’un JWT
```

### Monitoring

Configuration et gestion des endpoints surveillés.

```http
POST   /monitors        # Ajouter un endpoint à surveiller
PATCH  /monitors/:id    # Modifier la configuration (fréquence, headers, etc.)
GET    /logs/:id        # Consulter l’historique des performances
```

### Dashboard

```http
GET    /dashboard       # Statut global et métriques principales
```

## Installation

```bash
git clone https://github.com/ManicH06/OwlWatch.git
cd owlwatch

cd Backend
npm install
cp .env.example .env
npm run start:dev

cd ../Frontend
npm install
npm run dev
```
