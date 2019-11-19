pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('build') {
      steps {
            sh '''
                echo ${BUILD_NUMBER} > release.txt
                npm install
            '''
      }
    }
    stage('deploying to heroku'){
      steps {
        script {
          sh """
          heroku whoami
          // heroku git:remote -a mscglobal
          // git push heroku master
          """
        }
      }
    }
  }
}
  