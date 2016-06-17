# Async job runner

Built for the async jobs of Biblo and BibloCS.

## ENV

* __PORT__
Set the port to listen to.

## BUILD/RUN

```
docker build -t dbc-node-async-job-runner .
docker run -p 1234:1234 -d dbc-node-async-job-runner
```
