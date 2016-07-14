#!/bin/sh
addgroup -g 82 -S www-data 2>/dev/null
addgroup -S nginx 2>/dev/null
adduser -u 82 -D -S -G nginx -H -h /var/www/localhost/htdocs -s /sbin/nologin \
	-D nginx 2>/dev/null
addgroup nginx www-data 2>/dev/null

exit 0
