# Rapport de Projet - O-Kyoto

## 🔍 Présentation du projet

Ce projet est un site web nommé **O-Kyoto**, composé :
- d’un frontend React (Vite)
- de 3 microservices Node.js : `home`, `menu` et `contact`

Il a été conçu dans une architecture DevOps avec les outils suivants :
- Docker pour la conteneurisation
- Kubernetes pour l’orchestration
- GitHub Actions pour le CI/CD

---

## 🧱 Architecture technique

- **Microservices Node.js** : chaque service écoute sur le port `3000`
- **Frontend React** : buildé avec Vite, servi via Nginx
- **CI/CD** : GitHub Actions pour build/push les images
- **Kubernetes** : fichiers de déploiement YAML générés pour chaque composant

---

## 🚀 Lancement (local ou CI)

### Docker (local)
```bash
# Builder manuellement
docker build -t service-home ./backend/service-home
docker build -t service-menu ./backend/service-menu
docker build -t service-contact ./backend/service-contact
docker build -t frontend ./frontend
```

### Kubernetes (cluster local ou cloud)
```bash
kubectl apply -f k8s/
```

---

## 🧪 Captures d’écran (à insérer ici)

- 📷 Page d’accueil
- 📷 Page menu
- 📷 Page contact

---

## 📦 CI/CD

- `ci.yml` dans `.github/workflows`
- Utilise `docker/buildx` pour build
- Push automatique vers DockerHub
- (Optionnel) Déploiement Kubernetes

---

## 🔚 Conclusion

Projet structuré selon les pratiques DevOps :
- Code modulaire et conteneurisé
- Orchestration prête avec Kubernetes
- Automatisation de la chaîne de build/deploy via GitHub Actions

