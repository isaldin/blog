## Docker

##### remove intermediate/unused images
`docker rmi $(docker images -f dangling=true -q --no-trunc) -f`

##### attach to running container
`docker container attach <container-id>`

##### login to docker hub
`docker login --username=username`

##### push image to repo
`docker push ima/ge:tag`

##### run image as daemon with restart policy
`docker run -d -p 80:80 --restart=always ima/ge:tag`

##### run shell on running container
`docker exec -it container-id sh`