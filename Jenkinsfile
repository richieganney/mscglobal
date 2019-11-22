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
          myTestContainer.inside("-itu root") {
              sh '''
              whoami
              npm install
              nohup npm start &
              sleep 15s
              apt-get update --assume-yes
              apt-get --assume-yes install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
              npx cypress run
              killall node -9
              '''
          }
        }
      }
    }
    stage('deploy'){
      steps {
        script {
          sh """
          heroku whoami
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
