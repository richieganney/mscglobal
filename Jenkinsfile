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
                cd articles-frontend
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
    stage('copying artifacts to remotes'){
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'webserver', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'unzip build.zip', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'build.zip')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
      }
    }
    stage('moving artifacts into the right folder'){
      steps {
        script {
          sh """ssh richieganney@192.168.56.104 << EOF
          cp /home/richieganney/build/* /var/www/html
          rm -rf /home/richieganney/build
          rm -rf /home/richieganney/build.zip
          exit
          EOF"""
        }
      }
    }
  }
}
  