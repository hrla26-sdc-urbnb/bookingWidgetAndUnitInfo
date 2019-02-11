\c urbnb;

COPY owners (name, photo, isSuperHost) FROM '/Users/martinhan/Desktop/bookingWidgetAndUnitInfo/db/seed/seedOwners.csv' DELIMITER ',' CSV HEADER;