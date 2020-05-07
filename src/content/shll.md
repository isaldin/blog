[< back](/)

## Useful shell commands

#### show disk usage
`df -h`

#### who is listening ports
`lsof -i -P -n | grep LISTEN`

#### ubuntu server: create user
* `adduser username`
* `usermod -aG sudo username`

#### ubuntu server: create ssh key
* `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
* `eval "$(ssh-agent -s)"`
* `ssh-add ~/.ssh/id_rsa`
