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

Build and make an archive of the frontend:

`sh build_and_compress.sh`


Copy the frontend to the server

`scp build.zip root@<server_ip>:/var/www/html/`


Open a terminal in the server

`ssh root@<server_ip>`


Go to html directory:

`cd /var/www/html/`


Remove the previous build:

`rm -fr build`


Unzip de build folder:

`unzip build.zip`


Add videos:

`cp -r videos/ build/`


Remove the archive:

`rm build.zip`


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


Restart Apache server:

`sudo service apache2 restart`

