pipeline {
  agent any
  tools {nodejs "nodejs"}
  environment {
    // HOME = '.'
    HOME="${env.WORKSPACE}"
  }
  stages {
    stage('build') {
      steps {
        script {
              sh '''
              npm install    
              '''
        }
      }
    }
    // stage('test') {
    //   steps {
    //     script {
    //           sh '''
    //           docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.3.2      
    //           '''
    //     }
    //   }
    // }
    stage('deploy') {
      steps {
        script {
          sh '''
          heroku whoami
          heroku git:remote -a mscglobal
          git push heroku HEAD:master
          '''
        }
      }
    }
  }
}
