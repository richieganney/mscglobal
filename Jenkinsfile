pipeline {
  agent any
  tools {nodejs "nodejs"}
  environment {
    // HOME = '.'
    HOME="${env.WORKSPACE}"
  }
  stages {
    stage('build and test') {
      steps {
        script {
        def myTestContainer = docker.image('node:13')
          myTestContainer.pull()
          myTestContainer.inside {
              sh '''
              npm install
              apt-get install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
              npx cypress run
              '''
          }
        }
      }
    }
    stage('deploy'){
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
// /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock $OPTIONS $DOCKER_STORAGE_OPTIONS $DOCKER_ADD_RUNTIMES
  