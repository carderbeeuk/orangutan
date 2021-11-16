# orangutan
> React multi-site housing application (muttley v2)

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
sudo mkdir orangutan
cd orangutan
sudo git clone https://github.com/carderbeeuk/orangutan.git .
```

### Add and update permissions
```
sudo adduser carderbee
sudo groupadd developers
sudo usermod -a -G developers {developer_name}
sudo chown -R carderbee:developers /srv/orangutan
```

### Install requirements
```
sudo npm install -g serve
npm install --save # installs all from package.json
```

### Set up config and build the application
```
cd /srv/orangutan
nano .env
```

#### On Production/Dev
in the `.env` file set the bearer_token for calling sherbert-lemon (can be found in sherbert-lemon config)
```
REACT_APP_BEARER_TOKEN={bearer_token}
```

#### On Local
in the `.env.local` file set the bearer_token for calling sherbert-lemon and the app site (app site is for testing websites on localhost)
```
REACT_APP_BEARER_TOKEN={bearer_token}
REACT_APP_SITE={site_name} # e.g. ukcarderbeecom
```

#### Run the first build
```
cd /srv/orangutan
npm run build
```

### Running the application
set up the supervisor config in `/etc/supervisor/conf.d/orangutan.conf`
```
[program:orangutan]
directory=/srv/orangutan
command=serve -s build -l tcp://localhost:3000
user=carderbee
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
        proxy_pass http://localhost:3080;
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