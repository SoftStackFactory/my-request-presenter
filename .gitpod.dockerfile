FROM gitpod/workspace-full

USER root

ENV HOME=/home/gitpod
WORKDIR $HOME

# custom Bash prompt
RUN curl https://gist.githubusercontent.com/ssffacilitator/886f341afc5cba5135da90395ed43675/raw/6134337264e321a79528881aad14c32a4243950b/.bashrc >> .bashrc
WORKDIR group-project-frontend-template

RUN npm install -g @angular/cli

USER gitpod
