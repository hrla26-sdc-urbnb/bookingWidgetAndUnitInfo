FROM node:10

WORKDIR /bookingWidgetAndUnitInfo

COPY . .

RUN npm install

EXPOSE 2100

CMD ["npm", "start"]