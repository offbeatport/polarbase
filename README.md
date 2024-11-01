# Polar Base

## Install local environment

```bash
cd polar-app && npm install
```

Update all .env\* files.

## Run local environment

```bash
cd polar-app && npm run dev
```

Navigate to [localhost:3000](http://localhost:3000)

## Deploy

```bash
cd ~/polarbase/
git pull && sudo sudo docker compose up -d --build
```

## Troubleshooting

### Docker build freezes

```bash
sudo docker rmi -f $(sudo docker images -aq)
sudo docker rm -vf $(sudo docker ps -aq)
```
