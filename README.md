# Description
UrBnb was a System Design project I worked on with three other engineers. To give a high level overview, our group inherited a full-stack application previously built by another team (in our case, a replica of AirBnb's product page). The front-end of this application was entirely built out, so our job was to optimize and scale the back-end. My role, in particular, was to optimize the unit details microservice.

Technical Stack:
- Database Optimization: MongoDB/Mongoose | PostgreSQL | Express | Node.js | Nginx
- Load Testing: Artillery.io | Loader.io | New Relic
- Deployment: EC2 | Docker

Since a lot of the work (e.g., stress/load testing, load balancer setup) was actually done outside of this repo, I've put together a brief summary of the project below (as well as a screenshot of the microservice and a diagram of our final deployment architecture).

Project Overview:
![Overview](https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-sdc-urbnb/urBnb+SDC+Overview.png)

Screenshot:
![Screenshot](https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-sdc-urbnb/urBnb.png)

Deployment Architecture:
![Architecture](https://s3-us-west-1.amazonaws.com/gitbuckets/hrla26-sdc-urbnb/urBnb+Deployment+Architecture.png)
