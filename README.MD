# Linking GIT to Travis CI

- SPECIFY DOCKER AS DEPENDENCY
- BUILD TEST VERSION OF REACT PROJECT
- RUN TESTS
- BUILD PROD VERSIONS OF ALL PROJECTS
- PUSH ALL TO DOCKER HUB
- TELL ELASTIC BEANSTALK TO UPDATE

# For configuring environment in Travis

Settings > Enviroment > Add Variables

# Integrating Travis with Elastic Beanstalk

- We need to create a .json file that tells Elastic Beanstalk - Dockerrun.aws.json
  (1) Where to pull images from
  (2) What resources to allocate for each image
  (3) How to setup Port mapping

# AWS Task Defintion

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#container_definitions
