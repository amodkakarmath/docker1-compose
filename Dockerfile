FROM node:alpine
WORKDIR /var/app
COPY ./package.json ./
RUN npm install
COPY . . 
#COPY ALL THE FOLDER SND FILE INTO CURRENT WORKING DIRECTORY
CMD ["npm", "start"]
