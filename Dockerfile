# DOCKER FILE
# Instrucciones que Docker realizará al momento de ejecutar la app

# Define con qué 'capa' o 'initial image' correrá
FROM node:8

# Crea la carpeta de la app en el contenedor
WORKDIR /usr/src/app

# Copia el directorio de la app al contenedor
COPY . .

# Ejecuta las instrucciones sobre la 'initial image'
RUN npm install

# Define el puerto de la app
EXPOSE 3000

# Especifica que comandos correrá el 'Contenedor'
CMD [ "npm", "start" ]
