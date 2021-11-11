# Sombrero
> React multi-site housing application

## Installation

### Requirements
```
- git
- nginx
- nodejs
- npm
- supervisor
```

### Clone the repo
```
cd /srv
sudo mkdir sombrero
cd sombrero
sudo git clone https://code.tvoct.net/Tekpaw/sombrero.git .
```

### Add and update permissions
```
sudo adduser sombrerouser
sudo groupadd developers
sudo usermod -a -G developers {developer_name}
sudo chown -R sombrerouser:developers /srv/sombrero
```

### Install requirements
```
sudo npm install -g serve
npm install --save # installs all from package.json
```

### Set up config and build the application
```
cd /srv/sombrero
nano .env
```

#### On Production/Dev
in the `.env` file set the bearer_token for calling bluemind (can be found in bluemind config)
```
REACT_APP_BEARER_TOKEN={bearer_token}
```

#### On Local
in the `.env.local` file set the bearer_token for calling bluemind and the app site (app site is for testing websites on localhost)
```
REACT_APP_BEARER_TOKEN={bearer_token}
REACT_APP_SITE={site_name} # e.g. findwithusnet
```

#### Run the first build
```
cd /srv/sombrero
npm run build
```

### Running the application
set up the supervisor config in `/etc/supervisor/conf.d/sombrero.conf`
```
[program:sombrero]
directory=/srv/sombrero
command=serve -s build -l tcp://localhost:3000
user=sombrerouser
autostart=true
autorestart=true
```

### Serving the app using nginx
set up for nginx in `/etc/nginx/sites-available/{website}.conf`
repeat for each website in the application
```
server {
    listen 80;
    server_name {website};

    location / {
        proxy_pass http://localhost:3000;
    }
}
```
set site enabled
```
cd /etc/nginx/sites-enabled
sudo ln -s ../sites-available/{website}.com.conf
```

### Setting up SSL
follow instrunctions here:
https://certbot.eff.org/lets-encrypt/debianbuster-nginx