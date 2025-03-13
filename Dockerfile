# Etapa de construcción
FROM node:18-alpine AS builder

# Definir directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json ./

# Instalar NestJS CLI globalmente y todas las dependencias necesarias
RUN npm install -g @nestjs/cli && npm install && npm install --save-dev @types/node

# Copiar el código fuente de la aplicación
COPY src ./src
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY nest-cli.json .
COPY .prettierrc .
COPY README.md .

# Construir la aplicación
RUN npm run build

# Etapa final: Crear la imagen liviana con solo lo necesario
FROM node:18-alpine

# Definir directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Exponer el puerto que usará la aplicación dentro del contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]
