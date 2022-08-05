# Exploring API

## Requirements

1. Docker & Docker Compose

## Development work

1. Run `docker-compose up` to start up the API.

- This will start the API app in watch mode so changes to the files wil automatically restart the app in the container.

1. Run `docker exec -it dev bash` to open up the development environment.

- To run tests, run `npm test` or `npm run test:watch` inside of this container


## Tasks

1. Assign a TL
1. Clone the repo
1. Create a Schema (What data should a person have?)
1. Finish the `GET /api/person` route
1. Create a route to update a person
1. Create a route to delete a person
1. What other endpoints make sense? Make those.


## Reference

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
