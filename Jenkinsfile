pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('build') {
      steps {
            sh '''
                echo ${BUILD_NUMBER} > release.txt
                pwd
                npm install
                npm audit fix
            '''
      }
    }
    stage('deploying to heroku'){
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
  