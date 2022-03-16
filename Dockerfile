FROM lmayala/plan_a
USER leo
EXPOSE 8000/tcp
CMD /usr/bin/node /opt/tinyweb/hello.js
