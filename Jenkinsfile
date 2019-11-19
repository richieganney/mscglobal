pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('build') {
      steps {
            sh '''
                echo ${BUILD_NUMBER} > release.txt
                npm install
                npm audit fix
            '''
      }
    }
    stage('deploying to heroku'){
      steps {
        script {
          sh """
          git status
          git push heroku HEAD:master
          """
        }
      }
    }
  }
}
  