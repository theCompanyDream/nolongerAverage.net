# from https://www.drupal.org/requirements/php#drupalversions
FROM php:latest

# https://www.drupal.org/node/3060/release
ENV DRUPAL_VERSION 8.1.3
ENV DRUPAL_MD5 f2eef421c2a0610b32519f8f2e094b7c
ENV FILE_NAME drupal-${DRUPAL_VERSION}.tar.gz
ENV NGINX_VERSION 1.11.1-1~jessie
ENV DRUPAL_LOCATION /var/www
# install the PHP extensions we need
RUN apt-get update && apt-get install -y php5-fpm supervisor curl libpng12-dev libjpeg-dev libpq-dev \
	&& rm -rf /var/lib/apt/lists/* \
	&& docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr \
	&& docker-php-ext-install gd mbstring pdo pdo_mysql pdo_pgsql zip

#Install Ngnix
RUN apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62 \
	&& echo "deb http://nginx.org/packages/mainline/debian/ jessie nginx" >> /etc/apt/sources.list \
	&& apt-get update \
	&& apt-get install --no-install-recommends --no-install-suggests -y \
						ca-certificates \
						nginx=${NGINX_VERSION} \
						nginx-module-xslt \
						nginx-module-geoip \
						nginx-module-image-filter \
						nginx-module-perl \
						nginx-module-njs \
						gettext-base \
	&& rm -rf /var/lib/apt/lists/*


# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log \
  && mkdir /opt/startup

COPY ./etc/nginx.conf /etc/nginx/nginx.conf
COPY ./etc/service.sh /usr/bin/service.sh
COPY ./etc/supervisord.conf /etc/supervisor/supervisord.conf
COPY ./etc/sites /etc/nginx/conf.d/

RUN chmod 775 /usr/bin/service.sh

EXPOSE 80 443

CMD ["service.sh"]
