FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm cache clean --force

RUN npm install
COPY . . 
EXPOSE 9000

RUN npx prisma generate

CMD ["scripts/startup.sh"] 