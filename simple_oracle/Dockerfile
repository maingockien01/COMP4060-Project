# This Dockerfile will: 
# set up a Golang environment(using Golang Docker Image)
# install Ignite
# copy the local checkers game repository
# with the oracle included into the image and
# start a checkers blockchain
# expose api endpoints

# Use Golang Docker Image
FROM golang:1.18

WORKDIR /home
RUN git clone https://github.com/regen-network/cosmos-proto && cd cosmos-proto/protoc-gen-gocosmos && go install

# Install tools
RUN apt-get install curl git

# Install ignite
RUN curl -L https://get.ignite.com/cli@v0.22.1! | bash

# Install dependencies
RUN go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@latest
RUN go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest

# Copy local repository
COPY . /app
WORKDIR /app

# Install more dependencies
RUN go get github.com/golangci/golangci-lint/cmd/golangci-lint
RUN go get golang.org/x/crypto/ssh/terminal@v0.0.0-20220411220226-7b82a4e95df4

# # Copy Config.yml
# RUN rm -f /app/config.yml
# ARG configyml
# COPY ${configyml} /home/oracle/config.yml

# Copy Tests
#COPY ./test.sh /home/oracle
#RUN chmod +x ./test.sh
#ARG testchain
#COPY ${testchain} /home/oracle/createandplaygame.sh
#RUN chmod +x ./createandplaygame.sh

RUN chmod +x ./run.sh
ENTRYPOINT ["/bin/bash", "-c", "/app/run.sh"]

EXPOSE 1317 3000 4500 5000 26657


# build with ./build-images.sh
