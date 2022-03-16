# plan_a

## Basic information
The files required for testing this project were pushed to repository at:

    git@github.com:lmayala/plan_a.git
    
**Note**: All tests were run on a VM with a fresh Docker and Minikube installation


## Docker

Dockefile is the only requirement for downloading the image and running the container into a running docker environment.

Here is an example from cloning the repo to querying the server:
![image](https://user-images.githubusercontent.com/23105734/158659331-677c7a50-c883-46da-9c8a-57e174e93d3e.png)

Commands ran were:
1. Cloning the repository: **git clone git@github.com:lmayala/plan_a.git**
2. Changing into the repo: **cd plan_a**
3. Building the image with Dockerfile and naming it 'tinyweb': **docker build . -t tinyweb**
4. Running the image as a container in detached mode: **docker run -d -p 8000:8000 tinyweb**
5. Testing the server: **curl http://localhost:8000**

## Kubernetes

For Kubernetes deploying and service installation, tinyweb.yaml is the file with the manifest.
Here we can see a test with minikube:

![image](https://user-images.githubusercontent.com/23105734/158675211-602a06de-b267-4ce5-bfeb-2840ccc864c8.png)

Steps here are:
1. Apply the manifest: **kubectl apply -f tinyweb.yaml**
2. Query the API to get the hostIP: **curl http://localhost:8001/api/v1/namespaces/default/pods|grep hostIP**
3. Query the microservice to get the expected result: **curl http://192.168.49.2:32028**

