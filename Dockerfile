FROM node: 10

WORKDIR /bookingWidgetAndUnitInfo

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]