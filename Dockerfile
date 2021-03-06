# Dockerfile
FROM node:8.9
LABEL authors="IntegracionContinua"

# Agregamos un usuario
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/usr/src/app
RUN mkdir $HOME
WORKDIR $HOME

# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli && npm cache clean

# Puerto entorno dev
EXPOSE 4200
# Puerto livereload
EXPOSE 49153
# Puerto Test
EXPOSE 9876
# Puerto e2e
EXPOSE 49152
