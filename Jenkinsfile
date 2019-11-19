pipeline {
  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('build') {
      steps {
            sh '''
                mkdir -p build
                echo ${BUILD_NUMBER} > release.txt
                cp release.txt build/release.txt
                npm run build
                npm install
                cp -R build/* ../build
            '''
      }
    }
    stage('deploying to heroku'){
      steps {
        script {
          sh """git push heroku master
          """
        }
      }
    }
  }
}
  