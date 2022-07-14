# frontend
Holy Chatter Frontend


## Set up

`yarn`


## Run

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Deploy

Build the frontend:

`yarn build`


Copy the frontend to the server

`scp -r build root@<server_ip>:/var/www/html/build`


Open a terminal in the server

`ssh root@<server_ip>`


Go to sites-available directory:

`cd /etc/apache2/sites-available/`


Open the `000-default.conf` and `default-ssl.conf` file:


`sudo nano 000-default.conf` and `sudo nano default-ssl.conf` and rechange the DocumentRoot path to `/var/www/html/build`


`DocumentRoot /var/www/html/build`


Now go to the Apache configuration.


`cd /etc/apache2`

`sudo nano apache2.conf`


Add the following snippet:

```
<Directory /var/www/html>

       Options Indexes FollowSymLinks

       AllowOverride All

       Require all granted

</Directory>
```


Make a file inside /var/www/html/build: (to add entry points from any paths)


`sudo nano .htaccess`


```
Options -MultiViews
    
RewriteEngine On
    
RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule ^ index.html [QSA,L]
```


Restart Apache server:

`sudo service apache2 restart`

