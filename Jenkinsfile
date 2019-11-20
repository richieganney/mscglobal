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
      stage('running end-to-end tests in cypress'){
        steps {
          script {
            sh """
            cd /home/admin/.ssh
            ssh -i "richie-oregon.pem" admin@54.245.145.29
            yes
            cd mongolian-squash-championship/
            npx cypress run --spec cypress/integration/features/homepage/*.spec.js
            npx cypress run --spec cypress/integration/features/tables/*.spec.js
            npx cypress run --spec cypress/integration/features/season_highlights/*.spec.js
            npx cypress run --spec cypress/integration/features/all_teams/*.spec.js
            npx cypress run --spec cypress/integration/features/about/*.spec.js
            exit
            """
        }
      }
    }
    stage('deploying to heroku'){
      steps {
        script {
          sh """
          cd /var/lib/jenkins/workspace/mscglobal_1
          heroku whoami
          heroku git:remote -a mscglobal
          git push heroku HEAD:master
          """
        }
      }
    }
  }
}
  