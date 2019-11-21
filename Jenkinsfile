pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    // stage('build') {
    //   steps {
    //         sh '''
    //             echo ${BUILD_NUMBER} > release.txt
    //             pwd
    //             npm install
    //             npm audit fix
    //         '''
    //   }
    // }
    stage('containerise with docker and run cypress tests') {
      steps {
        script {
        def myTestContainer = docker.image('node:13')
          myTestContainer.pull()
          myTestContainer.inside {
              sh '''
              npm install
              npx cypress run
              '''
          }
        }
      }
    }
    stage('deploying to heroku'){
      steps {
        script {
          sh """
          heroku git:remote -a mscglobal
          git push heroku HEAD:master
          """
        }
      }
    }
  }
}

// /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock $OPTIONS $DOCKER_STORAGE_OPTIONS $DOCKER_ADD_RUNTIMES
  