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
      stage('running end-to-end tests in cypress'){
        steps {
          script {
            sh """
            
            npx cypress run --spec cypress/integration/features/homepage/*_spec.js
            npx cypress run --spec cypress/integration/features/tables/*_spec.js
            npx cypress run --spec cypress/integration/features/season_highlights/*_spec.js
            npx cypress run --spec cypress/integration/features/all_teams/*_spec.js
            npx cypress run --spec cypress/integration/features/about/*_spec.js
            """
        }
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
  