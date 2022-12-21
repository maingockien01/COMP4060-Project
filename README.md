# COMP4060-Project

Hi welcome to my project

# To run

Build images:
```bash
$ cd consumer
$ chmod +x ./build-images.sh
$ ./build-images.sh
```

```bash
$ cd simple_oracle
$ chmod +x ./build-images.sh
$ ./build-images.sh
```

```bash
$ cd relayer
$ docker build -f Dockerfile -t relayer --no-cache
```

Run all containers:
```bash
$ docker-compose -f docker-compose.yml up
```

Wait for all blockchain up and running:

```bash
$ docker exec -it relayer bash
```

Inside the bash of container relayer:
```bash
$ ./run-relayer.sh
```
