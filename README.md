# O-Kyoto 🍣

**Projet réalisé par Bilal Dembélé et Kwameh Dhegbo**

---

## 📝 Description

O'Kyoto est une application web monopage (SPA) dédiée à un restaurant japonais fictif basé à Paris.  
Elle permet de naviguer entre différentes sections (accueil, menu, contact, etc.) tout en exploitant une architecture microservices pour structurer le backend.

---

## 🧰 Technologies utilisées

- Frontend : **Vue.js**
- Backend (microservices) : **Node.js**
- Containerisation : **Docker**
- Orchestration : **Docker Compose** (prévu : Kubernetes)
- CI/CD : GitHub Actions (à intégrer)
- Autres : TailwindCSS, FontAwesome

---

## ⚙️ Structure des microservices

| Service         | Port local             | Description                   |
|-----------------|------------------------|-------------------------------|
| `service-home`  | http://localhost:3001  | Section Accueil               |
| `service-menu`  | http://localhost:3002  | Affichage du menu             |
| `service-contact` | http://localhost:3003 | Formulaire de contact         |
| `frontend`      | http://localhost:8081  | Page VueJS (SPA) avec toutes les sections |

---

## ▶️ Lancement du projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/Berlal/O-Kyoto.git
cd O-Kyoto
```

### 2. Lancer avec Docker Compose

```bash
docker-compose up --build
```

---

## 🔍 Aperçu du projet

### 🌐 URL d'accès

- Frontend SPA : [http://localhost:8081](http://localhost:8081)
