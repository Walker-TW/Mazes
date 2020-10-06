[![Netlify Status](https://api.netlify.com/api/v1/badges/1b97e232-aca4-4eba-ac7f-336c7c609115/deploy-status)](https://app.netlify.com/sites/maze-in-the-dark/deploys)

<h1> Mazes In The Dark <h1>

UNDER CONSTRUCTION!!! Now with Typescript

## License

Distributed under the MIT License. See `LICENSE` for more information.

## GoCD Instructions 

Navigate to required directory (server first)
- ./bin/go-server console (started in the foreground)
- ./bin/go-server start (started as a daemon in the background)
- ./bin/go-server stop
- ./bin/go-server restart

Navigate to required directory (then agent)
- ./bin/go-agent start (started as a daemon in the background)
- ./bin/go-agent console (started in the foreground)
- ./bin/go-agent stop
- ./bin/go-agent restart

Runs on  'http://localhost:8153' 

Pipelines need to be configured
- Run specific build scripts
- Then run testing
- check on normal Heorku builds to see the commands

