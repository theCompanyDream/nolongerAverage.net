# from https://www.drupal.org/requirements/php#drupalversions
FROM alpine:3.4

# https://www.drupal.org/node/3060/release
ENV DRUPAL_VERSION 8.1.3
ENV FILE_NAME drupal-${DRUPAL_VERSION}.tar.gz
ENV NGINX_VERSION 1.11.1-1~jessie
ENV DRUPAL_LOCATION /var/www
ENV php_conf /etc/php5/php.ini
ENV fpm_conf /etc/php5/php-fpm.conf

#hashes for file sdownloads
ENV composer_hash e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae
ENV DRUPAL_MD5 f2eef421c2a0610b32519f8f2e094b7c

RUN apk add --no-cache bash \
    tar \
    openssh-client \
    wget \
    nginx \
    supervisor \
    curl \
    git \
    php5-fpm \
    php5-pdo \
    php5-pdo_mysql \
    php5-mysql \
    php5-mysqli \
    php5-mcrypt \
    php5-ctype \
    php5-zlib \
    php5-gd \
    php5-intl \
    php5-memcache \
    php5-sqlite3 \
    php5-pgsql \
    php5-xml \
    php5-xsl \
    php5-curl \
    php5-openssl \
    php5-iconv \
    php5-json \
    php5-phar \
    php5-soap \
    php5-dom && \
    mkdir -p /etc/nginx && \
    mkdir -p /var/www/app && \
    mkdir -p /run/nginx && \
    mkdir -p /var/log/supervisor &&\
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php -r "if (hash_file('SHA384', 'composer-setup.php') === '${composer_hash}') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" && \
    php composer-setup.php --install-dir=/usr/bin --filename=composer && \
    php -r "unlink('composer-setup.php');"

    # forward request and error logs to docker log collector
    RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    	&& ln -sf /dev/stderr /var/log/nginx/error.log

    #Setup, run, and destroy scripts
    # COPY ./scripts /scripts
    # RUN set -x ; \
    #   adduser -u 82 -D -S -G www-data www-data;
    #
    # RUN chmod 775 /scripts \
    #     && run-parts /scripts \
    #     && rm -rf /scripts

    COPY ./etc/nginx.conf /etc/nginx/nginx.conf
    COPY ./etc/service.sh /usr/bin/service.sh
    COPY ./etc/supervisord.conf /etc/supervisor/supervisord.conf
    COPY ./etc/sites /etc/nginx/sites-enabled/
    COPY ./etc/php/www.conf /etc/php5/fpm/pool.d/www.conf

    # tweak php-fpm config
    RUN sed -i -e "s/;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/g" ${php_conf} && \
    sed -i -e "s/upload_max_filesize\s*=\s*2M/upload_max_filesize = 100M/g" ${php_conf} && \
    sed -i -e "s/post_max_size\s*=\s*8M/post_max_size = 100M/g" ${php_conf} && \
    sed -i -e "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" ${php_conf} && \
    sed -i -e "s/;daemonize\s*=\s*yes/daemonize = no/g" ${fpm_conf} && \
    sed -i -e "s/;catch_workers_output\s*=\s*yes/catch_workers_output = yes/g" ${fpm_conf} && \
    sed -i -e "s/pm.max_children = 4/pm.max_children = 4/g" ${fpm_conf} && \
    sed -i -e "s/pm.start_servers = 2/pm.start_servers = 3/g" ${fpm_conf} && \
    sed -i -e "s/pm.min_spare_servers = 1/pm.min_spare_servers = 2/g" ${fpm_conf} && \
    sed -i -e "s/pm.max_spare_servers = 3/pm.max_spare_servers = 4/g" ${fpm_conf} && \
    sed -i -e "s/pm.max_requests = 500/pm.max_requests = 200/g" ${fpm_conf} && \
    sed -i -e "s/user = nobody/user = nginx/g" ${fpm_conf} && \
    sed -i -e "s/group = nobody/group = nginx/g" ${fpm_conf} && \
    sed -i -e "s/;listen.mode = 0660/listen.mode = 0666/g" ${fpm_conf} && \
    sed -i -e "s/;listen.owner = nobody/listen.owner = nginx/g" ${fpm_conf} && \
    sed -i -e "s/;listen.group = nobody/listen.group = nginx/g" ${fpm_conf} && \
    sed -i -e "s/listen = 127.0.0.1:9000/listen = \/var\/run\/php-fpm.sock/g" ${fpm_conf} &&\
    ln -s /etc/php5/php.ini /etc/php5/conf.d/php.ini && \
    find /etc/php5/conf.d/ -name "*.ini" -exec sed -i -re 's/^(\s*)#(.*)/\1;\2/g' {} \;



#Installs DRUPAL yay
# https://www.drupal.org/node/3060/release
RUN curl -fSL "http://ftp.drupal.org/files/projects/drupal-${DRUPAL_VERSION}.tar.gz" -o drupal.tar.gz \
	&& tar -xz --strip-components=1 -f drupal.tar.gz \
	&& rm drupal.tar.gz

COPY ${DRUPAL_VERSION}/ /var/www
# 
# RUN chown -R www-data:www-data sites


RUN chmod 775 /usr/bin/service.sh

EXPOSE 80 443

CMD ["service.sh"]
