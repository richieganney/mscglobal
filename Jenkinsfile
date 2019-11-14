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
                echo "THIS IS YOUR DIRECTORY"
                pwd
                cd mscglobal
                npm install
                npm install semantic-ui-react
                npm install semantic-ui-css
                npm run build
                cp -R build/* ../build
            '''
      }
    }
    stage('create artifacts'){
      steps {
        sh 'zip -r build.zip build'
      }
    }
    stage('archive artifacts'){
      steps {
        archiveArtifacts 'build.zip'
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
  