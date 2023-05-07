# MicroservicesExample

In contrast to a monolithic approach, where all components are a part of a single unit, microservice approach creates services for the different components. A network of communicating servers will then make up the application in a whole. 

Microservices approach opens for betters scaling and updating (don’t need to redeploy the entire application on each update), different tech stacks. Downsides; introduces complexity from a distributed system, communication between services etc…

This project consist of two microservices, “events” and “tickets”, built from “scratch” along with consul-, caddy- and mongo services (future). Goal is develop a dynamic microservices application. 

Simplified project from the course "Contemporary Software Development" at UNIBZ


### Node.js


Nodejs is a fast and scalable runtime environment for building the server-side using JavaScript, and is therefore chosen for this project. 

### Dockerfile and docker-compose

An efficient way to build and deploy applications. Application and all its dependencies are “packed” into a image, which can be ran as a lightweight container. This project uses a docker-compose file which coordinates the executing of docker file inside each services and prebuild images (consul, mongo)


### Kubernets

Kubernets cluster conists of kubernets nodes. Each node has a one or more pods inside of it. This application has one pod per node. Each pod run one docker container, which runs a NodeJS application. 

For pod to communicate between each other, ClusterIP Service. This a kubernets service just used for communication. 


### Consul.io 

Consul is a communications engine and used in this project for self-registry and discovery of other services. This enables services to locate and communicate with each other without requiring prior knowledge of each other's location or network address. Health checks and load balancing for optimizing the network. 

In this case a consul server is spun up by docker-compose file (kind of works as the leader), while consul clients runs on each services and communicates with the consul servers. So far, I have had some trouble getting the services registry up and running. Tried implemented both with the consul agent API and HCL config file. 


### Caddy 
todo

### RabbitMQ
todo
